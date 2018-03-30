import React from "react";
import styled from "styled-components";
import compass from "./compass.svg";
import pen from "./Shape.svg";
import palm from "./palm.svg";
import world from "./world.svg";
import shopping from "./shopping.svg";
import baby from "./baby.svg";
import history from "./history.svg";
import night from "./night.svg";
import krasnodar from "./krasnodar.png";
import soshi from "./soshi.png";
import saintp from "./saintp.png";
import minwaters from "./minwaters.png";
import simferopol from "./simferopol.png";
import barcelona from "./barcelona.png";
import russia from "./russia.svg";
import spain from "./spain.svg";

const Destinations = styled.section`
    background-color: #fff;
`;

const Logo = styled.div`
  padding-top: 69px;
  padding-bottom: 33px;
  display: flex;
  justify-content: center;
`;

const Compass = styled.img`
    width: 64px;
    height: 64px; 
`;

const Title = styled.h2`
    font-style: normal;
    font-weight: 500;
    line-height: 36px;
    font-size: 24px;
    text-align: center;
    color: #4A4A4A;
    padding: 0 85px;
    margin: 0;
`;

const City = styled.span`
    display: block;
    color: #00ACE2;
    font-style: normal;
    font-weight: 400;
    line-height: 36px;
    font-size: 24px;
    text-align: center;
    &:after{
        content: url(${pen});
        width: 100%;
        height: 100%;
        padding-left: 7px;
    }
`;

const DestinationCategory = styled.div`
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-top: 56px;
    margin-bottom: 55px;
    align-content: center;
    @media screen and (min-width: 1024px) {
        flex-wrap: nowrap;
    }
`;

const CategoryItem = styled.div`
    margin: 0 28px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CategoryItemImg = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 4px 16px rgba(74, 74, 74, 0.12);
    border-radius: 50px;
    padding: 13px;
    vertical-align: middle;
`;

const Image = styled.img`
    width: 22px;
    height: 22px;
`;

const CategoryItemText = styled.p`
    font-style: normal;
    font-weight: normal;
    line-height: 20px;
    font-size: 12px;
    text-align: center;
    color: #00ACE2;
    width: 80px;
    margin: 0;
    padding-top: 12px;
    &:active, &:hover{
        color: #5C5C5C;
        cursor: pointer;
        &::after{
            transform: scale(1);
        }
    }
    &::after{
        display: block;
        content: '';
        width: 100%;
        height: 1px;
        background-color: #00ACE2;
        margin-top: 2px;
        transition: all 0.2s;
        transform: scale(0); 
    }
`;

const DestinationsCards = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-bottom: 45px;
    flex-wrap: wrap;
`;

const DestinationItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 7px;
    background: #FFFFFF;
    box-shadow: 0px 2px 12px rgba(0, 75, 93, 0.12);
    border-radius: 8px;
    margin-bottom: 31px;
    @media screen and (max-width: 1024px) {
        width: 100%;
    }
`;

const CardImage = styled.img`
    border-radius: 8px 8px 0 0;
    @media screen and (max-width: 768px) {
    width: 624px;
    height: 294px; 
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    height: auto;
  }
`;

const CardInfo = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    margin: 12px 0 16px;
`;

const CountryImg = styled.img`
    flex-basis: 30px;
`;

const Location = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 14px;
`;

const CardLocation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const CityLocation = styled.p`
    font-style: normal;
    font-weight: bold;
    line-height: 32px;
    font-size: 22px;
    color: #5B5B5C;
    margin: 0;
    text-align: left;
`;

const CountryLocation = styled.p`
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    font-size: 12px;
    color: #A0B0B9;
    text-transform: uppercase;
    margin: 0;
    text-align: left;
`;

const CardDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 24px;
`;

const CardPrice = styled.p`
    font-style: normal;
    font-weight: normal;
    line-height: 32px;
    font-size: 22px;
    text-align: right;
    color: #00BAE8;
    margin: 0;
`;

const CardDate = styled.p`
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    font-size: 12px;
    text-align: right;
    color: #A0B0B9;
    margin: 0;
