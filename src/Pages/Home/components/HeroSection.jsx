import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
  CarouselIndicator,
} from "../../../components/ui/carousel";
import img1 from "../../../assets/img1.jpg";
import img2 from "../../../assets/img2.jpg";
import Marquee from '../../../../src/components/ui/marquee'


const HeroSection = () => {
  return (
    <>
    <div className='w-screen '>
   <section className="w-full object-cover ">
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <img src={img1} alt="Slide 1" className="w-full h-[600px] object-center" />
          </CarouselItem>

          <CarouselItem>
            <img src={img2} alt="Slide 2" className="w-full h-[600px] object-center" />
          </CarouselItem>
          
        </CarouselContent>

        <CarouselNavigation />
        <CarouselIndicator />
      </Carousel>
      <Marquee
  items={[
    "Fast Delivery",
    "24/7 Support",
    "Premium Quality",
    "Trusted Worldwide"
  ]}
/>
    </section>
    </div>

    </>
  )
}

export default HeroSection