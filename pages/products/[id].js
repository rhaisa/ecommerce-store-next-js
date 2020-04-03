import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import Router from 'next/router';
import Cookies from 'js-cookie';
import Basket from '../basket';
import React, { useState } from 'react';

export default function Product(props) {
  // "products" é a lista de produtos

  const [hours, setHours] = useState(1);
  const { product } = props;

  const onSelectChange = evt => {
    setHours(evt.target.value);
  };

  const onButtonClick = () => {
    const cookieValue = {
      id: product.id,
      hours: hours,
      name: product.name,
      price: product.price,
    };
    Cookies.set('basket', cookieValue);
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
          font-family: 'Comic Neue';
          color: rgb(60, 74, 106);
        }

        .img {
          margin-left: auto;
          margin-right: auto;
          width: 250px;
        }
        h2 {
          font-family: 'Comic Neue';
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
          float: left;
          margin-right: 15px;
        }

        .inputbox {
          width: 150px;
        }
        .container {
          margin-top: 50px;
        }

        .button {
          position: absolute;
          bottom: 0px;
          display: block;
          width: 450px;
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
  const paths = products.map(function(product) {
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
