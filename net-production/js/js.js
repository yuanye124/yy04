
$(function () {
echarts_1();
echarts_2();
echarts_4();
echarts_31();
echarts_32();
echarts_33();
echarts_5();
echarts_6();
function echarts_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart1'));

      option = {
  tooltip: {
    trigger: 'item'
  },

  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 45.6, name: '其他行业' },
        { value: 16.3, name: '纺织业' },
        { value: 14.0, name: '造纸和纸制品业' },
        { value: 13.8, name: '化学原料和化学制品制造业' },
        { value: 10.4, name: '农副产品加工业' }
      ],
	  label: {
        show: true,
        formatter(param) {
          //correct the percentage
         return param.name + ' (' + param.percent + '%)';
        },
        },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart2'));

       option = {
  
  tooltip: {
    trigger: 'item'
  },
 
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 50.7, name: '其他行业' },
        { value: 8.9, name: '纺织业' },
        { value: 20.5, name: '化学原料和化学制品制造业' },
        { value: 9.1, name: '造纸和纸制品业' },
        { value: 10.7, name: '农副产品加工业' }
      ],
        label: {
        show: true,
        formatter(param) {
         // correct the percentage
          return param.name + ' (' + param.percent  + '%)';
        },
        },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_5() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart5'));

        option = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
   //top: '5%',
    //left: 'center',
	
	textStyle:{
		color:'rgba(255,255,255,0.9)'}
  },
  series: [
    {
      name: '废水成分',
      type: 'pie',
      radius: ['20%', '50%'],
	  center: ['50%', '67%'],
      avoidLabelOverlap: false,
      label: {
        show: true,
        formatter(param) {
          // correct the percentage
          return param.name + ' (' + param.percent + '%)';
        },
     // emphasis: {
       // label: {
        //  show: true,
        //  fontSize: 40,
        //  fontWeight: 'bold'
       // }
      },
     labelLine: {
        show: true,
      },
      data: [
         { value: 42.3, name: '工业源废水化学需氧排放量' },
         { value: 1.7, name: '工业源废水氨氮排放量' },
         { value: 0.9, name: '治理设施废水中需氧排放量' },
         { value: 0.1, name: '治理设施废水中氨氮排放量' },
        { value: 1676.0, name: '农业源废水化学需氧排放量' },
        { value: 26.9, name: '农业源废水氨氮氧排放量' },
        { value: 811.8, name: '生活源废水化学需氧排放量' },
        { value: 58, name: '生活源废水氨氮排放量' },
        
        {
          // make an record to fill the bottom 100%
          itemStyle: {
            // stop the chart from rendering this piece
            color: 'none',
            decal: {
              symbol: 'none'
            }
          },
          label: {
            show: false
          }
        }
      ]
    }
  ]
};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
	
