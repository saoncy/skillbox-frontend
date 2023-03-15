(function () {
  // Creates application title
  function createAppTitle(title) {
    let appTitle = document.createElement('h2');
    appTitle.innerHTML = title;
    return appTitle;
  }

  function createTodoItemForm() {
    let form = document.createElement('form');
    let input = document.createElement('input');
    let buttonWrapper = document.createElement('div');
    let button = document.createElement('button');

    form.classList.add('input-group', 'mb-3');
    input.classList.add('form-control');
    input.placeholder = 'Введите название нового дела';
    buttonWrapper.classList.add('input-group-append');
    button.disabled = true;
    button.classList.add('btn', 'btn-primary');
    button.textContent = 'Добавить дело';

    buttonWrapper.append(button);
    form.append(input);
    form.append(buttonWrapper);

    return {
      form,
      input,
      button,
    };
  }

  function createTodoList() {
    let list = document.createElement('ul');
    list.classList.add('list-group');
    return list;
  }

  function createTodoItem(item, key) {
    let todoItem = document.createElement('li');

    let buttonGroup = document.createElement('div');
    let doneButton = document.createElement('button');
    let deleteButton = document.createElement('button');

    todoItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    if (item.done) {
      todoItem.classList.add('list-group-item-success')
    }
    todoItem.textContent = item.name;

    buttonGroup.classList.add('button-group', 'button-group-sm');
    doneButton.classList.add('btn', 'btn-success');
    doneButton.textContent = 'Готово';
    deleteButton.classList.add('btn', 'btn-danger');
    deleteButton.textContent = 'Удалить';

    doneButton.addEventListener('click', () => {
      todoItem.classList.toggle('list-group-item-success');
      // let localStorageItems = JSON.parse(localStorage.getItem(key));
      // localStorageItems.forEach(el => {
      //   if (el.name === item.name) {
      //     el.done = !el.done;
      //     localStorage.setItem(key, JSON.stringify(localStorageItems));
      //   }
      // })
    });

    deleteButton.addEventListener('click', () => {
      if (confirm('Вы уверены?')) {
        todoItem.remove();
        // let localStorageItems = JSON.parse(localStorage.getItem(key));
        // localStorageItems.forEach((el, ind, arr) => {
        //   if (el.name === item.name) {
        //     if (arr.length === 1) arr = [];
        //     arr.splice(ind, ind)
        //     localStorage.setItem(key, JSON.stringify(arr));
        //   }
        // })
      }
    });

    buttonGroup.append(doneButton);
    buttonGroup.append(deleteButton);
    todoItem.append(buttonGroup);

    return todoItem;
  }

  function createTodoApp(container, key, title = 'Список дел', todoItems = []) {
    let todoAppTitle = createAppTitle(title);
    let todoItemForm = createTodoItemForm();
    let todoList = createTodoList();

    todoItemForm.input.addEventListener('keyup', () => {
      if (todoItemForm.input.value) {
        todoItemForm.button.disabled = false;
      } else {
        todoItemForm.button.disabled = true;
      }
    });

    container.append(todoAppTitle);
    container.append(todoItemForm.form);
    container.append(todoList);

    if (todoItems.length > 0) {
      todoItems.forEach(item => {
        todoList.append(createTodoItem(item, key).todoItem);
      });
    }

    // let localStorageItems = localStorage.getItem(key);
    // if (localStorageItems) {
    //   localStorageItems = JSON.parse(localStorageItems);
    //   localStorageItems.forEach(item => {
    //     todoList.append(createTodoItem(item, key).todoItem);
    //   })
    // }

    todoItemForm.form.addEventListener('submit', async ev => {
      ev.preventDefault();

      if (!todoItemForm.input.value) {
        return;
      }

      const response = await fetch('http://localhost:3000/api/todos', {
        method: 'POST',
        body: JSON.stringify({
          name: todoItemForm.input.value.trim(),
          owner: 'Saoncy',
        }),
        headers: {
          'Content-Type': 'application/json',
        }
      });


      let todoListItem = await response.json();

      // if (!localStorage.getItem(key)) {
      //   localStorage.setItem(key, JSON.stringify([todoListItem]));
      // } else {
      //   let todoListArray = JSON.parse(localStorage.getItem(key));
      //   todoListArray.push(todoListItem);
      //   localStorage.setItem(key, JSON.stringify(todoListArray));
      // }

      todoList.append(createTodoItem(todoListItem, key));

      todoItemForm.input.value = '';
      todoItemForm.button.disabled = true;
    });
  }

  window.createTodoApp = createTodoApp;
})();
