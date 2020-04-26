import Layout from '../components/Layout';

export default function inProgress() {
  return (
    <Layout>
      <div>
        <h3> THIS PAGE IS UNDER CONSTRUCTION.</h3>

        <p>
          Any questions? Then just give us a call at 043 0000000000,
          <br /> Mon-Fri, 8a.m. to 8 p.m.
        </p>
      </div>
      <style jsx>
        {`
          div {
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
