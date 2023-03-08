(() => {
  const students = [];

  function createStudentForm() {
    createStudentTable();
    const form = document.createElement('form');
    const nameInput = createInput('First name', 'Иван');
    const middleNameInput = createInput('Middle name', 'Иванович');
    const surnameInput = createInput('Last name', 'Иванов');
    const dateOfBirth = createInput('Date of Birth', '01.01.2000', true);
    const dateOfAdmission = createInput('Date of admission', '01.01.2018', true)
    const faculty = createInput('Faculty', 'ИУ');
    const buttonWrapper = document.createElement('div')
    const button = document.createElement('button');

    form.classList.add('row', 'gx-3', 'gy-4', 'needs-validation');
    form.style.width = '30%';
    form.noValidate = true;
    buttonWrapper.classList.add('col-12');
    button.classList.add('btn', 'btn-primary');
    button.type = 'submit';
    button.textContent = 'Submit student'

    buttonWrapper.append(button);

    form.append(nameInput.inputWrapper);
    form.append(middleNameInput.inputWrapper);
    form.append(surnameInput.inputWrapper);
    form.append(dateOfBirth.inputWrapper);
    form.append(dateOfAdmission.inputWrapper);
    form.append(faculty.inputWrapper);
    form.append(buttonWrapper);

    form.addEventListener('submit', event => {
      event.preventDefault();
      event.stopPropagation();

      clearFormMessages();

      let isInvalid = false;

      if (nameInput.input.value.trim() === '') {
        nameInput.input.classList.add('is-invalid');
        nameInput.inputWrapper.append(createFeedback('Please enter your name', nameInput.input.id, false));
        isInvalid = true;
      }
      if (middleNameInput.input.value.trim() === '') {
        middleNameInput.input.classList.add('is-invalid');
        middleNameInput.inputWrapper.append(createFeedback('Please enter your middle name', middleNameInput.input.id, false));
        isInvalid = true;
      }
      if (surnameInput.input.value.trim() === '') {
        surnameInput.input.classList.add('is-invalid');
        surnameInput.inputWrapper.append(createFeedback('Please enter your surname', surnameInput.input.id, false));
        isInvalid = true;
      }
      if (dateOfBirth.input.value.trim() === '' || dateOfBirth.input.valueAsDate.getFullYear() < 1900) {
        dateOfBirth.input.classList.add('is-invalid');
        dateOfBirth.inputWrapper.append(createFeedback('Please enter correct date', dateOfBirth.input.id, false));
        isInvalid = true;
      }
      if (dateOfAdmission.input.value.trim() === ''
      || dateOfAdmission.input.valueAsDate.getFullYear() < 2000
      || dateOfBirth.input.valueAsDate.getFullYear() >= 2023) {
        dateOfAdmission.input.classList.add('is-invalid');
        dateOfAdmission.inputWrapper.append(createFeedback('Please enter correct date', dateOfAdmission.input.id, false));
        isInvalid = true;
      }
      if (faculty.input.value.trim() === '') {
        faculty.input.classList.add('is-invalid');
        faculty.inputWrapper.append(createFeedback('Please enter your faculty', faculty.input.id, false));
        isInvalid = true;
      }
      if (isInvalid) {
        Array.from(document.querySelectorAll('.form-control')).forEach(el => {
          if (!el.classList.contains('is-invalid') && !el.classList.contains('is-valid')) {
            el.classList.add('is-valid');
            el.parentNode.append(createFeedback('Looks good!', el.id));
          }
        });
        isInvalid = false;
      } else {
        addStudent(nameInput.input.value.trim(), middleNameInput.input.value.trim(), surnameInput.input.value.trim(),
        dateOfBirth.input.valueAsDate, dateOfAdmission.input.valueAsDate, faculty.input.value.trim());
        console.log(students);
        clearFormMessages();
        clearForms();
      }
    })

    document.getElementById('app').append(form);
  }

  function createInput(label, placeholder, date = false) {
    const inputWrapper = document.createElement('div');
    const inputLabel = document.createElement('label');
    const input = document.createElement('input');

    inputWrapper.classList.add('col-md-6');
    inputLabel.classList.add('form-label');
    inputLabel.setAttribute('for', `${label.split(' ').join('')}`.toLowerCase());
    inputLabel.textContent = label;
    input.classList.add('form-control');
    input.setAttribute('id', `${label.split(' ').join('')}`.toLowerCase());
    input.type = !date ? 'text' : 'date';
    input.placeholder = placeholder;
    input.required = true;

    inputWrapper.append(inputLabel);
    inputWrapper.append(input);

    return {
      inputWrapper,
      inputLabel,
      input
    };
  }

  function createFeedback(text, id, valid = true) {
    document.getElementById(id).removeAttribute('aria-describedby');
    const feedbackWrapper = document.createElement('div');
    valid ? feedbackWrapper.classList.add('valid-feedback') : feedbackWrapper.classList.add('invalid-feedback');
    feedbackWrapper.textContent = text;
    feedbackWrapper.setAttribute('id', `${id}Feedback`.toLowerCase());
    document.getElementById(id).setAttribute('aria-describedby', feedbackWrapper.id);

    return feedbackWrapper;
  }

  function createStudentTable() {
    const table = document.createElement('table');
    const tableHeader = createTableHeader(['Fullname', 'Faculty', 'DOB', 'College']);

    table.classList.add('table', 'table-dark', 'table-hover')
    table.style.width = '70%';

    table.append(tableHeader);
    document.getElementById('app').append(table);
  }

  function createTableHeader(array) {
    const header = document.createElement('thead');
    const row = document.createElement('tr');

    array.forEach(element => {
      const column = document.createElement('th');
      column.scope = 'col';
      column.setAttribute('id', element.split(' ').join('').toLowerCase());
      column.style.cursor = 'pointer';
      column.textContent = element;
      row.append(column);
    });

    header.append(row);

    return header;
  }

  function addStudent(name, middleName, surname, dob, doa, faculty) {
    students.push({
      fullname: surname + ' ' + name + ' ' + middleName,
      faculty: faculty,
      dob: `${dob.getDate()}.${dob.getMonth() + 1}.${dob.getFullYear()}`,
      doa: `${doa.getFullYear()}-${doa.getFullYear() + 4} (${new Date().getFullYear() - doa.getFullYear() > 4
        || (new Date.getFullYear() == doa.getFullYear() + 4 && new Date.getMonth() + 1 > 9)
        ? 'закончил'
        : new Date().getFullYear() - doa.getFullYear() + ' курс'})`,
    })
  }

  function clearFormMessages() {
    Array.from(document.querySelectorAll('.form-control')).forEach(el => {
      if (el.classList.contains('is-invalid') || el.classList.contains('is-valid')){
        el.classList.remove('is-invalid');
        el.classList.remove('is-valid');
        try {
          document.getElementById(el.getAttribute('aria-describedby')).remove();
        } catch (err) {
          console.log(err);
        }
      }
    });
  }

  function clearForms() {
    Array.from(document.querySelectorAll('.form-control')).forEach(el => {
      el.value = '';
    })
  }

  window.createStudentForm = createStudentForm;
})();
