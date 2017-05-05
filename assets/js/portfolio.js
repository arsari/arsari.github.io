$(document).ready(function () {
  // tooltip script call
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  // flip boxes
  $('.hover').hover(function () {
    $(this).addClass('flip')
  }, function () {
    $(this).removeClass('flip')
  })

  // chart script data
  $(function() {
    var ctx1 = $('#designChart')
    var ctx2 = $('#htmlChart')
    var ctx3 = $('#cssChart')
    var ctx4 = $('#jqChart')
    var ctx5 = $('#jsChart')
    var ctx6 = $('#bootChart')
    var ctx7 = $('#winChart')
    var ctx8 = $('#osxChart')

    var designChart = new Chart(ctx1, {
      type: 'doughnut',
      data: {
        labels: ['Sketch'],
        datasets: [
          {
            data: [
              75, 25
            ],
            backgroundColor: [
              '#f44336', '#f5f5f5'
            ],
            hoverBackgroundColor: ['#f44336', '#f5f5f5']
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        title: {
          display: true,
          position: 'top',
          padding: 10,
          text: 'Design w/ Sketch',
          fontSize: 18,
          fontStyle: 'Bold',
          fontColor: '#000000'
        }
      },
      animation: {
        animateScale: true
      }
    });
    var htmlChart = new Chart(ctx2, {
      type: 'doughnut',
      data: {
        labels: ['HTML'],
        datasets: [
          {
            data: [
              95, 5
            ],
            backgroundColor: [
              '#9c27b0', '#f5f5f5'
            ],
            hoverBackgroundColor: ['#9c27b0', '#f5f5f5']
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        title: {
          display: true,
          position: 'top',
          padding: 10,
          text: 'HTML5',
          fontSize: 18,
          fontStyle: 'Bold',
          fontColor: '#000000'
        }
      },
      animation: {
        animateScale: true
      }
    });
    var cssChart = new Chart(ctx3, {
      type: 'doughnut',
      data: {
        labels: ['CSS'],
        datasets: [
          {
            data: [
              95, 5
            ],
            backgroundColor: [
              '#3f51b5', '#f5f5f5'
            ],
            hoverBackgroundColor: ['#3f51b5', '#f5f5f5']
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        title: {
          display: true,
          position: 'top',
          padding: 10,
          text: 'CSS3',
          fontSize: 18,
          fontStyle: 'Bold',
          fontColor: '#000000'
        }
      },
      animation: {
        animateScale: true
      }
    });
    var jqChart = new Chart(ctx4, {
      type: 'doughnut',
      data: {
        labels: ['jQuery'],
        datasets: [
          {
            data: [
              60, 40
            ],
            backgroundColor: [
              '#03a9f4', '#f5f5f5'
            ],
            hoverBackgroundColor: ['#03a9f4', '#f5f5f5']
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        title: {
          display: true,
          position: 'top',
          padding: 10,
          text: 'jQuery',
          fontSize: 18,
          fontStyle: 'Bold',
          fontColor: '#000000'
        }
      },
      animation: {
        animateScale: true
      }
    });
    var jsChart = new Chart(ctx5, {
      type: 'doughnut',
      data: {
        labels: ['Javascript'],
        datasets: [
          {
            data: [
              80, 20
            ],
            backgroundColor: [
              '#009688', '#f5f5f5'
            ],
            hoverBackgroundColor: ['#009688', '#f5f5f5']
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        title: {
          display: true,
          position: 'top',
          padding: 10,
          text: 'Javascript',
          fontSize: 18,
          fontStyle: 'Bold',
          fontColor: '#000000'
        }
      },
      animation: {
        animateScale: true
      }
    });
    var bootChart = new Chart(ctx6, {
      type: 'doughnut',
      data: {
        labels: ['Bootstrap'],
        datasets: [
          {
            data: [
              95, 5
            ],
            backgroundColor: [
              '#ffc107', '#f5f5f5'
            ],
            hoverBackgroundColor: ['#ffc107', '#f5f5f5']
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        title: {
          display: true,
          position: 'top',
          padding: 10,
          text: 'Bootstrap Framework',
          fontSize: 18,
          fontStyle: 'Bold',
          fontColor: '#000000'
        }
      },
      animation: {
        animateScale: true
      }
    });
    var winhart = new Chart(ctx7, {
      type: 'doughnut',
      data: {
        labels: ['Windows'],
        datasets: [
          {
            data: [
              95, 5
            ],
            backgroundColor: [
              '#ff5722', '#f5f5f5'
            ],
            hoverBackgroundColor: ['#ff5722', '#f5f5f5']
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        title: {
          display: true,
          position: 'top',
          padding: 10,
          text: 'Windows',
          fontSize: 18,
          fontStyle: 'Bold',
          fontColor: '#000000'
        }
      },
      animation: {
        animateScale: true
      }
    });
    var osxhart = new Chart(ctx8, {
      type: 'doughnut',
      data: {
        labels: ['macOS'],
        datasets: [
          {
            data: [
              95, 5
            ],
            backgroundColor: [
              '#795548', '#f5f5f5'
            ],
            hoverBackgroundColor: ['#795548', '#f5f5f5']
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        title: {
          display: true,
          position: 'top',
          padding: 10,
          text: 'macOS',
          fontSize: 18,
          fontStyle: 'Bold',
          fontColor: '#000000'
        }
      },
      animation: {
        animateScale: true
      }
    })
  })
})
