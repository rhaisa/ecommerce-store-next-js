import Link from 'next/link';

const Navbar = () => (
  <header>
    <img className="logo" src="https://i.imgur.com/lg7XHVA.png" />

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Home
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link href="/about">
              <a className="nav-link">
                About us <span className="sr-only">(current)</span>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Partners
            </a>
          </li>
        </ul>
        <img className="basket" src="/shopping-basket.svg" />
      </div>
    </nav>
    <style jsx>{`
      .logo {
        width: 250px;
        margin-top: 10px;
        margin-left: auto;
        margin-right: auto;
        display: block;
      }
      .basket {
        width: 30px;
        display: block;
        margin-left: auto;
      }
    `}</style>
  </header>
);

export default Navbar;
