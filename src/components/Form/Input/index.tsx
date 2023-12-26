import {
  useState,
  useEffect,
  CSSProperties,
  ChangeEventHandler,
  ChangeEvent,
  Dispatch,
  SetStateAction,
} from 'react';
import './index.scss';
import { StatusInfo } from 'core/types';
import validationForm from 'core/validations/form-validation';

const Input = ({
  value,
  handler,
  label,
  id,
  name,
  status,
}: {
  value: string;
  handler: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  id: string;
  name: string;
  status: Dispatch<SetStateAction<StatusInfo>>;
}) => {
  const [inputFocus, setInputFocus] = useState(false);
  const [message, setMessage] = useState(false);
  const styleClass = value === '' ? '' : validationForm(value, name)?.class;

  useEffect(() => {
    status((state) => ({ ...state, [name]: true }));
  }, [value]);

  const onFocus = (status: boolean) => {
    setInputFocus(status);
    !status && value === '' && setMessage(false);
  };

  const labelStyle = (): CSSProperties => {
    if (!inputFocus && value !== '') {
      return { top: 0, transition: 'all .2s', fontSize: '12px' };
    } else if (inputFocus && value === '') {
      return { top: 0, transition: 'all .2s', fontSize: '12px' };
    } else if (value !== '') {
      return { top: 0, transition: 'all .2s', fontSize: '12px' };
    } else if (inputFocus && value !== '') {
      return { top: '50%', transition: 'all .2s' };
    } else if (!inputFocus && value === '') {
      return { top: '50%', transition: 'all .2s' };
    } else {
      return {};
    }
  };

  const onInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    handler(e);
    setMessage(true);
  };

  const renderInput = () => {
    return (
      <>
        <input
          onFocus={() => onFocus(true)}
          onBlur={() => onFocus(false)}
          onChange={onInputChange}
          id={id}
          type="text"
          className={`custom-input__input ${styleClass}`}
          placeholder=""
          value={value}
          name={name}
        />
        <label
          onClick={() => onFocus(true)}
          htmlFor={id}
          style={labelStyle()}
          className={`custom-input__label ${styleClass}`}
        >
          {label}
        </label>

        <div className="custom-input__message">
          {value !== '' && message ? (
            <div className="custom-input__message-error-text">
              {validationForm(value, name)?.message}
            </div>
          ) : null}
        </div>
      </>
    );
  };

  return <div className="custom-input">{renderInput()}</div>;
};

export default Input;
