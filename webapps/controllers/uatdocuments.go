package controllers

import (
	. "eaciit/x10/webapps/helper"
	// "errors"
	"fmt"
	// "github.com/eaciit/dbox"
	"io/ioutil"

	"github.com/eaciit/knot/knot.v1"
	tk "github.com/eaciit/toolkit"
	// "os"
	"path/filepath"
	// "time"
	. "eaciit/x10/webapps/connection"
)

type UatDocumentsController struct {
	*BaseController
}

func (c *UatDocumentsController) Default(k *knot.WebContext) interface{} {
	k.Config.NoLog = true
	k.Config.OutputType = knot.OutputTemplate
	DataAccess := c.NewPrevilege(k)

	k.Config.OutputType = knot.OutputTemplate
	k.Config.IncludeFiles = []string{
		"shared/dataaccess.html",
		"shared/filter.html",
		"shared/loading.html",
	}

	return DataAccess
}

func (c *UatDocumentsController) GetAllFile(k *knot.WebContext) interface{} {
	k.Config.OutputType = knot.OutputJson

	pathUI := "/uatdocuments/"
	result := []tk.M{}

	var path = filepath.Join(".", "assets", "uatdocuments")
	files, _ := ioutil.ReadDir(path)
	for _, f := range files {
		var name = f.Name()

		coba := tk.M{}
		fmt.Println("------>>>>", f.Sys())
		coba.Set("NameFile", f.Name())
		coba.Set("Upload", f.ModTime())
		coba.Set("Path", pathUI+f.Name())

		// IF file ends with .disabled. Show only name but disable download.
		// Implemented on client side js
		var code = "disabled"
		var lencode = len(code)
		var lenname = len(name)
		if len(name) > (lencode+1) && name[lenname-lencode:] == "disabled" {
			coba.Set("NameFile", name[:lenname-lencode-1])
			coba.Set("Disabled", true)
		}

		result = append(result, coba)
	}

	conn, err := GetConnection()
	defer conn.Close()
	query, err := conn.NewQuery().Select().From("UATDocumentsLinks").Cursor(nil)
	if err != nil {
		return CreateResult(false, nil, err.Error())
	}
	defer query.Close()
	cust := []tk.M{}
	err = query.Fetch(&cust, 0, false)
	if err != nil {
		return CreateResult(false, nil, err.Error())
	}

	return CreateResult(false, tk.M{"data": result, "linkdata": cust, "path": pathUI}, "")
}
