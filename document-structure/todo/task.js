const inputElement = document.getElementById('task__input');
const tasksListElement = document.getElementById('tasks__list');
const tasksToRestore = localStorage.getItem('tasks');

if (tasksToRestore) {
  const tasksToRestoreArray = JSON.parse(tasksToRestore);
  tasksToRestoreArray.forEach(taskTitle => {
    addTasks(taskTitle);
  });
}

document.getElementById('tasks__add').addEventListener('click', (event) => {
  event.preventDefault();

  if(!inputElement.value.trim()){
    return;
}

addTasks(inputElement.value);
updateLocalStorage();

inputElement.value='';
});



tasksListElement.addEventListener('click',(event) => {
  event.preventDefault();

  if(event.target.closest('.task__remove')) {
    event.target.closest('.task').remove();
    updateLocalStorage();

  }
});

function updateLocalStorage() {
  const tasksTitleArray = Array.from(tasksListElement.children).map(taskItemElement => taskItemElement.querySelector('.task__title').innerText);
  localStorage.setItem('tasks', JSON.stringify(tasksTitleArray));
}

function addTasks(title) {
    tasksListElement.insertAdjacentHTML('beforeend', `<div class="task">
                  <div class="task__title">
                    ${title}
                  </div>
                  <a href="#" class="task__remove">&times;</a>
                </div>`);
}
