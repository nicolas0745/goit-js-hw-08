const throttle = require('lodash.throttle');
const form = document.querySelector('.feedback-form');
const inputEmail = form.querySelector('input[type=email]');
const textarea = form.querySelector('textarea');
const keyForm = 'feedback-form-state';
const saveKey = (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    localStorage.setItem(key, jsonValue);
  } catch (error) {
    console.log(`Error1: ${error.name} => ${error.message}`);
  }
};
const loadKey = key => {
  try {
    const getKey = localStorage.getItem(key);
    return getKey === null ? undefined : JSON.parse(getKey);
  } catch (error) {
    console.log(`Error2: ${error.name} => ${error.message}`);
  }
};
const objData = loadKey(keyForm);
const sendData = e => {
  e.preventDefault();
  console.log(loadKey(keyForm));
  localStorage.removeItem(keyForm);
  e.target.reset();
};

const updateKeys = e => {
  const haveData = loadKey(keyForm);
  if (haveData !== undefined) {
    const key = loadKey(keyForm);
    key.email = inputEmail.value;
    key.message = textarea.value;
    saveKey(keyForm, key);
    return;
  }

  const objLoad = {
    email: inputEmail.value,
    message: textarea.value,
  };
  saveKey(keyForm, objLoad);
};

if (objData !== undefined) {
  inputEmail.value = objData.email;
  textarea.value = objData.message;
}

form.addEventListener('submit', sendData);
form.addEventListener('input', throttle(updateKeys, 500));
