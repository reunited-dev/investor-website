
//codes for value chart
var valueOptions = {
    colors: ['#ffc600'],
    chart: {
        maxWidth: 250,
        height: 100,
        type: "area",
        toolbar: {
            show: false
        },
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    series: [
      {
        name: "Monthly Value",
        data: [0, 20, 58, 38, 69, 199, 109, 159, 169, 190, 240]
      }
    ],
    fill: {
      type: "gradient",
      colors: ['#ffc600'],
        gradient: {
            shadeIntensity: 0.5,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [50, 100]
        }
    },
    stroke: {
        curve: 'smooth',
        colors: ['#ffc600'],
        width: 3,
    },
    markers: {
        size: 0,
        hover: {
          size: 5,
          colors: ['#ffc600']
        }
    },
    xaxis: {
        show: false,
        axisTicks: {
            show: false
        },
      categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
      ],
      lables: {
          show: false
      }
    },
    yaxis: {
        show: false
    }
};

var valChart = document.getElementById("valueChart");
if(valChart != null) { 
    var chartOne = new ApexCharts(
        document.querySelector("#valueChart"),
        valueOptions);
    chartOne.render();
}

//codes for balance chart
var balanceOptions = {
    colors: ['#12CCA9'],
    chart: {
        maxWidth: 250,
        height: 100,
        type: "area",
        toolbar: {
            show: false
        },
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    series: [
      {
        name: "Monthly Value",
        data: [0, 20, 58, 38, 69, 199, 109, 159, 169, 190, 240]
      }
    ],
    fill: {
      type: "gradient",
      colors: ['#12CCA9'],
        gradient: {
            shadeIntensity: 0.5,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [50, 100]
        }
    },
    stroke: {
        curve: 'smooth',
        colors: ['#12CCA9'],
        width: 3,
    },
    markers: {
        size: 0,
        hover: {
          size: 5,
          colors: ['#12CCA9']
        }
    },
    xaxis: {
        show: false,
        axisTicks: {
            show: false
        },
      categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
      ],
      lables: {
          show: false
      }
    },
    yaxis: {
        show: false
    }
};

var balChart = document.getElementById("balanceChart");
if(balChart != null) { 
    var chartTwo = new ApexCharts(
        document.querySelector("#balanceChart"),
        balanceOptions);
    chartTwo.render();
}


//codes for earnings chart
var earningOptions = {
    colors: ['#A05BFF'],
    chart: {
        maxWidth: 250,
        height: 100,
        type: "area",
        toolbar: {
            show: false
        },
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    series: [
      {
        name: "Monthly Value",
        data: [0, 20, 58, 38, 69, 199, 109, 159, 169, 190, 240]
      }
    ],
    fill: {
      type: "gradient",
      colors: ['#A05BFF'],
        gradient: {
            shadeIntensity: 0.5,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [50, 100]
        }
    },
    stroke: {
        curve: 'smooth',
        colors: ['#A05BFF'],
        width: 3,
    },
    markers: {
        size: 0,
        hover: {
          size: 5,
          colors: ['#A05BFF']
        }
    },
    xaxis: {
        show: false,
        axisTicks: {
            show: false
        },
      categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
      ],
      lables: {
          show: false
      }
    },
    yaxis: {
        show: false
    }
};

var earnChart = document.getElementById("earningsChart");
if(earnChart != null) { 
    var chartThree = new ApexCharts(
        document.querySelector("#earningsChart"),
        earningOptions);
    chartThree.render();
}

//codes for revenue chart
var revenueOptions = {
    colors: ['#51CCA9'],
    chart: {
        height: 410,
        type: "area",
        toolbar: {
            show: false
        },
        sparkline: {
            enabled: false
        },
        zoom: {
            enabled: false
        },
        animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 800,
            animateGradually: {
                enabled: true,
                delay: 150
            },
            dynamicAnimation: {
                enabled: true,
                speed: 350
            }
        }
    },
    dataLabels: {
        enabled: false
    },
    series: [
      {
        name: "Monthly Value",
        data: [50, 80, 60, 90, 50, 70, 100, 80, 110, 90, 130, 180]
      }
    ],
    fill: {
      type: "gradient",
      colors: ['#51CCA9'],
        gradient: {
            shadeIntensity: 0.5,
            opacityFrom: 0.8,
            opacityTo: 0.1,
            stops: [50, 100]
        }
    },
    stroke: {
        curve: 'straight',
        colors: ['#51CCA9'],
        width: 4,
    },
    markers: {
        size: 6,
        colors: ['#ffffff'],
        strokeColors: ['#51CCA9'],
        strokeWidth: 4,
        hover: {
          size: 8,
          colors: ['#51CCA9']
        }
    },
    xaxis: {
        axisTicks: {
            show: false
        },
      categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
      ],
      labels: {
        show: true,
        style: {
          colors: ['#A7AEE3','#A7AEE3', '#A7AEE3', '#A7AEE3', '#A7AEE3', '#A7AEE3', '#A7AEE3', '#A7AEE3', '#A7AEE3', '#A7AEE3', '#A7AEE3'],
          fontSize: '14px',
        },
      }
    },
    yaxis: {
        show: false
    },
    responsive: [{
      breakpoint: 767,
      options: {
        chart: {
          maxWidth: '100%',
          height: 250,
          sparkline: {
            enabled: false
          }
        },
        stroke: {
          width: 2,
      },
      markers: {
          size: 3,
          strokeWidth: 2,
          hover: {
            size: 6,
          }
      },
        xaxis: {
          labels: {
            show: false
          }
        },
        grid: {
          show: false,
        }
      },
  }]
};

var revChart = document.getElementById("revenue");
if(revChart != null) { 
    var chartFour = new ApexCharts(
        document.querySelector("#revenue"),
        revenueOptions);
    chartFour.render();
}

//codes for revenue chart
var revenueOptionsDuplicate = {
  colors: ['#51CCA9'],
  chart: {
      height: 410,
      type: "area",
      toolbar: {
          show: false
      },
      sparkline: {
          enabled: false
      },
      zoom: {
          enabled: false
      },
      animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 800,
          animateGradually: {
              enabled: true,
              delay: 150
          },
          dynamicAnimation: {
              enabled: true,
              speed: 350
          }
      }
  },
  dataLabels: {
      enabled: false
  },
  series: [
    {
      name: "Monthly Value",
      data: [50, 80, 60, 90, 50, 70, 100, 80, 110, 90, 130, 180]
    }
  ],
  fill: {
    type: "gradient",
    colors: ['#51CCA9'],
      gradient: {
          shadeIntensity: 0.5,
          opacityFrom: 0.8,
          opacityTo: 0.1,
          stops: [50, 100]
      }
  },
  stroke: {
      curve: 'straight',
      colors: ['#51CCA9'],
      width: 4,
  },
  markers: {
      size: 6,
      colors: ['#ffffff'],
      strokeColors: ['#51CCA9'],
      strokeWidth: 4,
      hover: {
        size: 8,
        colors: ['#51CCA9']
      }
  },
  xaxis: {
      axisTicks: {
          show: false
      },
    categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
    ],
    labels: {
      show: true,
      style: {
        colors: ['#A7AEE3','#A7AEE3', '#A7AEE3', '#A7AEE3', '#A7AEE3', '#A7AEE3', '#A7AEE3', '#A7AEE3', '#A7AEE3', '#A7AEE3', '#A7AEE3'],
        fontSize: '14px',
      },
    }
  },
  yaxis: {
      show: false
  },
  responsive: [{
    breakpoint: 767,
    options: {
      chart: {
        maxWidth: '100%',
        height: 250,
        sparkline: {
          enabled: false
        }
      },
      stroke: {
        width: 2,
    },
    markers: {
        size: 3,
        strokeWidth: 2,
        hover: {
          size: 6,
        }
    },
      xaxis: {
        labels: {
          show: false
        }
      },
      grid: {
        show: false,
      }
    },
}]
};

