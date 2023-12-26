import { ChangeEvent, FC, FormEvent, FormEventHandler, useEffect, useState } from 'react';
import { DispatchType } from 'store/root';
import { useDispatch, useSelector } from 'react-redux';
import FormMessage from 'components/Form/FormMessage';
import Spinner from 'components/Spiner';
import { Position, StatusInfo, User } from 'core/types';
import validationForm from 'core/validations/form-validation';
import Input from 'components/Form/Input';
import { fetchUsers } from 'store/worker-service/actions';
import { postUser } from 'core/api/requests';
import { changeStatusError409, changeSuccess } from 'store/worker-service/reducer';
import {
  getError409Selector,
  getPositionsSelector,
  getSuccessSelector,
} from 'store/worker-service/selectors';
import './index.scss';

const Form: FC = () => {
  const dispatch: DispatchType = useDispatch();

  const [disable, setDisable] = useState<boolean>(true);
  const [statusInfo, setStatusInfo] = useState<StatusInfo>({
    name: false,
    email: false,
    phone: false,
    position: false,
    positions_id: false,
    photo: false,
  });

  const positions = useSelector(getPositionsSelector);
  const success = useSelector(getSuccessSelector);
  const error409 = useSelector(getError409Selector);

  const [newUser, setNewUser] = useState<User>({
    name: '',
    email: '',
    phone: '',
    position: '',
    positions_id: '',
    photo: 'Upload your photo',
  });

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  useEffect(() => {
    if (statusInfo.name && statusInfo.email && statusInfo.phone && statusInfo.photo) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [newUser.name, newUser.email, newUser.phone, newUser.photo]);

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e: FormEvent) => {
    e.preventDefault();
    dispatch(changeStatusError409(false));
    const formData = new FormData();
    formData.append('name', newUser.name);
    formData.append('email', newUser.email);
    formData.append('phone', newUser.phone);
    formData.append('position_id', newUser.positions_id);
    formData.append('photo', newUser.photo);

    try {
      await postUser(formData);
      dispatch(fetchUsers(6));
      dispatch(changeSuccess(true));

      setTimeout(() => {
        dispatch(changeSuccess(false));
      }, 4000);
    } catch (e) {
      dispatch(changeStatusError409(true));
    }

    setNewUser(() => ({
      name: '',
      email: '',
      phone: '',
      position: '',
      positions_id: '',
      photo: 'Upload your photo',
    }));

    setStatusInfo(() => ({
      name: false,
      email: false,
      phone: false,
      position: false,
      positions_id: false,
      photo: false,
    }));
  };

  const updateNewUserInfo = (e: ChangeEvent<HTMLInputElement>): void => {
    switch (e.target.getAttribute('name')) {
      case 'position_id':
        const positioContent = e.target.parentElement?.textContent;
        setNewUser((): User => {
          return {
            ...newUser,
            positions_id: e.target.getAttribute('id') + '',
            position: positioContent ? positioContent : '',
          };
        });
        break;
      case 'photo':
        const files = e.target.files;

        if (
          e.target.getAttribute('type') === 'file' &&
          files &&
          files[0].size < 5000000
        ) {
          setStatusInfo((state) => ({ ...state, photo: true }));
          setNewUser((): User => {
            return {
              ...newUser,
              photo: files[0],
            };
          });
          return;
        } else {
          setStatusInfo((state) => ({ ...state, photo: false }));
          if (
            e.target.getAttribute('type') === 'file' &&
            files &&
            files[0].size > 5000000
          ) {
            setNewUser((): User => {
              return {
                ...newUser,
                photo: files[0].name,
              };
            });
          } else {
            setNewUser((): User => {
              return {
                ...newUser,
                photo: '',
              };
            });
          }
        }
        break;
    }
  };

  return (
    <section className="addUser">
      <h2 className="addUser__title">Working with POST request</h2>
      {success ? (
        <FormMessage />
      ) : (
        <form className="form addUser__form" onSubmit={onSubmit} id="singup">
          <div className="addUser__form-user">
            <Input
              value={newUser.name}
              name="name"
              handler={(e) => setNewUser((state) => ({ ...state, name: e.target.value }))}
              status={setStatusInfo}
              label={'Your name'}
              id="form__name"
            />

            <Input
              value={newUser.email}
              name="email"
              handler={(e) =>
                setNewUser((state) => ({ ...state, email: e.target.value }))
              }
              status={setStatusInfo}
              label={'Email'}
              id="form__email"
            />

            <Input
              value={newUser.phone}
              name="phone"
              handler={(e) =>
                setNewUser((state) => ({ ...state, phone: e.target.value }))
              }
              status={setStatusInfo}
              label={'Phone'}
              id="form__phone"
            />
          </div>

          <div className="addUser__form-position">
            <span className="addUser__form-position-title">Select your position</span>

            {!positions ? (
              <Spinner />
            ) : (
              positions.map(({ id, name }: Position) => {
                return (
                  <label htmlFor={id + ''} key={id}>
                    <input
                      type="radio"
                      id={id + ''}
                      name="position_id"
                      onChange={updateNewUserInfo}
                      value={newUser.positions_id}
                      checked={newUser.positions_id === id + ''}
                    />
                    {name}
                  </label>
                );
              })
            )}

            <div className="addUser__form-user-container">
              <label
                htmlFor="addPhoto"
                className="addUser__form-position-file"
                style={
                  validationForm(newUser.photo, 'file')?.errorStatus
                    ? { border: '1px solid red' }
                    : {}
                }
              >
                <input
                  value={newUser.photo ? '' : undefined}
                  type="file"
                  name="photo"
                  onChange={updateNewUserInfo}
                  accept=".jpg, .jpeg"
                  id="addPhoto"
                />
                <label
                  className="button__file"
                  htmlFor="addPhoto"
                  style={
                    validationForm(newUser.photo, 'file')?.errorStatus
                      ? { border: '1px solid red' }
                      : {}
                  }
                >
                  Upload
                </label>
                {typeof newUser.photo === 'string'
                  ? newUser.photo
                  : `${newUser.photo?.name.slice(0, 25)}...`}
              </label>
              {validationForm(newUser.photo, 'file')?.errorStatus ? (
                <div className="addUser__form-user-container-input-error">
                  {validationForm(newUser.photo, 'file')?.message}
                </div>
              ) : null}
            </div>
          </div>
          {error409 ? (
            <div className="form__error">User with this phone or email already exist</div>
          ) : null}

          <button className="addUser__form-submit" disabled={disable}>
            Sing up
          </button>
        </form>
      )}
    </section>
  );
};

export default Form;
