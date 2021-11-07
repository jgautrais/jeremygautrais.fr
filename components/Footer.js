import React from 'react';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

const Footer = () => {
  const { t } = useTranslation('common');

  const MenuLink = React.forwardRef(({ children, href }, ref) => (
    <a
      ref={ref}
      href={href}
      className='block text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 mb-5'
    >
      {children}
    </a>
  ));
  MenuLink.displayName = 'MenuLink';

  return (
    <div className='max-w-5xl w-full px-8 sm:px-16 mt-3 pb-40'>
      <footer className='border-t border-gray-200 dark:border-gray-700 mt-28 md:mt-36 pt-10'>
        <div className='flex'>
          <div className='mr-24 sm:mr-32'>
            <a
              href='https://www.linkedin.com/in/jgautrais/'
              target='_blank'
              rel='noreferrer'
              className='block text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 mb-5'
            >
              Linkedin
            </a>
            <a
              href='https://github.com/jgautrais'
              target='_blank'
              rel='noreferrer'
              className='block text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 mb-5'
            >
              Github
            </a>
            <a
              href='https://www.instagram.com/jerehoh/'
              target='_blank'
              rel='noreferrer'
              className='block text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 mb-5'
            >
              Instagram
            </a>
          </div>
          <div>
            <Link href='/#projects' passHref>
              <MenuLink>{t('navbar.projects')}</MenuLink>
            </Link>
            <Link href='/about#contact' passHref>
              <MenuLink>Contact</MenuLink>
            </Link>
          </div>
        </div>

        <p className='text-xs text-gray-500 dark:text-gray-400 mt-20'>
          &copy; 2021 - Jérémy Gautrais
        </p>
      </footer>
    </div>
  );
};

export default Footer;
