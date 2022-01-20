const sendForm = ({someElem = []}) => {
  const form = document.getElementById("callback-form");
  const statusBlock = document.createElement('div');
  const loadText = 'Идет отправка...';
  const errorText = 'Ошибка...';
  const successText = 'Отправлено!';

  const validate = (list) => {
    const name = form.querySelector("[name=fio]");
    const phone = form.querySelector("[name=tel]");
    let error = false;

    const mes = (str, input) => {
      const mes = document.createElement('div');
      mes.classList.add('mes');
      mes.textContent = str;
      mes.style.fontSize = "12px";
      mes.style.color = "red";
      mes.style.marginTop = "-5px";

      input.after(mes);
      setTimeout(() => mes.remove(), 5000);
    };

    list.forEach((input) => {
      switch (input) {
        case name:
          if (/[^а-я\s\-]+/gi.test(input.value)|| input.value.length < 2) {
            error = true;
            mes("Используйте только кириллицу!", input);
          }
          break;
        case phone:
          if (/[^\d\+]+/g.test(input.value) || input.value.length < 11 || input.value.length > 12) {
            error = true;
            mes("Введите только + и цифры! От 11 до 12 символов!", input);
          }
          break;
      }
    });

    return !error;

  };

  const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json());
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll('input[type="text"]');
    const formData = new FormData(form);
    const formBody = {};

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    if (validate(formElements)) {
      statusBlock.textContent = loadText;
      form.append(statusBlock);
      sendData(formBody)
        .then((data) => {
          console.log(data);
          statusBlock.textContent = successText;
          setTimeout(() => statusBlock.remove(), 5000);

          formElements.forEach(input => {
            input.value = '';
          });
        })
        .catch((error) => {
          statusBlock.textContent = errorText;
          form.append(statusBlock);
          console.log(error.message);
          setTimeout(() => statusBlock.remove(), 5000);
        });
    } else {
      alert('Данные формы заполнены не верно!');
    }
  };

  try {
    if (!form) {
      throw new Error('Верните форму на место, пожалуйста))');
    }
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      submitForm();
    });
  } catch(error) {
    console.log(error.message);
  }

};

export default sendForm;