var revChartDuplicate = document.getElementById("revenueDuplicate");
if(revChartDuplicate != null) { 
  var chartFourDuplicate = new ApexCharts(
      document.querySelector("#revenueDuplicate"),
      revenueOptionsDuplicate);
  chartFourDuplicate.render();
}


//codes for income chart
var incomeOptions = {
    series: [{
        name: "Monthly Value",
    data: [150, 180, 160, 290, 250, 170, 100, 280, 110,190, 130, 180]
  }],
    chart: {
    type: 'bar',
    maxWidth: '50%',
    height: 80,
    sparkline: {
      enabled: true
    }
  },
  plotOptions: {
    bar: {
      columnWidth: '30%',
      borderRadius: 5
    }
  },
  fill: {
    colors: ['#51CCA9']
  },
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  xaxis: {
    crosshairs: {
      width: 1
    },
    categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Jun",
        "May",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
  ],
  },
  responsive: [{
    breakpoint: 767,
    options: {
      plotOptions: {
        bar: {
          columnWidth: '20%',
          borderRadius: 3
        }
      },
    }
  }]
  };


var incChart = document.getElementById("incomeChart");
if(incChart != null) { 
    var chartFive = new ApexCharts(
        document.querySelector("#incomeChart"),
        incomeOptions);
    chartFive.render();
}


//codes for Duplicate income chart
var incomeOptionsDuplicate = {
  series: [{
      name: "Monthly Value",
  data: [150, 180, 160, 290, 250, 170, 100, 280, 110,190, 130, 180]
}],
  chart: {
  type: 'bar',
  maxWidth: '50%',
  height: 80,
  sparkline: {
    enabled: true
  }
},
plotOptions: {
  bar: {
    columnWidth: '30%',
    borderRadius: 5
  }
},
fill: {
  colors: ['#51CCA9']
},
labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
xaxis: {
  crosshairs: {
    width: 1
  },
  categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Jun",
      "May",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
],
},
responsive: [{
  breakpoint: 767,
  options: {
    plotOptions: {
      bar: {
        columnWidth: '20%',
        borderRadius: 3
      }
    },
  }
}]
};


var incChartDuplicate = document.getElementById("incomeChartDuplicate");
if(incChartDuplicate != null) { 
  var chartFiveDuplicate = new ApexCharts(
      document.querySelector("#incomeChartDuplicate"),
      incomeOptionsDuplicate);
  chartFiveDuplicate.render();
}


//codes for invest chart
var investOptions = {
  series: [{
      name: "Return on Invest",
  data: [150, 180, 160, 290, 250, 170, 100, 280, 110,190, 130, 180]
}],
  chart: {
  type: 'bar',
  maxWidth: '50%',
  height: 80,
  sparkline: {
    enabled: true
  }
},
plotOptions: {
  bar: {
    columnWidth: '30%',
    borderRadius: 5
  }
},
fill: {
  colors: ['#93a4ff']
},
labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
xaxis: {
  crosshairs: {
    width: 1
  },
  categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Jun",
      "May",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
],
},
responsive: [{
  breakpoint: 767,
  options: {
    plotOptions: {
      bar: {
        columnWidth: '20%',
        borderRadius: 3
      }
    },
  }
}]
};


var invChart = document.getElementById("investChart");
if(invChart != null) { 
  var chartSix = new ApexCharts(
      document.querySelector("#investChart"),
      investOptions);
  chartSix.render();
}


//codes for Duplicate invest chart
var investOptionsDuplicate = {
  series: [{
      name: "Return on Invest",
  data: [150, 180, 160, 290, 250, 170, 100, 280, 110,190, 130, 180]
}],
  chart: {
  type: 'bar',
  maxWidth: '50%',
  height: 80,
  sparkline: {
    enabled: true
  }
},
plotOptions: {
  bar: {
    columnWidth: '30%',
    borderRadius: 5
  }
},
fill: {
  colors: ['#93a4ff']
},
labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
xaxis: {
  crosshairs: {
    width: 1
  },
  categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Jun",
      "May",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
],
},
responsive: [{
  breakpoint: 767,
  options: {
    plotOptions: {
      bar: {
        columnWidth: '20%',
        borderRadius: 3
      }
    },
  }
}]
};


var invChartDuplicate = document.getElementById("investChartDuplicate");
if(invChartDuplicate != null) { 
  var chartSixDuplicate = new ApexCharts(
      document.querySelector("#investChartDuplicate"),
      investOptionsDuplicate);
      chartSixDuplicate.render();
}


//clubs One value chart
var clubOne = {
  colors: ['#FF8F3D'],
  chart: {
      width: 150,
      height: 60,
      type: "area",
      toolbar: {
          show: false
      },
      sparkline: {
          enabled: true
      }
  },
  dataLabels: {
      enabled: false
  },
  series: [
    {
      name: "Monthly Value",
      data: [40, 65, 158, 68, 39, 109, 109, 259, 169, 190,140]
    }
  ],
  fill: {
    type: "gradient",
    colors: ['#FF8F3D'],
      gradient: {
          shadeIntensity: 0.3,
          opacityFrom: 0.5,
          opacityTo: 1,
          stops: [0, 100]
      }
  },
  stroke: {
      curve: 'smooth',
      colors: ['#FF8F3D'],
      width: 3,
  },
  markers: {
      size: 0,
      hover: {
        size: 3,
        colors: ['#FF8F3D']
      }
  },
  xaxis: {
      show: false,
      axisTicks: {
          show: false
      },
    categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
    ],
    lables: {
        show: false
    }
  },
  yaxis: {
      show: false
  }
};

var pOneChart = document.getElementById("profile_chart_one");
if(pOneChart != null) { 
  var clubOneRender = new ApexCharts(
      document.querySelector("#profile_chart_one"),
      clubOne);
      clubOneRender.render();
}

