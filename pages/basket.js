import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import Link from 'next/link';
import Product from './products/[id]';
import { getStaticProps } from '.';
import cookies from 'next-cookies';

export default function Basket(props) {
  // const { basket } = props;
  const basket = props.basket;
  // const basket = Cookies.getJSON('basket'); //next.cookies getServerSideProps

  if (typeof basket === 'undefined') {
    return <div>Error in the system</div>;
  }

  console.log(basket);
  return (
    <Layout>
      <div>
        <h3>Payment</h3>
        <p className="order">ORDER REVIEW</p>
        <table>
          <thead>
            <tr>
              <th>Service</th>
              <th>Hours</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{basket.name}</td>
              <td>{basket.hours}</td>
              <td>{`€ ${basket.price * basket.hours}`} </td>
            </tr>
          </tbody>
        </table>
        <div>
          <p className="data"> YOUR DATA</p>
          {/* <input type="checkbox">PayPal</input>
          <input type="checkbox">Credit Card</input> */}
        </div>
        <form>
          <div className="row">
            <label for="fullName" className="col-lg-3">
              Full Name:
            </label>
            <input type="name" name="name" className="form-control col-lg-9" />
          </div>
          <div className="row">
            <label for="email" className="col-lg-3">
              Email Address:
            </label>
            <input
              type="email"
              name="email"
              className="form-control col-lg-9"
            ></input>
          </div>
          <div className="row">
            <label for="address" className="address" className="col-lg-3">
              Address:
            </label>
            <input
              type="address"
              name="address"
              className="form-control col-lg-9"
            ></input>
          </div>
          <div className="row">
            <label for="zipCode" className="col-lg-3">
              Zip Code:
            </label>
            <input
              type="zipCode"
              name="zipCode"
              className="form-control col-lg-9"
            ></input>
          </div>
          <div className="row">
            <label for="country" className="col-lg-3">
              {' '}
              Country:
            </label>
            <input
              type="country"
              name="country"
              className="form-control col-lg-9"
            ></input>
          </div>
          <div className="row">
            <label for="phone" className="col-lg-3">
              Phone Number:
            </label>
            <input
              type="phone"
              name="phone"
              className="form-control col-lg-9"
            ></input>
          </div>
        </form>
      </div>
      <style jsx>{`
        h3 {
          text-align: center;
          margin-top: 60px;
          margin-bottom: 30px;
        }
        .order {
          border: 2px solid #222;
          background-color: #222;
          width: 80%;
          margin-left: auto;
          margin-right: auto;
          color: #fff;
        }
        table {
          border: 1px solid #222;
          width: 80%;
          min-height: 150px;
          padding: 80px;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 20px;
        }
        thead tr {
          background-color: lightgray;
          border: 1px solid #222;
        }

        .data {
          border: 2px solid #222;
          background-color: #222;
          width: 80%;
          margin-left: auto;
          margin-right: auto;
          color: #fff;
        }
        form {
          width: 100%;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        input {
          margin-bottom: 10px;
        }
      `}</style>
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  const basket = cookies(ctx).basket;
  return {
    props: {
      basket: basket,
    },
  };
}
