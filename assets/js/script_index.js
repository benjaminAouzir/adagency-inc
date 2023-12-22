window.onload = (event) => {
    console.log("page is fully loaded");

    DoughnutChart('genre-donut',
                  ['Drama', 'Comedy', 'Romance Film', 'Thriller', 'Action', 'Indie', 'Crime Fiction', 'World cinema', 'Adventure'],
                  [16150, 8948, 5543, 4834, 4598, 3847, 3562, 3104, 2715],
                  'Number of Movies from the Most Popular Genres in the Whole Dataset ADAgency works with');
    mapInteractive();

    BenjiBarChart('revenue_post_matching',
                  [59343048, 62782204, 61092256, 65129708, 82999914, 62856773, 58688910, 72592692, 49836484, 58381301],
                  [45554769, 70821823, 64261536, 48436353, 54420086, 24847254, 49367263, 52681715, 56248580, 39481086],
                  [13788279, -8039619, -3169279, 16693355, 28579827, 38009519, 9321646, 19910977, -6412095, 18900214],
                  'Average Movie Revenue per Genre per Primary Role Gender');
    BenjiBarChart('rating_post_matching',
                  [6.36, 6.39, 6.40, 6.60, 6.48, 6.66, 6.27, 6.49, 6.36, 6.59],
                  [6.15, 6.05, 5.99, 6.36, 6.20, 6.29, 6.06, 6.24, 6.09, 6.30],
                  [0.21, 0.34, 0.41, 0.24, 0.28, 0.37, 0.21, 0.24, 0.26, 0.29],
                  'Average Movie Rating per Genre per Primary Role Gender');

    BarChart('movies-per-decade',
             ['< 1920', '1920s', '1930s', '1940s', '1950s', '1960s', '1970s', '1980s', '1990s', '2000s', '> 2010'],
             [17, 67, 231, 261, 384, 429, 621, 1238, 2335, 4638, 697],
             'Number of Movies per Decade')
    RevRatBarChart('revenue-rating-by-decade',
                   [2.9e+07, 4.9e+07, 5.4e+07, 5.8e+07, 3.0e+07, 1.0e+08, 1.1e+08, 4.0e+07, 3.2e+07, 2.6e+07, 2.0e+07],
                   [6.6, 6.7, 6.7, 6.8, 6.8, 6.8, 6.5, 6.4, 6.4, 6.3, 6.3],
                   'Median Movie Revenue and Rating per Decade');
    ThomasLineChart('revenue-linechart',
                    'Revenue',
                    'Average Revenue per Genre per Decade (Genres w/ over 80 Movies per Decade)',
                    [ , , , , 90658710, 44661754, 54399754, 45392074, 23071643],
                    [ , , , , , 52377545, 81731779, 82320786, ],
                    [ , , , , 1.13e+08, 3.56e+07, 5.38e+07, 4.16e+07, 2.04e+07],
                    [ , , 3.31e+07, 2.11e+08, 1.16e+08, 6.45e+07, 6.64e+07, 8.29e+07, 1.18e+08],
                    [ , , 2.73e+07, 1.81e+08, 1.06e+08, 5.78e+07, 7.34e+07, 6.06e+07, 7.25e+07],
                    [ 6.20e+07, 5.83e+07, 3.75e+07, 1.12e+08, 8.62e+07, 3.13e+07, 2.24e+07, 1.37e+07, 8.94e+06],
                    [ , , 3.29e+07, 1.17e+08, 1.38e+08, 4.76e+07, 3.21e+07, 2.98e+07, 4.55e+07],
                    [ 4.18229544e+07, , 3.91e+07, 1.37e+08, 1.31e+08, 3.97e+07, 2.67e+07, 2.44e+07, 1.14e+07],
                    [ , , , , , 68794896, 19296387, 3164670, ],
                    [ , , , , , 5.01e+07, 7.11e+07, 1.18e+08, ],
                    [ , , , , , 9.69e+07, 5.97e+07, 1.09e+08, ],
                    [ , , , , 1.08e+08, 3.92e+07, 3.57e+07, 2.48e+07, ],
                    [ , , , , , 15619785, 5526345, 1167711, ],
                    [ , , , , , 10047218, 1608324, 1991277, ],
                    [ , , , , , 44273425, 39745757, 33415682, ],
                    [ , , , , , , 29454650, 31173824, ]);
    ThomasLineChart('rating-linechart',
                    'Rating',
                    'Average Rating per Genre per Decade (Genres w/ over 80 Movies per Decade)',
                    [, , , , 6.6, 6.45, 6.3, 6.2, 6.1],
                    [, , , , , 6.5, 6.1, 6.2, ],
                    [, , , , 6.1, 6.2, 5.8, 5.6, 5.7],
                    [, , 6.6, 6.8, 6.5, 6.4, 6.3, 6.3, 6.2],
                    [, , 6.7, 6.8, 6.5, 6.3, 6.2, 6.2, 6.2],
                    [6.6, 6.9, 7., 6.9, 6.8, 6.6, 6.6, 6.5, 6.6],
                    [, , 6.8, 6.7, 6.45, 6.3, 6.2, 6.1, 6.15],
                    [6.8, , 6.7, 6.9, 6.6, 6.4, 6.4, 6.3, 6.3],
                    [, , , , , 6.6, 6.55, 6.3, ],
                    [, , , , , 6.6, 6.4, 6.4, ],
                    [, , , , , 6.8, 6., 6.1, ],
                    [, , , , 6.7, 6.5, 6.6, 6.45, ],
                    [, , , , , 6.4, 6.6, 6.4, ],
                    [, , , , , 6.85, 6.5, 6.5, ],
                    [, , , , , 6.6, 6.5, 6.4, ],
                    [, , , , , , 6.4, 6.3, ]);

    Heatmap('proportion-map', 1, 'Proportion of Each Genre per Country Industry');
    Heatmap('revenue-map', 2, 'Median (Log) Revenue per Genre per Country');
    Heatmap('rating-map', 3, 'Median Rating per Genre per Country');

    LineChart('ethnicity-distances',
    [1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972,
     1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982,
     1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992,
     1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002,
     2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013
      ],
    [0.000, 0.051, 0.054, 0.000, 0.008, 0.076, 0.061, 0.058, 0.069, 
     0.061, 0.005, 0.027, 0.029, 0.003, 0.013, 0.020, 0.006, 0.039, 
     0.068, 0.032, 0.051, 0.029, 0.024, 0.049, 0.034, 0.027, 0.031, 
     0.020, 0.026, 0.043, 0.075, 0.039, 0.036, 0.023, 0.037, 0.051, 
     0.035, 0.057, 0.061, 0.045, 0.053, 0.051, 0.050, 0.053, 0.055, 
     0.046, 0.049, 0.040, 0.032, 0.061, 0.015],
     'Mean Distance Between Ethnicities in Movies per Year');

    AliScatterPlot('scatter-distances');

    EnvelopPlot('revenue-vs-distance',
                [0.000, 0.874, 1.715, 1.957, 2.808, 3.413, 3.432, 3.657, 3.778, 3.911, 5.370],
                [1.3e+08, 1.8e+08, 4.2e+08, 8.4e+07, 1.1e+08, 3.9e+08, 1.4e+07, 1.2e+08, 1.6e+08, 2.1e+08, 3.3e+08],
                [1.2e+08, 1.5e+08, 2.3e+08, 4.9e+07, 6.1e+07, 2.4e+08, 6.9e+06, 9.2e+07, 1.1e+08, 1.3e+08, 1.3e+08],
                [1.1e+08, 1.2e+08, 5.1e+07, 1.5e+07, 6.5e+06, 8.9e+07, -1.4e+05, 5.9e+07, 6.9e+07, 6.3e+07, -7.3e+07],
                'Mean Movie Revenue per Ethnicity Distance',
                -1e8, 5e8);
    EnvelopPlot('rating-vs-distance',
                [0, 0.09, 0.17, 0.19, 0.28, 0.34, 0.34, 0.36, 0.37, 0.39, 0.53],
                [6.33, 6.35, 6.82, 6.59, 6.05, 7.09, 6.49, 6.26, 6.93, 6.14, 7.07],
                [6.29, 6.22, 6.16, 6.12, 5.55, 6.73, 6.20, 6.06, 6.52, 5.77, 6.62],
                [6.25, 6.09, 5.49, 5.65, 5.06, 6.37, 5.90, 5.86, 6.11, 5.39, 6.17],
                'Mean Movie Rating per Ethnicity Distance',
                0, 10);
};

