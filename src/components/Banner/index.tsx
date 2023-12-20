import { FC } from 'react';
import banner from 'assets/images/banner.webp';
import './index.scss';

const Banner: FC = () => {
  return (
    <section className="main" id="main">
      <img src={banner} alt="" className="main__bg" />
      <div className="main__container">
        <h2 className="main__container-title">Test assignment for front-end developer</h2>
        <p className="main__container-text">
          What defines a good front-end developer is one that has skilled knowledge of
          HTML, CSS, JS with a vast understanding of User design thinking as they&apos;ll
          be building web interfaces with accessibility in mind. They should also be
          excited to learn, as the world of Front-End Development keeps evolving.
        </p>
        <a className="addUser__form-submit" href="#singup">
          Sign up
        </a>
      </div>
    </section>
  );
};

export default Banner;
