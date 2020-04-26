import Layout from '../components/Layout';
import Link from 'next/link';
import cookies from 'next-cookies';
import Cookies from 'js-cookie';

export default function Basket(props) {
  const basket = props.basket;

  if (basket === null) {
    return (
      <Layout>
        <div className="empty">
          <h2>SHOPPING CART IS EMPTY</h2>
          <p>You have no items in your shopping cart.</p>
          <p>
            To continue shopping please{' '}
            <Link href="/#partners">
              <a>Click here</a>
            </Link>
          </p>
          <style jsx>
            {`
              .empty {
                text-align: center;
                margin-top: 150px;
                margin-bottom: 150px;
                color: rgb(60, 74, 106);
              }
            `}
          </style>
        </div>
      </Layout>
    );
  }
  const deleteProduct = (productId) => {
    const newBasket = basket.filter((product) => product.id !== productId);
    Cookies.set('basket', JSON.stringify(newBasket));
    window.location.reload();
  };

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
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {basket.map((product) => {
              return (
                <tr>
                  <td>{product.name}</td>
                  <td>{product.hours}</td>
                  <td>{`€ ${product.price * product.hours}`} </td>
                  <td>
                    <button
                      className="buttonTrash"
                      onClick={() => deleteProduct(product.id)}
                    >
                      <img className="trash" src="/trash.svg" />
                    </button>
                  </td>
                </tr>
              );
            })}
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

          <div className="address ">
            <div className="row">
              <label for="address" className="address " className="col-lg-3 ">
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
          </div>
          <div className="contact">
            <div className="row">
              <label for="country" className="col-lg-3">
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
          </div>

          <div className="row">
            <label for="scheduleDate" className="address" className="col-lg-3">
              Schedule Date:
            </label>
            <input
              type="date"
              name="scheduleDate"
              className="form-control col-lg-9"
            ></input>
          </div>
        </form>

        <div>
          <p className="data"> PAYMENT METHOD</p>
          {/* <input type="checkbox">PayPal</input>
          <input type="checkbox">Credit Card</input> */}
        </div>
        <form>
          <div className="row">
            <label for="nameOnCard" className="col-lg-3">
              Name on Card:
            </label>
            <input
              type="name"
              name="nameOnCard"
              className="form-control col-lg-9"
            />
          </div>
          <div className="row">
            <label for="cardNumber:" className="col-lg-3">
              Card number:
            </label>
            <input
              type="number"
              name="cardNumber"
              className="form-control col-lg-9"
            ></input>
          </div>
          <div className="security ">
            <div className="row">
              <label for="expiryDate" className="address" className="col-lg-3">
                Expiry Date:
              </label>
              <input
                type="text"
                name="expiryDate"
                className="form-control col-lg-9"
              ></input>
            </div>
            <div className="row">
              <label for="securityCode" className="col-lg-3">
                Security code:
              </label>
              <input
                type="number"
                name="securityCode"
                className="form-control col-lg-9"
              ></input>
            </div>
          </div>
          <Link href="/thankYou">
            <button type="button" className="button btn btn-outline-dark">
              Finish Payment
            </button>
          </Link>
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
          text-align: center;
        }
        thead tr {
          background-color: #f8f9fa;
          border: 1px solid #222;
        }
        .trash {
          width: 28px;
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
        .address {
          display: flex;
          justify-content: space-between;
        }

        .contact {
          display: flex;
          justify-content: space-between;
        }

        .security {
          display: flex;
          justify-content: space-between;
        }

        input {
          margin-bottom: 10px;
        }
        .button {
          margin-top: 20px;
          margin-left: auto;
          margin-bottom: 100px;
          display: block;
        }
        .buttonTrash {
          background: none;
          border: none;
        }
      `}</style>
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  const basket = cookies(ctx).basket || null;
  return {
    props: {
      basket: basket,
    },
  };
}
