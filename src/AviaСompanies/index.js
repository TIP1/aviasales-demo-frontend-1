import React from "react";
import styled from "styled-components";
import aeroflot from "./aeroflot.svg";
import corean from "./corean-air.svg";
import s7 from "./s7.svg";
import elal from "./elal.svg";
import onetwo from "./one-two.svg";
import left from "./Shape-left.png";
import right from "./Shape-right.png";


const AviaCompanies = styled.section`
    background-color: #fff;
    padding-top: 22px;
    padding-bottom: 28px;
    @media screen and (max-width: 768px) {
      display: none;
    }
`;

const Title = styled.h2`
    font-style: normal;
    font-weight: 500;
    line-height: 40px;
    font-size: 32px;
    text-align: center;
    color: #5C5C5C;
    margin: 0;
    padding-bottom: 15px;
`;

const Carousel = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 140px;
  position: relative;
  @media screen and (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

const Image = styled.img`
  width: 149px;
  height: 50px;
  flex-basis: 33%;
  @media screen and (max-width: 1024px) {
    padding: 16px 0;
  }
`;

const ImageCarouselLeft = styled.img`
  width: 18px;
  height: 32px;
  position: absolute;
  left: 0px;
  top: 9px;
`;

const ImageCarouselRight = styled.img`
  width: 18px;
  height: 32px;
  position: absolute;
  right: 0px;
  top: 9px;
  `;

const CarouselMarker = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;
`;

const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 1px solid #818181;
  margin-right: 8px;
`;

const CircleFull = Circle.extend`
  background-color: #818181;
`;

export default () => {
    return (
        <AviaCompanies>
            <div className="container">
              <div className="col-lg-offset-1 col-lg-10 col-md-12">
                <Title>Дешевые авиабилеты от крупнейших авиакомпаний и агентств</Title>
                <Carousel>
                    <Image src={aeroflot} alt="aeroflot" />
                    <Image src={s7} alt="s7" />
                    <Image src={onetwo} alt="one-two-trip" />
                    <Image src={corean} alt="corean-air" />
                    <Image src={elal} alt="elal airlines" />
                    <ImageCarouselRight src={right} />
                    <ImageCarouselLeft src={left} />
                </Carousel>
                <CarouselMarker>
                    <CircleFull />
                    <Circle />
                    <Circle />
                </CarouselMarker>
                </div>
            </div>
        </AviaCompanies>
    )
}