//clubs Two value chart
var clubTwo = {
  colors: ['#9b5d8b'],
  chart: {
      width: 150,
      height: 60,
      type: "area",
      toolbar: {
          show: false
      },
      sparkline: {
          enabled: true
      }
  },
  dataLabels: {
      enabled: false
  },
  series: [
    {
      name: "Monthly Value",
      data: [40, 65, 158, 68, 319, 109, 109, 259, 169, 190,240]
    }
  ],
  fill: {
    type: "gradient",
    colors: ['#9b5d8b'],
      gradient: {
          shadeIntensity: 0.3,
          opacityFrom: 0.5,
          opacityTo: 1,
          stops: [0, 100]
      }
  },
  stroke: {
      curve: 'smooth',
      colors: ['#9b5d8b'],
      width: 3,
  },
  markers: {
      size: 0,
      hover: {
        size: 3,
        colors: ['#9b5d8b']
      }
  },
  xaxis: {
      show: false,
      axisTicks: {
          show: false
      },
    categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
    ],
    lables: {
        show: false
    }
  },
  yaxis: {
      show: false
  }
};

var pTwoChart = document.getElementById("profile_chart_two");
if(pTwoChart != null) { 
  var clubTwoRender = new ApexCharts(
      document.querySelector("#profile_chart_two"),
      clubTwo);
      clubTwoRender.render();
}

//clubs Three value chart
var clubThree = {
  colors: ['#05b1ff'],
  chart: {
      width: 150,
      height: 60,
      type: "area",
      toolbar: {
          show: false
      },
      sparkline: {
          enabled: true
      }
  },
  dataLabels: {
      enabled: false
  },
  series: [
    {
      name: "Monthly Value",
      data: [140, 265, 158, 68, 39, 109, 109, 259, 169, 190,40]
    }
  ],
  fill: {
    type: "gradient",
    colors: ['#05b1ff'],
      gradient: {
          shadeIntensity: 0.3,
          opacityFrom: 0.5,
          opacityTo: 1,
          stops: [0, 100]
      }
  },
  stroke: {
      curve: 'smooth',
      colors: ['#05b1ff'],
      width: 3,
  },
  markers: {
      size: 0,
      hover: {
        size: 3,
        colors: ['#05b1ff']
      }
  },
  xaxis: {
      show: false,
      axisTicks: {
          show: false
      },
    categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
    ],
    lables: {
        show: false
    }
  },
  yaxis: {
      show: false
  }
};

var pThreeChart = document.getElementById("profile_chart_three");
if(pThreeChart != null) { 
  var clubThreeRender = new ApexCharts(
      document.querySelector("#profile_chart_three"),
      clubThree);
      clubThreeRender.render();
}

//clubs Four value chart
var clubFour = {
  colors: ['#22d8da'],
  chart: {
      width: 150,
      height: 60,
      type: "area",
      toolbar: {
          show: false
      },
      sparkline: {
          enabled: true
      }
  },
  dataLabels: {
      enabled: false
  },
  series: [
    {
      name: "Monthly Value",
      data: [110, 265, 158, 268, 339, 109, 109, 259, 169, 190, 540]
    }
  ],
  fill: {
    type: "gradient",
    colors: ['#22d8da'],
      gradient: {
          shadeIntensity: 0.3,
          opacityFrom: 0.5,
          opacityTo: 1,
          stops: [0, 100]
      }
  },
  stroke: {
      curve: 'smooth',
      colors: ['#22d8da'],
      width: 3,
  },
  markers: {
      size: 0,
      hover: {
        size: 3,
        colors: ['#22d8da']
      }
  },
  xaxis: {
      show: false,
      axisTicks: {
          show: false
      },
    categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
    ],
    lables: {
        show: false
    }
  },
  yaxis: {
      show: false
  }
};

var pFourChart = document.getElementById("profile_chart_four");
if(pFourChart != null) { 
  var clubFourRender = new ApexCharts(
      document.querySelector("#profile_chart_four"),
      clubFour);
      clubFourRender.render();
}

//clubs Five value chart
var clubFive = {
  colors: ['#db53a3'],
  chart: {
      width: 150,
      height: 60,
      type: "area",
      toolbar: {
          show: false
      },
      sparkline: {
          enabled: true
      }
  },
  dataLabels: {
      enabled: false
  },
  series: [
    {
      name: "Monthly Value",
      data: [110, 265, 158, 68, 39, 109, 109, 259, 169, 190, 540]
    }
  ],
  fill: {
    type: "gradient",
    colors: ['#db53a3'],
      gradient: {
          shadeIntensity: 0.3,
          opacityFrom: 0.5,
          opacityTo: 1,
          stops: [0, 100]
      }
  },
  stroke: {
      curve: 'smooth',
      colors: ['#db53a3'],
      width: 3,
  },
  markers: {
      size: 0,
      hover: {
        size: 3,
        colors: ['#db53a3']
      }
  },
  xaxis: {
      show: false,
      axisTicks: {
          show: false
      },
    categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
    ],
    lables: {
        show: false
    }
  },
  yaxis: {
      show: false
  }
};

var pFiveChart = document.getElementById("profile_chart_five");
if(pFiveChart != null) { 
  var clubFiveRender = new ApexCharts(
      document.querySelector("#profile_chart_five"),
      clubFive);
      clubFiveRender.render();
}

//clubs Six value chart
var clubSix = {
  colors: ['#fb873b'],
  chart: {
      width: 150,
      height: 60,
      type: "area",
      toolbar: {
          show: false
      },
      sparkline: {
          enabled: true
      }
  },
  dataLabels: {
      enabled: false
  },
  series: [
    {
      name: "Monthly Value",
      data: [10, 65, 158, 68, 439, 109, 109, 59, 169, 90, 40]
    }
  ],
  fill: {
    type: "gradient",
    colors: ['#fb873b'],
      gradient: {
          shadeIntensity: 0.3,
          opacityFrom: 0.5,
          opacityTo: 1,
          stops: [0, 100]
      }
  },
  stroke: {
      curve: 'smooth',
      colors: ['#fb873b'],
      width: 3,
  },
  markers: {
      size: 0,
      hover: {
        size: 3,
        colors: ['#fb873b']
      }
  },
  xaxis: {
      show: false,
      axisTicks: {
          show: false
      },
    categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
    ],
    lables: {
        show: false
    }
  },
  yaxis: {
      show: false
  }
};

var pSixChart = document.getElementById("profile_chart_six");
if(pSixChart != null) { 
  var clubSixRender = new ApexCharts(
      document.querySelector("#profile_chart_six"),
      clubSix);
      clubSixRender.render();
}

//clubs One value chart
var clubSeven = {
  colors: ['#FF8F3D'],
  chart: {
      width: 150,
      height: 60,
      type: "area",
      toolbar: {
          show: false
      },
      sparkline: {
          enabled: true
      }
  },
  dataLabels: {
      enabled: false
  },
  series: [
    {
      name: "Monthly Value",
      data: [40, 65, 158, 68, 39, 109, 109, 259, 169, 190,140]
    }
  ],
  fill: {
    type: "gradient",
    colors: ['#FF8F3D'],
      gradient: {
          shadeIntensity: 0.3,
          opacityFrom: 0.5,
          opacityTo: 1,
          stops: [0, 100]
      }
  },
  stroke: {
      curve: 'smooth',
      colors: ['#FF8F3D'],
      width: 3,
  },
  markers: {
      size: 0,
      hover: {
        size: 3,
        colors: ['#FF8F3D']
      }
  },
  xaxis: {
      show: false,
      axisTicks: {
          show: false
      },
    categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
    ],
    lables: {
        show: false
    }
  },
  yaxis: {
      show: false
  }
};

