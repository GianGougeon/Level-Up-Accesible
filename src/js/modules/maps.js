export const initMap = () => {
    const center = { lat: -34.42835760066115, lng: -57.444194784184404 }; // Juan lacaze

    // Crear mapa
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: center,
        keyboardShortcuts: false, //  Deshabilita la navegación por teclado
        disableDefaultUI: true, // Deshabilita todos los controles predeterminados 
        styles: [{
            "featureType": "poi",
            "stylers": [{ "visibility": "off" }]
        }]
    });

    // Marcadores 
    const markers = [
        {
            position: { lat: -34.42835760066115, lng: -57.444194784184404 },
            title: "Gaming Inclusivo encuentro en el Sábalo de Juan Lacaze",
            type: "torneo",
        },
        {
            position: { lat: -34.43568467075358, lng: -57.43670069242106 },
            title: "Centro de Juegos Accesibles",
            type: "comunidad",
        },
        {
            position: { lat: -34.43291176943215, lng: -57.440522383508615 },
            title: "Café Gamer Monarca",
            type: "cafe",
        },
    ];

    // Añadir marcadores al mapa
    markers.forEach(markerInfo => {
        const marker = new google.maps.Marker({
            position: markerInfo.position,
            map: map,
            title: markerInfo.title
        });

        // InfoWindow para cada marcador
        const infoWindow = new google.maps.InfoWindow({
            content: `<h3>${markerInfo.title}</h3><p>Tipo: ${markerInfo.type}</p>`
        });

        marker.addListener("click", () => infoWindow.open(map, marker));
    });
};