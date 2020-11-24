import React from 'react'
import { Carousel, Row } from 'react-bootstrap'
const MyCarousel = ({ image }) => {
  return (
    <Carousel indicators={false}>
      {image?.map((img, index) => (
        <Carousel.Item interval={1500} key={index}>
          {/* <Row className="justify-content-center"> */}
          <Row
            style={{
              width: '110%',
              height: '250px',
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '50% 50%',
            }}
          ></Row>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default MyCarousel
