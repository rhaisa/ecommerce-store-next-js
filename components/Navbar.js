import Link from 'next/link';
import Cookies from 'js-cookie';

const Navbar = (props) => {
  const cookie = Cookies.get('basket');
  let basketBubble = null;
  if (cookie !== undefined) {
    const basket = JSON.parse(cookie);

    const sumTotal = basket.reduce(function (total, product) {
      const itemTotal = product.hours * product.price;
      return total + itemTotal;
    }, 0);

    basketBubble = (
      <div className="basket-price">
        {`${sumTotal}€`}
        <style jsx>
          {`
            .basket-price {
              position: absolute;
              top: -15px;
              left: -15px;
              border-radius: 50%;
              background-color: rgb(174, 106, 137);
              font-size: 10px;
              color: white;
              height: 25px;
              width: 25px;
              display: flex;
              justify-content: center;
              align-items: center;
              font-weight: bold;
            }
          `}
        </style>
      </div>
    );
  } else {
  }

  return (
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
              <Link href="/#partners">
                <a className="nav-link">Partners</a>
              </Link>
            </li>
          </ul>
          <div className="basket">
            <Link href="/basket">
              <img src="/shopping-basket.svg" />
            </Link>
            {basketBubble}
          </div>
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
        nav {
          font-family: 'Comic Neue';
          font-size: 20px;
        }
        .basket {
          width: 30px;
          display: block;
          margin-left: auto;
          position: relative;
        }
      `}</style>
    </header>
  );
};

export default Navbar;