var pSevenChart = document.getElementById("profile_chart_seven");
if(pSevenChart != null) { 
  var clubSevenRender = new ApexCharts(
      document.querySelector("#profile_chart_seven"),
      clubSeven);
      clubSevenRender.render();
}

//clubs Two value chart
var clubEight = {
  colors: ['#9b5d8b'],
  chart: {
      width: 150,
      height: 60,
      type: "area",
      toolbar: {
          show: false
      },
      sparkline: {
          enabled: true
      }
  },
  dataLabels: {
      enabled: false
  },
  series: [
    {
      name: "Monthly Value",
      data: [40, 65, 158, 68, 319, 109, 109, 259, 169, 190,240]
    }
  ],
  fill: {
    type: "gradient",
    colors: ['#9b5d8b'],
      gradient: {
          shadeIntensity: 0.3,
          opacityFrom: 0.5,
          opacityTo: 1,
          stops: [0, 100]
      }
  },
  stroke: {
      curve: 'smooth',
      colors: ['#9b5d8b'],
      width: 3,
  },
  markers: {
      size: 0,
      hover: {
        size: 3,
        colors: ['#9b5d8b']
      }
  },
  xaxis: {
      show: false,
      axisTicks: {
          show: false
      },
    categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
    ],
    lables: {
        show: false
    }
  },
  yaxis: {
      show: false
  }
};

var pEightChart = document.getElementById("profile_chart_eight");
if(pEightChart != null) { 
  var clubEightRender = new ApexCharts(
      document.querySelector("#profile_chart_eight"),
      clubEight);
      clubEightRender.render();
}

//clubs Three value chart
var clubNine = {
  colors: ['#05b1ff'],
  chart: {
      width: 150,
      height: 60,
      type: "area",
      toolbar: {
          show: false
      },
      sparkline: {
          enabled: true
      }
  },
  dataLabels: {
      enabled: false
  },
  series: [
    {
      name: "Monthly Value",
      data: [140, 265, 158, 68, 39, 109, 109, 259, 169, 190,40]
    }
  ],
  fill: {
    type: "gradient",
    colors: ['#05b1ff'],
      gradient: {
          shadeIntensity: 0.3,
          opacityFrom: 0.5,
          opacityTo: 1,
          stops: [0, 100]
      }
  },
  stroke: {
      curve: 'smooth',
      colors: ['#05b1ff'],
      width: 3,
  },
  markers: {
      size: 0,
      hover: {
        size: 3,
        colors: ['#05b1ff']
      }
  },
  xaxis: {
      show: false,
      axisTicks: {
          show: false
      },
    categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
    ],
    lables: {
        show: false
    }
  },
  yaxis: {
      show: false
  }
};

var pNineChart = document.getElementById("profile_chart_nine");
if(pNineChart != null) { 
  var clubNineRender = new ApexCharts(
      document.querySelector("#profile_chart_nine"),
      clubNine);
      clubNineRender.render();
}

//clubs Ten value chart
var clubTen = {
  colors: ['#22d8da'],
  chart: {
      width: 150,
      height: 60,
      type: "area",
      toolbar: {
          show: false
      },
      sparkline: {
          enabled: true
      }
  },
  dataLabels: {
      enabled: false
  },
  series: [
    {
      name: "Monthly Value",
      data: [110, 265, 158, 268, 339, 109, 109, 259, 169, 190, 540]
    }
  ],
  fill: {
    type: "gradient",
    colors: ['#22d8da'],
      gradient: {
          shadeIntensity: 0.3,
          opacityFrom: 0.5,
          opacityTo: 1,
          stops: [0, 100]
      }
  },
  stroke: {
      curve: 'smooth',
      colors: ['#22d8da'],
      width: 3,
  },
  markers: {
      size: 0,
      hover: {
        size: 3,
        colors: ['#22d8da']
      }
  },
  xaxis: {
      show: false,
      axisTicks: {
          show: false
      },
    categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
    ],
    lables: {
        show: false
    }
  },
  yaxis: {
      show: false
  }
};

var pTenChart = document.getElementById("profile_chart_ten");
if(pTenChart != null) { 
  var clubTenRender = new ApexCharts(
      document.querySelector("#profile_chart_ten"),
      clubTen);
      clubTenRender.render();
}

//clubs One value chart
var clubOnew = {
  colors: ['#FF8F3D'],
  chart: {
      width: 150,
      height: 60,
      type: "area",
      toolbar: {
          show: false
      },
      sparkline: {
          enabled: true
      }
  },
  dataLabels: {
      enabled: false
  },
  series: [
    {
      name: "Monthly Value",
      data: [40, 65, 158, 68, 39, 109, 109, 259, 169, 190,140]
    }
  ],
  fill: {
    type: "gradient",
    colors: ['#FF8F3D'],
      gradient: {
          shadeIntensity: 0.3,
          opacityFrom: 0.5,
          opacityTo: 1,
          stops: [0, 100]
      }
  },
  stroke: {
      curve: 'smooth',
      colors: ['#FF8F3D'],
      width: 3,
  },
  markers: {
      size: 0,
      hover: {
        size: 3,
        colors: ['#FF8F3D']
      }
  },
  xaxis: {
      show: false,
      axisTicks: {
          show: false
      },
    categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
    ],
    lables: {
        show: false
    }
  },
  yaxis: {
      show: false
  }
};

var pOneChartw = document.getElementById("profile_chart_onew");
if(pOneChartw != null) { 
  var clubOneRenderw = new ApexCharts(
      document.querySelector("#profile_chart_onew"),
      clubOnew);
      clubOneRenderw.render();
}

//clubs Two value chart
var clubTwow = {
  colors: ['#9b5d8b'],
  chart: {
      width: 150,
      height: 60,
      type: "area",
      toolbar: {
          show: false
      },
      sparkline: {
          enabled: true
      }
  },
  dataLabels: {
      enabled: false
  },
  series: [
    {
      name: "Monthly Value",
      data: [40, 65, 158, 68, 319, 109, 109, 259, 169, 190,240]
    }
  ],
  fill: {
    type: "gradient",
    colors: ['#9b5d8b'],
      gradient: {
          shadeIntensity: 0.3,
          opacityFrom: 0.5,
          opacityTo: 1,
          stops: [0, 100]
      }
  },
  stroke: {
      curve: 'smooth',
      colors: ['#9b5d8b'],
      width: 3,
  },
  markers: {
      size: 0,
      hover: {
        size: 3,
        colors: ['#9b5d8b']
      }
  },
  xaxis: {
      show: false,
      axisTicks: {
          show: false
      },
    categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
    ],
    lables: {
        show: false
    }
  },
  yaxis: {
      show: false
  }
};

