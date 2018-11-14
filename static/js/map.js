    var map;
    var featureGroup;

    document.addEventListener("DOMContentLoaded", function () {

    // Initialize MapBox engine (http://www.mapbox.com)
    L.mapbox.accessToken = "pk.eyJ1IjoiZ2VvdGFiIiwiYSI6ImNpd2Nlam5tajA2cHIyenBmdDQyZG9mMGYifQ.I7NikOui41_ka1TbbFGkFw";
    map = L.mapbox.map("map").setView([19.328985,-99.316586],12);
    L.mapbox.styleLayer("mapbox://styles/mapbox/streets-v10").addTo(map);
    featureGroup = L.featureGroup().addTo(map);
    ////////////////////////////////////////////////////////////
    document.getElementById("enviarDatos").addEventListener("click", function (event) {
event.preventDefault();

    datosParaEnviar = document.getElementById("datosEntrada").value;



insertToMap(data)

});


function insertMap(data){
$.ajax({
type: 'POST',
contentType: 'application/json',
url: '/jams',
dataType : 'json',
data : JSON.stringify(data),
success : function(result) {

},error : function(result){
console.log("error");
}
});

}
    ////////////////////////////////////////////////////////////
    var chart = Highcharts.chart('container', {

    title: {
        text: 'Chart.update'
    },

    subtitle: {
        text: 'Plain'
    },

    xAxis: {
        categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dec']
    },

    series: [{
        type: 'column',
        colorByPoint: true,
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        showInLegend: false
    }]

});


$('#plain').click(function () {
    chart.update({
        chart: {
            inverted: false,
            polar: false
        },
        subtitle: {
            text: 'Plain'
        }
    });
});

$('#inverted').click(function () {
    chart.update({
        chart: {
            inverted: true,
            polar: false
        },
        subtitle: {
            text: 'Inverted'
        }
    });
});

$('#polar').click(function () {
    chart.update({
        chart: {
            inverted: false,
            polar: true
        },
        subtitle: {
            text: 'Polar'
        }
    });
});

    });
