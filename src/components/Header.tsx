const Header = () => {
  return (
    <header className="navbar sticky top-0 bg-amber-50 p-4 md:justify-center">
      <div className="flex-none md:hidden">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
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
      <nav className="hidden gap-3 md:flex">
        <a className="btn btn-ghost text-xl" href="#about">
          About
        </a>
        <a className="btn btn-ghost text-xl" href="#caseStudies">
          Case Studies
        </a>
        <a className="btn btn-ghost text-xl" href="#testimonials">
          Testimonials
        </a>
        <a className="btn btn-ghost text-xl" href="#ourTeam">
          Our Team
        </a>
        <a className="btn btn-ghost text-xl" href="#contact">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
