import './Footer.scss';

export const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer__top">
        <section className="footer__hours">
          <h3>Opening hours</h3>
          <div className="footer__info">
            <p>Mon - Sat: 11:00 - 23:00</p>
            <p>Sun: 11:00 - 19:00</p>
            <p>Food in the restaurant and takeaway!</p>
          </div>
        </section>
        <section className="footer__location">
          <h3>Location</h3>
          <div className="footer__info">
            <p>130 Fulton St, New York</p>
            <p>NY 10038, USA</p>
          </div>
        </section>
        <section className="footer__socials">
          <h3>Socials</h3>
          <div className="footer__info">
            <a href="http://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="http://facebook.com" target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href="http://x.com" target="_blank" rel="noreferrer">
              Twitter
            </a>
          </div>
        </section>
      </div>
      <div className="footer__bottom">
        <p>Copyright ©2021 by Bonbons Chocolate</p>
      </div>
    </footer>
  );
};
