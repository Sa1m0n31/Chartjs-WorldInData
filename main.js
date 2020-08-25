(function() {
    let chart1ctx = document.querySelector('#chart-1');
    let chart1 = new Chart(chart1ctx, {
        type: 'line',
        data: {
            labels: ['1500', '1600', '1700', '1800', '1900', '2000'],
            datasets: [{
                label: 'Liczba populacji na świecie',
                data: [460, 500, 600, 890, 1560, 6006],
                backgroundColor: 'red',
                borderColor: 'red',
                borderWidth: 2,
                fill: false,
                hoverBackgroundColor: 'blue'
            }]
        },
        options: {
            animation: {
                duration: 2000
            }
        }
    });

    let chart2ctx = document.querySelector("#chart-2");
    let chart2 = new Chart(chart2ctx, {
        type: 'bar',
        data: {
            labels: ['Chiny', 'Indie', 'USA', 'Indonezja', 'Pakistan', 'Brazylia'],
            datasets: [{
                label: "Liczba mieszkańców",
                data: [1404, 1366, 330, 270, 221, 212],
                backgroundColor: ['red', 'orange', 'blue', 'black', 'green', 'yellow']
            }]
        },
        options: {
            animation: {
                duration: 2000
            }
        }
    });

    let chart3ctx = document.querySelector("#chart-3");
    let chart3 = new Chart(chart3ctx, {
        type: 'doughnut',
        data: {
            labels: ["Azja", "Afryka", "Europa", "Ameryka Płn.", "Ameryka Płd.", "Oceania"],
            datasets: [{
                label: "Liczba mieszkańców na kontynentach",
                data: [4581, 1216, 738, 579, 422, 38],
                backgroundColor: ['red', 'orange', 'blue', 'black', 'green', 'yellow']
            }]
        },
        options: {
            animation: {
                duration: 2000
            }
        }
    });

    let chart4ctx = document.querySelector("#chart-4");
    let chart4 = new Chart(chart4ctx, {
        type: 'radar',
        data: {
            labels: ["Azja", "Afryka", "Europa", "Ameryka Płn.", "Ameryka Płd.", "Oceania"],
            datasets: [{
                label: "Chrześcijaństwo",
                data: [7, 45, 75, 77, 90, 52],
                backgroundColor: 'rgba(255, 0, 0, 0.2)'
            }, {
                label: "Islam",
                data: [24, 40, 6, 1, 0.5, 3],
                backgroundColor: 'rgba(0, 255, 0, 0.2)'
            }]
        },
        options: {
            animation: {
                duration: 2000
            }
        }
    });

    let chart5ctx = document.querySelector("#chart-5");
    let chart5 = new Chart(chart5ctx, {
        type: 'polarArea',
        data: {
            labels: ['Oceania', "Ameryka Płn.", "Europa", "Ameryka Płd.", "Azja", "Afryka"],
            datasets: [{
                label: "PKB na kontynentach",
                data: [53220, 49240, 29410, 8560, 7350, 1930],
                backgroundColor: ['red', 'orange', 'blue', 'black', 'green', 'yellow']
            }]
        },
        options: {
            animation: {
                duration: 2000
            }
        }
    });

    let chart6ctx = document.querySelector("#chart-6");
    let chart6 = new Chart(chart6ctx, {
        type: 'scatter',
        data: {
            labels: ["Luksemburg", "Szwajcaria", "Norwegia", "Irlandia", "Katar"],
            datasets: [{
                label: "PKB per capita i HDI",
                backgroundColor: ['blue', 'red', 'green', 'white', 'yellow'],
                xAxisId: 'PKB per capita',
                yAxisId: 'Wskaźnik HDI',
                pointBorderWidth: 15,
                data: [{
                    label: "Luksemburg",
                    x: 115536,
                    y: 0.898
                }, {
                    x: 83162,
                    y: 0.939
                }, {
                    x: 81550,
                    y: 0.949
                },
                    {
                        x: 78335,
                        y: 0.923
                    },
                    {
                        x: 70379,
                        y: 0.856
                    }
                ]
            }]
        },
        options: {
            tooltips: {
                callbacks: {
                    label: function(caption, data) {
                        return data.labels[caption.index];
                    }
                }
            }
        }
    });
}());
