import React from "react";
import styled from "styled-components";
import rating from "./rating.png";
import apple from "./apple.png";
import windows from "./windows.png";
import android from "./android.png";
import Iphone from "./Iphone.png";

const MobileApp = styled.section`
    background: linear-gradient(101.04deg, #00B0DE -46.33%, #196EBD 53.67%);
    border: 1px solid #FFFFFF;  
    padding-top: 66px;
    padding-bottom: 68px;
    position: relative;
`;

const Title = styled.h2`
    font-style: normal;
    font-weight: 500;
    line-height: 40px;
    font-size: 32px;
    color: #FFFFFF;
    margin: 0;
    @media screen and (max-width: 768px) {}
    text-align: center;
`;

const Rating = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 19px 0 43px;
    @media screen and (max-width: 768px) {
        justify-content: center;
    }
`;

const RatingImg = styled.img`
    width: 70px;
    height: 10px;
    margin-right: 8px;
`;

const RatingsText = styled.p`
    font-style: normal;
    font-weight: normal;
    line-height: 20px;
    font-size: 14px;
    color: #FFFFFF;
    margin: 0;
`;

const Apps = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 43px;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        text-align: left;
        align-items: left;
    }
`;

const AppItem = styled.h2`
    font-style: normal;
    font-weight: normal;
    line-height: 24px;
    font-size: 14px;
    color: #FFFFFF;
    margin: 0 21px;
    &:nth-child(1){
        margin-left: 0!important;
    }
    &:nth-child(1):before{
        content: url(${apple});
        vertical-align: middle;
        vertical-align: -webkit-baseline-middle;
        margin-right: 8px;
        
    }
    &:nth-child(2):before{
        content: url(${android});
        vertical-align: middle;
        vertical-align: -webkit-baseline-middle;
        margin-right: 8px;
    }
    &:nth-child(3):before{
        content: url(${windows});
        vertical-align: middle;
        vertical-align: -webkit-baseline-middle;
        margin-right: 8px;
    }
    @media screen and (max-width: 768px) {
        margin: 10px 0;
    }
`;

const IphoneImg = styled.img`
    position: absolute; 
    bottom: 0;
    left: 13%;
    @media screen and (max-width: 1024px) {
        left: 5%;
    }
    @media screen and (max-width: 768px) {
        width: 170px;
    }
`;

export default () => {
    return (
        <MobileApp>
            <div className="container">
                <IphoneImg src={Iphone} />
                <div className="col-lg-offset-4 col-md-offset-4 col-lg-8 col-md-8 col-xs-12">
                    <Title>Скачай мобильное приложение Aviasales.ru</Title>
                    <Rating>
                        <RatingImg src={rating} />
                        <RatingsText>Более 103 000 оценок</RatingsText>
                    </Rating>
                    <div className="col-xs-offset-6 col-xs-6">
                    <Apps>
                        <AppItem>iPhone или iPad</AppItem>
                        <AppItem>Android</AppItem>
                        <AppItem>Windows Phone</AppItem>
                    </Apps>
                    </div>
                </div>
            </div>
        </MobileApp>
    )
}