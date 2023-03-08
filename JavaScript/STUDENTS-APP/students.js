(() => {
  function createStudentForm() {
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
      || dateOfAdmission.input.valueAsDate.getFullYear() >= 2023) {
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

    inputWrapper.classList.add(`col-md-4`);
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

  function clearFormMessages() {
    Array.from(document.querySelectorAll('.form-control')).forEach(el => {
      if (el.classList.contains('is-invalid') || el.classList.contains('is-valid')){
        el.classList.remove('is-invalid');
        el.classList.remove('is-valid');
        document.getElementById(el.getAttribute('aria-describedby')).remove();
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