var pTwoChartw = document.getElementById("profile_chart_twow");
if(pTwoChartw != null) { 
  var clubTwoRenderw = new ApexCharts(
      document.querySelector("#profile_chart_twow"),
      clubTwow);
      clubTwoRenderw.render();
}

//clubs Three value chart
var clubThreew = {
  colors: ['#05b1ff'],
  chart: {
      width: 150,
      height: 60,
      type: "area",
      toolbar: {
          show: false
      },
      sparkline: {
          enabled: true
      }
  },
  dataLabels: {
      enabled: false
  },
  series: [
    {
      name: "Monthly Value",
      data: [140, 265, 158, 68, 39, 109, 109, 259, 169, 190,40]
    }
  ],
  fill: {
    type: "gradient",
    colors: ['#05b1ff'],
      gradient: {
          shadeIntensity: 0.3,
          opacityFrom: 0.5,
          opacityTo: 1,
          stops: [0, 100]
      }
  },
  stroke: {
      curve: 'smooth',
      colors: ['#05b1ff'],
      width: 3,
  },
  markers: {
      size: 0,
      hover: {
        size: 3,
        colors: ['#05b1ff']
      }
  },
  xaxis: {
      show: false,
      axisTicks: {
          show: false
      },
    categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
    ],
    lables: {
        show: false
    }
  },
  yaxis: {
      show: false
  }
};

var pThreeChartw = document.getElementById("profile_chart_threew");
if(pThreeChartw != null) { 
  var clubThreeRenderw = new ApexCharts(
      document.querySelector("#profile_chart_threew"),
      clubThreew);
      clubThreeRenderw.render();
}

//clubs Four value chart
var clubFourw = {
  colors: ['#22d8da'],
  chart: {
      width: 150,
      height: 60,
      type: "area",
      toolbar: {
          show: false
      },
      sparkline: {
          enabled: true
      }
  },
  dataLabels: {
      enabled: false
  },
  series: [
    {
      name: "Monthly Value",
      data: [110, 265, 158, 268, 339, 109, 109, 259, 169, 190, 540]
    }
  ],
  fill: {
    type: "gradient",
    colors: ['#22d8da'],
      gradient: {
          shadeIntensity: 0.3,
          opacityFrom: 0.5,
          opacityTo: 1,
          stops: [0, 100]
      }
  },
  stroke: {
      curve: 'smooth',
      colors: ['#22d8da'],
      width: 3,
  },
  markers: {
      size: 0,
      hover: {
        size: 3,
        colors: ['#22d8da']
      }
  },
  xaxis: {
      show: false,
      axisTicks: {
          show: false
      },
    categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
    ],
    lables: {
        show: false
    }
  },
  yaxis: {
      show: false
  }
};

var pFourChartw = document.getElementById("profile_chart_fourw");
if(pFourChartw != null) { 
  var clubFourRenderw = new ApexCharts(
      document.querySelector("#profile_chart_fourw"),
      clubFourw);
      clubFourRenderw.render();
}

//clubs Five value chart
var clubFivew = {
  colors: ['#db53a3'],
  chart: {
      width: 150,
      height: 60,
      type: "area",
      toolbar: {
          show: false
      },
      sparkline: {
          enabled: true
      }
  },
  dataLabels: {
      enabled: false
  },
  series: [
    {
      name: "Monthly Value",
      data: [110, 265, 158, 68, 39, 109, 109, 259, 169, 190, 540]
    }
  ],
  fill: {
    type: "gradient",
    colors: ['#db53a3'],
      gradient: {
          shadeIntensity: 0.3,
          opacityFrom: 0.5,
          opacityTo: 1,
          stops: [0, 100]
      }
  },
  stroke: {
      curve: 'smooth',
      colors: ['#db53a3'],
      width: 3,
  },
  markers: {
      size: 0,
      hover: {
        size: 3,
        colors: ['#db53a3']
      }
  },
  xaxis: {
      show: false,
      axisTicks: {
          show: false
      },
    categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
    ],
    lables: {
        show: false
    }
  },
  yaxis: {
      show: false
  }
};

var pFiveChartw = document.getElementById("profile_chart_fivew");
if(pFiveChartw != null) { 
  var clubFiveRenderw = new ApexCharts(
      document.querySelector("#profile_chart_fivew"),
      clubFivew);
      clubFiveRenderw.render();
}

//clubs Six value chart
var clubSixw = {
  colors: ['#fb873b'],
  chart: {
      width: 150,
      height: 60,
      type: "area",
      toolbar: {
          show: false
      },
      sparkline: {
          enabled: true
      }
  },
  dataLabels: {
      enabled: false
  },
  series: [
    {
      name: "Monthly Value",
      data: [10, 65, 158, 68, 439, 109, 109, 59, 169, 90, 40]
    }
  ],
  fill: {
    type: "gradient",
    colors: ['#fb873b'],
      gradient: {
          shadeIntensity: 0.3,
          opacityFrom: 0.5,
          opacityTo: 1,
          stops: [0, 100]
      }
  },
  stroke: {
      curve: 'smooth',
      colors: ['#fb873b'],
      width: 3,
  },
  markers: {
      size: 0,
      hover: {
        size: 3,
        colors: ['#fb873b']
      }
  },
  xaxis: {
      show: false,
      axisTicks: {
          show: false
      },
    categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
    ],
    lables: {
        show: false
    }
  },
  yaxis: {
      show: false
  }
};

var pSixChartw = document.getElementById("profile_chart_sixw");
if(pSixChartw != null) { 
  var clubSixRenderw = new ApexCharts(
      document.querySelector("#profile_chart_sixw"),
      clubSixw);
      clubSixRenderw.render();
}

//clubs One value chart
var clubSevenw = {
  colors: ['#FF8F3D'],
  chart: {
      width: 150,
      height: 60,
      type: "area",
      toolbar: {
          show: false
      },
      sparkline: {
          enabled: true
      }
  },
  dataLabels: {
      enabled: false
  },
  series: [
    {
      name: "Monthly Value",
      data: [40, 65, 158, 68, 39, 109, 109, 259, 169, 190,140]
    }
  ],
  fill: {
    type: "gradient",
    colors: ['#FF8F3D'],
      gradient: {
          shadeIntensity: 0.3,
          opacityFrom: 0.5,
          opacityTo: 1,
          stops: [0, 100]
      }
  },
  stroke: {
      curve: 'smooth',
      colors: ['#FF8F3D'],
      width: 3,
  },
  markers: {
      size: 0,
      hover: {
        size: 3,
        colors: ['#FF8F3D']
      }
  },
  xaxis: {
      show: false,
      axisTicks: {
          show: false
      },
    categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
    ],
    lables: {
        show: false
    }
  },
  yaxis: {
      show: false
  }
};

var pSevenChartw = document.getElementById("profile_chart_sevenw");
if(pSevenChartw != null) { 
  var clubSevenRenderw = new ApexCharts(
      document.querySelector("#profile_chart_sevenw"),
      clubSevenw);
      clubSevenRenderw.render();
}

