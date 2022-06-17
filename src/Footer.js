const Footer = () => {
  return (
    <footer className='footer'>
      <div className='wrapper footer-wrapper'>
        <ul className='social-list'>
          <li class='social-list__item'>
            <a
              href='https://www.nickntoukas.com/'
              class='social-list__link hover-underline-animation-foot'
              target='_blank'
              id='portfolio'
              rel='noreferrer'
            >
              <i class='fa-solid fa-globe'></i> portfolio
            </a>
          </li>
          <li class='social-list__item'>
            <a
              href='https://github.com/Nickduke'
              class='social-list__link hover-underline-animation-foot'
              target='_blank'
              id='github'
              rel='noreferrer'
            >
              <i class='fa-brands fa-github'></i> github
            </a>
          </li>
        </ul>
      </div>
      <p class='copyright-footer'>developed & designed by nick ntoukas 2022</p>
    </footer>
  );
};

export default Footer;
