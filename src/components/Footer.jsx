import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/logovelox.png';
import { Button } from './ui/button';

const Footer = () => {
  return (
    <footer className="bg-orange-900/20 pt-10 ">
      <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col items-center text-center">
          <NavLink to="/">
            <img src={logo} className="max-w-96 max-sm:max-w-72" alt="" />
          </NavLink>

          <p className="max-w-3xl mx-auto mt-4 text-base font-medium tracking-wide text-gray-500 ">
            Velox helps you unlock a healthier, happier you, one step at a time. Start your fitness journey today with our easy-to-use tracker and personalized insights.
          </p>

          <div className="flex flex-col mt-4 sm:flex-row items-center justify-center ">
            <Link to="all-blogs">
              <Button className="px-3">
                <svg className="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM4 12.172C4.04732 16.5732 7.64111 20.1095 12.0425 20.086C16.444 20.0622 19.9995 16.4875 19.9995 12.086C19.9995 7.68451 16.444 4.10977 12.0425 4.086C7.64111 4.06246 4.04732 7.59876 4 12V12.172ZM10 16.5V7.5L16 12L10 16.5Z"
                    fill="currentColor"></path>
                </svg>

                <span className="mx-1">Explore All Classes</span>
              </Button>
            </Link>

            <Link to="/sign-up">
              <Button variant="outline" className="sm:ml-4 max-sm:mt-3 max-sm:px-10">
                Get started
              </Button>
            </Link>
          </div>
        </div>

        <hr className="my-10 border-gray-200 dark:border-gray-700" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm font-medium text-gray-700">© Copyright 2021. All Rights Reserved.</p>

          <div className="flex mt-3 -mx-2 sm:mt-0">
            <Link to="/" className="mx-2 text-sm font-semibold text-gray-500 transition-colors duration-300 hover:text-gray-900" aria-label="Reddit">
              {' '}
              Home{' '}
            </Link>

            <Link href="#" className="mx-2 text-sm font-semibold text-gray-500 transition-colors duration-300 hover:text-gray-900" aria-label="Reddit">
              {' '}
              Wishlist{' '}
            </Link>

            <Link href="#" className="mx-2 text-sm font-semibold text-gray-500 transition-colors duration-300 hover:text-gray-900" aria-label="Reddit">
              {' '}
              All Blogs{' '}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
