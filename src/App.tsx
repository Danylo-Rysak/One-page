import { FC } from 'react';
import Header from 'components/Header';
import Banner from 'components/Banner';
import Workers from 'components/Workers';
import Form from 'components/Form';

const App: FC = () => {
  return (
    <div style={{ margin: '0 auto', textAlign: 'center' }}>
      <Header />
      <Banner />
      <Workers />
      <Form />
    </div>
  );
};

export default App;
