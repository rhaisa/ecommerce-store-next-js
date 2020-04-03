import Head from 'next/head';
import Layout from '../components/Layout';

export default function thankYou() {
  return (
    <Layout>
      <div>
        <h3> THANK YOU FOR YOUR ORDER.</h3>
        <p>
          We know that you are super excited with your appointment, Therefore
          You will soon receive the order confirmation via email.
        </p>

        <p>
          Any questions? Then just give us a call at 043 0000000000,
          <br /> Mon-Fri, 8a.m. to 8 p.m.
        </p>
      </div>
      <style jsx>
        {`
          div {
            font-family: 'Comic Neue';
            text-align: center;
            margin-top: 150px;
            margin-bottom: 150px;
            color: rgb(60, 74, 106);
          }
          h3 {
            font-weight: bold;
            margin-bottom: 50px;
          }
        `}
      </style>
    </Layout>
  );
}
