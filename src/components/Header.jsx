import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logovelox.png';
import { Button } from './ui/button';
const Header = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(false);
  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 580) {
      setScrollPosition(true);
    } else {
      setScrollPosition(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      {/*<!-- Component: Navbar with Avatar --> */}
      {/*<!-- Header --> */}
      <header className="fixed w-full z-20">
        <div
          className={`border-b-1 relative z-20 w-full ${
            scrollPosition ? 'bg-white' : 'bg-transparent'
          } shadow-lg shadow-slate-700/5 after:absolute after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:backdrop-blur-sm lg:after:hidden transition-all duration-500`}>
          <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
            <nav
              aria-label="main navigation"
              className={`flex h-[5rem] justify-between font-medium items-center ${scrollPosition ? 'text-neutral-900' : 'text-white'} `}
              role="navigation">
              {/*      <!-- Brand logo --> */}
              <Link to="/">
                <img src={logo} className="w-40" alt="site logo" />
              </Link>
              {/*      <!-- Mobile trigger --> */}
              <button
                className={`relative order-10 block h-10 w-10 self-center lg:hidden
                ${
                  isToggleOpen
                    ? 'visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 '
                    : ''
                }
              `}
                onClick={() => setIsToggleOpen(!isToggleOpen)}
                aria-expanded={isToggleOpen ? 'true' : 'false'}
                aria-label="Toggle navigation">
                <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                  <span aria-hidden="true" className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"></span>
                  <span aria-hidden="true" className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"></span>
                  <span
                    aria-hidden="true"
                    className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"></span>
                </div>
              </button>
              {/*      <!-- Navigation links --> */}
              <ul
                role="menubar"
                aria-label="Select page"
                className={`absolute left-0 top-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                  isToggleOpen ? 'visible opacity-100 backdrop-blur-sm' : 'invisible opacity-0'
                }`}>
                <li role="none" className="flex items-stretch">
                  <a
                    role="menuitem"
                    aria-haspopup="false"
                    className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-orange-500 focus:text-orange-600 focus:outline-none focus-visible:outline-none lg:px-8">
                    <span>Blog</span>
                  </a>
                </li>
                <li role="none" className="flex items-stretch">
                  <a
                    role="menuitem"
                    aria-current="page"
                    aria-haspopup="false"
                    className="flex items-center gap-2 py-4 text-orange-500 transition-colors duration-300 hover:text-orange-600 focus:text-orange-600 focus:outline-none focus-visible:outline-none lg:px-8"
                    href="javascript:void(0)">
                    <span>Planning</span>
                  </a>
                </li>
                <li role="none" className="flex items-stretch">
                  <a
                    role="menuitem"
                    aria-haspopup="false"
                    className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-orange-500 focus:text-orange-600 focus:outline-none focus-visible:outline-none lg:px-8"
                    href="javascript:void(0)">
                    <span>About me</span>
                  </a>
                </li>
              </ul>
              <div className="ml-auto flex items-center px-6 lg:ml-0 lg:p-0">
                {/*        <!-- Avatar --> */}
                <a href="#" className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-white">
                  <img src="https://i.pravatar.cc/40?img=35" alt="user name" title="user name" width="40" height="40" className="max-w-full rounded-full" />
                </a>
                {/*        <!-- End Avatar --> */}
                <Button size="lg" className="ml-2">
                  Login
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </header>
      {/*<!-- End Navbar with Avatar--> */}
    </>
  );
};
export default Header;
