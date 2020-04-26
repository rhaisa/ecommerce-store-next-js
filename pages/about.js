import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <div className="about">
        <h3>
          From the sofa, Book and rebook hairdressing and beauty appointments.
        </h3>
        <p>
          Taken care of ourselves should be easy and relaxing. Considering the
          expensive and stressful experience that sometimes we have to face just
          to do simple things, like a haircut. we put a team of specialists that
          are available to reach out to you in your place.
        </p>
        <p>
          Our team is extremely talented and passionate. This ensures each and
          every one of you receives world-class salon service in the comfort of
          your own home.
        </p>
        <p>
          We make it easier for you to find and book your next appointment. You
          can find the right hairdresser, manicure, pedicure and beauty
          treatment collected by the Find You Beauty community.
        </p>
      </div>
      <style jsx>
        {`
          .about {
            width: 60%;
            margin-top: 150px;
            margin-bottom: 150px;
            margin-left: auto;
            margin-right: auto;
            color: rgb(60, 74, 106);
            font-size: 20px;
            justify-content: center;
          }
          h3 {
            text-align: center;
            margin-bottom: 30px;
            font-weight: bold;
          }
        `}
      </style>
    </Layout>
  );
}
