

const botones = document.querySelectorAll(".menu-btn");

const dashboard = document.getElementById("dashboard");
const otraPagina = document.getElementById("otraPagina");

const titulo = document.getElementById("tituloPagina");
const descripcion = document.getElementById("descripcionPagina");
const contenido = document.getElementById("contenidoPagina");


const paginas = {

    productos: [
        "Productos",
        "Administración e inventario de productos.",
        [
            "📦 400 productos registrados",
            "✅ 285 productos disponibles",
            "⚠️ 18 productos con stock bajo"
        ]
    ],

    ventas: [
        "Ventas Realizadas",
        
        [
            "💰 $14.500.000 en ventas",
            "🛒 185 pedidos",
            "📈 14% de crecimiento"
        ]
    ],

    usuarios: [
        "Usuarios",
        "Administración de usuarios del sistema.",
        [
            "👤 1.581 usuarios",
            "🟢 1.125 usuarios activos",
            "➕ 32 usuarios nuevos"
        ]
    ],

    reportes: [
        "Reportes",
        "Estadística del negocio.",
        [
            "📊 Reporte de ventas",
            "📦 Reporte de productos",
            "👤 Reporte de usuarios"
        ]
    ],


};

botones.forEach(boton => {

    boton.addEventListener("click", () => {

        botones.forEach(b =>
            b.classList.remove("active")
        );

        boton.classList.add("active");

        const pagina = boton.dataset.page;

        if (pagina === "inicio") {

            dashboard.hidden = false;
            otraPagina.hidden = true;

            return;
        }


       
        const datos = paginas[pagina];


        if (!datos) return;


        titulo.textContent = datos[0];

        descripcion.textContent = datos[1];


        
        contenido.innerHTML = datos[2]
            .map(item => `
                <div class="caja">
                    <h3>${item}</h3>
                    <p>
                        Información disponible aqui.
                    </p>
                </div>
            `)
            .join("");


        dashboard.hidden = true;
        otraPagina.hidden = false;

    });

});


const temaBtn =
    document.getElementById("temaBtn");


temaBtn.addEventListener("click", () => {

    document.body.classList.toggle("claro");


    const modoClaro =
        document.body.classList.contains("claro");


    temaBtn.textContent =
        modoClaro
            ? "☀️ Modo claro"
            : "🌙 Modo oscuro";

});




const fotoPerfil =
    document.getElementById("fotoPerfil");


fotoPerfil.addEventListener("change", () => {

    const archivo =
        fotoPerfil.files[0];


    if (!archivo) return;


    if (!archivo.type.startsWith("image/")) {

        alert("Selecciona una imagen válida.");

        return;
    }


    const lector =
        new FileReader();


    lector.onload = () => {

        document.getElementById(
            "imagenPerfil"
        ).src = lector.result;


        document.getElementById(
            "imagenHeader"
        ).src = lector.result;

    };


    lector.readAsDataURL(archivo);

});

const notificacionesBtn =
    document.getElementById(
        "notificacionesBtn"
    );


const notificaciones =
    document.getElementById(
        "notificaciones"
    );


notificacionesBtn.addEventListener(
    "click",
    () => {

        notificaciones.classList.toggle(
            "show"
        );

    }
);


const pantallaBtn =
    document.getElementById(
        "pantallaBtn"
    );


pantallaBtn.addEventListener(
    "click",
    () => {

        if (!document.fullscreenElement) {

            document.documentElement.requestFullscreen();

        } else {

            document.exitFullscreen();

        }

    }
);

buscar.oninput = () => {
  [...tabla.rows].forEach(fila =>
    fila.style.display = fila.innerText.toLowerCase()
      .includes(buscar.value.toLowerCase()) ? "" : "none"
  );
};

const filtros =
    document.querySelectorAll(
        ".filtro"
    );


filtros.forEach(filtro => {

    filtro.addEventListener(
        "click",
        () => {

            filtros.forEach(boton => {

                boton.classList.remove(
                    "active"
                );

            });


            filtro.classList.add(
                "active"
            );

        }
    );

});


