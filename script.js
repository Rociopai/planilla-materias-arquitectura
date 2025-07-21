const materias = [
  { id: "info1", nombre: "Informática Nivel I", requisitos: [] },
  { id: "ing1", nombre: "Inglés Nivel I", requisitos: [] },
  { id: "com1", nombre: "Introducción a la Comunicación", requisitos: [] },
  { id: "prod1", nombre: "Introducción a la Producción", requisitos: [] },
  { id: "ida", nombre: "Introducción al Diseño Arquitectónico", requisitos: [] },
  { id: "soc", nombre: "Introducción al Estudio de la Arquitectura y la Sociedad", requisitos: [] },
  { id: "mat", nombre: "Matemática", requisitos: [] },
  { id: "mfyg", nombre: "Matemática y Física General", requisitos: ["mat"] },
  { id: "dai", nombre: "Diseño Arquitectónico I", requisitos: ["ida", "com1", "prod1", "soc"] },
  { id: "dce1", nombre: "Diseño y Cálculo Estructural I", requisitos: ["mat"] },
  { id: "matp", nombre: "Materiales de Proyecto", requisitos: ["ida", "soc"] },
  { id: "morf1", nombre: "Morfología y Comunicación I", requisitos: ["com1"] },
  { id: "prod1a", nombre: "Producción I", requisitos: ["prod1"] },
  { id: "daii", nombre: "Diseño Arquitectónico II", requisitos: ["dai", "morf1", "prod1a", "matp", "soc"] },
  { id: "dce2", nombre: "Diseño y Cálculo Estructural II", requisitos: ["dce1", "mfyg"] },
  { id: "ht1", nombre: "Historia y Teoría I", requisitos: ["matp"] },
  { id: "inst1", nombre: "Instalaciones I", requisitos: ["prod1a"] },
  { id: "morf2", nombre: "Morfología y Comunicación II", requisitos: ["morf1"] },
  { id: "prod2", nombre: "Producción II", requisitos: ["prod1a", "dce1"] },
  { id: "daiii", nombre: "Diseño Arquitectónico III", requisitos: ["daii", "morf2", "prod2", "ht1"] },
  { id: "dce3", nombre: "Diseño y Cálculo Estructural III", requisitos: ["dce2"] },
  { id: "ht2", nombre: "Historia y Teoría II", requisitos: ["ht1"] },
  { id: "inst2", nombre: "Instalaciones II", requisitos: ["inst1"] },
  { id: "morf3", nombre: "Morfología y Comunicación III", requisitos: ["morf2"] },
  { id: "prod3", nombre: "Producción III", requisitos: ["prod2", "dce2", "inst1"] },
  { id: "daiiv", nombre: "Diseño Arquitectónico IV", requisitos: ["daiii", "morf3", "prod3", "ht2"] },
  { id: "dce4", nombre: "Diseño y Cálculo Estructural IV", requisitos: ["dce3"] },
  { id: "ht3", nombre: "Historia y Teoría III", requisitos: ["ht2"] },
  { id: "info2", nombre: "Informática Nivel II", requisitos: [] },
  { id: "ing2", nombre: "Inglés Nivel II", requisitos: [] },
  { id: "inst3", nombre: "Instalaciones III", requisitos: ["inst2"] },
  { id: "prod4", nombre: "Producción IV", requisitos: ["prod3", "dce3", "inst2"] },
  { id: "legal", nombre: "Legal", requisitos: ["prod4"] },
  { id: "plan1", nombre: "Planeamiento I", requisitos: ["daiiv"] },
  { id: "plan2", nombre: "Planeamiento II", requisitos: ["plan1"] },
  { id: "pps", nombre: "Práctica Profesional Supervisada", requisitos: ["daiiv", "dce4", "prod4", "inst3", "ht3"] },
  { id: "pfinal", nombre: "Proyecto Final", requisitos: ["daiiv", "dce4", "prod4", "inst3", "ht3"] },
  { id: "semi1", nombre: "Seminario I - Ecología del Paisaje", requisitos: ["daiiv", "dce4", "prod4", "inst3", "ht3"] },
  { id: "semi2", nombre: "Seminario II - Educación Ambiental", requisitos: ["daiiv", "dce4", "prod4", "inst3", "ht3"] },
  { id: "semi3", nombre: "Seminario III - Seguimiento de Obra I", requisitos: ["daiiv", "dce4", "prod4", "inst3", "ht3"] },
  { id: "semi4", nombre: "Seminario IV - Salud y Seguridad", requisitos: ["daiiv", "dce4", "prod4", "inst3", "ht3"] },
  { id: "semi8", nombre: "Seminario VIII - Documentación de Obra", requisitos: ["daiiv", "dce4", "prod4", "inst3", "ht3"] },
  { id: "semi9", nombre: "Seminario IX - Análisis de Pequeñas Obras", requisitos: ["daiiv", "dce4", "prod4", "inst3", "ht3"] }
];

function crearMalla() {
  const malla = document.getElementById("malla");
  malla.innerHTML = "";
  materias.forEach((materia) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.id = materia.id;
    div.innerText = materia.nombre;

    if (!requisitosCumplidos(materia.requisitos)) {
      div.classList.add("desactivada");
    }

    div.addEventListener("click", () => {
      if (div.classList.contains("desactivada")) return;
      div.classList.toggle("aprobada");
      actualizarMalla();
    });

    malla.appendChild(div);
  });
}

function requisitosCumplidos(requisitos) {
  return requisitos.every((req) => {
    const elem = document.getElementById(req);
    return elem && elem.classList.contains("aprobada");
  });
}

function actualizarMalla() {
  materias.forEach((materia) => {
    const div = document.getElementById(materia.id);
    if (requisitosCumplidos(materia.requisitos)) {
      div.classList.remove("desactivada");
    } else if (!div.classList.contains("aprobada")) {
      div.classList.add("desactivada");
    }
  });
}

window.onload = crearMalla;
