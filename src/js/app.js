// src/js/app.js
import { initMap } from './modules/maps.js';
import { initForms } from './modules/forms.js'; // Solo importamos initForms
import { initModalsAndTooltips } from './modules/modals.js';
import { MAPS_API_KEY } from './config.js';

window.initMap = initMap;

const loadGoogleMaps = () => {
    return new Promise((resolve, reject) => {
        if (window.google?.maps) {
            resolve();
            return;
        }

        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${MAPS_API_KEY}&callback=initMap`;
        script.async = true;
        script.defer = true;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
};

document.addEventListener('DOMContentLoaded', () => {
    // Inicializar formularios
    initForms();
    initModalsAndTooltips();

    // Carga el mapa async
    loadGoogleMaps().catch(error => {
        console.error('Error al cargar Google Maps:', error);
        alert('Error al cargar el mapa. Por favor recarga la página.');
    });
});