const Header = () => {
  return (
    <header className="navbar sticky top-0 flex justify-center bg-amber-50 p-2 shadow-sm sm:p-4 md:shadow-md">
      <div className="w-full max-w-[1800px]">
        <div className="flex-none md:hidden">
          <button className="btn btn-square btn-ghost">
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
          </button>
        </div>
        <nav className="hidden w-full md:flex md:justify-evenly">
          <a className="btn btn-ghost text-xl lg:text-2xl" href="#about">
            About
          </a>
          <a className="btn btn-ghost text-xl lg:text-2xl" href="#caseStudies">
            Case Studies
          </a>
          <a className="btn btn-ghost text-xl lg:text-2xl" href="#testimonials">
            Testimonials
          </a>
          <a className="btn btn-ghost text-xl lg:text-2xl" href="#ourTeam">
            Our Team
          </a>
          <a className="btn btn-ghost text-xl lg:text-2xl" href="#contact">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