//clubs Two value chart
var clubEightw = {
  colors: ['#9b5d8b'],
  chart: {
      width: 150,
      height: 60,
      type: "area",
      toolbar: {
          show: false
      },
      sparkline: {
          enabled: true
      }
  },
  dataLabels: {
      enabled: false
  },
  series: [
    {
      name: "Monthly Value",
      data: [40, 65, 158, 68, 319, 109, 109, 259, 169, 190,240]
    }
  ],
  fill: {
    type: "gradient",
    colors: ['#9b5d8b'],
      gradient: {
          shadeIntensity: 0.3,
          opacityFrom: 0.5,
          opacityTo: 1,
          stops: [0, 100]
      }
  },
  stroke: {
      curve: 'smooth',
      colors: ['#9b5d8b'],
      width: 3,
  },
  markers: {
      size: 0,
      hover: {
        size: 3,
        colors: ['#9b5d8b']
      }
  },
  xaxis: {
      show: false,
      axisTicks: {
          show: false
      },
    categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
    ],
    lables: {
        show: false
    }
  },
  yaxis: {
      show: false
  }
};

var pEightChartw = document.getElementById("profile_chart_eightw");
if(pEightChartw != null) { 
  var clubEightRenderw = new ApexCharts(
      document.querySelector("#profile_chart_eightw"),
      clubEightw);
      clubEightRenderw.render();
}

//clubs Three value chart
var clubNinew = {
  colors: ['#05b1ff'],
  chart: {
      width: 150,
      height: 60,
      type: "area",
      toolbar: {
          show: false
      },
      sparkline: {
          enabled: true
      }
  },
  dataLabels: {
      enabled: false
  },
  series: [
    {
      name: "Monthly Value",
      data: [140, 265, 158, 68, 39, 109, 109, 259, 169, 190,40]
    }
  ],
  fill: {
    type: "gradient",
    colors: ['#05b1ff'],
      gradient: {
          shadeIntensity: 0.3,
          opacityFrom: 0.5,
          opacityTo: 1,
          stops: [0, 100]
      }
  },
  stroke: {
      curve: 'smooth',
      colors: ['#05b1ff'],
      width: 3,
  },
  markers: {
      size: 0,
      hover: {
        size: 3,
        colors: ['#05b1ff']
      }
  },
  xaxis: {
      show: false,
      axisTicks: {
          show: false
      },
    categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
    ],
    lables: {
        show: false
    }
  },
  yaxis: {
      show: false
  }
};

var pNineChartw = document.getElementById("profile_chart_ninew");
if(pNineChartw != null) { 
  var clubNineRenderw = new ApexCharts(
      document.querySelector("#profile_chart_ninew"),
      clubNinew);
      clubNineRenderw.render();
}

//clubs Ten value chart
var clubTenw = {
  colors: ['#22d8da'],
  chart: {
      width: 150,
      height: 60,
      type: "area",
      toolbar: {
          show: false
      },
      sparkline: {
          enabled: true
      }
  },
  dataLabels: {
      enabled: false
  },
  series: [
    {
      name: "Monthly Value",
      data: [110, 265, 158, 268, 339, 109, 109, 259, 169, 190, 540]
    }
  ],
  fill: {
    type: "gradient",
    colors: ['#22d8da'],
      gradient: {
          shadeIntensity: 0.3,
          opacityFrom: 0.5,
          opacityTo: 1,
          stops: [0, 100]
      }
  },
  stroke: {
      curve: 'smooth',
      colors: ['#22d8da'],
      width: 3,
  },
  markers: {
      size: 0,
      hover: {
        size: 3,
        colors: ['#22d8da']
      }
  },
  xaxis: {
      show: false,
      axisTicks: {
          show: false
      },
    categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
    ],
    lables: {
        show: false
    }
  },
  yaxis: {
      show: false
  }
};

var pTenChartw = document.getElementById("profile_chart_tenw");
if(pTenChartw != null) { 
  var clubTenRenderw = new ApexCharts(
      document.querySelector("#profile_chart_tenw"),
      clubTenw);
      clubTenRenderw.render();
}

//clubs One value chart
var clubOner = {
  colors: ['#FF8F3D'],
  chart: {
      width: 150,
      height: 60,
      type: "area",
      toolbar: {
          show: false
      },
      sparkline: {
          enabled: true
      }
  },
  dataLabels: {
      enabled: false
  },
  series: [
    {
      name: "Monthly Value",
      data: [40, 65, 158, 68, 39, 109, 109, 259, 169, 190,140]
    }
  ],
  fill: {
    type: "gradient",
    colors: ['#FF8F3D'],
      gradient: {
          shadeIntensity: 0.3,
          opacityFrom: 0.5,
          opacityTo: 1,
          stops: [0, 100]
      }
  },
  stroke: {
      curve: 'smooth',
      colors: ['#FF8F3D'],
      width: 3,
  },
  markers: {
      size: 0,
      hover: {
        size: 3,
        colors: ['#FF8F3D']
      }
  },
  xaxis: {
      show: false,
      axisTicks: {
          show: false
      },
    categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
    ],
    lables: {
        show: false
    }
  },
  yaxis: {
      show: false
  }
};

var pOneChartr = document.getElementById("profile_chart_oner");
if(pOneChartr != null) { 
  var clubOneRenderr = new ApexCharts(
      document.querySelector("#profile_chart_oner"),
      clubOner);
      clubOneRenderr.render();
}

//clubs Two value chart
var clubTwor = {
  colors: ['#9b5d8b'],
  chart: {
      width: 150,
      height: 60,
      type: "area",
      toolbar: {
          show: false
      },
      sparkline: {
          enabled: true
      }
  },
  dataLabels: {
      enabled: false
  },
  series: [
    {
      name: "Monthly Value",
      data: [40, 65, 158, 68, 319, 109, 109, 259, 169, 190,240]
    }
  ],
  fill: {
    type: "gradient",
    colors: ['#9b5d8b'],
      gradient: {
          shadeIntensity: 0.3,
          opacityFrom: 0.5,
          opacityTo: 1,
          stops: [0, 100]
      }
  },
  stroke: {
      curve: 'smooth',
      colors: ['#9b5d8b'],
      width: 3,
  },
  markers: {
      size: 0,
      hover: {
        size: 3,
        colors: ['#9b5d8b']
      }
  },
  xaxis: {
      show: false,
      axisTicks: {
          show: false
      },
    categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
    ],
    lables: {
        show: false
    }
  },
  yaxis: {
      show: false
  }
};

var pTwoChartr = document.getElementById("profile_chart_twor");
if(pTwoChartr != null) { 
  var clubTwoRenderr = new ApexCharts(
      document.querySelector("#profile_chart_twor"),
      clubTwor);
      clubTwoRenderr.render();
}