document.addEventListener('DOMContentLoaded', function () {
    let scrollDown = document.querySelector('.scroll-down');

    scrollDown.addEventListener('click', function () {

        window.scroll({
            top: window.innerHeight,
            behavior: 'smooth'
        });

        arcs = null;
    });
});

function DoughnutChart(id, names, values, titlee) {
    const ctx = document.getElementById(id);
    const data = {

        labels : names,
        datasets: [{
          label: 'Film Count',
          data: values,
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(153, 102, 255)',
            'rgb(255, 159, 64)',
            'rgb(201, 203, 207)',
            'rgb(255, 77, 77)',
            'rgb(122, 102, 255)'
          ],
          hoverOffset: 30,
          borderWidth: 2,
          borderColor: 'rgba(255,255,255,0.8)'
      }]
    };
    const config = {
        type: 'doughnut',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '33%',
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: titlee,
                    color: 'black'
                  }
            },
            layout: {
                padding: {
                    top : 20,
                    bottom: 20 // Ajoutez de l'espace en bas du graphique

                }
            }
        }
    };

    new Chart(ctx, config);
}

function mapInteractive() {
    google.charts.load('current', {
        'packages':['geochart'],
      });
      google.charts.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable([
          ['Country', 'Number of Movies (natural logarithmic scale)'],
          ["United States", 20623],
          ["United Kingdom", 3352],
          ["India", 3298],
          ["France", 2295],
          ["Japan", 1504],
          ["Germany", 1430],
          ["Italy", 1344],
          ["Canada", 1157],
          ["South Korea", 695],
          ["Spain", 539],
          ["Australia", 532],
          ["Denmark", 474],
          ["Sweden", 442],
          ["Hong Kong", 437],
          ["Netherlands", 424],
          ["West Germany", 349],
          ["Argentina", 307],
          ["China", 241],
          ["Mexico", 210],
          ["Norway", 197],
          ["Poland", 181],
          ["Belgium", 165],
          ["Philippines", 159],
          ["Austria", 149],
          ["New Zealand", 144],
          ["Hungary", 144],
          ["Ireland", 142],
          ["Brazil", 136],
          ["Finland", 132],
          ["Switzerland", 132],
          ["Russia", 118],
          ["Czech Republic", 116],
          ["Turkey", 112],
          ["Pakistan", 112],
          ["South Africa", 84],
          ["Egypt", 48],
          ["Morocco", 23],
          ["Algeria", 20],
          ["Tunisia", 12],
          ["Burkina Faso", 7],
          ["Mali", 6],
          ["CD", 6],
          ["Kenya", 5],
          ["Senegal", 5],
          ["Cameroon", 5],
          ["Nigeria", 4],
          ["Libya", 2],
          ["Ethiopia", 2],
          ["Zambia", 2],
          ["Zimbabwe", 2],
          ["CG", 1],
          ["Guinea-Bissau", 1]
        ]);

        // Apply a logarithmic scale to the data
        for (var i = 0; i < data.getNumberOfRows(); i++) {
            var count = data.getValue(i, 1);
            data.setValue(i, 1, Math.log(count));
        }

        var options = {
          colorAxis: { colors: ['#ccffcc', '#b2fab4', '#99ff99', '#66ff66', '#4caf50', '#00cc00', '#00a74a', '#008000', '#006400', '#004d00'], minValue: 0, maxValue: Math.log(20623) },
          // values: [0, 100, 200, 300, 400],
          // legend: 'none',
          title: 'Number of Movies by Country',
          tooltip: { trigger: 'both' }
        };

        var chart = new google.visualization.GeoChart(document.getElementById('map'));

        chart.draw(data, options);
        // Créer une légende personnalisée
        var legend = document.getElementById('legend');
        var colors = ['#FFFFFF', '#ADD8E6', '#87CEEB', '#1E90FF', '#0000FF'];
        var labels = ['0-100', '101-200', '201-300', '301-400', '401+'];

        for (var i = 0; i < colors.length; i++) {
            var label = document.createElement('div');
            label.className = 'legend-label';
            label.style.backgroundColor = colors[i];
            label.appendChild(document.createTextNode(labels[i]));
            legend.appendChild(label);
        }

        
    }
}

function BenjiBarChart(id, numbers_male, numbers_female, diff, titlee, ) {
    const ctx = document.getElementById(id);

    new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Action', 'Adventure', 'Comedy', 'Crime Fiction', 'Drama', 'Family Film', 'Indie', 'Mystery', 'Romance Film', 'Thriller'],
      datasets: [{
        label: 'Average w/ Male Primary Role',
        data: numbers_male,
        borderWidth: 1,
        yAxisID: 'y1'
      },{
        label: 'Average w/ Female Primary Role',
        data: numbers_female,
        borderWidth: 1,
        yAxisID: 'y1'
      },{
        label: 'Difference Between Average Male and Female',
        data: diff,
        borderWidth: 1,
        yAxisID: 'y1'
      }]
    },
    options: {
      scales: {
        y1: {
            type: 'linear',
            position: 'left',
            beginAtZero: true,
        },
      },
      plugins: {
        legend: {
          display: true,
          position: 'top',
          labels: {
            color: 'black'
          }
        },
        title: {
          display: true,
          text: titlee,
          color: 'black'
        }
      }
    }
  });
}

function RevRatBarChart(id, revs, rats, titlee) {
    const ctx = document.getElementById(id);

    new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['< 1920', '1920s', '1930s', '1940s', '1950s', '1960s', '1970s', '1980s', '1990s', '2000s', '> 2010'],
      datasets: [{
        label: 'Average Revenue per Decade',
        data: revs,
        borderWidth: 1,
        yAxisID: 'y1'
      },{
        label: 'Average Rating per Decade',
        data: rats,
        borderWidth: 1,
        yAxisID: 'y1'
      }]
    },
    options: {
      scales: {
        y1: {
            type: 'linear',
            position: 'left',
            beginAtZero: true,
        },
      },
      plugins: {
        legend: {
          display: true,
          position: 'top', 
          labels: {
            color: 'black' 
          }
        },
        title: {
          display: true,
          text: titlee, 
          color: 'black'
        }
      }
    }
  });
}

function BarChart(id, names, values, titlee) {
    const ctx = document.getElementById(id);

    new Chart(ctx, {
    type: 'bar',
    data: {
      labels: names,
      datasets: [{
        label: 'Average Revenue per Decade',
        data: values,
        borderWidth: 1,
        yAxisID: 'y1'
      }]
    },
    options: {
      scales: {
        y1: {
            type: 'linear',
            position: 'left',
            beginAtZero: true,
        },
      },
      plugins: {
        legend: {
          display: true,
          position: 'top',
          labels: {
            color: 'black' 
          }
        },
        title: {
          display: true,
          text: titlee, 
          color: 'black' 
        }
      }
    }
  });
}

