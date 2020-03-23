import Navbar from './Navbar';
import Head from 'next/head';
import Footer from './Footer';
import { AppProvider } from './context/AppContext';

const Layout = props => {
  return (
    <AppProvider>
      <div>
        <Head>
          <title>Finde Me Beauty</title>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossOrigin="anonymous"
          ></link>
        </Head>
        <Navbar />
        {props.children}
        <Footer />
      </div>
    </AppProvider>
  );
};
export default Layout;

// originail

// const Layout = props => (
//       <div>
//         <Head>
//           <title>Finde Me Beauty</title>
//           <link
//             rel="stylesheet"
//             href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
//             integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
//             crossorigin="anonymous"
//           ></link>
//         </Head>
//         <Navbar />
//         {props.children}
//         <Footer />
//       </div>

//   );
