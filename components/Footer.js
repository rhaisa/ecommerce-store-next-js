import Link from 'next/link';

const Footer = () => (
  <footer>
    <div>
      <div className="logo">
        <img className="img-logo" src="https://i.imgur.com/lg7XHVA.png" />
        {/* <div className="copyright">
        <p> &copy 2013 - Organisation</p>
      </div> */}
        <p className="linear"></p>
      </div>

      <div className="social">
        <a href="#">
          <img className="social-icon" src="/twitter.svg" />
        </a>

        <a href="#">
          <img className="social-icon" src="/facebook.svg" />
        </a>

        <a href="#">
          <img className="social-icon" src="/instagram.svg" />
        </a>

        <a href="#">
          <img className="social-icon" src="/whatsapp.svg" />
        </a>
      </div>
    </div>
    <style jsx>{`
      .container {
        text-align: center;
      }

      .img-logo {
        margin-top: 45px;
        margin-bottom: 20px;
        width: 150px;
        margin-left: auto;
        margin-right: auto;
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
