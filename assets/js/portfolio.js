$(document).ready(function() {

  $(function() {
    $('[data-toggle="tooltip"]').tooltip();
  });

  $(function() {
    var ctx1 = document.getElementById("designChart");
    var ctx2 = document.getElementById("htmlChart");
    var ctx3 = document.getElementById("jsChart");
    var ctx4 = document.getElementById("bootChart");
    var ctx5 = document.getElementById("osChart");

    var designChart = new Chart(ctx1, {
      type: "doughnut",
      data: {
        labels: [
          "Design / Wireframe"
        ],
        datasets: [{
          data: [85, 15],
          backgroundColor: [
            "#E53935",
            "#f5f5f5"
          ],
          hoverBackgroundColor: [
            "#E53935",
            "#f5f5f5"
          ]
        }]
      },
      options: {
        legend: false,
        title: {
          display: true,
          text: 'Design / Wireframe',
          fontSize: 18,
          fontStyle: 'Bold'
        }
      },
      animation: {
        animateScale: true
      }
    });
    var htmlChart = new Chart(ctx2, {
      type: "doughnut",
      data: {
        labels: [
          "HTML / CSS"
        ],
        datasets: [{
          data: [95, 5],
          backgroundColor: [
            "#D81B60",
            "#f5f5f5"
          ],
          hoverBackgroundColor: [
            "#D81B60",
            "#f5f5f5"
          ]
        }]
      },
      options: {
        legend: false,
        title: {
          display: true,
          text: 'HTML / CSS',
          fontSize: 18,
          fontStyle: 'Bold'
        }
      },
      animation: {
        animateScale: true
      }
    });
    var jsChart = new Chart(ctx3, {
      type: "doughnut",
      data: {
        labels: [
          "Javascript / jQuery"
        ],
        datasets: [{
          data: [60, 40],
          backgroundColor: [
            "#8E24AA",
            "#f5f5f5"
          ],
          hoverBackgroundColor: [
            "#8E24AA",
            "#f5f5f5"
          ]
        }]
      },
      options: {
        legend: false,
        title: {
          display: true,
          text: 'Javascript / jQuery',
          fontSize: 18,
          fontStyle: 'Bold'
        }
      },
      animation: {
        animateScale: true
      }
    });
    var bootChart = new Chart(ctx4, {
      type: "doughnut",
      data: {
        labels: [
          "Bootstrap Framework"
        ],
        datasets: [{
          data: [90, 10],
          backgroundColor: [
            "#5E35B1",
            "#f5f5f5"
          ],
          hoverBackgroundColor: [
            "#5E35B1",
            "#f5f5f5"
          ]
        }]
      },
      options: {
        legend: false,
        title: {
          display: true,
          text: 'Bootstrap Framework',
          fontSize: 18,
          fontStyle: 'Bold'
        }
      },
      animation: {
        animateScale: true
      }
    });
    var osChart = new Chart(ctx5, {
      type: "doughnut",
      data: {
        labels: [
          "Windows / OS X"
        ],
        datasets: [{
          data: [95, 5],
          backgroundColor: [
            "#00897B",
            "#f5f5f5"
          ],
          hoverBackgroundColor: [
            "#00897B",
            "#f5f5f5"
          ]
        }]
      },
      options: {
        legend: false,
        title: {
          display: true,
          text: 'Windows / OS X',
          fontSize: 18,
          fontStyle: 'Bold'
        }
      },
      animation: {
        animateScale: true
      }
    });
  });

});
