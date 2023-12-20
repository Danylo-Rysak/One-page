import { FC } from 'react';
import Header from 'components/Header';
import Banner from 'components/Banner';

const App: FC = () => {
  return (
    <div style={{ margin: '0 auto', textAlign: 'center' }}>
      <Header />
      <Banner />
    </div>
  );
};

export default App;
