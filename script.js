const materias = [
  { id: "info1", nombre: "Informática Nivel I", requisitos: [], año: 1 },
  { id: "ing1", nombre: "Inglés Nivel I", requisitos: [], año: 1 },
  { id: "com1", nombre: "Introducción a la Comunicación", requisitos: [], año: 1 },
  { id: "prod1", nombre: "Introducción a la Producción", requisitos: [], año: 1 },
  { id: "ida", nombre: "Introducción al Diseño Arquitectónico", requisitos: [], año: 1 },
  { id: "soc", nombre: "Introducción al Estudio de la Arquitectura y la Sociedad", requisitos: [], año: 1 },
  { id: "mat", nombre: "Matemática", requisitos: [], año: 1 },

  { id: "mfyg", nombre: "Matemática y Física General", requisitos: ["mat"], año: 2 },
  { id: "dai", nombre: "Diseño Arquitectónico I", requisitos: ["ida", "com1", "prod1", "soc"], año: 2 },
  { id: "dce1", nombre: "Diseño y Cálculo Estructural I", requisitos: ["mat"], año: 2 },
  { id: "matp", nombre: "Materiales de Proyecto", requisitos: ["ida", "soc"], año: 2 },
  { id: "morf1", nombre: "Morfología y Comunicación I", requisitos: ["com1"], año: 2 },
  { id: "prod1a", nombre: "Producción I", requisitos: ["prod1"], año: 2 },

  { id: "daii", nombre: "Diseño Arquitectónico II", requisitos: ["dai", "morf1", "prod1a", "matp", "soc"], año: 3 },
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
  { id: "prod3", nombre: "Producción III", requisitos: ["prod2", "dce2", "inst1"], año: 4 },

  { id: "daiiv", nombre: "Diseño Arquitectónico IV", requisitos: ["daiii", "morf3", "prod3", "ht2"], año: 5 },
  { id: "dce4", nombre: "Diseño y Cálculo Estructural IV", requisitos: ["dce3"], año: 5 },
  { id: "ht3", nombre: "Historia y Teoría III", requisitos: ["ht2"], año: 5 },
  { id: "info2", nombre: "Informática Nivel II", requisitos: [], año: 5 },
  { id: "ing2", nombre: "Inglés Nivel II", requisitos: [], año: 5 },
  { id: "inst3", nombre: "Instalaciones III", requisitos: ["inst2"], año: 5 },
  { id: "prod4", nombre: "Producción IV", requisitos: ["prod3", "dce3", "inst2"], año: 5 },

  { id: "legal", nombre: "Legal", requisitos: ["prod4"], año: 6 },
  { id: "plan1", nombre: "Planeamiento I", requisitos: ["daiiv"], año: 6 },
  { id: "plan2", nombre: "Planeamiento II", requisitos: ["plan1"], año: 6 },
  { id: "pps", nombre: "Práctica Profesional Supervisada", requisitos: ["daiiv", "dce4", "prod4", "inst3", "ht3"], año: 6 },
  { id: "pfinal", nombre: "Proyecto Final", requisitos: ["daiiv", "dce4", "prod4", "inst3", "ht3"], año: 6 },
  { id: "semi1", nombre: "Seminario I - Ecología del Paisaje", requisitos: ["daiiv", "dce4", "prod4", "inst3", "ht3"], año: 6 },
  { id: "semi2", nombre: "Seminario II - Educación Ambiental", requisitos: ["daiiv", "dce4", "prod4", "inst3", "ht3"], año: 6 },
  { id: "semi3", nombre: "Seminario III - Seguimiento de Obra I", requisitos: ["daiiv", "dce4", "prod4", "inst3", "ht3"], año: 6 },
  { id: "semi4", nombre: "Seminario IV - Salud y Seguridad", requisitos: ["daiiv", "dce4", "prod4", "inst3", "ht3"], año: 6 },
  { id: "semi8", nombre: "Seminario VIII - Documentación de Obra", requisitos: ["daiiv", "dce4", "prod4", "inst3", "ht3"], año: 6 },
  { id: "semi9", nombre: "Seminario IX - Análisis de Pequeñas Obras", requisitos: ["daiiv", "dce4", "prod4", "inst3", "ht3"], año: 6 }
];

function crearMalla() {
  materias.forEach((materia) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.id = materia.id;
    div.innerText = materia.nombre;

    if (!requisitosCumplidos(materia.requisitos, materia.año)) {
      div.classList.add("desactivada");
    }

    div.addEventListener("click", () => {
      if (div.classList.contains("desactivada")) return;
      div.classList.toggle("aprobada");
      actualizarMalla();
    });

    const contenedor = document.getElementById(`año-${materia.año}`);
    if (contenedor) contenedor.appendChild(div);
  });
}

function requisitosCumplidos(requisitos, año) {
  // Requisitos normales
  let ok = requisitos.every((req) => {
    const elem = document.getElementById(req);
    return elem && elem.classList.contains("aprobada");
  });

  // Requisitos adicionales obligatorios para 4to año en adelante
  if (año >= 4) {
    const info1 = document.getElementById("info1");
    const ing1 = document.getElementById("ing1");
    if (!(info1 && info1.classList.contains("aprobada"))) return false;
    if (!(ing1 && ing1.classList.contains("aprobada"))) return false;
  }

  return ok;
}

function actualizarMalla() {
  materias.forEach((materia) => {
    const div = document.getElementById(materia.id);
    if (requisitosCumplidos(materia.requisitos, materia.año)) {
      div.classList.remove("desactivada");
    } else if (!div.classList.contains("aprobada")) {
      div.classList.add("desactivada");
    }
  });
}

window.onload = crearMalla;
