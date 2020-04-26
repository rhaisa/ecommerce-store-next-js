import { Carousel } from 'react-bootstrap';

const CarouselImg = () => {
  return (
    <div className="box">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/hairdresser2.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>We make it easier for you</h3>
            <p>
              From the sofa, book and rebook hairdressing and beauty
              appointments.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/hairdresser3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Embrace your style</h3>
            <p>
              Our talented master stylists will connect with you on a personal
              level
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/hairdresser1.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Treat yourself at home</h3>
            <p>world-class salon service in the comfort of your own home</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <style jsx>
        {`
          .box {
            width: 100%;
            display: flex;
            margin-right: auto;
            margin-left: auto;
          }
        `}
      </style>
    </div>
  );
};

export default CarouselImg;
