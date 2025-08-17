export const initModalsAndTooltips = () => {
    // Tooltips
    const tooltipTriggerList = [...document.querySelectorAll('[data-bs-toggle="tooltip"]')];
    tooltipTriggerList.forEach(tooltipTriggerEl => 
        new bootstrap.Tooltip(tooltipTriggerEl)
    );
};