import Link from 'next/link';

export default function ProductsHero(props) {
  console.log(props.products);
  return (
    <div className="container" id="partners">
      <h2> Your Best Value Proposition</h2>
      <p>
        “If you don’t try this service, you won’t become the superhero you were
        meant to be”
      </p>
      <div className="row">
        {props.products.map(product => {
          return (
            <div className="box col-lg-3" key={product.id}>
              <img className="img" src={product.image} />
              <div className="pshortdescription">
                <h5>{product.name}</h5>
                <p>{product.short_description}</p>
              </div>
              <div className="button-container">
                <a
                  className="btn btn-outline-dark"
                  href={product.instagram_url}
                >
                  About Me
                </a>

                <Link href="/products/[id]" as={`/products/${product.id}`}>
                  <button
                    type="button"
                    className="button-margin btn btn-outline-dark"
                  >
                    Schedule a time
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <style jsx>{`
        .container {
          background-color: #f8f9fa;
          padding: 20px;
          text-align: center;
          font-family: 'Comic Neue';
          color: rgb(60, 74, 106);
        }
        .box {
          padding-top: 10px;
          width: 50%;
          display: flex;
          flex-direction: column;
        }

        .img {
          border: 5px solid black;
          width: 252px;
        }
        h5 {
          font-family: 'Comic Neue';
          font-weight: bold;
        }
        .pshortdescription {
          padding-top: 10px;
          background-color: #fff;
          width: 252px;
          min-height: 106px;
        }

        .button-container {
          color: #f6f6f6;
          width: 252px;
          background-color: #fff;
          text-align: center;
          padding-top: 10px;
          padding-bottom: 30px;
        }
        .button:nth-child(2) {
          margin-left: 15px;
        }

        .button-margin {
          margin-left: 5px;
        }
      `}</style>
    </div>
  );
}
