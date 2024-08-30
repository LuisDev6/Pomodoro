function actualizarReloj() {
    const ahora = new Date();
    const horas = ahora.getHours().toString().padStart(2, '0');
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    const segundos = ahora.getSeconds().toString().padStart(2, '0');
    
    const tiempoActual = `${horas}:${minutos}:${segundos}`;
    document.getElementById('reloj').innerText = tiempoActual;
}

// Actualizar el reloj cada segundo
setInterval(actualizarReloj, 1000);

// Mostrar la hora inmediatamente al cargar la página
actualizarReloj();