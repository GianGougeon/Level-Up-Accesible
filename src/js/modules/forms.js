// Formulario de Foro de Ayuda - Validaciones y manejo de envío
export const initForms = () => {
    const form = document.getElementById('formularioAyuda');
    if (!form) {
        console.error('No se encontró el formulario');
        return;
    }

    // Configurar fecha máxima
    const fechaInput = document.getElementById('fechaProblema');
    if (fechaInput) {
        const hoy = new Date().toISOString().split('T')[0];
        fechaInput.max = hoy;
    }

    // Validación en tiempo real para teléfono
    const telefonoInput = document.getElementById('telefono');
    if (telefonoInput) {
        telefonoInput.addEventListener('input', function () {
            if (this.value && !/^[0-9]{9,15}$/.test(this.value)) {
                this.setCustomValidity('Número inválido (9-15 dígitos)');
            } else {
                this.setCustomValidity('');
            }
        });
    }

    // Manejar envío del formulario
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        e.stopPropagation();

        // Validar formulario
        if (!this.checkValidity()) {
            this.classList.add('was-validated');
            console.log('Formulario no válido');
            return;
        }

        // Recolectar datos
        const formData = new FormData(this);
        const datos = {
            tipoConsulta: formData.get('tipoConsulta'),
            nombre: formData.get('nombre'),
            apellido: formData.get('apellido'),
            email: formData.get('email'),
            telefono: formData.get('telefono'),
            asunto: formData.get('asunto'),
            descripcion: formData.get('descripcion'),
            fechaProblema: formData.get('fechaProblema'),
            contactoPreferido: formData.get('contactoPreferido'),
            plataformas: formData.getAll('plataforma'), // Para checkboxes
            nivelExperiencia: formData.get('nivelExperiencia'),
            aceptoTerminos: formData.get('aceptoTerminos') === 'on',
            adjunto: formData.get('adjunto') ? formData.get('adjunto').name : null
        };

        console.log('Datos del formulario:', datos);
        alert('Formulario enviado con éxito!\n\nRevisa la consola para ver los datos.');

        // Resetear formulario
        this.reset();
        this.classList.remove('was-validated');
    });

    // Validación visual en tiempo real
    form.addEventListener('input', function (e) {
        const input = e.target;
        if (input.checkValidity()) {
            input.classList.remove('is-invalid');
            input.classList.add('is-valid');
        } else {
            input.classList.remove('is-valid');
            if (input.hasAttribute('required') || input.value) {
                input.classList.add('is-invalid');
            }
        }
    });
};