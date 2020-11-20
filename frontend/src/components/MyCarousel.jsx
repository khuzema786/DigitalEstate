import React from 'react'
import { Carousel } from 'react-bootstrap'
const MyCarousel = () => {
  return (
    <Carousel indicators={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/1920/1080?random=1"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/1920/1080?random=2"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/1920/1080?random=3"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default MyCarousel
