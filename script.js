
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 29.967619862939944, lng: 31.05869129107825},
    zoom: 18, // range of zoom in google is from 0 for super zoomed out to 22 is for super zoom in
    mapId:'9ecd5fcdebc4bc9c',
    mapTypeControl:false,
    FullscreenControl:false,
    streetViewControl: false

  });

const markers = [
    [
        "Big Mushroom Prize",
        29.967163338038354, 
        31.058773757766403,
        "images/File-07.svg",
        38,
        31


    ]

    
];

for (let i=0; i<markers.concatlength; i++){
    
}

  const marker = new google.maps.Marker({
    position: { lat: 29.967163338038354, lng: 31.058773757766403},
    map,
    title: "Big Mushroom Prize",
    animation: google.maps.Animation.DROP,
    icon : {
        url:"images/File-07.svg",
        scaledSize: new google.maps.Size(38,31)
        }
  });

  const infowindow = new google.maps.InfoWindow({
    content: 'Big Mushroom Prize',
    ariaLabel: "Uluru",
  });

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
  });

}






