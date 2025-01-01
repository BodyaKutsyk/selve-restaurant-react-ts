import './AboutUs.scss';

export const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-us__wrapper">
        <h2>About Us</h2>

        <div className="about-us__info">
          <p>
            Welcome to Selve Restaurant, a place where culinary artistry meets
            the warm embrace of Italian tradition. Nestled in the heart of a
            picturesque city, we pride ourselves on bringing you an authentic
            taste of Italy with every dish we serve.
          </p>
          <p>
            Our journey began with a simple passion: to create a dining
            experience that captures the spirit of Italian hospitality and the
            flavors of its rich cuisine. From freshly made pasta to exquisite
            risottos, each recipe is crafted with love, using the finest
            ingredients sourced both locally and from the heart of Italy.
          </p>
        </div>
      </div>
      <div className="about-us__img"></div>
    </section>
  );
};
