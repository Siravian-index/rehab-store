const Footer = () => {
  const love = '<3';
  return (
    <footer className='fixed bottom-0 right-0 left-0'>
      <p className='text-xs text-center'>
        Made with {love} by{' '}
        <a
          href='https://github.com/Siravian-index'
          target='_blank'
          rel='noreferrer'
          className='hover:text-blue-700'
        >
          David Esteban
        </a>
      </p>
    </footer>
  );
};

export default Footer;
