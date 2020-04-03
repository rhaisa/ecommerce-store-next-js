import Head from 'next/head';
import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <div className="about">
        <h3>
          From the sofa, Book and rebook hairdressing & beauty appointments.
        </h3>
        <p>
          Taken care of ourselves should be easy and relaxing. Taking into
          consideration the expensive and stressful experience that something we
          have to face just to do simple things, like a haircut.We put a team of
          specialists that are available to reach out to you.
        </p>
        <p>
          we make it easier for you to find and book your next appointment. You
          have the opportunity to make an appointment independently around the
          clock. You can find the right hairdresser, manicure, pedicure and
          beauty treatment collected by the Find You Beauty community.
        </p>
      </div>
      <style jsx>
        {`
          .about {
            width: 80%;
            font-family: 'Comic Neue';
            margin-top: 150px;
            margin-bottom: 150px;
            margin-left: auto;
            margin-right: auto;
            color: rgb(60, 74, 106);

            justify-content: center;
          }
          h3 {
            text-align: center;
            margin-bottom: 30px;
          }
        `}
      </style>
    </Layout>
  );
}