//clubs Three value chart
var clubThreer = {
  colors: ['#05b1ff'],
  chart: {
      width: 150,
      height: 60,
      type: "area",
      toolbar: {
          show: false
      },
      sparkline: {
          enabled: true
      }
  },
  dataLabels: {
      enabled: false
  },
  series: [
    {
      name: "Monthly Value",
      data: [140, 265, 158, 68, 39, 109, 109, 259, 169, 190,40]
    }
  ],
  fill: {
    type: "gradient",
    colors: ['#05b1ff'],
      gradient: {
          shadeIntensity: 0.3,
          opacityFrom: 0.5,
          opacityTo: 1,
          stops: [0, 100]
      }
  },
  stroke: {
      curve: 'smooth',
      colors: ['#05b1ff'],
      width: 3,
  },
  markers: {
      size: 0,
      hover: {
        size: 3,
        colors: ['#05b1ff']
      }
  },
  xaxis: {
      show: false,
      axisTicks: {
          show: false
      },
    categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
    ],
    lables: {
        show: false
    }
  },
  yaxis: {
      show: false
  }
};

var pThreeChartr = document.getElementById("profile_chart_threer");
if(pThreeChartr != null) { 
  var clubThreeRenderr = new ApexCharts(
      document.querySelector("#profile_chart_threer"),
      clubThreer);
      clubThreeRenderr.render();
}

//clubs Four value chart
var clubFourr = {
  colors: ['#22d8da'],
  chart: {
      width: 150,
      height: 60,
      type: "area",
      toolbar: {
          show: false
      },
      sparkline: {
          enabled: true
      }
  },
  dataLabels: {
      enabled: false
  },
  series: [
    {
      name: "Monthly Value",
      data: [110, 265, 158, 268, 339, 109, 109, 259, 169, 190, 540]
    }
  ],
  fill: {
    type: "gradient",
    colors: ['#22d8da'],
      gradient: {
          shadeIntensity: 0.3,
          opacityFrom: 0.5,
          opacityTo: 1,
          stops: [0, 100]
      }
  },
  stroke: {
      curve: 'smooth',
      colors: ['#22d8da'],
      width: 3,
  },
  markers: {
      size: 0,
      hover: {
        size: 3,
        colors: ['#22d8da']
      }
  },
  xaxis: {
      show: false,
      axisTicks: {
          show: false
      },
    categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
    ],
    lables: {
        show: false
    }
  },
  yaxis: {
      show: false
  }
};

var pFourChartr = document.getElementById("profile_chart_fourr");
if(pFourChartr != null) { 
  var clubFourRenderr = new ApexCharts(
      document.querySelector("#profile_chart_fourr"),
      clubFourr);
      clubFourRenderr.render();
}

//clubs Five value chart
var clubFiver = {
  colors: ['#db53a3'],
  chart: {
      width: 150,
      height: 60,
      type: "area",
      toolbar: {
          show: false
      },
      sparkline: {
          enabled: true
      }
  },
  dataLabels: {
      enabled: false
  },
  series: [
    {
      name: "Monthly Value",
      data: [110, 265, 158, 68, 39, 109, 109, 259, 169, 190, 540]
    }
  ],
  fill: {
    type: "gradient",
    colors: ['#db53a3'],
      gradient: {
          shadeIntensity: 0.3,
          opacityFrom: 0.5,
          opacityTo: 1,
          stops: [0, 100]
      }
  },
  stroke: {
      curve: 'smooth',
      colors: ['#db53a3'],
      width: 3,
  },
  markers: {
      size: 0,
      hover: {
        size: 3,
        colors: ['#db53a3']
      }
  },
  xaxis: {
      show: false,
      axisTicks: {
          show: false
      },
    categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
    ],
    lables: {
        show: false
    }
  },
  yaxis: {
      show: false
  }
};

var pFiveChartr = document.getElementById("profile_chart_fiver");
if(pFiveChartr != null) { 
  var clubFiveRenderr = new ApexCharts(
      document.querySelector("#profile_chart_fiver"),
      clubFiver);
      clubFiveRenderr.render();
}

//clubs Six value chart
var clubSixr = {
  colors: ['#fb873b'],
  chart: {
      width: 150,
      height: 60,
      type: "area",
      toolbar: {
          show: false
      },
      sparkline: {
          enabled: true
      }
  },
  dataLabels: {
      enabled: false
  },
  series: [
    {
      name: "Monthly Value",
      data: [10, 65, 158, 68, 439, 109, 109, 59, 169, 90, 40]
    }
  ],
  fill: {
    type: "gradient",
    colors: ['#fb873b'],
      gradient: {
          shadeIntensity: 0.3,
          opacityFrom: 0.5,
          opacityTo: 1,
          stops: [0, 100]
      }
  },
  stroke: {
      curve: 'smooth',
      colors: ['#fb873b'],
      width: 3,
  },
  markers: {
      size: 0,
      hover: {
        size: 3,
        colors: ['#fb873b']
      }
  },
  xaxis: {
      show: false,
      axisTicks: {
          show: false
      },
    categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
    ],
    lables: {
        show: false
    }
  },
  yaxis: {
      show: false
  }
};

var pSixChartr = document.getElementById("profile_chart_sixr");
if(pSixChartr != null) { 
  var clubSixRenderr = new ApexCharts(
      document.querySelector("#profile_chart_sixr"),
      clubSixr);
      clubSixRenderr.render();
}

//clubs One value chart
var clubSevenr = {
  colors: ['#FF8F3D'],
  chart: {
      width: 150,
      height: 60,
      type: "area",
      toolbar: {
          show: false
      },
      sparkline: {
          enabled: true
      }
  },
  dataLabels: {
      enabled: false
  },
  series: [
    {
      name: "Monthly Value",
      data: [40, 65, 158, 68, 39, 109, 109, 259, 169, 190,140]
    }
  ],
  fill: {
    type: "gradient",
    colors: ['#FF8F3D'],
      gradient: {
          shadeIntensity: 0.3,
          opacityFrom: 0.5,
          opacityTo: 1,
          stops: [0, 100]
      }
  },
  stroke: {
      curve: 'smooth',
      colors: ['#FF8F3D'],
      width: 3,
  },
  markers: {
      size: 0,
      hover: {
        size: 3,
        colors: ['#FF8F3D']
      }
  },
  xaxis: {
      show: false,
      axisTicks: {
          show: false
      },
    categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
    ],
    lables: {
        show: false
    }
  },
  yaxis: {
      show: false
  }
};

var pSevenChartr = document.getElementById("profile_chart_sevenr");
if(pSevenChartr != null) { 
  var clubSevenRenderr = new ApexCharts(
      document.querySelector("#profile_chart_sevenr"),
      clubSevenr);
      clubSevenRenderr.render();
}

//clubs Two value chart
var clubEightr = {
  colors: ['#9b5d8b'],
  chart: {
      width: 150,
      height: 60,
      type: "area",
      toolbar: {
          show: false
      },
      sparkline: {
          enabled: true
      }
  },
  dataLabels: {
      enabled: false
  },
  series: [
    {
      name: "Monthly Value",
      data: [40, 65, 158, 68, 319, 109, 109, 259, 169, 190,240]
    }
  ],
  fill: {
    type: "gradient",
    colors: ['#9b5d8b'],
      gradient: {
          shadeIntensity: 0.3,
          opacityFrom: 0.5,
          opacityTo: 1,
          stops: [0, 100]
      }
  },
  stroke: {
      curve: 'smooth',
      colors: ['#9b5d8b'],
      width: 3,
  },
  markers: {
      size: 0,
      hover: {
        size: 3,
        colors: ['#9b5d8b']
      }
  },
  xaxis: {
      show: false,
      axisTicks: {
          show: false
      },
    categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
    ],
    lables: {
        show: false
    }
  },
  yaxis: {
      show: false
  }
};

