(() => {
  function createStudentForm() {
    const form = document.createElement('form');
    const nameInput = createInput('First name', 'Иван');
    const middleNameInput = createInput('Middle name', 'Иванович');
    const surnameInput = createInput('Last name', 'Иванов');
    const dateOfBirth = createInput('Date of Birth', '01.01.2000');
    const dateOfAdmission = createInput('Date of admission', '01.01.2018')
    const faculty = createInput('Faculty', 'ИУ');
    const buttonWrapper = document.createElement('div')
    const button = document.createElement('button');

    form.classList.add('row', 'gx-3', 'gy-4', 'needs-validation');
    form.style.width = '50%';
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
  }

  function createInput(label, placeholder, date = false) {
    const inputWrapper = document.createElement('div');
    const inputLabel = document.createElement('label');
    const input = document.createElement('input');

    inputWrapper.classList.add(`col-md-4`);
    inputLabel.classList.add('form-label');
    inputLabel.setAttribute('for', `${label.split(' ').join('')}`);
    inputLabel.textContent = label;
    input.classList.add('form-control');
    input.setAttribute('id', `${label.split(' ').join('')}`);
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

  window.createStudentForm = createStudentForm;
})();
