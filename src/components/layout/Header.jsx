import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenuFold } from 'react-icons/ai';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Header = () => {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const router = useRouter();

  const handleClick = () => {
    setNav(!nav);
  };

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  const links = [
    { text: 'Home', href: '/' },
    { text: 'Who We Are', href: '/who-we-are' },
    { text: 'Past Projects', href: '/past-project' },
    { text: 'Contact Us', href: '/contact-us' },
    { text: 'Blog', href: '/blog' },
    { text: 'Impact Report', href: '/impact-report' },
  ];

  useEffect(() => {
    // Detect the current route and set the active link accordingly
    const currentPath = router.pathname;
    const activeIndex = links.findIndex((link) => link.href === currentPath);
    if (activeIndex !== -1) {
      setActiveLink(activeIndex);
    }
  }, [router.pathname]);

  return (
    <main>
      <div className='bg-white shadow-lg'>
        <div className='h-25  container mx-auto  flex max-w-[1240] items-center  justify-between px-5 py-4 capitalize '>
          <Image src={'/rif-logo.svg'} width={200} height={100} />
          <ul className='hidden font-semibold text-gray-400 sm:flex'>
            {links.map((link, index) => (
              <li
                key={index}
                className={`cursor-pointer p-3 ${
                  activeLink === index
                    ? 'active-link border-b-2  border-green-shad2 text-green-shad1'
                    : ''
                }`}
                onClick={() => handleLinkClick(index)}
              >
                <Link href={link.href}>{link.text}</Link>
              </li>
            ))}
          </ul>
          <div onClick={handleClick} className='block sm:hidden'>
            {!nav ? (
              <AiOutlineMenuFold
                className='fixed right-0 mr-5 duration-700 ease-in-out'
                size={30}
              />
            ) : (
              <AiOutlineClose
                className='fixed right-0 mr-5 duration-700 ease-in-out'
                size={30}
              />
            )}
          </div>
          <div
            className={
              nav
                ? 'fixed left-0 top-0 z-[999] h-fit w-full border-r  border-r-gray-600 bg-black px-4  text-black duration-700 ease-out'
                : 'fixed top-[-100%]   duration-1000'
            }
          >
            <div onClick={handleClick} className='mt-10 block sm:hidden'>
              {!nav ? (
                <AiOutlineMenuFold
                  className='fixed right-0 mr-5 text-white duration-700 ease-in-out'
                  size={30}
                />
              ) : (
                <AiOutlineClose
                  className='fixed right-0 mr-5 text-white duration-700 ease-in-out'
                  size={30}
                />
              )}
            </div>
            <h1 className=' p-3 pt-3 text-3xl font-bold uppercase text-[#3e873e] '>
              Logo
            </h1>
            <ul className='text-lg font-bold text-gray-400 sm:flex'>
              <li className='cursor-pointer p-3'>
                <Link href='/'>Home</Link>
              </li>
              <li className='cursor-pointer p-3'>
                <Link href='/who-we-are'>Who We Are</Link>
              </li>
              <li className='cursor-pointer p-3'>
                <Link href='/past-project'>Past Project</Link>
              </li>
              <li className='cursor-pointer p-3'>
                <Link href='/contact-us'>Contact Us</Link>
              </li>
              <li className='p-3 '>
                <Link href='/blog'>Blog</Link>
              </li>
              <li className='p-3 '>
                <Link href='/impact-report'>Impact Project</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;
