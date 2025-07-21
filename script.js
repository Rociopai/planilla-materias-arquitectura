const materias = [
  { id: "info1", nombre: "Informática Nivel I", requisitos: [], año: 1 },
  { id: "ing1", nombre: "Inglés Nivel I", requisitos: [], año: 1 },
  { id: "com1", nombre: "Introducción a la Comunicación", requisitos: [], año: 1 },
  { id: "prod1", nombre: "Introducción a la Producción", requisitos: [], año: 1 },
  { id: "ida", nombre: "Introducción al Diseño Arquitectónico", requisitos: [], año: 1 },
  { id: "soc", nombre: "Introducción al Estudio de la Arquitectura y la Sociedad", requisitos: [], año: 1 },
  { id: "mat", nombre: "Matemática", requisitos: [], año: 1 },
  { id: "mfyg", nombre: "Matemática y Física General", requisitos: ["mat"], año: 1 },

  { id: "dai", nombre: "Diseño Arquitectónico I", requisitos: ["ida", "prod1", "com1", "soc"], año: 2 },
  { id: "dce1", nombre: "Diseño y Cálculo Estructural I", requisitos: ["mat"], año: 2 },
  { id: "matp", nombre: "Materiales de Proyecto", requisitos: ["ida", "soc"], año: 2 },
  { id: "morf1", nombre: "Morfología y Comunicación I", requisitos: ["com1"], año: 2 },
  { id: "prod1a", nombre: "Producción I", requisitos: ["prod1"], año: 2 },

  { id: "daii", nombre: "Diseño Arquitectónico II", requisitos: ["dai", "matp", "prod1a", "morf1"], año: 3 },
  { id: "dce2", nombre: "Diseño y Cálculo Estructural II", requisitos: ["dce1", "mfyg"], año: 3 },
  { id: "ht1", nombre: "Historia y Teoría I", requisitos: ["matp"], año: 3 },
  { id: "inst1", nombre: "Instalaciones I", requisitos: ["prod1a"], año: 3 },
  { id: "morf2", nombre: "Morfología y Comunicación II", requisitos: ["morf1"], año: 3 },
  { id: "prod2", nombre: "Producción II", requisitos: ["prod1a", "dce1"], año: 3 },

  { id: "daiii", nombre: "Diseño Arquitectónico III", requisitos: ["daii", "morf2", "prod2", "ht1"], año: 4 },
  { id: "dce3", nombre: "Diseño y Cálculo Estructural III", requisitos: ["dce2"], año: 4 },
  { id: "ht2", nombre: "Historia y Teoría II", requisitos: ["ht1"], año: 4 },
  { id: "inst2", nombre: "Instalaciones II", requisitos: ["inst1"], año: 4 },
  { id: "morf3", nombre: "Morfología y Comunicación III", requisitos: ["morf2"], año: 4 },
  { id: "prod3", nombre: "Producción III", requisitos: ["inst1", "prod2", "dce2"], año: 4 },

  { id: "daiiv", nombre: "Diseño Arquitectónico IV", requisitos: ["ht2", "prod3", "daiii", "morf3"], año: 5 },
  { id: "dce4", nombre: "Diseño y Cálculo Estructural IV", requisitos: ["dce3"], año: 5 },
  { id: "ht3", nombre: "Historia y Teoría III", requisitos: ["ht2"], año: 5 },
  { id: "info2", nombre: "Informática Nivel II", requisitos: ["info1"], año: 5 },
  { id: "ing2", nombre: "Inglés Nivel II", requisitos: ["ing1"], año: 5 },
  { id: "inst3", nombre: "Instalaciones III", requisitos: ["inst2"], año: 5 },
  { id: "prod4", nombre: "Producción IV", requisitos: ["prod3", "dce3", "inst2"], año: 5 },

  { id: "info3", nombre: "Informática Nivel III", requisitos: ["info2"], año: 6 },
  { id: "legal", nombre: "Legal", requisitos: ["prod4"], año: 6 },
  { id: "plan1", nombre: "Planeamiento I", requisitos: ["daiiv"], año: 6 },
  { id: "plan2", nombre: "Planeamiento II", requisitos: ["plan1"], año: 6 },
  { id: "pps", nombre: "Práctica Profesional Supervisada", requisitos: ["prod4", "dce4", "daiiv", "ht3", "inst3"], año: 6 },
  { id: "pfinal", nombre: "Proyecto Final", requisitos: ["prod4", "dce4", "daiiv", "ht3", "inst3"], año: 6 },
  { id: "semi1", nombre: "Seminario I - Ecología del Paisaje", requisitos: ["ht3", "dce4", "prod4", "inst3", "daiiv"], año: 6 },
  { id: "semi2", nombre: "Seminario II - Educación Ambiental", requisitos: ["daiiv", "ht3", "dce4", "prod4", "inst3"], año: 6 },
  { id: "semi3", nombre: "Seminario III - Seguimiento de Obra I", requisitos: ["dce4", "prod4", "daiiv", "inst3", "ht3"], año: 6 },
  { id: "semi4", nombre: "Seminario IV - Salud y Seguridad", requisitos: ["ht3", "dce4", "daiiv", "inst3", "prod4"], año: 6 },
  { id: "semi5", nombre: "Seminario V - Diseño Sustentable", requisitos: [], año: 6 },
  { id: "semi6", nombre: "Seminario VI - Gestión Inmobiliaria", requisitos: [], año: 6 },
  { id: "semi7", nombre: "Seminario VII - Seguimiento Obra II", requisitos: [], año: 6 },
  { id: "semi8", nombre: "Seminario VIII - Documentación de Obra", requisitos: ["prod4", "daiiv", "ht3", "inst3", "dce4"], año: 6 },
  { id: "semi9", nombre: "Seminario IX - Análisis Pequeñas Obras", requisitos: ["dce4", "ht3", "prod4", "inst3", "daiiv"], año: 6 }
];

function crearMalla() {
  materias.forEach((materia) => {
    const div = document.createElement("div");
    div.classList.add("materia");
    div.id = materia.id;
    div.innerText = materia.nombre;

    if (!requisitosCumplidos(materia)) {
      div.classList.add("bloqueada");
    }

    div.addEventListener("click", () => {
      if (div.classList.contains("bloqueada")) return;
      div.classList.toggle("aprobada");
      actualizarMalla();
    });

    const contenedor = document.getElementById(`año-${materia.año}`);
    if (contenedor) contenedor.appendChild(div);
  });
}

function requisitosCumplidos(materia) {
  // Requisitos específicos
  let cumplidos = materia.requisitos.every(id => {
    const r = document.getElementById(id);
    return r && r.classList.contains("aprobada");
  });

  // Requisito global para 4° año o más
  if (materia.año >= 4) {
    const info = document.getElementById("info1");
    const ing = document.getElementById("ing1");
    if (!(info && info.classList.contains("aprobada"))) return false;
    if (!(ing && ing.classList.contains("aprobada"))) return false;
  }

  return cumplidos;
}

function actualizarMalla() {
  materias.forEach((materia) => {
    const div = document.getElementById(materia.id);
    if (requisitosCumplidos(materia)) {
      div.classList.remove("bloqueada");
    } else if (!div.classList.contains("aprobada")) {
      div.classList.add("bloqueada");
    }
  });
}

window.onload = crearMalla;
