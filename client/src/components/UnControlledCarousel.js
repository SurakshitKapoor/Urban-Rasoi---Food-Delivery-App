import Carousel from 'react-bootstrap/Carousel';
import food_image_1 from '../images/food_image_1.jpg';
import food_image_2 from '../images/food_image_2.jpg';
import food_image_3 from '../images/food_image_3.jpg';
import food_image_4 from '../images/food_image_4.jpg';
import food_image_5 from '../images/food_image_5.jpg';

function UncontrolledExample() {
    const images = [
        food_image_1,
        food_image_2,
        food_image_3,
        food_image_4,
        food_image_5
      ];

      
  return (
    <Carousel>
      <Carousel.Item>
        <img src={images[0]} width={800} height={400} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        
        <img src={images[1]} width={800} height={400} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        
        <img src={images[2]} width={800} height={400} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src={images[3]} width={800} height={400} />
        <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src={images[4]} width={800} height={400} />
        <Carousel.Caption>
          <h3>Fifth slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      
    </Carousel>
  );
}

export default UncontrolledExample;