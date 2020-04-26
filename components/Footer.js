import Link from 'next/link';

const Footer = () => (
  <footer>
    <div className="linksContainer">
      <div className="linksFooter">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About us</a>
        </Link>
        <Link href="/#partners">
          <a>Partners</a>
        </Link>
      </div>
      <div className="logo">
        <img className="img-logo" src="https://i.imgur.com/lg7XHVA.png" />
      </div>
      <div className="linksFooter">
        <a href="https://rhaisa.com"> Project </a>
        <Link href="/inProgress">
          <a>Blog</a>
        </Link>
        <Link href="/inProgress">
          <a>Press</a>
        </Link>
      </div>
    </div>
    <p className="linear"></p>
    <style jsx>{`
      footer {
        background-color: #f2f2f2;
        padding-top: 20px;
        padding-bottom: 20px;
      }
      .container {
        text-align: center;
      }
      .linksContainer {
        display: flex;
        justify-content: center;
        max-width: 75%;
        margin-left: auto;
        margin-right: auto;
        padding-bottom: 10px;
      }

      .linksFooter {
        display: flex;
        align-self: flex-end;
        flex: 1;
        justify-content: center;
      }
      .linksFooter a {
        color: #3c4a6a;
      }
      .linksFooter a:not(:first-child) {
        margin-left: 64px;
      }

      .img-logo {
        margin-top: 45px;
        width: 150px;
        display: block;
      }

      .linear {
        margin-left: auto;
        margin-right: auto;
        width: 75%;
        height: 3px;
        background-image: linear-gradient(
          white,
          rgb(108, 129, 180) 5%,
          rgb(108, 129, 180) 95%,
          white
        );
      }

      .social {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 15px;
      }

      .social-icon {
        width: 50px;
        margin-top: 15px;
      }

      .social a:not(:first-child) {
        margin-left: 16px;
      }
    `}</style>
  </footer>
);

export default Footer;

// *{
//   display: flex;
//   flex-direction: row;
//   width: 100%;
//   font-size: 13px;
// }

/* <div className="copyright">
        <p> &copy 2013 - Organisation</p>
      </div> */
