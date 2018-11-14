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

    var data  = {
        "datosParaEnviar":datosParaEnviar
    }

        sendToTheServer(data)

});


function sendToTheServer(data){
$.ajax({
type: 'POST',
contentType: 'application/json',
url: '/getLista',
dataType : 'json',
data : JSON.stringify(data),
success : function(result) {
    console.log(result);
    $("#result").append('result:'+result.data.categorias+' :D ');
    verGrafica(result.data.categorias, result.data.data)
},error : function(result){
    console.log("error");
}
});

}
    ////////////////////////////////////////////////////////////
function verGrafica(categorias, data){
    var chart = Highcharts.chart('container', {

    title: {
        text: 'Chart.update'
    },

    subtitle: {
        text: 'Plain'
    },

    xAxis: {
        categories: categorias
    },

    series: [{
        type: 'column',
        colorByPoint: true,
        data: data,
        showInLegend: false
    }]

});

}

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