function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart4'));

     option = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
   // data:['优','良','轻度污染','中度污染','重度污染','严重污染'],
    left: 'center',
	textStyle:{
  		color:"rgba(255,255,255,0.9)"}
	
  },
  series: [
    {
      name: '空气质量等级',
      type: 'pie',
	  center: ['50%', '60%'],
      radius: ['30%', '60%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 0
      },
      label: {
        show: false,
       // position: 'center'
      },
	   label: {
        show: true,
        formatter(param) {
          // correct the percentage
          return param.name + ' (' + param.percent + '%)';
        },
     // emphasis: {
       // label: {
        //  show: true,
        //  fontSize: 15,
        //  fontWeight: 'bold'
       // }
	  },
      labelLine: {
        show: true,
      },
      data: [
        { value: 37.7, name: '优'},
		{ value: 0.6, name: '重度污染' },
        { value: 48.8, name: '良' },
		{ value: 1.8, name: '中度污染' },
        { value: 10.7, name: '轻度污染' },
        {value: 0.3, name:'严重污染'}
      ]
    }
  ]
};
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_6() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart6'));

        var dataStyle = {
	normal: {
		label: {
			show: false
		},
		labelLine: {
			show: false
		},
		//shadowBlur: 40,
		//shadowColor: 'rgba(40, 40, 40, 1)',
	}
};
var placeHolderStyle = {
	normal: {
		color: 'rgba(255,255,255,.05)',
		label: {show: false,},
		labelLine: {show: false}
	},
	emphasis: {
		color: 'rgba(0,0,0,0)'
	}
};
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
    //feature: {
     // dataView: { show: true, readOnly: false },
     // magicType: { show: true, type: ['line', 'bar'] },
      //restore: { show: true},
      //saveAsImage: { show: true}
   // }
  },
  legend: {
	textStyle:{
		color:'rgba(255,255,255,0.9)'}//白色
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['污染处理设施','生活源废气','工业源废气','移动源废气'],
      axisPointer: {
		 
        type: 'shadow'
      },
	  axisLine:{
	   lineStyle:{
			color:"#bebebe",
		}
	  },
    }
  ],
  yAxis: [
    {
      type: 'value',
      name:'颗粒物/氮氧化物排放量',
      min: 0,
      max: 600,
	  axisLine:{
	   lineStyle:{
			color:"#bebebe",
		}
	  },
      axisLabel: {
        formatter: '{value} 万吨'
      }
    },
    {
      type: 'value',
      name:'二氧化硫/挥发性有机物排放量',
      min: 0,
      max: 600,
	  axisLine:{
	   lineStyle:{
			color:"#bebebe",
		}
	  },
      axisLabel: {
        formatter: '{value} ',
      }
    },
  ],
  series: [
    {
      name: '颗粒物排放量',
      type: 'bar',
      tooltip: {
        valueFormatter: function (value) {
          return value + ' 万吨';
        }
      },
      data: [
      0.1,205.2,325.3,6.8
      ],
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
                                        color:'#97cbff' 
                                    },
                                    {
                                        offset: 1,
                                        color:'#97cbff'
                                    }
                                ],
                                globalCoord: false
                            }
                        }
                    },
    },
    {
      name: '二氧化硫排放量',
      type: 'bar',
      tooltip: {
        valueFormatter: function (value) {
          return value + ' 万吨';
        }
      },
      data: [
       0.3,64.9,209.7,0
      ],
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
                                        color:'#6a6aff'
                                    }
                                ],
                                globalCoord: false
                            }
                        }
                    },
    },
     {
      name: '氮氧化物排放量',
      type: 'bar',
      tooltip: {
        valueFormatter: function (value) {
          return value + ' 万吨';
        }
      },
      data: [
        9,35.9,368.9,582.1
      ],
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
                                        color:'#0072e3'
                                    }
                                ],
                                globalCoord: false
                            }
                        }
                    },
    },
    {
      name: '挥发性有机物排放量',
      type: 'line',
     yAxisIndex: 1,
      tooltip: {
        valueFormatter: function (value) {
          return value + '万吨';
       }
      },
      data: [0,182.0,207.9,200.4],
	  itemStyle: {
                        normal: {
                            color: '#cdba00',

                        }
                    },
    }
  ]
};//2021年废气排放数据统计
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_31() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb1')); 
option = {
   
	    title: [{
        text: '二氧化硫排放情况',
        left: 'center',
        textStyle: {
            color: '#fff',
			fontSize:'16'
        }

    }],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",
position:function(p){   //其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
        }
    },
    legend: {
        
top:'70%',
       itemWidth: 10,
        itemHeight: 10,
        data:['黑色金属冶炼业','其他行业','电力热力生产业','非金属矿物制品业'],
                textStyle: {
            color: 'rgba(255,255,255,.5)',
			fontSize:'12',
        }
    },
    series: [
        {
        	name:'SO2',
            type:'pie',
			center: ['50%', '42%'],
            radius: ['40%', '60%'],
                  color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab','#06b4ab','#06c8ab','#06dcab','#06f0ab'],	
            label: {show:false},
			labelLine: {show:false},
            data:[
                {value:28.7, name:'其他行业'},
                {value:30.6, name:'电力热力生产业'},
                {value:19.1, name:'非金属矿物制品业'},
                {value:21.6, name:'黑色金属冶炼业'},
            ]
        }
    ]
};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_32() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb2'));
option = {
   
	    title: [{
        text: '氮氧化物排放情况',
        left: 'center',
        textStyle: {
            color: '#fff',
			fontSize:'16'
        }

    }],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",
position:function(p){   //其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
        }
    },
    legend: {
        
    top:'70%',
       itemWidth: 10,
        itemHeight: 10,
        data:['其他行业','电力热力生产业','非金属矿物制品业','黑色金属冶炼业'],
                textStyle: {
           color: 'rgba(255,255,255,.5)',
			fontSize:'12',
        }
    },
    series: [
        {
        	name:'NO,NO2',
            type:'pie',
			center: ['50%', '42%'],
            radius: ['40%', '60%'],
            color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab','#06b4ab','#06c8ab','#06dcab','#06f0ab'],	
            label: {show:false},
			labelLine: {show:false},
            data:[
                {value:17.9, name:'其他行业'},
                {value:33.1, name:'电力热力生产业'},
                {value:27.3, name:'非金属矿物制品业'},
                {value:21.7, name:'黑色金属冶炼业'},
            ]
        }
    ]
};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_33() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb3'));
option = {
	    title: [{
        text: '颗粒物排放情况',
        left: 'center',
        textStyle: {
            color: '#fff',
			fontSize:'16'
        }

    }],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",
position:function(p){   //其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
        }
    },
    legend: {
    top:'70%',
       itemWidth: 10,
        itemHeight: 10,
        data:['其他行业','煤炭开采业','非金属矿物制品业','黑色金属冶炼业'],
                textStyle: {
            color: 'rgba(255,255,255,.5)',
			fontSize:'12',
        }
    },
    series: [
        {
        	name:'颗粒物排放',
            type:'pie',
			center: ['50%', '42%'],
            radius: ['40%', '60%'],
                   color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab','#06b4ab','#06c8ab','#06dcab','#06f0ab'],
            label: {show:false},
			labelLine: {show:false},
            data:[
                {value:34.8, name:'其他行业'},
                {value:27.5, name:'煤炭开采业'},
                {value:23.3, name:'非金属矿物制品业'},
                {value:14.3, name:'黑色金属冶炼业'},
            ]
        }
    ]
};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
				
	
})



		
		
		


		









