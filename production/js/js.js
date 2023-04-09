$(window).load(function () {
    $(".loading").fadeOut()
})
$(function () {
    echarts_1();
    echarts_2();
    echarts_3();
    echarts_4();
    echarts_5();
	echarts_6()
    zb1();
    zb2();
    zb3();

    function echarts_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart1'));
       option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '5%',
    containLabel: true
  },
  legend: {
    data: ['城市污水处理能力', '污水处理率'],
	textStyle:{
  		color:"rgba(255,255,255,0.9)"}
  },
  xAxis: [
    {
      type: 'category',
      data: ['2016年', '2017年', '2018年', '2019年', '2020年', '2021年'],
      axisPointer: {
        type: 'shadow'
      },
	  axisLine:{
		lineStyle:{
			color:"#bebebe",
		}
	}
 
}
	
  ],
  yAxis: [
    {
      type: 'value',
      name: '城市污水处理能力',
      min: 0,
      max: 2.5,
      interval: 0.5,
      axisLabel: {
        formatter: '{value}亿立方米/日'
      },
	  axisLine:{
		lineStyle:{
			color:"#bebebe",
		}
	}
    },
    {
      type: 'value',
      name: '污水处理率',
      min: 90,
      max: 100,
      interval: 2,
      axisLabel: {
        formatter: '{value} %'
      },
	axisLine:{
		lineStyle:{
			color:"#bebebe",
		}
	} 
	},
  ],
  series: [
   
    {
      name: '城市污水处理能力',
      type: 'bar',
	  barWidth:30,
      tooltip: {
        valueFormatter: function (value) {
          return value + '亿立方米/日';
        }
      },
      data: [1.5,1.6,1.7,1.8,1.9,2.1],
       itemStyle: {
                        normal: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color:'#ffffff' 
                                    },
                                    {
                                        offset: 1,
                                        color:'#66cc66'
                                    }
                                ],
                                globalCoord: false,
								
                            }
                        }
                    },
    },
    {
      name: '污水处理率',
      type: 'line',
      yAxisIndex: 1,
      tooltip: {
        valueFormatter: function (value) {
          return value + '%';
        }
      },
      data: [93.44,94.54,95.49,96.81,97.53,97.89]
    }
  ]
};


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart2'));
option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // Use axis to trigger tooltip
      type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
    }
  },
  legend: {textStyle:{
  		color:"rgba(255,255,255,0.9)"}},
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  yAxis: {
    type: 'value',
	axisLine:{
		lineStyle:{
			color:"#ffffff",
		}
	}
  },
  xAxis: {
    type: 'category',
    data: [ '2016年', '2017年', '2018年', '2019年', '2020年','2021年'],
	axisLine:{
		lineStyle:{
			color:"#ffffff",
		}
	}
  },
  series: [
    {
      name: '卫生填埋',
      type: 'bar',
	  barWidth:'30',
      stack: 'total',
      label: {
        show: true
      },
	 itemStyle: {
                        normal: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color:'#ffffff' 
                                    },
                                    {
                                        offset: 1,
                                        color:'#66b8a7'
                                    }
                                ],
                                globalCoord: false
                            }
                        }
                    },
      emphasis: {
        focus: 'series'
      },
      data: [657,654,663,652,644,542]
    },
    {
      name: '焚烧',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
	   itemStyle: {
                        normal: {
                            color: '#84c1ff',

                        }
                    },
                    smooth: true,
      emphasis: {
        focus: 'series'
      },
      data: [249,286,331,390,463,583]
    },
    {
      name: '其他',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
	   itemStyle: {
                        normal: {
                            color: '#9aff02',

                        }
                    },
      data: [34,73,97,141,180,316]
    },
  ]
};
        
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function echarts_3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart3'));
 option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    //orient:'horizontal',
   // x:'center',
    //y:'bottom'
	textStyle:{
		color:"rgba(255,255,255,0.9)"}//白色
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '5%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
	data: ['2016年', '2017年', '2018年', '2019年', '2020年', '2021年'],
  axisLine:{
		lineStyle:{
			color:"#e0e0e0",
		}
	}
  },
    
  yAxis:[ {
    type: 'value',
	name:'清运量/处理量（万吨）',
	min:0,
	max:30000,
	 axisLine:{
		lineStyle:{
			color:"#ffffff",
		},
		 axisLabel: {
        formatter: '{value} 万吨',
      }
	}
  },
   {
      type: 'value',
      name:'无害化处理垃圾能力（吨/日）',
      min: 0,
      max: 1200000,
	  axisLine:{
	   lineStyle:{
			color:"#bebebe",
		}
	  },
      axisLabel: {
       // formatter: '{value} 吨/日',
      }
    },
	],
  series: [
     {
      name: '清运量（万吨）',
      type: 'bar',
      emphasis: {
        focus: 'series'
      },//2021:2206
	  data: [20362,21521,22802,24206,23512,23989],
	   itemStyle: {
                        normal: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color:'#ffffff' 
                                    },
                                    {
                                        offset: 1,
                                        color:'#66b8a7'
                                    }
                                ],
                                globalCoord: false
                            }
                        }
                    },
			
      
    },
    
      {
      name: '处理量（万吨）',
      type: 'bar',
      emphasis: {
        focus: 'series'
      },
      data: [19674,21034,22565,24013,23452,23899],
      type: 'bar',
	  itemStyle: {
                        normal: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color:'#ffffff' 
                                    },
                                    {
                                        offset: 1,
                                        color:'#ffed97'
                                    }
                                ],
                                globalCoord: false
                            }
                        }
                    },
    },
	{
      name: '无害化处理垃圾能力（吨/日）',
      type: 'line',
     yAxisIndex: 1,
      tooltip: {
        valueFormatter: function (value) {
          return value + '吨';
       }
      },
      data: [621351,679889,766195,869875,963460,1057064],
	  itemStyle: {
                        normal: {
                            color: '#cdba00',

                        }
                    },
    }
  ]
};
        

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart4'));
option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  toolbox: {
	  iconStyle: {
            borderColor: "#ffffff",
          },
    feature: {
      dataView: { show: false, readOnly: false },
      magicType: { show: true, type: ['line', 'bar'] },
      restore: { show: true },
      saveAsImage: { show: false }
    }
  },
  legend: {
    data: [ '垃圾焚烧设施日处理规模', '同比增长'],
	textStyle:{
  		color:"rgba(255,255,255,0.9)"}
  },
  xAxis: [
    {
      type: 'category',
      data: ['2020','2021', '2022', '2023', '2024', '2025'],
      axisPointer: {
        type: 'shadow'
      },
	   axisLine:{
		lineStyle:{
			color:"#bebebe",
		}
	}
	}
  ],
  yAxis: [
    {
      type: 'value',
      name: '垃圾焚烧设施日处理规模(万吨/日)',
      min: 0,
      max: 90,
      interval: 10,
      axisLabel: {
        formatter: '{value} '
      },
	   axisLine:{
		lineStyle:{
			color:"#bebebe",
		}
	}
    },
    {
      type: 'value',
      name: '同比增长(%)',
      min: 0.0384,
      max: 0.03875,
      interval: 0.0005,
      axisLabel: {
        formatter: '{value}'
      },
	   axisLine:{
		lineStyle:{
			color:"#bebebe",
		}
	}
    }
  ],
  series: [
   
    {
      name: '垃圾焚烧设施日处理规模',
      type: 'bar',
	  barWidth:'42',
      tooltip: {
        valueFormatter: function (value) {
          return value + ' 万吨/日';
        }
      },
	  itemStyle: {
                        normal: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color:'#ffffff' 
                                    },
                                    {
                                        offset: 1,
                                        color:'#0080ff'
                                    }
                                ],
                                globalCoord: false,
								
                            }
                        }
                    },
      data: [
       66.19,68.74,71.4,74.16,77.02,80
      ]
    },
    {
      name: '同比增长',
      type: 'line',
      yAxisIndex: 1,
      tooltip: {
        valueFormatter: function (value) {
          return value + '%';
        }
      },
      data: ['','0.03855','0.03869','0.03865','0.03856','0.03869']
    }
  ]
};
		


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function echarts_5() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart5'));
// 颜色
      option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#DC143C'
                    }
                }
            },
			 toolbox: {
	  iconStyle: {
            borderColor: "#ffffff",
          },
    feature: {
	
      dataView: { show: false, readOnly: false },
      magicType: { show: true, type: ['bar'] },
      restore: { show: true },
      saveAsImage: { show: false }
    }
  },
            legend: {

                //icon: 'vertical',
                data: ['人均碳排放量', '人均碳吸收量'],
                //align: 'center',
                // right: '35%',
                //top: '0',
                textStyle: {
                    color: "#fff"
                },
                // itemWidth: 15,
                // itemHeight: 15,
                itemGap: 20,
            },
            grid: {
                left: '0',
                right: '20',
                top: '30',
                bottom: '10',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba(255,255,128,.6)'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,128,.1)'
                    }
                },
                data: ['2015年', '2020年', '2025年', '2030年', '2035年', '2040年', '2045年', '2050年', '2055年', '2060年']
            }, {}],
            yAxis: [{
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba(255,255,128,.6)'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,128,.1)'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(255,255,128,.1)'
                    }
                }
            }],
            series: [{
                name: '人均碳排放量',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#ff4500'
                        }, {
                            offset: 0.8,
                            color: 'rgba(24, 163, 64, 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#cdba00',
                        borderColor: 'rgba(137,189,2,0.27)',
                        borderWidth: 12
                    }
                },
                data: [56, 93, 130, 151, 182, 204, 220, 240, 246, 250]
            }, {
                name: '人均碳吸收量',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#ffa500'
                        }, {
                            offset: 0.8,
                            color: 'rgba(39, 122,205, 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#277ace',
                        borderColor: 'rgba(255,136,212,0.2)',
                        borderWidth: 12
                    }
                },
                data: [37, 59, 68, 87, 112, 139, 168, 200, 246, 280]
            }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

