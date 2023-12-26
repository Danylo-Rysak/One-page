import { ValidationForm } from 'core/types';

const validationForm = (value: string | File, name: string): ValidationForm | null => {
  const valueStr = value as string;
  const valueFile = value as File | string;

  switch (name) {
    case 'name':
      if (valueStr.length === 0) {
        return {
          errorStatus: true,
          message: '',
          class: '',
        };
      } else if (valueStr.length < 2) {
        return {
          errorStatus: true,
          message: 'Please enter more than 2 characters',
          class: 'error',
        };
      } else if (valueStr.length > 2) {
        return {
          errorStatus: false,
          message: '',
          class: '',
        };
      } else {
        return {
          errorStatus: false,
          message: '',
          class: '',
        };
      }
    case 'email':
      const validValueEmail = valueStr.match(/^[\w\.-]+@[\w\.-]+\.\w+$/);
      const onlyLatiOrNumnEmail = valueStr.match(/^[a-zA-Z0-9@.\-_]+$/);

      if (valueStr.length === 0) {
        return {
          errorStatus: true,
          message: '',
          class: '',
        };
      } else if (onlyLatiOrNumnEmail === null) {
        return {
          errorStatus: true,
          message: 'Mail in Latin and numbers',
          class: 'error',
        };
      } else if (validValueEmail === null) {
        return {
          errorStatus: true,
          message: 'Mail format mail@mail.com',
          class: 'error',
        };
      } else {
        return {
          errorStatus: false,
          message: '',
          class: '',
        };
      }
    case 'phone':
      const telReg = /^(?:\+38\s?)?0\d{2}\s?(\d{3}\s?\d{2}\s?\d{2})$/;
      if (valueStr.length === 0) {
        return {
          errorStatus: true,
          message: '',
          class: '',
        };
      } else if (valueStr.match(telReg) === null) {
        return {
          errorStatus: true,
          message: 'Format +38 (XXX) XXX - XX - XX',
          class: 'error',
        };
      } else {
        return {
          errorStatus: false,
          message: '',
          class: '',
        };
      }
    case 'file':
      if (valueFile === 'Upload your photo') {
        return {
          errorStatus: false,
          message: '',
          class: '',
        };
      } else if (typeof valueFile === 'string') {
        return {
          errorStatus: true,
          message: 'No more 5mg and only .jpg, .jpeg',
          class: '',
        };
      } else {
        return {
          errorStatus: false,
          message: '',
          class: '',
        };
      }
    default:
      return null;
  }
};

export default validationForm;
