export const setupForms = () => {
    const formGrupo = document.getElementById("formGrupo");
    
    if (formGrupo) {
        formGrupo.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Gracias por compartir información sobre tu grupo. Nos pondremos en contacto contigo pronto.");
            formGrupo.reset();
        });
    }
};