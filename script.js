let selectedPriority = null;

document.getElementById("highPriority").addEventListener("click", () => {
  selectedPriority = "high";
});

document.getElementById("lowPriority").addEventListener("click", () => {
  selectedPriority = "low";
});

document.getElementById("addTask").addEventListener("click", () => {
  const taskName = document.getElementById("taskName").value.trim();

  if (!taskName) {
    alert("Por favor ingresa un nombre para la tarea.");
    return;
  }

  if (!selectedPriority) {
    alert("Por favor selecciona la prioridad.");
    return;
  }

  addTask(taskName, selectedPriority);
  document.getElementById("taskName").value = "";
  selectedPriority = null;
});

function addTask(name, priority) {
  const listId = priority === "high" ? "highPriorityList" : "lowPriorityList";
  const list = document.getElementById(listId);

  const taskItem = document.createElement("li");

  const taskText = document.createElement("span");
  taskText.textContent = name;

  const taskActions = document.createElement("div");
  taskActions.className = "task-actions";

  const completeCheckbox = document.createElement("input");
  completeCheckbox.type = "checkbox";
  completeCheckbox.addEventListener("change", () => {
    taskText.classList.toggle("completed");
  });

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Eliminar";
  deleteButton.className = "btn";
  deleteButton.style.backgroundColor = "#dc3545";
  deleteButton.style.color = "white";
  deleteButton.addEventListener("click", () => {
    list.removeChild(taskItem);
  });

  taskActions.appendChild(completeCheckbox);
  taskActions.appendChild(deleteButton);

  taskItem.appendChild(taskText);
  taskItem.appendChild(taskActions);

  list.appendChild(taskItem);
}
