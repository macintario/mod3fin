    var map;
    var featureGroup;

    document.addEventListener("DOMContentLoaded", function () {

    // Initialize MapBox engine (http://www.mapbox.com)
    L.mapbox.accessToken = "pk.eyJ1IjoiZ2VvdGFiIiwiYSI6ImNpd2Nlam5tajA2cHIyenBmdDQyZG9mMGYifQ.I7NikOui41_ka1TbbFGkFw";
    map = L.mapbox.map("map").setView([19.328985,-99.316586],12);
    L.mapbox.styleLayer("mapbox://styles/mapbox/streets-v10").addTo(map);
    featureGroup = L.featureGroup().addTo(map);
    });