var pEightChartr = document.getElementById("profile_chart_eightrr");
if(pEightChartr != null) { 
  var clubEightRenderr = new ApexCharts(
      document.querySelector("#profile_chart_eightrr"),
      clubEightr);
      clubEightRenderr.render();
}

//clubs Three value chart
var clubNiner = {
  colors: ['#05b1ff'],
  chart: {
      width: 150,
      height: 60,
      type: "area",
      toolbar: {
          show: false
      },
      sparkline: {
          enabled: true
      }
  },
  dataLabels: {
      enabled: false
  },
  series: [
    {
      name: "Monthly Value",
      data: [140, 265, 158, 68, 39, 109, 109, 259, 169, 190,40]
    }
  ],
  fill: {
    type: "gradient",
    colors: ['#05b1ff'],
      gradient: {
          shadeIntensity: 0.3,
          opacityFrom: 0.5,
          opacityTo: 1,
          stops: [0, 100]
      }
  },
  stroke: {
      curve: 'smooth',
      colors: ['#05b1ff'],
      width: 3,
  },
  markers: {
      size: 0,
      hover: {
        size: 3,
        colors: ['#05b1ff']
      }
  },
  xaxis: {
      show: false,
      axisTicks: {
          show: false
      },
    categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
    ],
    lables: {
        show: false
    }
  },
  yaxis: {
      show: false
  }
};

var pNineChartr = document.getElementById("profile_chart_niner");
if(pNineChartr != null) { 
  var clubNineRenderr = new ApexCharts(
      document.querySelector("#profile_chart_niner"),
      clubNiner);
      clubNineRenderr.render();
}

//clubs Recent Ten value chart
var clubTenr = {
  colors: ['#22d8da'],
  chart: {
      width: 150,
      height: 60,
      type: "area",
      toolbar: {
          show: false
      },
      sparkline: {
          enabled: true
      }
  },
  dataLabels: {
      enabled: false
  },
  series: [
    {
      name: "Monthly Value",
      data: [110, 265, 158, 268, 339, 109, 109, 259, 169, 190, 540]
    }
  ],
  fill: {
    type: "gradient",
    colors: ['#22d8da'],
      gradient: {
          shadeIntensity: 0.3,
          opacityFrom: 0.5,
          opacityTo: 1,
          stops: [0, 100]
      }
  },
  stroke: {
      curve: 'smooth',
      colors: ['#22d8da'],
      width: 3,
  },
  markers: {
      size: 0,
      hover: {
        size: 3,
        colors: ['#22d8da']
      }
  },
  xaxis: {
      show: false,
      axisTicks: {
          show: false
      },
    categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
    ],
    lables: {
        show: false
    }
  },
  yaxis: {
      show: false
  }
};

var pTenChartr = document.getElementById("profile_chart_tenr");
if(pTenChartr != null) { 
  var clubTenRenderr = new ApexCharts(
      document.querySelector("#profile_chart_tenr"),
      clubTenr);
      clubTenRenderr.render();
}

//fantasy charts start
var fantasyOptions = {
  series: [{
    name: "Monthly Investment",
    data: [10, 19, 29, 10,36, 26, 39]
}],
  chart: {
    width: '100%',
    height: '250px',
    type: 'line',
  zoom: {
    enabled: false
  },
  toolbar: {
    show: false
  }
},
dataLabels: {
  enabled: false
},
stroke: {
  show: true,
  curve: 'straight',
  colors: '#007AD8',
  width: 3,
  dashArray: 0,      
},
grid: {
  padding: {
    top: 0,
    right: 0,
    left: 15,
  }
},
xaxis: {
  categories: ['Jan 2020', 'Feb 2020', 'Mar2020', 'Apr 2020', 'May 2021', 'Jun 2021', 'Jul 2021' ],
  labels: {
    style: {
        colors: '#B2B8E4',
        fontSize: '10px',
        fontFamily: '$open-sans',
        fontWeight: 700,
        lineHeight: 2
    },
    axisBorder: {
      show: false
    }
  }
},
yaxis: {
  labels: {
    style: {
        colors: '#B2B8E4',
        fontSize: '10px',
        fontFamily: '$open-sans',
        fontWeight: 700,
        lineHeight: 2
    }
  }
},
markers: {
  size: 0,
  colors: '#04c1ff',
  strokeColors: '#fff',
  strokeWidth: 4,
  shape: "circle",
  hover: {
    size: 6,
    strokeWidth: 4,
  }
},
responsive: [{
  breakpoint: 575,
  options: {
    grid: {
      padding: {
        top: 0,
        right: 0,
        left: 0,
      }
    },
  }
}]
};

var fanChart = document.getElementById("fantasyChart");
if(fanChart != null) { 
  var fantasy = new ApexCharts(
      document.querySelector("#fantasyChart"),
      fantasyOptions);
      fantasy.render();
}


//Price charts start
var priceOptions = {
  series: [{
    name: "Monthly Investment",
    data: [10, 19, 29, 10,36, 26, 39]
}],
  chart: {
    width: '100%',
    height: '250px',
    type: 'line',
  zoom: {
    enabled: false
  },
  toolbar: {
    show: false
  }
},
dataLabels: {
  enabled: false
},
stroke: {
  show: true,
  curve: 'straight',
  colors: '#007AD8',
  width: 3,
  dashArray: 0,      
},
grid: {
  padding: {
    top: 0,
    right: 0,
    left: 15,
  }
},
xaxis: {
  categories: ['Jan 2020', 'Feb 2020', 'Mar2020', 'Apr 2020', 'May 2021', 'Jun 2021', 'Jul 2021' ],
  labels: {
    style: {
        colors: '#B2B8E4',
        fontSize: '10px',
        fontFamily: '$open-sans',
        fontWeight: 700,
        lineHeight: 2
    },
    axisBorder: {
      show: false
    }
  }
},
yaxis: {
  labels: {
    style: {
        colors: '#B2B8E4',
        fontSize: '10px',
        fontFamily: '$open-sans',
        fontWeight: 700,
        lineHeight: 2
    }
  }
},
markers: {
  size: 0,
  colors: '#04c1ff',
  strokeColors: '#fff',
  strokeWidth: 4,
  shape: "circle",
  hover: {
    size: 6,
    strokeWidth: 4,
  }
},
responsive: [{
  breakpoint: 575,
  options: {
    grid: {
      padding: {
        top: 0,
        right: 0,
        left: 0,
      }
    },
  }
}]
};

var priChart = document.getElementById("priceChart");
if(priChart != null) { 
  var price = new ApexCharts(
      document.querySelector("#priceChart"),
      priceOptions);
      price.render();
}