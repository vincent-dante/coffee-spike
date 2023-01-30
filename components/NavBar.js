import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import the icons you need
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function NavBar() {
  const [showDropDown, setShowDropDown] = React.useState(false);

  const onClickShowDropDown = () => {
    setShowDropDown((wasOpened) => !wasOpened);
  };

  return (
    <div className="relative">
      <nav className="absolute inset-x-0 top-0">
        <div className="container mx-auto flex flex-wrap justify-between items-center py-10 px-4 lg:px-10 xl:px-20">
          <h1>
            <Link href="/">
              <Image
                src="/LogoCoffeeSpike.svg"
                alt="CoffeeSpikeLogo"
                width="150"
                height="150"
              />
            </Link>
          </h1>
          <div className="flex content-center md:hidden">
            <FontAwesomeIcon
              icon={faBars}
              className="burger-icon cursor-pointer"
              onClick={() => {
                onClickShowDropDown();
              }}
            />
          </div>
          <ul className="hidden md:flex">
            <li>
              <Link href="/" className="mr-8">
                Coffee Beans
              </Link>
            </li>
            <li>
              <Link href="/" className="mr-8">
                About
              </Link>
            </li>
            <li>
              <Link href="/" className="mr-8">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        {showDropDown ? (
          <div className="bg-[color:var(--dark)] relative">
            <ul
              className={`flex-col px-4 py-5 left-0 text-white w-full md:hidden ${
                showDropDown ? 'flex' : 'hidden'
              }`}
            >
              <li className="py-4">
                <Link href="/">Coffee Beans</Link>
              </li>
              <li className="py-4">
                <Link href="/">About</Link>
              </li>
              <li className="py-4">
                <Link href="/">Contact Us</Link>
              </li>
            </ul>
          </div>
        ) : (
          ''
        )}
      </nav>
    </div>
  );
}