function AliScatterPlot(id) {
  // Sample data
  var data = {
    datasets: [{
      label: 'Central and South Americans',
      data: [
        { x: 0.23461345903514902, y: 0.2941581211602094},
      ],
      backgroundColor: 'rgba(255, 0, 0, 0.8)', // Marker color
      pointRadius: 8 // Marker size
    },{
      label: 'Pacific Islander',
      data: [
        { x: -0.11748537253194527, y: -0.3125385749100532},
      ],
      backgroundColor: 'rgba(0, 255, 0, 0.8)',
      pointRadius: 8
    },{
      label: 'East Asian',
      data: [
        { x: 0.40450780587247187, y: 0.02392536279760559},
      ],
      backgroundColor: 'rgba(0, 0, 255, 0.8)',
      pointRadius: 8
    },{
      label: 'South Asian',
      data: [
        { x: -0.10173790602910263, y: -0.1553055671515536},
      ],
      backgroundColor: 'rgba(255, 255, 0, 0.8)',
      pointRadius: 8
    },{
      label: 'White',
      data: [
        { x: 0.01403690891391513, y: 0.0024412111450944998},
      ],
      backgroundColor: 'rgba(255, 0, 255, 0.8)',
      pointRadius: 8
    },{
      label: 'Arab/Middle East',
      data: [
        { x: -0.3569046657598947, y: 0.07417277669266636},
      ],
      backgroundColor: 'rgba(0, 255, 255, 0.8)',
      pointRadius: 8
    },{
      label: 'American Indian/Alaska Native',
      data: [
        { x: -0.15708643483356666, y: 0.013395406434351642},
      ],
      backgroundColor: 'rgba(128, 0, 128, 0.8)',
      pointRadius: 8
    },{
      label: 'Black/African American',
      data: [
        { x: 0.08005620533294998, y: 0.05975126383168333},
      ],
      backgroundColor: 'rgba(255, 165, 0, 0.8)',
      pointRadius: 8
    }]
  };

  // Chart configuration
  var config = {
    type: 'scatter',
    data: data,
    options: {
      scales: {
        x: { min: -0.4, max: 0.5 }, // Adjust x-axis range
        y: { min: -0.4, max: 0.4 }, // Adjust y-axis range
      },
    }
  };

  const ctx = document.getElementById(id).getContext('2d');

  chart = new Chart(ctx, config);
}

function EnvelopPlot(id, names, up, mean, down, titlee, min, max) {
  var labels = names;
  var dataset1 = up;
  var dataset2 = mean;
  var dataset3 = down;

  // Create Chart
  var ctx = document.getElementById(id).getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'CI Upper Bound',
          data: dataset1,
          borderColor: 'rgba(50, 150, 50, 1)',
          fill: +2,
        },
        {
          label: 'Mean Value',
          data: dataset2,
          borderColor: 'rgba(0, 100, 0, 1)',
          fill: +1,
        },
        {
          label: 'CI Lower Bound',
          data: dataset3,
          borderColor: 'rgba(50, 150, 50, 1)',
          backgroundColor: 'rgba(144, 238, 144, 0.5)', // Fill color
          fill: -1, // Fill the area
        },
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        title: {
          display: true, // Disable the default title
          text: titlee,
        },
      },
      scales: {
        x: {
          type: 'category',
          labels: labels,
        },
        y: {
          min: min, // Set the minimum y-axis value
          max: max, // Set the maximum y-axis value
        }
      },
    },
  });
}

function LineChart(id, names, values, titlee) {
  const ctx = document.getElementById(id).getContext('2d');

  const data = {
      labels: names,
      datasets: [{
          label: 'Mean Distance',
          borderColor: 'rgb(75, 192, 192)',
          data: values,
          fill: false
      }]
  };

  new Chart(ctx, {
      type: 'line',
      data: data,
      options: {
          responsive: true,
          maintainAspectRatio: true,
          scales: {
              x: {
                  title: {
                      display: true,
                      text: 'Year'
                  }
              },
              y: {
                  title: {
                      display: true,
                      text: 'Mean Distance'
                  }
              }
          },

          plugins: {
              title: {
                  display: true,
                  text: titlee,
                  color: 'black'
              }
          }
      }
  });
}

function ThomasLineChart(id, output, titlee, g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13, g14, g15, g16) {
    const ctx = document.getElementById(id).getContext('2d');

    const data = {
        labels: ['1930s', '1940s', '1950s', '1960s', '1970s', '1980s', '1990s', '2000s', '> 2010'],
        datasets: [{
            label: 'Thriller',
            borderColor: 'rgb(75, 192, 192)',
            data: g1,
            fill: false
        },{
            label: 'Science Fiction',
            borderColor: 'rgb(255, 99, 132)',
            data: g2,
            fill: false
        },{
            label: 'Horror',
            borderColor: 'rgb(255, 205, 86)',
            data: g3,
            fill: false
        },{
            label: 'Adventure',
            borderColor: 'rgb(54, 162, 235)',
            data: g4,
            fill: false
        },{
            label: 'Action',
            borderColor: 'rgb(255, 159, 64)',
            data: g5,
            fill: false
        },{
            label: 'Drama',
            borderColor: 'rgb(153, 102, 255)',
            data: g6,
            fill: false
        },{
            label: 'Comedy',
            borderColor: 'rgb(255, 87, 34)',
            data: g7,
            fill: false
        },{
            label: 'Romance Film',
            borderColor: 'rgb(201, 203, 207)',
            data: g8,
            fill: false
        },{
            label: 'Musical',
            borderColor: 'rgb(255, 0, 0)',
            data: g9,
            fill: false
        },{
            label: 'Fantasy',
            borderColor: 'rgb(0, 255, 0)',
            data: g10,
            fill: false
        },{
            label: 'Family Film',
            borderColor: 'rgb(0, 0, 255)',
            data: g11,
            fill: false
        },{
            label: 'Crime Fiction',
            borderColor: 'rgb(128, 0, 128)',
            data: g12,
            fill: false
        },{
            label: 'Indie',
            borderColor: 'rgb(255, 140, 0)',
            data: g13,
            fill: false
        },{
            label: 'World Cinema',
            borderColor: 'rgb(0, 128, 128)',
            data: g14,
            fill: false
        },{
            label: 'Mystery',
            borderColor: 'rgb(128, 128, 0)',
            data: g15,
            fill: false
        },{
            label: 'Crime Thriller',
            borderColor: 'rgb(0, 0, 128)',
            data: g16,
            fill: false
        }]
    };

    new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Decade'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: output
                    }
                }
            },

            plugins: {
                title: {
                    display: true,
                    text: titlee,
                    color: 'black'
                }
            }
        }
    });
}

