import { FC, useEffect } from 'react';
import { DispatchType } from 'store/root';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from 'store/worker-service/actions';
import { showMoreWorkers } from 'store/worker-service/reducer';
import Spinner from 'components/Spiner';
import {
  getCountSelector,
  getDisabledSelector,
  getLoadingSelector,
  getUsersSelector,
} from 'store/worker-service/selectors';
import Worker from 'components/Workers/Worker';
import './index.scss';

const Workers: FC = () => {
  const dispatch: DispatchType = useDispatch();

  const users = useSelector(getUsersSelector);
  const disabled = useSelector(getDisabledSelector);
  const loading = useSelector(getLoadingSelector);
  const count = useSelector(getCountSelector);

  useEffect(() => {
    dispatch(fetchUsers(count));
  }, [count]);

  const showMore = () => {
    dispatch(showMoreWorkers());
  };

  return (
    <section className="workers " id="workers">
      <h2 className="workers__title">Working with GET request</h2>
      <ul className="workers__list">
        {loading ? (
          <Spinner />
        ) : (
          users?.map(({ id, photo, phone, name, position, email }) => (
            <Worker
              key={id}
              name={name}
              position={position}
              photo={photo as string}
              phone={phone}
              email={email}
            />
          ))
        )}
      </ul>
      {loading ? (
        <Spinner />
      ) : (
        <button
          className="addUser__form-submit"
          onClick={showMore}
          style={disabled ? { display: 'none' } : { display: 'block' }}
          disabled={disabled}
        >
          Show more
        </button>
      )}
    </section>
  );
};

export default Workers;
