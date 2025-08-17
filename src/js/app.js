// src/js/app.js
import { initMap } from './modules/maps.js';
import { setupForms } from './modules/forms.js';
import { initModalsAndTooltips } from './modules/modals.js';
import { MAPS_API_KEY } from './config.js';

window.initMap = initMap;

// API de Google Maps
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

const initializeApp = async () => {
    try {
        await loadGoogleMaps();
        setupForms();
        initModalsAndTooltips();

    } catch (error) {
        console.error('Error al cargar la aplicación:', error);
        // Mostrar mensaje al usuario
        alert('Error al cargar el mapa. Por favor recarga la página.');
    }
};

document.addEventListener('DOMContentLoaded', initializeApp);