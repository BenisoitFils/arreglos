const ingresoTareas = document.getElementById('ingresoTareas');
const listaTareas = document.getElementById('listaTareas');
const totalTareasSpan = document.getElementById('totalTareas');
const tareasCompletadasSpan = document.getElementById('tareasCompletadas');

let tareas = [
  { id: 1, descripcion: "Cambiar las llaves", completada: false },
  { id: 2, descripcion: "Cambiar el teléfono", completada: false },
  { id: 3, descripcion: "Ir a comprar al centro comercial", completada: false }
];

let siguienteId = tareas.length + 1;

function agregar() {
  const descripcion = ingresoTareas.value.trim();
  if (descripcion !== '') {
    tareas.push({ id: siguienteId++, descripcion, completada: false });
    actualizarTareas();
    ingresoTareas.value = '';
  }
}

function eliminarTarea(id) {
  tareas = tareas.filter(tarea => tarea.id !== id);
  actualizarTareas();
}

function actualizarTareas() {
  listaTareas.innerHTML = '';

  listaTareas.innerHTML += `
    <h5>ID - Tarea</h5>
  `;

  tareas.forEach(tarea => {
    const itemLista = document.createElement('li');
    itemLista.innerHTML = `
      <span>${tarea.id} - </span>
      <span class="${tarea.completada ? 'tareas_completadas' : ''}">${tarea.descripcion}</span>
      <input type="checkbox" ${tarea.completada ? 'checked' : ''} onchange="toggleCompletado(${tarea.id})"> 
      <span class="eliminar_icono" onclick="eliminarTarea(${tarea.id})"><i class="fas fa-times delete-icon"></i></span>
    `;
    listaTareas.appendChild(itemLista);
  });
  totalTareasSpan.textContent = tareas.length;
  tareasCompletadasSpan.textContent = tareas.filter(tarea => tarea.completada).length;
}

function toggleCompletado(id) {
  const indiceTarea = tareas.findIndex(tarea => tarea.id === id);
  tareas[indiceTarea].completada = !tareas[indiceTarea].completada;
  actualizarTareas();
}

actualizarTareas();