function echarts_6() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart6'));
         option = {
  tooltip: {
    trigger: 'axis'
  },
   toolbox: {
	  iconStyle: {
            borderColor: "#ffffff",}
          },
  legend: {
    data: ['全国水资源总量', '人均用水量'],
	textStyle:{
  		color:"rgba(255,255,255,0.9)"}
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
	 axisLine:{
		lineStyle:{
			color:"#ffffff",
		}
	},
    data: ['2016', '2017', '2018', '2019', '2020', '2021', '2035']
  },
  yAxis: [
     {
      type: 'value',
      name: '全国水资源总量(亿立方米)',
      min: 3500,
      max: 7500,
      interval: 500,
	   axisLine:{
		lineStyle:{
			color:"#ffffff",
		}
	},
      axisLabel: {
        formatter: '{value}'
      }
    },
    {
      type: 'value',
      name: '人均用水量(立方米)',
      min: 100,
      max: 500,
      interval: 50,
	   axisLine:{
		lineStyle:{
			color:"#ffffff",
		}
	},
      axisLabel: {
        formatter: '{value} '
      }
    }
  ],
  series: [
    {
      name: '全国水资源总量',
      type: 'line',
      stack: 'Total',
	  itemStyle: {
                    normal: {
                        color: '#cdba00',
                        borderColor: 'rgba(137,189,2,0.27)',
                        borderWidth: 12
                    }
                },
      data: [6040.3,6043.4,6015.5,6021.2,5812.9,5920.2,7000]
    },
    {
      name: '人均用水量',
      type: 'line',
      stack: 'Total',

      data: [438, 436, 432, 431, 412, 419, 497]
    }
  ]
};
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function zb1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('zb1'));
        var v1 = 12586//男消费
        var v2 = 2318//女消费
        var v3 = 2073//总消费
        option = {
            series: [{

                type: 'pie',
                radius: ['60%', '70%'],
                color: '#49bcf7',
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: v1,
                    name: '女消费',
                    label: {
                        normal: {
                            formatter: v1 + '',
                            textStyle: {
                                fontSize: 20,
                                color: '#fff',
                            }
                        }
                    }
                }, {
                    value: v1,
                    name: '男消费',
                    label: {
                        normal: {
                            formatter: function (params) {
                                return '占比' + Math.round(v1 / (v1 + v2 + v3) * 100) + '%'
                            },
                            textStyle: {
                                color: '#aaa',
                                fontSize: 12
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(255,255,255,.2)'
                        },
                        emphasis: {
                            color: '#fff'
                        }
                    },
                }]
            }]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function zb2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('zb2'));
        var v1 = 12586//男消费
        var v2 = 2318//女消费
        var v3 = 2073//总消费
        option = {

//animation: false,
            series: [{
                type: 'pie',
                radius: ['60%', '70%'],
                color: '#cdba00',
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: v2,
                    name: '男消费',
                    label: {
                        normal: {
                            formatter: v2 + '',
                            textStyle: {
                                fontSize: 20,
                                color: '#fff',
                            }
                        }
                    }
                }, {
                    value: v2,
                    name: '女消费',
                    label: {
                        normal: {
                            formatter: function (params) {
                                return '占比' + Math.round(v2 / (v1 + v2 + v3) * 100) + '%'
                            },
                            textStyle: {
                                color: '#aaa',
                                fontSize: 12
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(255,255,255,.2)'
                        },
                        emphasis: {
                            color: '#fff'
                        }
                    },
                }]
            }]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function zb3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('zb3'));
        var v1 = 12586//男消费
        var v2 = 2318//女消费
        var v3 = 2073//总消费
        option = {
            series: [{

                type: 'pie',
                radius: ['60%', '70%'],
                color: '#62c98d',
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: v3,
                    name: '女消费',
                    label: {
                        normal: {
                            formatter: v3 + '',
                            textStyle: {
                                fontSize: 20,
                                color: '#fff',
                            }
                        }
                    }
                }, {
                    value: v3,
                    name: '男消费',
                    label: {
                        normal: {
                            formatter: function (params) {
                                return '占比' + Math.round(v3 / (v1 + v2 + v3) * 100) + '%'
                            },
                            textStyle: {
                                color: '#aaa',
                                fontSize: 12
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(255,255,255,.2)'
                        },
                        emphasis: {
                            color: '#fff'
                        }
                    },
                }]
            }]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
})



		
		
		


		









