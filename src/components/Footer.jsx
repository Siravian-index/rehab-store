const Footer = ({ textColor }) => {
  const love = '<3';
  return (
    <footer
      className='fixed bottom-0 right-0 left-0'
      style={{ color: textColor }}
    >
      <p className='text-xs text-center'>
        Made with {love} by
        <a
          href='https://github.com/Siravian-index'
          target='_blank'
          rel='noreferrer'
          style={{ color: textColor }}
        >
          {' '}
          David Esteban
        </a>
      </p>
    </footer>
  );
};

export default Footer;
