"use client";
import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Button } from "./ui/button";

export default class NextJsCarousel extends Component {
  render() {
    const carouselSettings = {
      autoPlay: true, // Enable automatic playback
      interval: 3000, // Set the interval to 3 seconds (in milliseconds)
      infiniteLoop: true, // Enable infinite loop
      showThumbs: false, // Disable thumbnail navigation
      showIndicators: false,
    };

    return (
      <div>
        <Carousel {...carouselSettings}>
          <div>
            <img className="relative" src="/image1.png" alt="image1" />
            <p className="absolute top-5 md:top-24 right-0 z-50 text-[2rem] md:text-[7rem] items-center text-white font-extrabold flex flex-col">
              <span>Heritage</span>
              <span>Tees</span>
              <Button className="rounded-full bg-white text-black w-1/4">
                shop now
              </Button>
            </p>
          </div>
          <div>
            <img src="/image2.png" alt="image2" />
            <p className="absolute top-5 md:top-24 right-0 z-50 text-[2rem] md:text-[7rem] text-white items-center font-extrabold flex flex-col">
              <span>Heritage</span>
              <span>Women</span>
              <Button className="rounded-full bg-white text-black w-1/4">
                shop now
              </Button>
            </p>
          </div>
          <div>
            <img src="/image3.png" alt="image3" />
            <p className="absolute top-5 md:top-24 left-0 z-50 text-[2rem] md:text-[7rem] text-white items-center font-extrabold flex flex-col">
              <span>premium</span>
              <span>tees</span>
              <Button className="rounded-full bg-white text-black w-1/4">
                shop now
              </Button>
            </p>
          </div>
          <div>
            <img src="/image4.png" alt="image4" />
            <p className="absolute top-5 md:top-24 left-0 z-50 text-[2rem] md:text-[7rem] text-white items-center font-extrabold flex flex-col">
              <span>premium</span>
              <span>zip</span>
              <Button className="rounded-full bg-white text-black w-1/4">
                shop now
              </Button>
            </p>
          </div>
          <div>
            <img src="/image5.png" alt="image5" />
            <p className="absolute top-5 md:top-24 left-0 z-50 text-[2rem] md:text-[7rem] text-white items-center font-extrabold flex flex-col">
              <span>heritage</span>
              <span>hoodies</span>
              <Button className="rounded-full bg-white text-black w-1/4">
                shop now
              </Button>
            </p>
          </div>
        </Carousel>
      </div>
    );
  }
}
