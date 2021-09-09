document.addEventListener('DOMContentLoaded',function(){
 var map = L.map('map').setView([18.9264733,-99.2264237],17);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken:'pk.pk.eyJ1Ijoic2V0aGVyIiwiYSI6ImNrdDJoM245MjBvbWYydnA5MDhlamNlYnQifQ.Rki5i-iIKeyCDf0ha3dwdQ'
}).addTo(mymap);

});