const Header = () => {
  return (
    <header className="navbar sticky top-0 flex justify-center bg-amber-50 p-1 shadow-sm md:shadow-md">
      <div className="max-w-screen-3xl w-full">
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
          <a className="btn btn-ghost text-base" href="#about">
            About
          </a>
          <a className="btn btn-ghost text-base" href="#caseStudies">
            Case Studies
          </a>
          <a className="btn btn-ghost text-base" href="#testimonials">
            Testimonials
          </a>
          <a className="btn btn-ghost text-base" href="#ourTeam">
            Our Team
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
