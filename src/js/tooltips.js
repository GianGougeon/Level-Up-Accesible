// Activar tooltips
document.addEventListener("DOMContentLoaded", function () {
    const tooltips = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltips.map((t) => new bootstrap.Tooltip(t));
    // Activar popovers
    const popovers = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popovers.map((p) => new bootstrap.Popover(p));
});