`;


export default () => {
    return (
        <Destinations>
            <div className="container">
                    <Logo>
                        <Compass src={compass}/>
                    </Logo>
                    <Title>Популярные направления перелетов из города<City>Москва</City></Title>
                    <DestinationCategory>
                        <CategoryItem>
                            <CategoryItemImg>
                                <Image alt="куда угодно" src={world} />
                            </CategoryItemImg>
                            <CategoryItemText>КУДА УГОДНО</CategoryItemText>
                        </CategoryItem>
                        <CategoryItem>
                            <CategoryItemImg>
                                <Image alt="солнце и море" src={palm} />
                            </CategoryItemImg>
                            <CategoryItemText>CОЛНЦЕ И МОРЕ</CategoryItemText>
                        </CategoryItem>
                        <CategoryItem>
                            <CategoryItemImg>
                                <Image alt="шопинг и город" src={shopping} />
                            </CategoryItemImg>
                            <CategoryItemText>ШОПИНГ, ГОРОД</CategoryItemText>
                        </CategoryItem>
                        <CategoryItem>
                            <CategoryItemImg>
                                <Image alt="культура и история" src={history} />
                            </CategoryItemImg>
                            <CategoryItemText>КУЛЬТУРА И ИСТОРИЯ</CategoryItemText>
                        </CategoryItem>
                        <CategoryItem>
                            <CategoryItemImg>
                                <Image alt="ночная жизнь" src={night} />
                            </CategoryItemImg>
                            <CategoryItemText>НОЧНАЯ ЖИЗНЬ</CategoryItemText>
                        </CategoryItem>
                        <CategoryItem>
                            <CategoryItemImg>
                                <Image alt="отдых с детьми" src={baby} />
                            </CategoryItemImg>
                            <CategoryItemText>КУДА УГОДНО</CategoryItemText>
                        </CategoryItem>
                    </DestinationCategory>
                    <DestinationsCards>
                        <DestinationItem>
                            <CardImage src={krasnodar} />
                            <CardInfo>
                                <Location>
                                <CountryImg src={russia} />
                                <CardLocation>
                                    <CityLocation>Краснодар</CityLocation>
                                    <CountryLocation>Россия</CountryLocation>
                                </CardLocation>
                                </Location>
                                <CardDescription>
                                    <CardPrice>Найти от 1 212 ₽</CardPrice>
                                    <CardDate>18 марта</CardDate>
                                </CardDescription>
                            </CardInfo>
                        </DestinationItem>
                        <DestinationItem>
                            <CardImage src={soshi} />
                            <CardInfo>
                                <Location>
                                <CountryImg src={russia} />
                                <CardLocation>
                                    <CityLocation>Сочи (Адлер)</CityLocation>
                                    <CountryLocation>Россия</CountryLocation>
                                </CardLocation>
                                </Location>
                                <CardDescription>
                                    <CardPrice>Найти от 1 334 ₽</CardPrice>
                                    <CardDate>27 марта</CardDate>
                                </CardDescription>
                            </CardInfo>
                        </DestinationItem>
                        <DestinationItem>
                            <CardImage src={saintp} />
                            <CardInfo>
                                <Location>
                                <CountryImg src={russia} />
                                <CardLocation>
                                    <CityLocation>Санкт-Петербург</CityLocation>
                                    <CountryLocation>Россия</CountryLocation>
                                </CardLocation>
                                </Location>
                                <CardDescription>
                                    <CardPrice>Найти от 1 508 ₽</CardPrice>
                                    <CardDate>19 февраля</CardDate>
                                </CardDescription>
                            </CardInfo>
                        </DestinationItem>
                        <DestinationItem>
                            <CardImage src={minwaters} />
                            <CardInfo>
                                <Location>
                                <CountryImg src={russia} />
                                <CardLocation>
                                    <CityLocation>Минеральные Воды</CityLocation>
                                    <CountryLocation>Россия</CountryLocation>
                                </CardLocation>
                                </Location>
                                <CardDescription>
                                    <CardPrice>Найти от 2 074 ₽</CardPrice>
                                    <CardDate>13 марта</CardDate>
                                </CardDescription>
                            </CardInfo>
                        </DestinationItem>
                        <DestinationItem>
                            <CardImage src={simferopol} />
                            <CardInfo>
                                <Location>
                                <CountryImg src={russia} />
                                <CardLocation>
                                    <CityLocation>Симферополь (Крым)</CityLocation>
                                    <CountryLocation>Россия</CountryLocation>
                                </CardLocation>
                                </Location>
                                <CardDescription>
                                    <CardPrice>Найти от 2 407 ₽</CardPrice>
                                    <CardDate>13 марта</CardDate>
                                </CardDescription>
                            </CardInfo>
                        </DestinationItem>
                        <DestinationItem>
                            <CardImage src={barcelona} />
                            <CardInfo>
                                <Location>
                                <CountryImg src={spain} />
                                <CardLocation>
                                    <CityLocation>Барселона</CityLocation>
                                    <CountryLocation>Испания</CountryLocation>
                                </CardLocation>
                                </Location>
                                <CardDescription>
                                    <CardPrice>Найти от 4 247 ₽</CardPrice>
                                    <CardDate>24 марта</CardDate>
                                </CardDescription>
                            </CardInfo>
                        </DestinationItem>
                    </DestinationsCards>
            </div>
        </Destinations>
    )
}