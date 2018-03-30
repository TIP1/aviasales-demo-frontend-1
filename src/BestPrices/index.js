import React from "react";
import styled from "styled-components";
import calendar from "./calendar.svg";
import russia from "./russia.svg";
import armenia from "./armenia.svg";
import moldavia from "./moldavia.svg";
import dotted_line from "./dotted.svg";

const BestPrices = styled.section`
    background-color: #fff;
`;

const Logo = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`;

const Calendar = styled.img`
    width: 60px;
    height: 60px;
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

const BestCountries = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 60px;
    margin-bottom: 80px;
    flex-wrap: no-wrap;
    @media screen and (max-width: 1024px) {
        flex-wrap: wrap;
    }
`;

const CountryDescription = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 24px;
    width: 100%;
    @media screen and (max-width: 1024px) {
        &:nth-child(2){
            border-top: 1px dashed #AFBEC6;
            margin: 24px 0;
            padding-top: 24px;
            border-bottom: 1px dashed #AFBEC6;
        }
    }
`;

const Location = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 8px;

`;

const CountryImage = styled.img`
    margin-left: -10px;
`;

const Country = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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

const Directions = styled.div`
    display: flex;
    flex-direction: column;
`;

const TownDescription = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 16px 0;
`;

const TownName = styled.h2`
    font-style: normal;
    font-weight: normal;
    line-height: 20px;
    font-size: 16px;
    color: #4A4A4A;
    margin: 0;
`;

const TownPrice = styled.h2`
    font-style: normal;
    font-weight: normal;
    line-height: 20px;
    font-size: 16px;
    color: #00BAE8;
    margin: 0;
`;

const SubTitle = styled.h2`
    font-style: normal;
    font-weight: normal;
    line-height: 26px;
    font-size: 16px;
    text-align: center;
    color: #4A4A4A;
    padding: 0 130px;
    margin: 0;
    @media screen and (max-width: 1024px) {
        padding: 0;
    }
`;

const NotOffer = styled.p`
    font-style: normal;
    font-weight: normal;
    line-height: 20px;
    font-size: 14px;
    text-align: center;
    color: #A0B0B9;
    margin: 0;
    padding-top: 16px;
    padding-bottom: 75px;
`;

export default () => {
    return (
        <BestPrices>
            <div className="container">
                <div className="col-lg-offset-1 col-lg-10">
                    <Logo>
                        <Calendar src={calendar} />
                    </Logo>
                    <Title>Лучшие цены на авиабилеты за последний месяц</Title>
                    <BestCountries>
                        <CountryDescription>
                            <Location>
                                <CountryImage src={russia} />
                                <Country>
                                    <CityLocation>Симферополь (Крым)</CityLocation>
                                    <CountryLocation>КРЫМ</CountryLocation>
                                </Country>
                            </Location>
                            <Directions>
                                <TownDescription>
                                    <TownName>Из Москвы</TownName>
                                    <TownPrice>от 4 813 ₽</TownPrice>
                                </TownDescription>
                                <TownDescription>
                                    <TownName>Из Санкт-Петербурга</TownName>
                                    <TownPrice>от 7 857 ₽</TownPrice>
                                </TownDescription>
                                <TownDescription>
                                    <TownName>Из Новосибирска</TownName>
                                    <TownPrice>от 15 127 ₽</TownPrice>
                                </TownDescription>
                                <TownDescription>
                                    <TownName>Из Екатеринбурга</TownName>
                                    <TownPrice>от 9 275 ₽</TownPrice>
                                </TownDescription>
                                <TownDescription>
                                    <TownName>Из Челябинска</TownName>
                                    <TownPrice>от 9 148 ₽</TownPrice>
                                </TownDescription>
                            </Directions>
                        </CountryDescription>
                        <CountryDescription>
                            <Location>
                                <CountryImage src={armenia} />
                                <Country>
                                    <CityLocation>Ереван</CityLocation>
                                    <CountryLocation>АРМЕНИЯ</CountryLocation>
                                </Country>
                            </Location>
                            <Directions>
                                <TownDescription>
                                    <TownName>Из Москвы</TownName>
                                    <TownPrice>от 6 758 ₽</TownPrice>
                                </TownDescription>
                                <TownDescription>
                                    <TownName>Из Санкт-Петербурга</TownName>
                                    <TownPrice>от 9 932 ₽</TownPrice>
                                </TownDescription>
                                <TownDescription>
                                    <TownName>Из Сочи</TownName>
                                    <TownPrice>от 11 951 ₽</TownPrice>
                                </TownDescription>
                                <TownDescription>
                                    <TownName>Из Краснодара</TownName>
                                    <TownPrice>от 11 741 ₽</TownPrice>
                                </TownDescription>
                                <TownDescription>
                                    <TownName>Из Ростова-на-Дону</TownName>
                                    <TownPrice>от 11 956 ₽</TownPrice>
                                </TownDescription>
                            </Directions>
                        </CountryDescription>
                        <CountryDescription>
                            <Location>
                                <CountryImage src={moldavia} />
                                <Country>
                                    <CityLocation>Кишинёв</CityLocation>
                                    <CountryLocation>МОЛДАВИЯ</CountryLocation>
                                </Country>
                            </Location>
                            <Directions>
                                <TownDescription>
                                    <TownName>Из Москвы</TownName>
                                    <TownPrice>от 8 319 ₽</TownPrice>
                                </TownDescription>
                                <TownDescription>
                                    <TownName>Из Санкт-Петербурга</TownName>
                                    <TownPrice>от 10 800 ₽</TownPrice>
                                </TownDescription>
                                <TownDescription>
                                    <TownName>Из Краснодара</TownName>
                                    <TownPrice>от 12 098 ₽</TownPrice>
                                </TownDescription>
                                <TownDescription>
                                    <TownName>Из Сургута</TownName>
                                    <TownPrice>от 16 277 ₽</TownPrice>
                                </TownDescription>
                                <TownDescription>
                                    <TownName>Из Нового Уренгоя</TownName>
                                    <TownPrice>от 15 987 ₽</TownPrice>
                                </TownDescription>
                            </Directions>
                        </CountryDescription>
                    </BestCountries>
                    <SubTitle>Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220 стран мира.
                    Поиск и сравнение цен на авиабилеты среди 100 агентств и 728 авиакомпаний.</SubTitle>
                    <NotOffer>Цены, найденные пользователями за последние 48 часов, не являются офертой.</NotOffer>
                </div>    
            </div>
        </BestPrices>
    )
}