function getData1() {
  return [{x: "Action", y: "AUS", heat: 8.235294117647058},
          {x: "Adventure", y: "AUS", heat: 10.420168067226891},
          {x: "Comedy", y: "AUS", heat: 10.420168067226891},
          {x: "Crime Fiction", y: "AUS", heat: 6.5546218487394965},
          {x: "Crime Thriller", y: "AUS", heat: 1.8487394957983194},
          {x: "Drama", y: "AUS", heat: 20.168067226890756},
          {x: "Family Film", y: "AUS", heat: 4.033613445378151},
          {x: "Fantasy", y: "AUS", heat: 3.865546218487395},
          {x: "Horror", y: "AUS", heat: 3.865546218487395},
          {x: "Indie", y: "AUS", heat: 4.705882352941177},
          {x: "Musical", y: "AUS", heat: 1.5126050420168067},
          {x: "Mystery", y: "AUS", heat: 3.697478991596639},
          {x: "Romance Film", y: "AUS", heat: 7.394957983193278},
          {x: "Science Fiction", y: "AUS", heat: 3.5294117647058822},
          {x: "Thriller", y: "AUS", heat: 9.747899159663866},
          {x: "Action", y: "CAN", heat: 6.607929515418502},
          {x: "Adventure", y: "CAN", heat: 6.607929515418502},
          {x: "Comedy", y: "CAN", heat: 11.527165932452275},
          {x: "Crime Fiction", y: "CAN", heat: 5.4331864904552125},
          {x: "Crime Thriller", y: "CAN", heat: 3.15712187958884},
          {x: "Drama", y: "CAN", heat: 18.355359765051396},
          {x: "Family Film", y: "CAN", heat: 4.038179148311307},
          {x: "Fantasy", y: "CAN", heat: 3.7444933920704844},
          {x: "Horror", y: "CAN", heat: 6.975036710719531},
          {x: "Indie", y: "CAN", heat: 6.020558002936858},
          {x: "Musical", y: "CAN", heat: 0.5873715124816447},
          {x: "Mystery", y: "CAN", heat: 4.1116005873715125},
          {x: "Romance Film", y: "CAN", heat: 6.387665198237885},
          {x: "Science Fiction", y: "CAN", heat: 3.9647577092511015},
          {x: "Thriller", y: "CAN", heat: 12.481644640234949},
          {x: "Action", y: "ESP", heat: 4.895104895104895},
          {x: "Adventure", y: "ESP", heat: 6.526806526806526},
          {x: "Comedy", y: "ESP", heat: 9.090909090909092},
          {x: "Crime Fiction", y: "ESP", heat: 7.226107226107226},
          {x: "Crime Thriller", y: "ESP", heat: 2.797202797202797},
          {x: "Drama", y: "ESP", heat: 22.843822843822846},
          {x: "Family Film", y: "ESP", heat: 1.1655011655011656},
          {x: "Fantasy", y: "ESP", heat: 2.331002331002331},
          {x: "Horror", y: "ESP", heat: 6.0606060606060606},
          {x: "Indie", y: "ESP", heat: 6.0606060606060606},
          {x: "Musical", y: "ESP", heat: 0.9324009324009324},
          {x: "Mystery", y: "ESP", heat: 6.0606060606060606},
          {x: "Romance Film", y: "ESP", heat: 10.48951048951049},
          {x: "Science Fiction", y: "ESP", heat: 2.564102564102564},
          {x: "Thriller", y: "ESP", heat: 10.955710955710956},
          {x: "Action", y: "FRA", heat: 6.315211422295441},
          {x: "Adventure", y: "FRA", heat: 6.864360241625481},
          {x: "Comedy", y: "FRA", heat: 10.873146622734762},
          {x: "Crime Fiction", y: "FRA", heat: 7.0840197693574956},
          {x: "Crime Thriller", y: "FRA", heat: 3.459637561779242},
          {x: "Drama", y: "FRA", heat: 26.578802855573862},
          {x: "Family Film", y: "FRA", heat: 1.9769357495881383},
          {x: "Fantasy", y: "FRA", heat: 2.800658978583196},
          {x: "Horror", y: "FRA", heat: 2.361339923119165},
          {x: "Indie", y: "FRA", heat: 4.393190554640308},
          {x: "Musical", y: "FRA", heat: 0.8237232289950577},
          {x: "Mystery", y: "FRA", heat: 3.789126853377265},
          {x: "Romance Film", y: "FRA", heat: 10.653487095002747},
          {x: "Science Fiction", y: "FRA", heat: 2.416254805052169},
          {x: "Thriller", y: "FRA", heat: 9.610104338275672},
          {x: "Action", y: "GER", heat: 8.241758241758241},
          {x: "Adventure", y: "GER", heat: 8.406593406593407},
          {x: "Comedy", y: "GER", heat: 9.12087912087912},
          {x: "Crime Fiction", y: "GER", heat: 7.032967032967033},
          {x: "Crime Thriller", y: "GER", heat: 4.175824175824175},
          {x: "Drama", y: "GER", heat: 21.043956043956044},
          {x: "Family Film", y: "GER", heat: 2.7472527472527473}, 
          {x: "Fantasy", y: "GER", heat: 3.791208791208791}, 
          {x: "Horror", y: "GER", heat: 3.8461538461538463}, 
          {x: "Indie", y: "GER", heat: 4.175824175824175}, 
          {x: "Musical", y: "GER", heat: 1.208791208791209}, 
          {x: "Mystery", y: "GER", heat: 4.065934065934066}, 
          {x: "Romance Film", y: "GER", heat: 8.021978021978022}, 
          {x: "Science Fiction", y: "GER", heat: 2.6373626373626373}, 
          {x: "Thriller", y: "GER", heat: 11.483516483516484}, 
          {x: "Action", y: "HKG", heat: 22.5130890052356}, 
          {x: "Adventure", y: "HKG", heat: 16.49214659685864}, 
          {x: "Comedy", y: "HKG", heat: 6.806282722513089}, 
          {x: "Crime Fiction", y: "HKG", heat: 5.49738219895288}, 
          {x: "Crime Thriller", y: "HKG", heat: 1.3089005235602094}, 
          {x: "Drama", y: "HKG", heat: 17.277486910994764}, 
          {x: "Family Film", y: "HKG", heat: 0.7853403141361256}, 
          {x: "Fantasy", y: "HKG", heat: 4.450261780104712}, 
          {x: "Horror", y: "HKG", heat: 2.356020942408377}, 
          {x: "Indie", y: "HKG", heat: 0.5235602094240838}, 
          {x: "Musical", y: "HKG", heat: 0.7853403141361256}, 
          {x: "Mystery", y: "HKG", heat: 1.832460732984293}, 
          {x: "Romance Film", y: "HKG", heat: 7.591623036649215}, 
          {x: "Science Fiction", y: "HKG", heat: 2.356020942408377}, 
          {x: "Thriller", y: "HKG", heat: 9.424083769633508}, 
          {x: "Action", y: "IND", heat: 11.709211986681465}, 
          {x: "Adventure", y: "IND", heat: 4.02330743618202}, 
          {x: "Comedy", y: "IND", heat: 10.3496115427303}, 
          {x: "Crime Fiction", y: "IND", heat: 4.16204217536071}, 
          {x: "Crime Thriller", y: "IND", heat: 0.6381798002219756},
          {x: "Drama", y: "IND", heat: 28.02441731409545}, 
          {x: "Family Film", y: "IND", heat: 2.2475027746947833}, 
          {x: "Fantasy", y: "IND", heat: 0.6659267480577136}, 
          {x: "Horror", y: "IND", heat: 1.4150943396226416}, 
          {x: "Indie", y: "IND", heat: 0.3607103218645949}, 
          {x: "Musical", y: "IND", heat: 11.958934517203108}, 
          {x: "Mystery", y: "IND", heat: 1.3041065482796892}, 
          {x: "Romance Film", y: "IND", heat: 15.482796892341844}, 
          {x: "Science Fiction", y: "IND", heat: 0.41620421753607106}, 
          {x: "Thriller", y: "IND", heat: 7.241953385127636}, 
          {x: "Action", y: "ITA", heat: 7.177033492822966}, 
          {x: "Adventure", y: "ITA", heat: 7.177033492822966}, 
          {x: "Comedy", y: "ITA", heat: 10.047846889952153}, 
          {x: "Crime Fiction", y: "ITA", heat: 5.901116427432217}, 
          {x: "Crime Thriller", y: "ITA", heat: 2.3923444976076556}, 
          {x: "Drama", y: "ITA", heat: 27.591706539074963}, 
          {x: "Family Film", y: "ITA", heat: 1.9138755980861244}, 
          {x: "Fantasy", y: "ITA", heat: 3.9872408293460926}, 
          {x: "Horror", y: "ITA", heat: 3.508771929824561}, 
          {x: "Indie", y: "ITA", heat: 3.508771929824561}, 
          {x: "Musical", y: "ITA", heat: 0.7974481658692184},
          {x: "Mystery", y: "ITA", heat: 3.827751196172249}, 
          {x: "Romance Film", y: "ITA", heat: 10.685805422647528}, 
          {x: "Science Fiction", y: "ITA", heat: 2.711323763955343}, 
          {x: "Thriller", y: "ITA", heat: 8.771929824561402}, 
          {x: "Action", y: "JPN", heat: 13.316261203585148}, 
          {x: "Adventure", y: "JPN", heat: 11.395646606914212}, 
          {x: "Comedy", y: "JPN", heat: 5.633802816901409}, 
          {x: "Crime Fiction", y: "JPN", heat: 3.4571062740076828}, 
          {x: "Crime Thriller", y: "JPN", heat: 1.5364916773367476}, 
          {x: "Drama", y: "JPN", heat: 17.02944942381562}, 
          {x: "Family Film", y: "JPN", heat: 4.097311139564661}, 
          {x: "Fantasy", y: "JPN", heat: 8.962868117797695}, 
          {x: "Horror", y: "JPN", heat: 5.505761843790013}, 
          {x: "Indie", y: "JPN", heat: 2.0486555697823303}, 
          {x: "Musical", y: "JPN", heat: 0.7682458386683738}, 
          {x: "Mystery", y: "JPN", heat: 2.6888604353393086}, 
          {x: "Romance Film", y: "JPN", heat: 5.121638924455826}, 
          {x: "Science Fiction", y: "JPN", heat: 10.627400768245838}, 
          {x: "Thriller", y: "JPN", heat: 7.810499359795134}, 
          {x: "Action", y: "KOR", heat: 8.557457212713937}, 
          {x: "Adventure", y: "KOR", heat: 3.9119804400977993}, 
          {x: "Comedy", y: "KOR", heat: 13.93643031784841}, 
          {x: "Crime Fiction", y: "KOR", heat: 5.623471882640587}, 
          {x: "Crime Thriller", y: "KOR", heat: 1.7114914425427872},
          {x: "Drama", y: "KOR", heat: 30.073349633251834}, 
          {x: "Family Film", y: "KOR", heat: 1.2224938875305624}, 
          {x: "Fantasy", y: "KOR", heat: 1.7114914425427872}, 
          {x: "Horror", y: "KOR", heat: 4.88997555012225}, 
          {x: "Indie", y: "KOR", heat: 0.24449877750611246}, 
          {x: "Musical", y: "KOR", heat: 0.4889975550122249}, 
          {x: "Mystery", y: "KOR", heat: 2.93398533007335}, 
          {x: "Romance Film", y: "KOR", heat: 16.625916870415647},
          {x: "Science Fiction", y: "KOR", heat: 1.466992665036675}, 
          {x: "Thriller", y: "KOR", heat: 6.601466992665037}, 
          {x: "Action", y: "UK", heat: 7.059447983014862}, 
          {x: "Adventure", y: "UK", heat: 8.572186836518046}, 
          {x: "Comedy", y: "UK", heat: 10.854564755838641}, 
          {x: "Crime Fiction", y: "UK", heat: 5.812101910828026}, 
          {x: "Crime Thriller", y: "UK", heat: 2.91932059447983}, 
          {x: "Drama", y: "UK", heat: 21.762208067940552}, 
          {x: "Family Film", y: "UK", heat: 3.1847133757961785}, 
          {x: "Fantasy", y: "UK", heat: 3.6889596602972397}, 
          {x: "Horror", y: "UK", heat: 3.476645435244161}, 
          {x: "Indie", y: "UK", heat: 5.387473460721869}, 
          {x: "Musical", y: "UK", heat: 1.8046709129511678}, 
          {x: "Mystery", y: "UK", heat: 3.4501061571125264}, 
          {x: "Romance Film", y: "UK", heat: 9.421443736730362}, 
          {x: "Science Fiction", y: "UK", heat: 2.521231422505308}, 
          {x: "Thriller", y: "UK", heat: 10.084925690021231}, 
          {x: "Action", y: "USA", heat: 8.257696266492}, 
          {x: "Adventure", y: "USA", heat: 8.945447740245157}, 
          {x: "Comedy", y: "USA", heat: 14.059137269579864}, 
          {x: "Crime Fiction", y: "USA", heat: 5.72190511836811}, 
          {x: "Crime Thriller", y: "USA", heat: 2.779077383737251}, 
          {x: "Drama", y: "USA", heat: 18.171610367736502}, 
          {x: "Family Film", y: "USA", heat: 4.496116777393095}, 
          {x: "Fantasy", y: "USA", heat: 3.312435669505006}, 
          {x: "Horror", y: "USA", heat: 3.79900814073173}, 
          {x: "Indie", y: "USA", heat: 4.556938336296435}, 
          {x: "Musical", y: "USA", heat: 1.7404323009263594}, 
          {x: "Mystery", y: "USA", heat: 3.1907925516983253},
          {x: "Romance Film", y: "USA", heat: 8.398053710115093}, 
          {x: "Science Fiction", y: "USA", heat: 3.246935529147563}, 
          {x: "Thriller", y: "USA", heat: 9.32441283802751}];
}

