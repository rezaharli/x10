var  conv = {}

conv.dataPeriod = ko.observableArray([
	{text: 'coba1', value: 'coba1'},
	{text: 'coba2', value: 'coba2'},
	{text: 'coba3', value: 'coba3'},
]);
conv.actRate = ko.observable(0);
conv.undrRate = ko.observable(0);
conv.apprRate = ko.observable(0);
conv.analRate = ko.observable(0);
conv.compactRate = ko.observable(0);
conv.compundrRate = ko.observable(0);
conv.compapprRate = ko.observable(0);
conv.companalRate = ko.observable(0);
conv.dataValuePeriod = ko.observable('');
conv.funneldata = ko.observable([]);
conv.summaryTrenData = ko.observable([]);
conv.trendDataLength = ko.observable(6)
conv.dummyData = ko.observableArray([
	{"avgdays":2.2,"date":"2016-10-01T00:00:00Z","dateStr":"Oct-2016","dealcount":8,"median":4},
	{"avgdays":3.3,"date":"2016-11-01T00:00:00Z","dateStr":"Nov-2016","dealcount":5,"median":3},
	{"avgdays":4.4,"date":"2016-12-01T00:00:00Z","dateStr":"Dec-2016","dealcount":3,"median":5},
	{"avgdays":2.0,"date":"2017-01-01T00:00:00Z","dateStr":"Jan-2017","dealcount":7,"median":6},
	{"avgdays":8.0,"date":"2017-02-01T00:00:00Z","dateStr":"Feb-2017","dealcount":9,"median":7},
	{"avgdays":4.0,"date":"2017-03-01T00:00:00Z","dateStr":"Mar-2017","dealcount":2,"median":8}])

conv.loadAllTop = function(){
	$("#rate").html("")
	$("#rate").kendoChart({
		theme: "Material",
        title: { 
            // text: "Processing TAT",
            font:  "bold 10px Arial,Helvetica,Sans-Serif",
            align: "left",
            color: "#58666e",
        },
        dataSource: conv.summaryTrenData(),
        seriesDefaults: {
            type: "area",
            area: {
                line: {
                    style: "smooth"
                }
            }
        },
        series: [{
            // type: "area",
            stack : false,
            field: "underwrite_rate",
            // name: "#= group.value.split('*')[1] #"
        }],
        chartArea:{
        	// width: 250,
            height: 75,
            background: "transparent"
        },
        legend: {
        	visible: false,
            position: "right",
            labels:{
                font: "10px Arial,Helvetica,Sans-Serif"
            }
        },
        // seriesColors : ttrack.chartcolors,
        valueAxis: {
        	 visible :false,
            labels: {
                // format: "${0}",

        		font: "5px sans-serif",
                skip: 2,
                step: 2
            },
            title : {
            	text : "No. of Deals",
        		font: "5px sans-serif",
            	visible : false,
            	color : "#4472C4"
            },
            line: {
		        visible: true
		    },
		    majorGridLines:{
		        visible:true,
		         skip: 2,
                step: 2
		    }
        },
        categoryAxis: {
            visible: true,
           	line: {
		        visible: false
		    },
		    majorGridLines:{
		        visible:false
		    }
        },
        tooltip : {
        	visible: false,
        	template : function(dt){
        		return dt.dataItem.timestatus.split("*")[1] + " : " + dt.value
        	}
        }
	});
	$("#approval").html("")
	$("#approval").kendoChart({
		theme: "Material",
        title: { 
            // text: "Processing TAT",
            font:  "bold 10px Arial,Helvetica,Sans-Serif",
            align: "left",
            color: "#58666e",
        },
        dataSource: conv.summaryTrenData(),
        seriesDefaults: {
            type: "area",
            area: {
                line: {
                    style: "smooth"
                }
            }
        },
        series: [{
            // type: "area",
            stack : false,
            field: "approve_rate",
            // name: "#= group.value.split('*')[1] #"
        }],
        chartArea:{
        	// width: 250,
            height: 75,
            background: "transparent"
        },
        legend: {
        	visible: false,
            position: "right",
            labels:{
                font: "10px Arial,Helvetica,Sans-Serif"
            }
        },
        // seriesColors : ttrack.chartcolors,
        valueAxis: {
        	 visible :false,
            labels: {
                // format: "${0}",

        		font: "5px sans-serif",
                skip: 2,
                step: 2
            },
            title : {
            	text : "No. of Deals",
        		font: "5px sans-serif",
            	visible : false,
            	color : "#4472C4"
            },
            line: {
		        visible: true
		    },
		    majorGridLines:{
		        visible:true,
		         skip: 2,
                step: 2
		    }
        },
        categoryAxis: {
            visible: true,
           	line: {
		        visible: false
		    },
		    majorGridLines:{
		        visible:false
		    }
        },
        tooltip : {
        	visible: false,
        	template : function(dt){
        		return dt.dataItem.timestatus.split("*")[1] + " : " + dt.value
        	}
        }
	});

	$("#analysis").html("")
	$("#analysis").kendoChart({
		theme: "Material",
        title: { 
            // text: "Processing TAT",
            font:  "bold 10px Arial,Helvetica,Sans-Serif",
            align: "left",
            color: "#58666e",
        },
        dataSource: conv.summaryTrenData(),
        seriesDefaults: {
            type: "area",
            area: {
                line: {
                    style: "smooth"
                }
            }
        },
        series: [{
            // type: "area",
            stack : false,
            field: "analyze_rate",
            // name: "#= group.value.split('*')[1] #"
        }],
        chartArea:{
        	// width: 250,
            height: 75,
            background: "transparent"
        },
        legend: {
        	visible: false,
            position: "right",
            labels:{
                font: "10px Arial,Helvetica,Sans-Serif"
            }
        },
        // seriesColors : ttrack.chartcolors,
        valueAxis: {
        	 visible :false,
            labels: {
                // format: "${0}",

        		font: "5px sans-serif",
                skip: 2,
                step: 2
            },
            title : {
            	text : "No. of Deals",
        		font: "5px sans-serif",
            	visible : false,
            	color : "#4472C4"
            },
            line: {
		        visible: true
		    },
		    majorGridLines:{
		        visible:true,
		         skip: 2,
                step: 2
		    }
        },
        categoryAxis: {
            visible: true,
           	line: {
		        visible: false
		    },
		    majorGridLines:{
		        visible:false
		    }
        },
        tooltip : {
        	visible: false,
        	template : function(dt){
        		return dt.dataItem.timestatus.split("*")[1] + " : " + dt.value
        	}
        }
	});
} 

