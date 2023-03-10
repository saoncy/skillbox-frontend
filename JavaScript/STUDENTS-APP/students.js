(() => {
  const STORAGE_KEY = 'STUDENTS';
  const sortFunctions = [sortByFullname, sortByFaculty, sortByDob, sortByDoa];
  let students = [];


  function createApp() {
    const app = document.getElementById('app');

    const inputWrapper = createInputWrapper();
    const filterBlock = createFilterBlock();
    const inputForm = createStudentForm();
    const studentsTable = createStudentTable();

    inputWrapper.append(filterBlock.filterWrapper);
    inputWrapper.append(inputForm.form);
    app.append(inputWrapper);
    app.append(document.createElement('hr'));
    app.append(studentsTable.table);

    inputForm.form.addEventListener('submit', event => {
      event.preventDefault();
      event.stopPropagation();

      clearFormMessages();

      let isInvalid = false;

      if (inputForm.nameInput.input.value.trim() === '') {
        inputForm.nameInput.input.classList.add('is-invalid');
        inputForm.nameInput.inputWrapper.append(createFeedback('Please enter your name', inputForm.nameInput.input.id, false));
        isInvalid = true;
      }
      if (inputForm.middleNameInput.input.value.trim() === '') {
        inputForm.middleNameInput.input.classList.add('is-invalid');
        inputForm.middleNameInput.inputWrapper.append(createFeedback('Please enter your middle name', inputForm.middleNameInput.input.id, false));
        isInvalid = true;
      }
      if (inputForm.surnameInput.input.value.trim() === '') {
        inputForm.surnameInput.input.classList.add('is-invalid');
        inputForm.surnameInput.inputWrapper.append(createFeedback('Please enter your surname', inputForm.surnameInput.input.id, false));
        isInvalid = true;
      }
      if (inputForm.dateOfBirth.input.value.trim() === '' || inputForm.dateOfBirth.input.valueAsDate.getFullYear() < 1900) {
        inputForm.dateOfBirth.input.classList.add('is-invalid');
        inputForm.dateOfBirth.inputWrapper.append(createFeedback('Please enter correct date', inputForm.dateOfBirth.input.id, false));
        isInvalid = true;
      }
      if (inputForm.dateOfAdmission.input.value.trim() === ''
      || inputForm.dateOfAdmission.input.valueAsDate.getFullYear() < 2000
      || inputForm.dateOfBirth.input.valueAsDate.getFullYear() >= 2023) {
        inputForm.dateOfAdmission.input.classList.add('is-invalid');
        inputForm.dateOfAdmission.inputWrapper.append(createFeedback('Please enter correct date', inputForm.dateOfAdmission.input.id, false));
        isInvalid = true;
      }
      if (inputForm.faculty.input.value.trim() === '') {
        inputForm.faculty.input.classList.add('is-invalid');
        inputForm.faculty.inputWrapper.append(createFeedback('Please enter your faculty', inputForm.faculty.input.id, false));
        isInvalid = true;
      }
      if (isInvalid) {
        Array.from(document.querySelectorAll('.student__form-control')).forEach(el => {
          if (!el.classList.contains('is-invalid') && !el.classList.contains('is-valid')) {
            el.classList.add('is-valid');
            el.parentNode.append(createFeedback('Looks good!', el.id));
          }
        });
        isInvalid = false;
      } else {
        const studentObj = {
          name: inputForm.nameInput.input.value.trim(),
          middleName: inputForm.middleNameInput.input.value.trim(),
          surname: inputForm.surnameInput.input.value.trim(),
          dob: inputForm.dateOfBirth.input.valueAsDate,
          doa: inputForm.dateOfAdmission.input.valueAsDate,
          faculty: inputForm.faculty.input.value.trim()
        };

        saveStudent(studentObj);
				addStudentsToTable();
        clearFormMessages();
        clearForms();
      }
    });


    students = localStorage.getItem(STORAGE_KEY);
    if (students) {
      students = JSON.parse(students);
      addStudentsToTable();
    }
  }


  function createStudentForm() {
    const form = document.createElement('form');
    const nameInput = createStudentInput('First name', 'Иван');
    const middleNameInput = createStudentInput('Middle name', 'Иванович');
    const surnameInput = createStudentInput('Last name', 'Иванов');
    const dateOfBirth = createStudentInput('Date of Birth', '01.01.2000', true);
    const dateOfAdmission = createStudentInput('Date of admission', '01.01.2018', true)
    const faculty = createStudentInput('Faculty', 'ИУ');
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

    return {
      form,
      nameInput,
      middleNameInput,
      surnameInput,
      dateOfBirth,
      dateOfAdmission,
      faculty
    }
  }


  function createStudentInput(label, placeholder, date = false) {
    const inputWrapper = document.createElement('div');
    const inputLabel = document.createElement('label');
    const input = document.createElement('input');

    inputWrapper.classList.add('col-6');
    inputLabel.classList.add('form-label');
    inputLabel.setAttribute('for', `${label.split(' ').join('')}`.toLowerCase());
    inputLabel.textContent = label;
    input.classList.add('form-control', 'student__form-control');
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
    const tableBody = document.createElement('tbody');
    const tableHeader = createTableHeader(['Fullname', 'Faculty', 'DOB', 'College']);

    table.classList.add('table', 'table-dark', 'table-hover', 'my-4')
    // table.style.width = '70%';

    table.append(tableHeader);
    table.append(tableBody);

    return {
      table,
      tableHeader,
      tableBody
    };
  }


  function createTableHeader(array) {
    const header = document.createElement('thead');
    const row = document.createElement('tr');

    for (let i = 0; i < array.length; i++) {
      const column = document.createElement('th');
      column.scope = 'col';
      column.setAttribute('id', array[i].split(' ').join('').toLowerCase());
      column.style.cursor = 'pointer';
      column.textContent = array[i];
      column.addEventListener('click', sortFunctions[i]);
      row.append(column);
    }

    header.append(row);

    return header;
  }


  function createStudentRecord(student) {
    const record = document.createElement('tr');

    for (let prop in info = createStudentRowObject(student)) {
      const column = document.createElement('td');
      column.textContent = info[prop];
      record.append(column);
    }

    return record;
  }


  function createStudentRowObject(student) {
    const today = new Date();
    if (typeof(student.dob) === 'string' || typeof(student.doa) === 'string') {
      student.dob = new Date(student.dob);
      student.doa = new Date(student.doa);
    }
    return {
      fullname: student.surname + ' ' + student.name + ' ' + student.middleName,
      faculty: student.faculty,
      dob: `${student.dob.getDate()}.${student.dob.getMonth() + 1}.${student.dob.getFullYear()} (${today.getFullYear() - student.dob.getFullYear()} years)`,
      doa: `${student.doa.getFullYear()}-${student.doa.getFullYear() + 4} (${today.getFullYear() - student.doa.getFullYear() > 4
        || (today.getFullYear() == student.doa.getFullYear() + 4 && today.getMonth() + 1 > 9)
        ? 'finished'
        : today.getFullYear() - student.doa.getFullYear() + ' year'})`,
    }
  }


  function createFilterBlock() {
    const filterWrapper = document.createElement('div');
    const fullnameInput = createFilterInput('Search by full name', 'Fullname');
    const facultyInput = createFilterInput('Search by faculty', 'Faculty');
    const DOBInput = createFilterInput('Search by DoB (exact match)', 'DoB');
    const DOAInput = createFilterInput('Search by DoA (exact match)', 'DoA');

    filterWrapper.classList.add('row', 'gy-4');
    filterWrapper.style.width = '30%';

    filterWrapper.append(fullnameInput.inputWrapper);
    filterWrapper.append(facultyInput.inputWrapper);
    filterWrapper.append(DOBInput.inputWrapper);
    filterWrapper.append(DOAInput.inputWrapper);

    return {
      filterWrapper,
      fullnameInput,
      facultyInput,
      DOBInput,
      DOAInput
    }
  }


  function createFilterInput(label, placeholder) {
    const inputWrapper = document.createElement('div');
    const inputLabel = document.createElement('label');
    const input = document.createElement('input');

    inputWrapper.classList.add('col-12');
    inputLabel.classList.add('form-label');
    inputLabel.setAttribute('for', `filter-${placeholder.split(' ').join('')}`.toLowerCase());
    inputLabel.textContent = label;
    input.classList.add('form-control');
    input.setAttribute('id', `filter-${placeholder.split(' ').join('')}`.toLowerCase());
    input.placeholder = placeholder;

    inputWrapper.append(inputLabel);
    inputWrapper.append(input);

    return {
      inputWrapper,
      inputLabel,
      input
    };
  }


  function createInputWrapper() {
    const wrapper = document.createElement('div');

    wrapper.classList.add('d-flex', 'justify-content-around', 'align-items-start');

    return wrapper;
  }

  function addStudentsToTable() {
    const tableBody = document.querySelector('tbody');

    tableBody.innerHTML = '';

    students.forEach(el => {
      const studentRecord = createStudentRecord(el);
      tableBody.append(studentRecord);
    })
  }


  function saveStudent(obj) {
    if (!localStorage.getItem(STORAGE_KEY)) {
      console.log('creating new storage');
      students = [obj];
      localStorage.setItem(STORAGE_KEY, JSON.stringify([obj]));
    } else {
      getLatestData()
      students.push(obj);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
    }
  }


  function clearFormMessages() {
    Array.from(document.querySelectorAll('.student__form-control')).forEach(el => {
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


  function getLatestData() {
    students = JSON.parse(localStorage.getItem(STORAGE_KEY));
  }


  function sortByFullname() {
    console.log('fullname')

    getLatestData();

    students.sort((a, b) => {
      if ([a.surname, a.name, a.middleName].join(' ').toLowerCase() < [b.surname, b.name, b.middleName].join(' ').toLowerCase()) return -1;
      if ([a.surname, a.name, a.middleName].join(' ').toLowerCase() > [b.surname, b.name, b.middleName].join(' ').toLowerCase()) return 1;
      if ([a.surname, a.name, a.middleName].join(' ').toLowerCase() = [b.surname, b.name, b.middleName].join(' ').toLowerCase()) return 0;
    });

    addStudentsToTable();
  }


  function sortByFaculty() {
    console.log('faculty')

    getLatestData();

    students.sort((a, b) => {
      if (a.faculty.toLowerCase() < b.faculty.toLowerCase()) return -1;
      if (a.faculty.toLowerCase() > b.faculty.toLowerCase()) return 1;
      if (a.faculty.toLowerCase() == b.faculty.toLowerCase()) return 0;
    });

    addStudentsToTable();
  }


  function sortByDob() {
    console.log('dob')

    getLatestData();

    students.sort((a, b) => {
      return new Date(a.dob) - new Date(b.dob);
    });

    addStudentsToTable();
  }


  function sortByDoa() {
    console.log('doa')

    getLatestData();

    students.sort((a, b) => {
      return new Date(a.doa) - new Date(b.doa);
    })

    addStudentsToTable();
  }


  window.createApp = createApp;
})();
