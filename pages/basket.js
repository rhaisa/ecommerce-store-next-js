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
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputFirstName">First Name</label>
              <input
                type="name"
                className="form-control"
                id="inputFirstName"
                placeholder="First Name"
              />
            </div>
            <div className="form-group col-md-6">
              <label for="inputSecondName">Second Name</label>
              <input
                type="name"
                className="form-control"
                id="inputSecondName"
                placeholder="Second Name"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputEmail4">Email</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                placeholder="Email"
              />
            </div>
            <div className="form-group col-md-6">
              <label for="scheduleDate">Schedule Date</label>
              <input type="date" className="form-control" id="scheduleDate" />
            </div>
          </div>
          <div className="form-group">
            <label for="inputAddress">Address</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputCity">City</label>
              <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="form-group col-md-4">
              <label for="inputState">State</label>
              <select id="inputState" className="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div className="form-group col-md-2">
              <label for="inputZip">Zip</label>
              <input type="text" className="form-control" id="inputZip" />
            </div>
          </div>
        </form>

        <div>
          <p className="data"> PAYMENT METHOD</p>
          {/* <input type="checkbox">PayPal</input>
          <input type="checkbox">Credit Card</input> */}
        </div>

        <form>
          <div className="form-group">
            <label for="nameOnCard">Name on Card</label>
            <input
              type="Name"
              className="form-control"
              id="nameOnCard"
              placeholder="Name on Card"
            />
          </div>
          <div className="form-group">
            <label for="cardNumber">Card Number</label>
            <input
              type="number"
              className="form-control"
              id="cardNumber"
              placeholder="4111 1111 1111 1111"
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="expiryDate"> Expiry Date:</label>
              <input
                type="text"
                className="form-control"
                id="expiryDate"
                placeholder="12/25"
              />
            </div>
            <div className="form-group col-md-6">
              <label for="securityCode">Security Code</label>
              <input
                type="number"
                className="form-control"
                id="securityCode"
                placeholder="123"
              />
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
        .trash:hover {
          cursor: pointer;
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
          max-width: 50%;
          margin-left: auto;
          margin-right: auto;
        }
        .address {
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
