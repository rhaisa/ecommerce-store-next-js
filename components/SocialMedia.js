const SocialMedia = () => (
  <div>
    <div className="content">
      <h1> Follow us! </h1>
      <p>
        Keep up with all the news, content and <br /> launches on our social
        networks!
      </p>
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

    <style jsx>{`
      .content {
        margin-top: 100px;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        color: rgb(60, 74, 106);
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
  </div>
);

export default SocialMedia;