function getData2() {
  return [{x: "Action", y: "AUS", heat: 8.106183079011052}, 
  {x: "Adventure", y: "AUS", heat: 8.135230518817966}, 
  {x: "Comedy", y: "AUS", heat: 7.844437293253042}, 
  {x: "Crime Fiction", y: "AUS", heat: 7.634556630900241}, 
  {x: "Crime Thriller", y: "AUS", heat: 7.298634204058014}, 
  {x: "Drama", y: "AUS", heat: 7.2917342451001215}, 
  {x: "Family Film", y: "AUS", heat: 8.134434634893081}, 
  {x: "Fantasy", y: "AUS", heat: 8.070535040098163}, 
  {x: "Horror", y: "AUS", heat: 7.815189033933889}, 
  {x: "Indie", y: "AUS", heat: 6.204187918308317}, 
  {x: "Musical", y: "AUS", heat: 6.5912418054200845}, 
  {x: "Mystery", y: "AUS", heat: 7.850858989495317}, 
  {x: "Romance Film", y: "AUS", heat: 7.551059523460541}, 
  {x: "Science Fiction", y: "AUS", heat: 7.754900250556932}, 
  {x: "Thriller", y: "AUS", heat: 7.796243407791214}, 
  {x: "Action", y: "CAN", heat: 7.807815603152928}, 
  {x: "Adventure", y: "CAN", heat: 7.71635117965858}, 
  {x: "Comedy", y: "CAN", heat: 7.563087866401653}, 
  {x: "Crime Fiction", y: "CAN", heat: 7.448617644907781}, 
  {x: "Crime Thriller", y: "CAN", heat: 7.386565151609307}, 
  {x: "Drama", y: "CAN", heat: 7.193661991914665}, 
  {x: "Family Film", y: "CAN", heat: 7.876737725608501}, 
  {x: "Fantasy", y: "CAN", heat: 7.793220828140038}, 
  {x: "Horror", y: "CAN", heat: 7.714141592364483}, 
  {x: "Indie", y: "CAN", heat: 6.245417990763805}, 
  {x: "Musical", y: "CAN", heat: 7.1546569307652135}, 
  {x: "Mystery", y: "CAN", heat: 7.624690696221979}, 
  {x: "Romance Film", y: "CAN", heat: 7.217337733788734}, 
  {x: "Science Fiction", y: "CAN", heat: 7.845626665024553}, 
  {x: "Thriller", y: "CAN", heat: 7.6544154418501895}, 
  {x: "Action", y: "ESP", heat: 7.176111662749547}, 
  {x: "Adventure", y: "ESP", heat: 7.235808601601332}, 
  {x: "Comedy", y: "ESP", heat: 7.085063274202733}, 
  {x: "Crime Fiction", y: "ESP", heat: 6.891110980408604}, 
  {x: "Crime Thriller", y: "ESP", heat: 6.179482756067376}, 
  {x: "Drama", y: "ESP", heat: 6.913807086478551}, 
  {x: "Family Film", y: "ESP", heat: 7.968713487498509}, 
  {x: "Fantasy", y: "ESP", heat: 7.220535195703635}, 
  {x: "Horror", y: "ESP", heat: 7.08425648500879}, 
  {x: "Indie", y: "ESP", heat: 6.555926652753834}, 
  {x: "Musical", y: "ESP", heat: 0}, 
  {x: "Mystery", y: "ESP", heat: 7.086471172013274}, 
  {x: "Romance Film", y: "ESP", heat: 7.163971580980378}, 
  {x: "Science Fiction", y: "ESP", heat: 8.10544641949726}, 
  {x: "Thriller", y: "ESP", heat: 7.072061081628355}, 
  {x: "Action", y: "FRA", heat: 7.5528413327530215}, 
  {x: "Adventure", y: "FRA", heat: 7.578127729890318}, 
  {x: "Comedy", y: "FRA", heat: 7.135822723072244}, 
  {x: "Crime Fiction", y: "FRA", heat: 7.043333446131829}, 
  {x: "Crime Thriller", y: "FRA", heat: 7.419874478974078}, 
  {x: "Drama", y: "FRA", heat: 6.943663228283305}, 
  {x: "Family Film", y: "FRA", heat: 7.619024469297561}, 
  {x: "Fantasy", y: "FRA", heat: 6.982745551653394}, 
  {x: "Horror", y: "FRA", heat: 7.563918666511062}, 
  {x: "Indie", y: "FRA", heat: 6.519396224912093}, 
  {x: "Musical", y: "FRA", heat: 7.057328646914345}, 
  {x: "Mystery", y: "FRA", heat: 7.198418746983522}, 
  {x: "Romance Film", y: "FRA", heat: 6.943663228283305}, 
  {x: "Science Fiction", y: "FRA", heat: 7.414636731613787}, 
  {x: "Thriller", y: "FRA", heat: 7.537261890624904}, 
  {x: "Action", y: "GER", heat: 8.073787811808078}, 
  {x: "Adventure", y: "GER", heat: 7.979197523993771}, 
  {x: "Comedy", y: "GER", heat: 7.66747919453594}, 
  {x: "Crime Fiction", y: "GER", heat: 7.730020366818789}, 
  {x: "Crime Thriller", y: "GER", heat: 7.748784260210147}, 
  {x: "Drama", y: "GER", heat: 7.3192822092770164}, 
  {x: "Family Film", y: "GER", heat: 7.932110059623919}, 
  {x: "Fantasy", y: "GER", heat: 7.742481027827688}, 
  {x: "Horror", y: "GER", heat: 7.753907935252072}, 
  {x: "Indie", y: "GER", heat: 6.779684397890505}, 
  {x: "Musical", y: "GER", heat: 7.46096091653226}, 
  {x: "Mystery", y: "GER", heat: 7.773427837237721}, 
  {x: "Romance Film", y: "GER", heat: 7.444245148319829}, 
  {x: "Science Fiction", y: "GER", heat: 7.880142567698128}, 
  {x: "Thriller", y: "GER", heat: 7.847407407194693}, 
  {x: "Action", y: "HKG", heat: 7.473523812355404},
  {x: "Adventure", y: "HKG", heat: 7.582250503743077}, 
  {x: "Comedy", y: "HKG", heat: 7.77378797374509}, 
  {x: "Crime Fiction", y: "HKG", heat: 6.02395261321436}, 
  {x: "Crime Thriller", y: "HKG", heat: 8.002176133079788}, 
  {x: "Drama", y: "HKG", heat: 7.090752015272193}, 
  {x: "Family Film", y: "HKG", heat: 0}, 
  {x: "Fantasy", y: "HKG", heat: 7.77378797374509}, 
  {x: "Horror", y: "HKG", heat: 5.545482534016679}, 
  {x: "Indie", y: "HKG", heat: 0}, 
  {x: "Musical", y: "HKG", heat: 0}, 
  {x: "Mystery", y: "HKG", heat: 5.299736341065237}, 
  {x: "Romance Film", y: "HKG", heat: 7.232628760108266}, 
  {x: "Science Fiction", y: "HKG", heat: 7.779223531348516}, 
  {x: "Thriller", y: "HKG", heat: 7.530660600243031}, 
  {x: "Action", y: "IND", heat: 6.096979241669553}, 
  {x: "Adventure", y: "IND", heat: 5.84975754237436}, 
  {x: "Comedy", y: "IND", heat: 6.059630573377065}, 
  {x: "Crime Fiction", y: "IND", heat: 6.181707989116647}, 
  {x: "Crime Thriller", y: "IND", heat: 5.742083644902524}, 
  {x: "Drama", y: "IND", heat: 6.059630573377065}, 
  {x: "Family Film", y: "IND", heat: 6.13858614596257}, 
  {x: "Fantasy", y: "IND", heat: 6.666982689930501}, 
  {x: "Horror", y: "IND", heat: 5.784103418475905}, 
  {x: "Indie", y: "IND", heat: 6.189240608688358}, 
  {x: "Musical", y: "IND", heat: 6.080238347415174}, 
  {x: "Mystery", y: "IND", heat: 6.778905479129243}, 
  {x: "Romance Film", y: "IND", heat: 6.067264880281954}, 
  {x: "Science Fiction", y: "IND", heat: 7.6616979147675455}, 
  {x: "Thriller", y: "IND", heat: 6.339842305930703}, 
  {x: "Action", y: "ITA", heat: 7.369652723163947}, 
  {x: "Adventure", y: "ITA", heat: 7.379026349238765}, 
  {x: "Comedy", y: "ITA", heat: 6.8748230597168405}, 
  {x: "Crime Fiction", y: "ITA", heat: 6.771986662991465}, 
  {x: "Crime Thriller", y: "ITA", heat: 6.631835572084635}, 
  {x: "Drama", y: "ITA", heat: 6.869761994632524}, 
  {x: "Family Film", y: "ITA", heat: 7.192722874716625}, 
  {x: "Fantasy", y: "ITA", heat: 7.0471078124106254}, 
  {x: "Horror", y: "ITA", heat: 7.3359200976035295}, 
  {x: "Indie", y: "ITA", heat: 6.5656278886442045}, 
  {x: "Musical", y: "ITA", heat: 7.706785435682671}, 
  {x: "Mystery", y: "ITA", heat: 6.950868473477944}, 
  {x: "Romance Film", y: "ITA", heat: 7.032354123992167},
  {x: "Science Fiction", y: "ITA", heat: 7.338362266065147}, 
  {x: "Thriller", y: "ITA", heat: 6.786115954613153}, 
  {x: "Action", y: "JPN", heat: 7.4258742770326895}, 
  {x: "Adventure", y: "JPN", heat: 7.433364957631084}, 
  {x: "Comedy", y: "JPN", heat: 7.21147412110182}, 
  {x: "Crime Fiction", y: "JPN", heat: 7.216905689099414}, 
  {x: "Crime Thriller", y: "JPN", heat: 7.4302967341624555}, 
  {x: "Drama", y: "JPN", heat: 6.971982955572875}, 
  {x: "Family Film", y: "JPN", heat: 7.477991832343623}, 
  {x: "Fantasy", y: "JPN", heat: 7.269305236544757}, 
  {x: "Horror", y: "JPN", heat: 7.8091425985975205}, 
  {x: "Indie", y: "JPN", heat: 6.5260637472747165}, 
  {x: "Musical", y: "JPN", heat: 6.878975863472358}, 
  {x: "Mystery", y: "JPN", heat: 6.71187781876057}, 
  {x: "Romance Film", y: "JPN", heat: 6.34938737537844}, 
  {x: "Science Fiction", y: "JPN", heat: 7.5992460204899865}, 
  {x: "Thriller", y: "JPN", heat: 7.5523786037497835}, 
  {x: "Action", y: "KOR", heat: 7.188004883897678}, 
  {x: "Adventure", y: "KOR", heat: 7.159392855305793}, 
  {x: "Comedy", y: "KOR", heat: 7.190105051570336}, 
  {x: "Crime Fiction", y: "KOR", heat: 7.185894510831781}, 
  {x: "Crime Thriller", y: "KOR", heat: 7.185894510831781}, 
  {x: "Drama", y: "KOR", heat: 6.868428671828625}, 
  {x: "Family Film", y: "KOR", heat: 6.402121278917145}, 
  {x: "Fantasy", y: "KOR", heat: 7.188191226263134}, 
  {x: "Horror", y: "KOR", heat: 6.849447033673964}, 
  {x: "Indie", y: "KOR", heat: 0}, 
  {x: "Musical", y: "KOR", heat: 0}, 
  {x: "Mystery", y: "KOR", heat: 6.8226346263674404}, 
  {x: "Romance Film", y: "KOR", heat: 6.961843057594388}, 
  {x: "Science Fiction", y: "KOR", heat: 7.737231678128928}, 
  {x: "Thriller", y: "KOR", heat: 7.275801799005064}, 
  {x: "Action", y: "UK", heat: 7.99127540425106},
  {x: "Adventure", y: "UK", heat: 7.938811002196837}, 
  {x: "Comedy", y: "UK", heat: 7.324787422930011}, 
  {x: "Crime Fiction", y: "UK", heat: 7.337241993088899}, 
  {x: "Crime Thriller", y: "UK", heat: 7.386860401613726}, 
  {x: "Drama", y: "UK", heat: 7.196178673596961}, 
  {x: "Family Film", y: "UK", heat: 7.966268779476013}, 
  {x: "Fantasy", y: "UK", heat: 7.686092535550616}, 
  {x: "Horror", y: "UK", heat: 7.504671246161175}, 
  {x: "Indie", y: "UK", heat: 6.5840463339314805}, 
  {x: "Musical", y: "UK", heat: 7.45485640959709}, 
  {x: "Mystery", y: "UK", heat: 7.5242567228076425}, 
  {x: "Romance Film", y: "UK", heat: 7.234076970658934}, 
  {x: "Science Fiction", y: "UK", heat: 7.953242596309812}, 
  {x: "Thriller", y: "UK", heat: 7.650624544668724}, 
  {x: "Action", y: "USA", heat: 7.935718962643577}, 
  {x: "Adventure", y: "USA", heat: 7.953814612990706}, 
  {x: "Comedy", y: "USA", heat: 7.66747919453594}, 
  {x: "Crime Fiction", y: "USA", heat: 7.646391136265967}, 
  {x: "Crime Thriller", y: "USA", heat: 7.569034785941174}, 
  {x: "Drama", y: "USA", heat: 7.542108165769368}, 
  {x: "Family Film", y: "USA", heat: 8.015362166876866}, 
  {x: "Fantasy", y: "USA", heat: 8.061666680275383}, 
  {x: "Horror", y: "USA", heat: 7.712647698181512}, 
  {x: "Indie", y: "USA", heat: 6.623374563335867}, 
  {x: "Musical", y: "USA", heat: 7.8047798711588205}, 
  {x: "Mystery", y: "USA", heat: 7.72579442998758}, 
  {x: "Romance Film", y: "USA", heat: 7.6651441850570405}, 
  {x: "Science Fiction", y: "USA", heat: 7.940059799052988}, 
  {x: "Thriller", y: "USA", heat: 7.770236527135933}];
}

