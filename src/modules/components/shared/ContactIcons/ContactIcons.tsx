import './ContactIcons.scss';

type Props = {
  gap?: number;
};

export const ContactIcons: React.FC<Props> = ({ gap }) => {
  const gapStyle = gap
    ? { gap }
    : ({ justifyContent: 'space-between' } as React.CSSProperties);

  return (
    <ul className="contact-icons" style={{ display: 'flex', ...gapStyle }}>
      <li className="contact-icon">
        <a href="https://x.com/ " target="_blank" rel="noreferrer">
          <img src="img/icons/twitter.svg" alt="Twitter icon" />
        </a>
      </li>
      <li className="contact-icon">
        <a href="http://facebook.com" target="_blank" rel="noreferrer">
          <img src="img/icons/facebook.svg" alt="Facebook icon" />
        </a>
      </li>
      <li className="contact-icon">
        <a href="http://instagram.com" target="_blank" rel="noreferrer">
          <img src="img/icons/instagram.svg" alt="Instagram icon" />
        </a>
      </li>
    </ul>
  );
};