conv.loadRadialGauge = function(){
	$("#tatgoals").html('')
    $("#tatgoals").kendoRadialGauge({
       	pointer: {
            value: parseInt(kendo.toString(conv.actRate(), 'n2'))
        },

        scale: {
            minorUnit: 5,
            startAngle: -30,
            endAngle: 210,
            max: 30,
            majorTicks: {
	            size: 5
	        },
            labels: {
                position: "inside"
            },
            ranges: [
                {
                    from: 0,
                    to: 10,
                    color: "green"
                }, {
                    from: 10,
                    to: 20,
                    color: "yellow"
                }, {
                    from: 20,
                    to: 30,
                    color: "red"
                }
            ]
        }
    }); 
}

conv.containerPeriodData = function(){
	var param = {
		start : discardTimezone(dash.FilterValue.GetVal("TimePeriodCalendar")),
		end : discardTimezone(dash.FilterValue.GetVal("TimePeriodCalendar2")),
		type : dash.FilterValue.GetVal("TimePeriod"),
		filter: dash.FilterValue()
	}
	ajaxPost("/dashboard/conversionoption6", param, function(res){
		if(res.Data != null){
			var data = res.Data;
			conv.loadContainer(data);

		}
	})
}

conv.loadContainer = function(data){
		var len = conv.trendDataLength();
		var start = discardTimezone(dash.FilterValue.GetVal("TimePeriodCalendar"));
		var end = discardTimezone(dash.FilterValue.GetVal("TimePeriodCalendar2"));
		var type = dash.FilterValue.GetVal("TimePeriod");
		var title = false;
		var groupby = 'period';
		var month = dash.generateXAxis(type, start, end, len + 1)
		month.shift();
		console.log("----->>>",month)
	$("#chartContainer").html('')
	$("#chartContainer").kendoChart({
        // theme: "Material",
            title: { 
                    text: "Processing Rate",
                    font:  "bold 12px Arial,Helvetica,Sans-Serif",
                    align: "left",
                    color: "#58666e",
                },
				plotArea: {
					margin: {
						right: 4,
					}
				},
                dataSource: data,
                series: [
                {
                    type: "line",
                    stack : false,
                    field: "underwrite_rate",
                    // axis: "dc",
                    dashType: "dot",
                    color: '#2e75b6',
                    overlay: {
		                gradient: "none"
		            },
                    name: "Underwrite Rate"
                },
                {
                    type: "line",
                    stack : false,
                    field: "approve_rate",
                    // axis: "dc",
                    dashType: "dot",
                    color: 'red',
                    overlay: {
		                gradient: "none"
		            },
                    name: "Approval Rate"
                },
                {
                    type: "line",
                    stack : false,
                    field: "analyze_rate",
                    // axis: "dc",
                    dashType: "dot",
                    color: '#00b0f0',
                    overlay: {
		                gradient: "none"
		            },
                    name: "Analys Rate"
                },
                ],
                chartArea:{
                	height: 265,
                    background: "white"
                },
                legend: {
                	visible: true,
                    position: "bottom",
                    labels:{
                        font: "10px Arial,Helvetica,Sans-Serif"
                    }
                },
     			valueAxes: [{
     				title: { 
     					text: "Rate",
     					font: "10px sans-serif",
     					color : "#4472C4", 
						margin: {
							right: 1,
						}
     				},
                    min: 0,
                    labels : {
                    	font: "10px sans-serif",
                    	step : 2,
                    	skip : 2
                    },
                    
     			}],
                categoryAxis: {
                	categories: month,
                	title : {
                    	text : "Time Period",
                		font: "10px sans-serif",
                    	visible : true,
                    	color : "#4472C4"
                    },
                    labels : {
                		font: "10px sans-serif",
                		// visible : true,
                    },
                    axisCrossingValues: [0, 7]
                },
                tooltip : {
                	visible: true,
                	template : function(dt){
                		// console.log(dt);
                		return dt.series.name + " : "+ dt.value//dt.dataItem.timestatus.split("*")[1] + " : " + dt.value
                	}
                }
    });
}

