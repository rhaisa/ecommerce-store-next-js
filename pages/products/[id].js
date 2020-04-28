import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import Router from 'next/router';
import Cookies from 'js-cookie';
import Basket from '../basket';
import React, { useState } from 'react';

export default function Product(props) {
  // "products" is the list of products

  const [hours, setHours] = useState(1);
  const { product } = props;

  const onSelectChange = (evt) => {
    setHours(parseInt(evt.target.value));
  };

  const onButtonClick = () => {
    let basket = [];
    if (Cookies.get('basket') !== undefined) {
      basket = JSON.parse(Cookies.get('basket'));
    }
    const possibleProduct = basket.find((p) => product.id === p.id);
    if (possibleProduct) {
      const newHours = possibleProduct.hours + hours;
      const newProduct = {
        ...possibleProduct,
        hours: newHours,
      };
      const newBasket = [
        ...basket.filter((p) => p.id !== newProduct.id),
        newProduct,
      ];
      Cookies.set('basket', newBasket);
    } else {
      const cookieValue = [
        ...basket,
        {
          id: product.id,
          hours: hours,
          name: product.name,
          price: product.price,
        },
      ];

      Cookies.set('basket', cookieValue);
    }

    Router.push('/basket');
  };

  if (product === undefined) {
    return <div>Error in the system</div>;
  }

  return (
    <Layout>
      <Head>
        <title>{product.name}</title>
      </Head>
      <div className="product-main">
        <img className="img" src={product.image} />
        <div className="product-details">
          <h2> {product.name}</h2>
          <p>Price: {product.price}</p>
          <p>{product.description}</p>
          <div className="container">
            <div className="inputDescription">
              <p>Schedule Hours:</p>
            </div>
            <select onChange={onSelectChange} className="inputbox">
              <option value="1">1</option>
              <option value="2">2 </option>
              <option value="3">3 </option>
              <option value="4">4 </option>
              <option value="5">5 </option>
            </select>

            <Link href="/basket">
              <button
                onClick={onButtonClick}
                type="button"
                className="button btn btn-outline-dark"
              >
                Add to the Basket
              </button>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        .product-main {
          display: flex;
          width: 100%;
          max-width: 700px;
          margin-top: 50px;
          margin-bottom: 100px;
          margin-left: auto;
          margin-right: auto;
          position: relative;
          color: rgb(60, 74, 106);
        }

        .img {
          margin-left: auto;
          margin-right: auto;
          width: 250px;
          max-width: 50%;
        }
        h2 {
          font-weight: bold;
          margin-bottom: 20px;
          margin-top: 10px;
          color: rgb(60, 74, 106);
        }

        .product-details {
          margin-left: 15px;
          text-align: center;
        }

        .inputDescription {
          text-align: center;
        }

        .inputbox {
          width: 100px;
        }
        .container {
          margin-top: 50px;
          display: flex;
          justify-content: space-around;
        }

        .button {
          position: absolute;
          bottom: 0px;
          display: block;
          width: 400px;
          font-weight: bold;
        }
      `}</style>
    </Layout>
  );
}
//assicrona quem chamou essa função por esse resultado / vai cuidar de outras coisas enquanto a função chamada não foi finalizada.
// Product.getInitialProps = async ctx => {
//   return { id: ctx.query.id };
// };

export async function getStaticProps(ctx) {
  console.log(ctx);
  const { getProductById } = await import('../../db');
  const product = await getProductById(ctx.params.id);
  return {
    props: {
      product: product,
    },
  };
}

export async function getStaticPaths() {
  const { getAllProducts } = await import('../../db');
  const products = await getAllProducts();
  const paths = products.map(function (product) {
    return {
      params: { id: `${product.id}` },
    };
  });
  // console.log(paths);
  return {
    paths: paths,
    fallback: false,
  };
}

// <b>Name:</b>

// Product.getInitialProps = async function(context) {
//   return { id: context.query.id };
// };
