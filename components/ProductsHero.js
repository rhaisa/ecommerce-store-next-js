import Head from 'next/head';
import Link from 'next/link';

export default function ProductsHero() {
  return (
    <div className="container">
      <h2> Your Best Value Proposition</h2>
      <p>
        “If you don’t try this service, you won’t become the superhero you were
        meant to be”
      </p>

      <div className="row">
        <div className="box col-lg-3">
          <img className="img" />
          <div className="button-container">
            <button className="button">Know me</button>
            <button className="button">Schedule a time</button>
          </div>
        </div>
        <div className="box col-lg-3">
          <img className="img" />
          <div className="button-container">
            <button className="button">Know me</button>
            <button className="button">Schedule a time</button>
          </div>
        </div>
        <div className="box col-lg-3">
          <img className="img" />
          <div className="button-container">
            <button className="button">Know me</button>
            <button className="button">Schedule a time</button>
          </div>
        </div>
        <div className="box col-lg-3">
          <img className="img" />
          <div className="button-container">
            <button className="button">Know me</button>
            <button className="button"> Schedule a time</button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          background-color: lightgray;
          padding: 20px;
        }
        .box {
          width: 50%;
          display: flex;
          flex-direction: column;
          background-color: #fff;
        }

        .img {
          border: 5px solid black;
        }

        .button-container {
          text-align: center;
          padding-top: 30px;
          padding-bottom: 30px;
        }
        .button:nth-child(2) {
          margin-left: 15px;
        }

        .button {
           {
            /* margin: 30px 11px; */
          }

          border-radius: 5px;
        }
      `}</style>
    </div>
  );
}
