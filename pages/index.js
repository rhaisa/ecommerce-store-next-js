import Layout from '../components/Layout';
import ProductsHero from '../components/ProductsHero';
import CarouselImg from '../components/CarouselImg';
import SocialMedia from '../components/SocialMedia';

const Home = (props) => (
  <>
    <Layout>
      <CarouselImg />
      <main>
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
        <SocialMedia />
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
          color: rgb(60, 74, 106);
        }

        .hero p {
          padding-left: 15px;
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
          margin-top: 50px;
          justify-content: space-between;
          text-align: center;
        }

        .icons-content {
          width: 100%;
          font-size: 18px;
          text-align: center;
          justify-content: space-between;
          font-weight: bold;
          color: rgb(60, 74, 106);
        }

        .icons-img {
          width: 70px;
          margin-bottom: 20px;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Karla', sans-serif;
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