function getData3() {
  return [{x: "Action", y: "AUS", heat: 5.9}, 
          {x: "Adventure", y: "AUS", heat: 6.1}, 
          {x: "Comedy", y: "AUS", heat: 6.0}, 
          {x: "Crime Fiction", y: "AUS", heat: 6.35}, 
          {x: "Crime Thriller", y: "AUS", heat: 6.3}, 
          {x: "Drama", y: "AUS", heat: 6.5}, 
          {x: "Family Film", y: "AUS", heat: 6.0}, 
          {x: "Fantasy", y: "AUS", heat: 6.0}, 
          {x: "Horror", y: "AUS", heat: 5.8}, 
          {x: "Indie", y: "AUS", heat: 6.8}, 
          {x: "Musical", y: "AUS", heat: 6.6}, 
          {x: "Mystery", y: "AUS", heat: 6.1}, 
          {x: "Romance Film", y: "AUS", heat: 6.4}, 
          {x: "Science Fiction", y: "AUS", heat: 6.050000000000001}, 
          {x: "Thriller", y: "AUS", heat: 6.2}, 
          {x: "Action", y: "CAN", heat: 5.9}, 
          {x: "Adventure", y: "CAN", heat: 5.8}, 
          {x: "Comedy", y: "CAN", heat: 5.9}, 
          {x: "Crime Fiction", y: "CAN", heat: 6.1}, 
          {x: "Crime Thriller", y: "CAN", heat: 6.3}, 
          {x: "Drama", y: "CAN", heat: 6.45}, 
          {x: "Family Film", y: "CAN", heat: 5.7}, 
          {x: "Fantasy", y: "CAN", heat: 6.0}, 
          {x: "Horror", y: "CAN", heat: 5.75}, 
          {x: "Indie", y: "CAN", heat: 6.4}, 
          {x: "Musical", y: "CAN", heat: 5.9}, 
          {x: "Mystery", y: "CAN", heat: 6.5}, 
          {x: "Romance Film", y: "CAN", heat: 6.3}, 
          {x: "Science Fiction", y: "CAN", heat: 6.1}, 
          {x: "Thriller", y: "CAN", heat: 6.1}, 
          {x: "Action", y: "ESP", heat: 6.5}, 
          {x: "Adventure", y: "ESP", heat: 6.5}, 
          {x: "Comedy", y: "ESP", heat: 6.5}, 
          {x: "Crime Fiction", y: "ESP", heat: 6.8}, 
          {x: "Crime Thriller", y: "ESP", heat: 6.300000000000001}, 
          {x: "Drama", y: "ESP", heat: 6.9}, 
          {x: "Family Film", y: "ESP", heat: 6.25}, 
          {x: "Fantasy", y: "ESP", heat: 7.050000000000001}, 
          {x: "Horror", y: "ESP", heat: 5.9}, 
          {x: "Indie", y: "ESP", heat: 6.6}, 
          {x: "Musical", y: "ESP", heat: 0}, 
          {x: "Mystery", y: "ESP", heat: 6.75}, 
          {x: "Romance Film", y: "ESP", heat: 6.95}, 
          {x: "Science Fiction", y: "ESP", heat: 6.45}, 
          {x: "Thriller", y: "ESP", heat: 6.65}, 
          {x: "Action", y: "FRA", heat: 6.5}, 
          {x: "Adventure", y: "FRA", heat: 6.4}, 
          {x: "Comedy", y: "FRA", heat: 6.7}, 
          {x: "Crime Fiction", y: "FRA", heat: 6.7}, 
          {x: "Crime Thriller", y: "FRA", heat: 6.6}, 
          {x: "Drama", y: "FRA", heat: 6.9}, 
          {x: "Family Film", y: "FRA", heat: 6.0}, 
          {x: "Fantasy", y: "FRA", heat: 6.7}, 
          {x: "Horror", y: "FRA", heat: 5.9}, 
          {x: "Indie", y: "FRA", heat: 6.65}, 
          {x: "Musical", y: "FRA", heat: 6.75}, 
          {x: "Mystery", y: "FRA", heat: 6.75}, 
          {x: "Romance Film", y: "FRA", heat: 6.7}, 
          {x: "Science Fiction", y: "FRA", heat: 6.3}, 
          {x: "Thriller", y: "FRA", heat: 6.6}, 
          {x: "Action", y: "GER", heat: 6.4}, 
          {x: "Adventure", y: "GER", heat: 6.3}, 
          {x: "Comedy", y: "GER", heat: 6.4}, 
          {x: "Crime Fiction", y: "GER", heat: 6.6}, 
          {x: "Crime Thriller", y: "GER", heat: 6.5}, 
          {x: "Drama", y: "GER", heat: 6.9}, 
          {x: "Family Film", y: "GER", heat: 6.1}, 
          {x: "Fantasy", y: "GER", heat: 6.5}, 
          {x: "Horror", y: "GER", heat: 5.8}, 
          {x: "Indie", y: "GER", heat: 6.8}, 
          {x: "Musical", y: "GER", heat: 7.2}, 
          {x: "Mystery", y: "GER", heat: 6.7}, 
          {x: "Romance Film", y: "GER", heat: 6.6}, 
          {x: "Science Fiction", y: "GER", heat: 6.15}, 
          {x: "Thriller", y: "GER", heat: 6.4}, 
          {x: "Action", y: "HKG", heat: 6.5}, 
          {x: "Adventure", y: "HKG", heat: 6.35}, 
          {x: "Comedy", y: "HKG", heat: 6.3},
          {x: "Crime Fiction", y: "HKG", heat: 6.75}, 
          {x: "Crime Thriller", y: "HKG", heat: 7.5}, 
          {x: "Drama", y: "HKG", heat: 6.8}, 
          {x: "Family Film", y: "HKG", heat: 0}, 
          {x: "Fantasy", y: "HKG", heat: 6.2}, 
          {x: "Horror", y: "HKG", heat: 5.300000000000001}, 
          {x: "Indie", y: "HKG", heat: 0}, 
          {x: "Musical", y: "HKG", heat: 0}, 
          {x: "Mystery", y: "HKG", heat: 7.5}, 
          {x: "Romance Film", y: "HKG", heat: 6.8}, 
          {x: "Science Fiction", y: "HKG", heat: 6.5}, 
          {x: "Thriller", y: "HKG", heat: 6.5}, 
          {x: "Action", y: "IND", heat: 6.2}, 
          {x: "Adventure", y: "IND", heat: 6.3}, 
          {x: "Comedy", y: "IND", heat: 6.2}, 
          {x: "Crime Fiction", y: "IND", heat: 6.4},
          {x: "Crime Thriller", y: "IND", heat: 6.6}, 
          {x: "Drama", y: "IND", heat: 6.3}, 
          {x: "Family Film", y: "IND", heat: 6.1}, 
          {x: "Fantasy", y: "IND", heat: 6.5}, 
          {x: "Horror", y: "IND", heat: 6.2}, 
          {x: "Indie", y: "IND", heat: 6.4}, 
          {x: "Musical", y: "IND", heat: 6.4}, 
          {x: "Mystery", y: "IND", heat: 6.8}, 
          {x: "Romance Film", y: "IND", heat: 6.1}, 
          {x: "Science Fiction", y: "IND", heat: 6.4}, 
          {x: "Thriller", y: "IND", heat: 6.4}, 
          {x: "Action", y: "ITA", heat: 6.5}, 
          {x: "Adventure", y: "ITA", heat: 6.4}, 
          {x: "Comedy", y: "ITA", heat: 6.75}, 
          {x: "Crime Fiction", y: "ITA", heat: 7.0}, 
          {x: "Crime Thriller", y: "ITA", heat: 7.0}, 
          {x: "Drama", y: "ITA", heat: 6.9}, 
          {x: "Family Film", y: "ITA", heat: 6.2}, 
          {x: "Fantasy", y: "ITA", heat: 6.949999999999999}, 
          {x: "Horror", y: "ITA", heat: 6.1}, 
          {x: "Indie", y: "ITA", heat: 6.8}, 
          {x: "Musical", y: "ITA", heat: 6.5}, 
          {x: "Mystery", y: "ITA", heat: 6.8}, 
          {x: "Romance Film", y: "ITA", heat: 6.8}, 
          {x: "Science Fiction", y: "ITA", heat: 6.1}, 
          {x: "Thriller", y: "ITA", heat: 6.6}, 
          {x: "Action", y: "JPN", heat: 6.65}, 
          {x: "Adventure", y: "JPN", heat: 7.0}, 
          {x: "Comedy", y: "JPN", heat: 6.6}, 
          {x: "Crime Fiction", y: "JPN", heat: 6.95},
          {x: "Crime Thriller", y: "JPN", heat: 6.95}, 
          {x: "Drama", y: "JPN", heat: 7.2}, 
          {x: "Family Film", y: "JPN", heat: 7.3}, 
          {x: "Fantasy", y: "JPN", heat: 6.5}, 
          {x: "Horror", y: "JPN", heat: 6.05}, 
          {x: "Indie", y: "JPN", heat: 6.85}, 
          {x: "Musical", y: "JPN", heat: 7.449999999999999}, 
          {x: "Mystery", y: "JPN", heat: 6.65}, 
          {x: "Romance Film", y: "JPN", heat: 7.05}, 
          {x: "Science Fiction", y: "JPN", heat: 6.4}, 
          {x: "Thriller", y: "JPN", heat: 6.5}, 
          {x: "Action", y: "KOR", heat: 6.5}, 
          {x: "Adventure", y: "KOR", heat: 6.55},
          {x: "Comedy", y: "KOR", heat: 6.4}, 
          {x: "Crime Fiction", y: "KOR", heat: 6.7}, 
          {x: "Crime Thriller", y: "KOR", heat: 7.5}, 
          {x: "Drama", y: "KOR", heat: 6.8}, 
          {x: "Family Film", y: "KOR", heat: 6.5}, 
          {x: "Fantasy", y: "KOR", heat: 6.1}, 
          {x: "Horror", y: "KOR", heat: 6.4}, 
          {x: "Indie", y: "KOR", heat: 0}, 
          {x: "Musical", y: "KOR", heat: 0}, 
          {x: "Mystery", y: "KOR", heat: 6.7}, 
          {x: "Romance Film", y: "KOR", heat: 6.5}, 
          {x: "Science Fiction", y: "KOR", heat: 6.35}, 
          {x: "Thriller", y: "KOR", heat: 6.65}, 
          {x: "Action", y: "UK", heat: 6.5},
          {x: "Adventure", y: "UK", heat: 6.6}, 
          {x: "Comedy", y: "UK", heat: 6.6}, 
          {x: "Crime Fiction", y: "UK", heat: 6.7}, 
          {x: "Crime Thriller", y: "UK", heat: 6.6}, 
          {x: "Drama", y: "UK", heat: 6.8}, 
          {x: "Family Film", y: "UK", heat: 6.7}, 
          {x: "Fantasy", y: "UK", heat: 6.6},
          {x: "Horror", y: "UK", heat: 6.2}, 
          {x: "Indie", y: "UK", heat: 6.8}, 
          {x: "Musical", y: "UK", heat: 6.75}, 
          {x: "Mystery", y: "UK", heat: 6.6}, 
          {x: "Romance Film", y: "UK", heat: 6.7}, 
          {x: "Science Fiction", y: "UK", heat: 6.3}, 
          {x: "Thriller", y: "UK", heat: 6.5}, 
          {x: "Action", y: "USA", heat: 6.3}, 
          {x: "Adventure", y: "USA", heat: 6.3}, 
          {x: "Comedy", y: "USA", heat: 6.2}, 
          {x: "Crime Fiction", y: "USA", heat: 6.5}, 
          {x: "Crime Thriller", y: "USA", heat: 6.4}, 
          {x: "Drama", y: "USA", heat: 6.6}, 
          {x: "Family Film", y: "USA", heat: 6.3}, 
          {x: "Fantasy", y: "USA", heat: 6.4}, 
          {x: "Horror", y: "USA", heat: 5.8}, 
          {x: "Indie", y: "USA", heat: 6.4}, 
          {x: "Musical", y: "USA", heat: 6.6}, 
          {x: "Mystery", y: "USA", heat: 6.5}, 
          {x: "Romance Film", y: "USA", heat: 6.4}, 
          {x: "Science Fiction", y: "USA", heat: 6.1}, 
          {x: "Thriller", y: "USA", heat: 6.3}];
}