conv.loadFunnelChart = function(){
	$('#funnelChart').kendoChart({
        title: {
            text: "Processing Funnel",
            position: "top",
            align: "left",
            color: "#58666e",
            font:  "bold 12px Arial,Helvetica,Sans-Serif",
        },
        legend: {
            visible: false
        },
        chartArea:{
        	height: 265,
            background: "white"
        },
        seriesDefaults: {
            labels: {
            	template: function(d){
            		// console.log("-------------------------->>>>", d)
            		var str = ''
            		if(d.category == 'Actioned Deals'){
            			str = 'Analized Deals \n (Underwritten = n4, Sent Back for Analysis = n6) \n'+ d.value
            		}else if(d.category == 'Underwritten Deals'){
            			str = d.category +" \n (Approved = n7, Rejected = n8) \n"+ d.value
            		}else{
            			str = d.category +" \n"+ d.value
            		}
            		return str
            	},
                visible: true,
                background: "transparent",
                color:"white",
                format: "N0"
            },
            dynamicSlope: false,
            dynamicHeight: false
        },
        series: [{
            type: "funnel",
            data: conv.funneldata()
        }],
        tooltip: {
            visible: true,
            template: "#= category #"
        }
    });
}

conv.loadData = function(){
	conv.funneldata([]);
	conv.summaryTrenData([]);
	var param = {
		start : discardTimezone(dash.FilterValue.GetVal("TimePeriodCalendar")),
		end : discardTimezone(dash.FilterValue.GetVal("TimePeriodCalendar2")),
		type : dash.FilterValue.GetVal("TimePeriod"),
		filter: dash.FilterValue()
	}
	ajaxPost("/dashboard/conversionoption", param, function(res){
        var data = res.Data;
        conv.summaryTrenData(data);
        conv.actRate(data[0].action_rate);
        conv.undrRate(data[0].underwrite_rate);
        conv.apprRate(data[0].approve_rate);
        conv.analRate(data[0].analyze_rate);
        // conv.compactRate(data.compactRate);
        conv.compundrRate(data[0].underwrite_rate - data[1].underwrite_rate);
        conv.compapprRate(data[0].approve_rate - data[1].approve_rate);
        conv.companalRate(data[0].analyze_rate - data[1].analyze_rate);
        conv.summaryTrenData(data)
        conv.funneldata([
			{
			    	category: "Accepted deals ",
				    value: 0,//conv.summaryTrenData()[0].accepted
				    color: "#0e5a7e"
				},{
				    category: "Analized Deals",
				    value: data[0].analyzed,
				    color: "#166f99"
				},{
				    category: "Actioned Deals",
				    value: data[0].actioned,
				    color: "#2185b4"
				},{
				    category: "Underwritten Deals",
				    value: data[0].underwritten,
				    color: "#319fd2"
				},{
				    category: "Approved Deals",
				    value: data[0].approved,
				    color: "#3eaee2"
				}
		]);
        conv.loadFunnelChart()
        conv.loadRadialGauge()
	})
}

conv.titleText = ko.computed(function () {
    var type = dash.FilterValue.GetVal("TimePeriod")
    var start = moment(dash.FilterValue.GetVal("TimePeriodCalendar"))
    var end = moment(dash.FilterValue.GetVal("TimePeriodCalendar2"))

    if (!start.isValid())
        return "-"

    switch (type) {
    case "10day":
        return start.clone().subtract(10, "day").format("DD MMM YYYY") + " - " + start.format("DD MMM YYYY")
    case "":
    case "1month":
        return start.format("MMMM YYYY")
    case "1year":
        return start.format("YYYY")
    case "fromtill":
        return start.format("DD MMM YYYY") + " - " + end.format("DD MMM YYYY")
    }
})

conv.subscribe = function(){
	dash.FilterValue.subscribe(function (val) {
		// turn.loadAlleverage()
	    conv.loadData();
	    conv.containerPeriodData();
	    conv.loadAllTop();
	    conv.loadRadialGauge();
	})
}

$(window).bind("resize", function() {
	$('#funnelChart').data("kendoChart").refresh()
	$('#chartContainer').data("kendoChart").refresh()
	$('#tatgoals').data("kendoChart").refresh()
	$('#analysis').data("kendoChart").refresh()
	$('#approval').data("kendoChart").refresh()
	$('#rate').data("kendoChart").refresh()
});


$(function(){
	conv.loadRadialGauge();
	conv.loadAllTop();
	conv.loadContainer();
	setTimeout(function(){
		conv.loadData()
		conv.subscribe()
		conv.containerPeriodData()
	}, 1000)
	
});