import Link from 'next/link';

export default function ProductsHero(props) {
  console.log(props.products);
  return (
    <div className="container">
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
                <button className="button">
                  <a href={product.instagram_url}>About Me</a>
                </button>
                <Link href="/products/[id]" as={`/products/${product.id}`}>
                  <button className="button">Schedule a time</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <style jsx>{`
        .container {
          background-color: lightgray;
          padding: 20px;
          text-align: center;
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

        .pshortdescription {
          padding-top: 10px;
          background-color: #fff;
          width: 252px;
        }

        .button-container {
          color: #f6f6f6;
          width: 252px;
          background-color: #fff;
          text-align: center;
          padding-top: 10px;
          padding-bottom: 30px;
          padding-right: -10px;
        }
        .button:nth-child(2) {
          margin-left: 15px;
        }

        .button {
          background-color: #f6f6f6;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
}
