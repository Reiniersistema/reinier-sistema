// menu.js - Navegación Universal para RF TransGestión
document.addEventListener("DOMContentLoaded", function() {
    // 1. Inyectamos el HTML del menú y la barra superior
    const menuHTML = `
    <div id="mySidebar" class="sidebar">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <a href="panel.html">Panel de Control</a>
        <a href="crear-viaje.html">Crear Viajes</a>
        <a href="mis-viajes.html">Mis Viajes</a>
        <a href="choferes.html">Choferes</a>
        <a href="pagos-pendientes.html">Pagos Pendientes</a>
        <a href="pagos-aprobar.html">Pagos por Aprobar</a>
        <a href="tarjetas.html">Tarjetas</a>
        <a href="transferencias.html">Transferencias</a>
        <a href="colaboracion.html">Colaboración</a>
        <a href="usuarios.html">Usuarios</a>
        <a href="clientes.html">Clientes</a>
        <hr style="border: 0.5px solid #333; margin: 20px;">
        <a href="#" onclick="cerrarSesion()" style="color: #ff4d4d;">Cerrar Sesión</a>
    </div>

    <div class="header-nav-universal">
        <button class="openbtn" onclick="openNav()">&#9776;</button>
        <div class="logo-txt-universal">RF <span style="color: #d4af37; font-size: 14px;">TransGestión</span></div>
    </div>`;

    document.body.insertAdjacentHTML('afterbegin', menuHTML);
});

// 2. Funciones de apertura y cierre
function openNav() { 
    document.getElementById("mySidebar").style.width = "280px"; 
}

function closeNav() { 
    document.getElementById("mySidebar").style.width = "0"; 
}

// 3. Función de cerrar sesión
function cerrarSesion() {
    localStorage.removeItem('usuario_activo');
    window.location.href = "index.html";
}
