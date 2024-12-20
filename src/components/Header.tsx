const Header = () => {
  const handleClick = () => {
    document.getElementById('my-drawer')?.click();
  };

  return (
    <header className="navbar sticky top-0 z-10 flex justify-center bg-amber-50 p-1 shadow-sm md:shadow-md">
      <div className="max-w-screen-3xl w-full">
        <div className="flex-none md:hidden">
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer"
                className="btn btn-square btn-ghost drawer-button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block size-7 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu text-base-content min-h-full w-72 bg-amber-50 p-4">
                {/* Sidebar content here */}
                <li>
                  <a
                    className="btn btn-ghost text-base"
                    href="#about"
                    onClick={handleClick}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="btn btn-ghost text-base"
                    href="#caseStudies"
                    onClick={handleClick}
                  >
                    Case Studies
                  </a>
                </li>
                <li>
                  <a
                    className="btn btn-ghost text-base"
                    href="#testimonials"
                    onClick={handleClick}
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    className="btn btn-ghost text-base"
                    href="#contact"
                    onClick={handleClick}
                  >
                    Contact
                  </a>
                </li>
                <li className="flex-grow bg-inherit"></li>
                <li className="btn btn-ghost text-base" onClick={handleClick}>
                  Close
                </li>
              </ul>
            </div>
          </div>
        </div>

        <nav className="hidden w-full md:flex md:justify-evenly">
          <a className="btn btn-ghost text-base" href="#about">
            About
          </a>
          <a className="btn btn-ghost text-base" href="#caseStudies">
            Case Studies
          </a>
          <a className="btn btn-ghost text-base" href="#testimonials">
            Testimonials
          </a>
          <a className="btn btn-ghost text-base" href="#contact">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
