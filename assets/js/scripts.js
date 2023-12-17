var mapInitialized = false;



window.onload = (event) => {
    console.log("page is fully loaded");
    generateActorChart();
    generateRevenueChart();
    doughnutChart()
    mapInteractive()
    BarChart()
  };

  

document.addEventListener('DOMContentLoaded', function () {
    // Sélectionne l'élément avec la classe .scroll-down
    let scrollDown = document.querySelector('.scroll-down');

    // Ajoute un écouteur d'événements sur le clic de l'indicateur de défilement
    scrollDown.addEventListener('click', function () {
        // Fait défiler la fenêtre vers le bas de la page de manière fluide
        window.scroll({
            top: window.innerHeight,
            behavior: 'smooth'
        });

        // Initialise la variable arcs avant de générer les graphiques
        arcs = null;

        // Ajoutez le code pour générer les deux graphiques ici
         
        
        // generateMap();
    });
});

function generateActorChart() {

    // Données de test (remplacez cela par vos propres données)
    const data = [60, 70, 80, 100, 45];

    // Sélectionne le conteneur du graphique
    const chartContainer = d3.select('#actorChart');

    // Supprime le contenu existant du conteneur
    chartContainer.html('');

    // Crée le graphique à barres avec une mise en page correcte
    chartContainer.selectAll('div')
        .data(data)
        .enter().append('div')
        .attr('class', 'bar') // Ajoute une classe pour styliser les barres
        .style('height', d => d + 'px')
        .text(d => d)
        .on('mouseover', function () {
            d3.select(this).style('background-color', 'blue'); // Change la couleur au survol
        })
        .on('mouseout', function () {
            d3.select(this).style('background-color', 'rgb(87, 208, 245)'); // Revertit la couleur après le survol
        });
}

let arcs; // Déclaration de la variable arcs dans le contexte global


function generateRevenueChart() {

    // Données de test (remplacez cela par vos propres données)
    const data = [60, 70, 80, 100, 45];

    // Sélectionne le conteneur du graphique
    const chartContainer = d3.select('#revenueChartSection');

    // Supprime le contenu existant du conteneur
    chartContainer.html('');

    // Crée le graphique à barres avec une mise en page correcte
    chartContainer.selectAll('div')
        .data(data)
        .enter().append('div')
        .attr('class', 'bar') // Ajoute une classe pour styliser les barres
        .style('height', d => d + 'px')
        .text(d => d)
        .on('mouseover', function () {
            d3.select(this).style('background-color', 'blue'); // Change la couleur au survol
        })
        .on('mouseout', function () {
            d3.select(this).style('background-color', 'rgb(87, 208, 245)'); // Revertit la couleur après le survol
        });
}




 function doughnutChart() {
    const ctx = document.getElementById('myChart');
    const data = {

        labels : [
          'Drama',
          'Comedy',
          'Romance Film',
          'Thriller',
          'Action',
          'Adventure',
          'Crime Fiction',
          'World cinema',
          'Indie'
        ],
        datasets: [{
          label: 'Nombre de films',
          data: [6102,3894,2812,2652,2510,2353,1651,1350,1179],
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
          hoverOffset: 30, // Augmentez l'offset au survol pour un effet plus visible
          borderWidth: 2, // Ajoutez une bordure autour du diagramme pour plus de clarté
          borderColor: 'rgba(255,255,255,0.8)' // Couleur de la bordure
      }]
  };
    const config = {
        type: 'doughnut',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        font: {
                            size: 14
                        }
                    }
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






 

 function BarChart() {
    const ctx = document.getElementById('barChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['<1920', '1920s', '1930s', '1940s', '1950s', '1960s', '1970s', '1980s', '1990s', '2000s', '2010-'],
      datasets: [{
        label: '# of Movies per decade',
        data: [17, 67, 231, 261, 384, 429, 621, 1238, 2335, 4638, 697],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        legend: {
          display: true,
          position: 'top', // Position de la légende
          labels: {
            color: 'black' // Couleur du texte de la légende
          }
        },
        title: {
          display: true,
          text: 'Number of Movies per Decade', // Titre du graphique
          color: 'black' // Couleur du texte du titre
        }
      }
    }
  });
}



 function mapInteractive() {
    google.charts.load('current', {
        'packages':['geochart'],
      });
      google.charts.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable([
          ['Country', 'Number of movies '],
          ['Argentina', 36], ['Australia', 206], ['Belgium', 53], ['Brazil', 23], ['Canada', 489], ['China', 77], ['Denmark', 40], ['France', 666], ['Germany', 590], ['Hong Kong', 133], ['India', 1555], ['Ireland', 77], ['Italy', 247], ['Japan', 275], ['Mexico', 47], ['Netherlands', 44], ['New Zealand', 59], ['Philippines', 17], ['Russia', 44], ['South Korea', 187], ['Spain', 146], ['Sweden', 52], ['United Kingdom', 1266], ['United Kingodm', 36], ['United States', 7491],
        ]);

        var options = {
          colors: ['#FFFFFF', '#ADD8E6', '#87CEEB', '#1E90FF', '#0000FF'],
          values: [0, 100, 200, 300, 400], // Définir les intervalles correspondants aux couleurs
          // legend: 'none', // masquer la légende de la couleur
        };

        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

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
 