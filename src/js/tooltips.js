// Activar tooltips
document.addEventListener("DOMContentLoaded", function () {
    const tooltips = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltips.map((t) => new bootstrap.Tooltip(t));
});