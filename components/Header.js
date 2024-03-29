import Link from 'next/link';

import Nav from './Nav';
import Toggle from './Toggle';
import { useTheme } from 'next-themes';

export default function Header({ mounted }) {
    const { resolvedTheme, setTheme } = useTheme();

    const handleThemeChange = () =>
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');

    return (
        <div className='w-full z-10 sticky top-0 bg-white dark:bg-dark-theme mt-4 md:pt-2'>
            <header className='flex items-start justify-between max-w-5xl mx-auto pt-1 md:pt-2 pb-1 px-6 sm:px-16'>
                <Link href='/'>
                    <a>
                        <p className='z-50 text-xl leading-5 font-bold tracking-tighter cursor-pointer min-w-max self-center order-1'>
                            Jérémy
                            <br />
                            Gautrais
                        </p>
                    </a>
                </Link>
                <Nav />
                <Toggle handleClick={handleThemeChange} aria='Toggle Dark Mode'>
                    {mounted && (
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            className='w-5 h-5 text-gray-800 dark:text-gray-200'
                        >
                            {resolvedTheme === 'dark' ? (
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                                />
                            ) : (
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                                />
                            )}
                        </svg>
                    )}
                </Toggle>
            </header>
        </div>
    );
}
