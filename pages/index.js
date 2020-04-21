import Link from 'next/link';
import Layout from '../components/Layout';
import ProductsHero from '../components/ProductsHero';

const Home = (props) => (
  <>
    <Layout>
      <main>
        <div className="hero">
          <img className="main-img" src="/unsplash.jpg" />
          <div className="content">
            <h3>Treat yourself at home</h3>
            <p>
              From the sofa, book and rebook hairdressing and beauty
              appointments.
            </p>
            <p>
              We make it easier for you to find and book your next appointment.
              You can find the right hairdresser, manicure, pedicure and beauty
              treatment curated by the Find You Beauty community.
            </p>
          </div>
        </div>
        <div className="icons">
          {/* https://www.flaticon.com/packs/e-commerce-48 */}
          <div>
            <img className="icons-img" src="/commerce-and-shopping.svg" />
            <p className="icons-content">Fair price</p>
          </div>
          <div>
            <img className="icons-img" src="/calendar.svg" />
            <p className="icons-content">
              on your own <br /> schedule
            </p>
          </div>
          <div>
            <img className="icons-img" src="/map-pointer.svg" />
            <p className="icons-content">In your place</p>
          </div>
          <div>
            <img className="icons-img" src="/shield.svg" />
            <p className="icons-content">
              Certificated <br /> professionals
            </p>
          </div>
          <div>
            <img className="icons-img" src="/gift.svg" />
            <p className="icons-content">Discounts</p>
          </div>
        </div>
        <ProductsHero products={props.products} />
      </main>

      <style jsx>{`
        .hero {
          display: flex;
          width: 100%;
          max-width: 720px;
          margin-bottom: 40px;
        }
        .hero h3 {
          display: block;
          margin-left: 15px;
          margin-bottom: 20px;
          text-align: center;
          font-size: 28px;
          font-family: 'Comic Neue', cursive;
          color: rgb(60, 74, 106);
        }

        .hero p {
          padding-left: 15px;

          font-family: 'Comic Neue', cursive;
          color: rgb(60, 74, 106);
        }

        .main-img {
          width: 50%;
        }
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .icons {
          width: 70%;
          display: flex;
          margin-top: 80px;
          justify-content: space-between;
          text-align: center;
        }

        .icons-content {
          width: 100%;
          font-size: 13px;
          text-align: center;
          justify-content: space-between;
          font-family: 'Comic Neue';
          font-weight: bold;
          color: rgb(60, 74, 106);
        }

        .icons-img {
          width: 60px;
          margin-bottom: 20px;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </Layout>
  </>
);

export default Home;

export async function getStaticProps() {
  const { getAllProducts } = await import('../db');
  const products = await getAllProducts();
  return {
    props: {
      products: products,
    },
  };
}
