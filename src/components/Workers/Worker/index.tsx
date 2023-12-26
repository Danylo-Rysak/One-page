import { FC, useState } from 'react';
import { getCutString } from 'components/Workers/Worker/helpers';
import './index.scss';

interface WorkerProps {
  photo: string;
  phone: string;
  name: string;
  position: string;
  email: string;
}

const Worker: FC<WorkerProps> = ({ photo, phone, name, position, email }) => {
  const [showMail, setShowMail] = useState<boolean>(false);

  const cutName = getCutString(name, 30);
  const cutPosition = getCutString(position, 30);
  const cutEmail = getCutString(email, 30);

  return (
    <li className="workers__item">
      <img src={photo} className="workers__item-photo" alt={name} />
      <h3 className="workers__item-name">{cutName}</h3>
      <div className="workers__item-info">
        <p>{cutPosition}</p>
        <p
          className="workers__item-mail"
          onMouseEnter={() => {
            setShowMail(true);
          }}
          onMouseLeave={() => {
            setShowMail(false);
          }}
          style={{ position: 'relative' }}
        >
          {showMail ? (
            email.length > 30 ? (
              <span className="workers__item-mail-all">{email}</span>
            ) : null
          ) : null}
          {cutEmail}
        </p>
        <p>{phone}</p>
      </div>
    </li>
  );
};

export default Worker;