function Heatmap(id, data, titlee) {
  let chart;

  if (data == 1) {
    chart = anychart.heatMap(getData1());
  } else if (data == 2) {
    chart = anychart.heatMap(getData2());
  } else {
    chart = anychart.heatMap(getData3());
  }

  chart.title(titlee);

  chart.container(id);

  // enable html for the labels
  chart.labels().useHtml(true);

  // configure the labels
  chart.labels().format(function () {
    return ""
  });

  let colorScale = anychart.scales.ordinalColor();

  if (data == 1) {
    colorScale.ranges([
      { less: 5, color: "#B0D8A4" },
      { from: 5, to: 10, color: "#FEE191" },
      { from: 10, to: 20, color: "#FD8060" },
      { greater: 20, color: "#CC333F" }
    ]);
    chart.colorScale(colorScale);
  } else if (data == 2) {
    colorScale.ranges([
      { less: 4, color: "#B0D8A4" },
      { from: 4, to: 7, color: "#FEE191" },
      { from: 7, to: 8, color: "#FD8060" },
      { greater: 8, color: "#CC333F" }
    ]);
    chart.colorScale(colorScale);
  } else {
    colorScale.ranges([
      { less: 5, color: "#B0D8A4" },
      { from: 5, to: 6, color: "#FEE191" },
      { from: 6, to: 6.5, color: "#FD8060" },
      { greater: 6.5, color: "#CC333F" }
    ]);
    chart.colorScale(colorScale);
  }

  chart.draw();
}