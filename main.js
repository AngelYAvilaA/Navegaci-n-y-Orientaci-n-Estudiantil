// Funciones existentes
function mostrarDialogo(idedificio) {
    const datos = datosEdificios[idedificio];
    if (datos) {
        document.getElementById("dialogo-titulo").textContent = datos.titulo;
        document.getElementById("dialogo-subtitulo").textContent = datos.subtitulo;
        document.getElementById("dialogo-descripcion").textContent = datos.descripcion;
        document.getElementById("dialogo-imagen").src = datos.imagen;
        document.getElementById("dialogo").showModal();
    }
}

function cerrarDialogo() {
    document.getElementById("dialogo").close();
}

// Funciones actualizadas para la barra lateral y resaltado
document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggleSidebar');
    const closeBtn = document.getElementById('closeSidebar');
    const sidebar = document.getElementById('sidebar');
   
    const buildingsMenu = document.getElementById('buildingsMenu');
    const navigationMenu = document.getElementById('navigationMenu');
    const switchToNavBtn = document.getElementById('switchToNav');
    const switchToBuildingsBtn = document.getElementById('switchToBuildings');
  

    function openSidebar() {
        sidebar.classList.add('open');
        toggleBtn.classList.add('hidden');
    }

    function closeSidebar() {
        sidebar.classList.remove('open');
        toggleBtn.classList.remove('hidden');
    }

    toggleBtn.addEventListener('click', openSidebar);
    closeBtn.addEventListener('click', closeSidebar);

    // Cambio entre menús
    switchToNavBtn.addEventListener('click', () => {
        buildingsMenu.classList.add('hidden');
        navigationMenu.classList.add('active');
    });

    switchToBuildingsBtn.addEventListener('click', () => {
        buildingsMenu.classList.remove('hidden');
        navigationMenu.classList.remove('active');
        clearPath();
    });



});