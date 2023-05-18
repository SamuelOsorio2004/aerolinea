let fecha = new Date();
const formulario = document.getElementById('formulario');
const message = document.getElementById('mostrar');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const returning = document.getElementById('returning').value;
    const departing = document.getElementById('departing').value;
    console.log(returning)
    try {
        if (new Date(returning) < fecha || new Date(departing) < fecha) {
            throw 'Error no puedes pedir un vuelo antes del dia de hoy'
        }

        if (new Date(returning) < new Date(departing)) {
            throw 'Error la fecha de devuelta no puede ser un dia antes de la ida'
        }
        alert('Se completo el proceso')
    } catch (e) {
        alert(e)
    }
})
