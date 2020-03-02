import Navbar from './Navbar';
import Head from 'next/head';

const Layout = props => (
  <div>
    <Head>
      <title>Finde Me Beauty</title>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossorigin="anonymous"
      ></link>
    </Head>
    <Navbar />
    {props.children}
  </div>
);
export default Layout;
