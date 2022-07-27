/* - Crea un mapa en HTML
- Pon chinchetas en tus 3 lugares favoritos del planeta tierra */
//no saqué mi key

let markers, map;

function initMap() {
  const posicion = {
    lat: -25.363,
    lng: 131.044,
  };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: posicion,
  });

  markers.push(
    new google.maps.Marker({
      position: {
        lat: -32.88936988878245,
        lng: -68.84439543334398,
      },
      map,
      title: "Mendoza",
    })
  );

   
  markers.push(
    new google.maps.Marker({
      position: {
        lat: -49.330674956515146,
        lng: -72.88534302290762,
      },
      map,
      title: "El Chaltén",
    })
  );

  
  markers.push(
    new google.maps.Marker({
      position: {
        lat: -41.133617707605765, 
        lng: -71.31019350746784,
      },
      map,
      title: "Bariloche",
    })
  );

  //geoPosiciona()
}

//para tener mi posicion actual

/* function geoPosiciona(){
    if (navigator.geolocation){
        const geoLoc = navigator.geolocation
        const options = { timeout: 60000 }
        const watchPos = geoLoc.watchPosition(centraMapa, onError, options)
    } else {
        alert('El navegador no admite geolocalización')
    }
}

function centraMapa(position) {
    const nuevaPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }
    console.log(nuevaPos)
    markers.setPosition(nuevaPos)
    map.setCenter(nuevaPos)
}

function onError (error) {
    console.error(error)
} */