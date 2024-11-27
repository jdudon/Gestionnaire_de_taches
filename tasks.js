  document.getElementById('task-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    const taskItem = document.createElement('li');
    taskItem.textContent = taskInput.value;
  
    // Ajouter le bouton Supprimer
    //Créer le bouton supprimer
    //Appliquer le texte "Supprimer"
    //addEventListener > au click > fonction >
        // dans l'addEventListener: removeChild le li du ul.
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Supprimer';
    deleteButton.addEventListener('click', function () {
      taskList.removeChild(taskItem);
    });
  //appenChild le bouton dans le li
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
    taskInput.value = '';
      // Ajouter le bouton Modifier
        //Créer le bouton modifier
        //Appliquer le texte "Modifier"
        //addEventListener > au click > fonction >
            //Céer un nouvel input
            //Ajouter le type 'text' à l'input
            //Ajouter en valeur de l'input le contenu textuel du premier élément enfant (firstChild) du li
            //Créer un bouton avec le texte Sauvegarder
            //addEventListener > au click > fonction >
                //Remplacer le texte du premier élément enfant(firstChild) du li par la valeur du nouvel input
                //Supprimer le nouvel input et le bouton sauvegarder
const editButton = document.createElement('button');
editButton.textContent = 'Modifier';
editButton.addEventListener('click', function () {
  const newInput = document.createElement('input');
  newInput.type = 'text';
  newInput.value = taskItem.firstChild.textContent;

  const saveButton = document.createElement('button');
  saveButton.textContent = 'Sauvegarder';
  saveButton.addEventListener('click', function () {
    taskItem.firstChild.textContent = newInput.value;
    taskItem.removeChild(newInput);
    taskItem.removeChild(saveButton);
  });

  taskItem.insertBefore(newInput, editButton);
  taskItem.insertBefore(saveButton, editButton);
});

taskItem.appendChild(editButton);
  });
