const title = document.getElementById("title");
const description = document.getElementById("description");
const container = document.querySelector(".container");
const form = document.querySelector("form");

const tasks = localStorage.getItem("tasks")
  ? JSON.parse(localStorage.getItem("tasks"))
  : [];
showAllTasks();

function showAllTasks() {
  tasks.forEach((value, index) => {
    const div = document.createElement("div");
    div.setAttribute("class", "task");
    const innerdiv = document.createElement("div");
    div.append(innerdiv);
    const p = document.createElement("p");
    p.innerText = value.title;
    innerdiv.append(p);
    const span = document.createElement("span");
    span.innerText = value.description;
    innerdiv.append(span);

    const btn = document.createElement("button");
    div.append(btn);
    btn.innerText = "-";

    btn.addEventListener("click", () => {
      removeTask();
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      showAllTasks();
    });
    btn.setAttribute("class", "deleteBtn");

    container.append(div);
  });
}

function removeTask() {
  tasks.forEach(() => {
    const div = document.querySelector(".task");
    div.remove();
  });
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  removeTask();

  tasks.push({
    title: title.value,
    description: description.value,
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  showAllTasks();
});
