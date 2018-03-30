import React from "react";
import styled from "styled-components";
import facebook from "./fb.svg";
import instagram from "./inst.svg";
import twitter from "./tw.svg";
import vk from "./vk.svg";
import viber from "./viber.svg";
import google from "./google.svg";
import windows from "./win.svg";
import appstore from "./appstore.svg";

const Footer = styled.section`
    background-color: #fff;
    padding-top: 45px;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 1024px) {
        margin-bottom: 30px;
    }
`;

const Country = styled.h3`
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    font-size: 12px;
    color: #4A4A4A;
    padding-bottom: 8px;
    margin: 0;
`;

const Block = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

const Link = styled.a`
    font-style: normal;
    font-weight: normal;
    line-height: 16px;
    font-size: 12px;
    color: #5B5B5C;
    padding: 12px 0;
    margin: 0;
    cursor: pointer;
`;

const MainLink = styled.a`
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    font-size: 12px;
    color: #4A4A4A;
    padding-top: 3px;
    padding-bottom: 29px;
    cursor: pointer;
`;

const FooterAbout = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 40px;
    padding-bottom: 43px;
    justify-content: space-between;
    border-top: 1px solid #E0E6E8;
    @media screen and (max-width: 1024px) {
        flex-wrap: wrap;
    }
`;

const About = styled.div`
    display:flex;
    flex-direction: column;
`;

const FooterMenu = styled.div`
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 768px) {
        flex-wrap:wrap;
    }
`;

const AboutLink = styled.a`
    font-style: normal;
    font-weight: normal;
    line-height: 16px;
    font-size: 12px;
    color: #5B5B5C;
    margin-right: 10px;
    cursor: pointer;
    @media screen and (max-width: 768px) {
        margin: 10px 0;
    }
`;

const Social = FooterMenu.extend`
    margin-top: 19px;
    @media screen and (max-width: 768px) {
        flex-wrap: nowrap;
        margin-right: 19px;
    }
`;

const SocialImg = styled.img`
    padding-right: 4px;
    width: 100%;
`;

const SocialLink = AboutLink.extend`
    color: #4A4A4A;
    margin-right: 20px;
`;

const SearcLink = AboutLink.extend`
    margin: 0;
    padding-top: 32px;
    @media screen and (max-width: 768px) {
        text-align: center;
    }
`;

const Download = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 1024px) {
        margin-top: 17px;
    }
    @media screen and (max-width: 768px) {
        margin: 0 auto;
    }
`;

const DownloadIn = styled.div`
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 768px) {
        flex-wrap: wrap;
        flex-direction: column;
        text-align: center;
    }
`;

const AppImg = styled.img`
    padding-left: 10px;
    @media screen and (max-width: 768px) {
        margin: 4px 0;
    }
`;

const Oficial = styled.p`
    font-style: normal;
    font-weight: normal;
    line-height: 16px;
    font-size: 12px;
    text-align: right;
    color: #5B5B5C;
    margin: 0;
    padding-top: 34px;
    @media screen and (max-width: 1024px) {
        text-align: left;
    }
    @media screen and (max-width: 768px) {margin: 0 auto;}
`;

export default () => {
    return (
        <Footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 col-md-4 col-xs-6">
                        <Column>
                            <Country>СТРАНЫ</Country>
                            <Block>
                                <Link>Россия</Link>
                                <Link>Таиланд</Link>
                                <Link>Черногория</Link>
                                <Link>Кипр</Link>
                                <Link>Болгария</Link>
                                <Link>Грузия</Link>
                            </Block>
                            <MainLink>Все страны →</MainLink>
                        </Column>
                    </div>
                    <div className="col-lg-2 col-md-4 col-xs-6">
                        <Column>
                            <Country>ГОРОДА</Country>
                            <Block>
                                <Link>Москва</Link>
                                <Link>Санкт-Петербург</Link>
                                <Link>Симферополь</Link>
                                <Link>Адлер</Link>
                                <Link>Екатеринбург</Link>
                                <Link>Лондон</Link>
                            </Block>
                            <MainLink>Все города →</MainLink>
                        </Column>
                    </div>
                    <div className="col-lg-2 col-md-4 col-xs-6">
                        <Column>
                            <Country>АВИАКОМПАНИИ</Country>
                            <Block>
                                <Link>Air Berlin</Link>
                                <Link>Air France</Link>
                                <Link>Alitalia</Link>
                                <Link>Air Baltic</Link>
                                <Link>Emirates</Link>
                                <Link>KLM</Link>
                            </Block>
                            <MainLink>Все авиакомпании →</MainLink>
                        </Column>
                    </div>
                    <div className="col-lg-2 col-md-4 col-xs-6">
                        <Column>
                            <Country>АЭРОПОРТЫ</Country>
                            <Block>
                                <Link>Шереметьево</Link>
                                <Link>Курумоч</Link>
                                <Link>Домодедово</Link>
                                <Link>Толмачево</Link>
                                <Link>Владивосток</Link>
                                <Link>Гамбург</Link>
                            </Block>
                            <MainLink>Все аэропорты →</MainLink>
                        </Column>
                    </div>
                    <div className="col-lg-2 col-md-4 col-xs-6">
                        <Column>
                            <Country>НАПРАВЛЕНИЯ</Country>
                            <Block>
                                <Link>MOW – SIP</Link>
                                <Link>MOW – AER</Link>
                                <Link>MOW – TIV</Link>
                                <Link>MOW – MRV</Link>
                                <Link>LED – MOW</Link>
                                <Link>MOW – BKK</Link>
                            </Block>
                        </Column>
                    </div>
                    <div className="col-lg-2 col-md-4 col-xs-6">
                        <Column>
                            <Country>СЕРВИСЫ</Country>
                            <Block>
                                <Link>Горящие авиабилеты</Link>
                                <Link>Календарь низких цен</Link>
                                <Link>Карта низких цен</Link>
                                <Link>Спецпредложения</Link>
                                <Link>Таблица цен</Link>
                                <Link>Блог</Link>
                                <Link>Помощь</Link>
                            </Block>
                        </Column>
                    </div>
                </div>
                <FooterAbout>
                    <About>
                        <FooterMenu>
                        <AboutLink>О компании</AboutLink>
                        <AboutLink>Партнёрская программа</AboutLink>
                        <AboutLink>Реклама</AboutLink>
                        <AboutLink>Вакансии</AboutLink>
                        <AboutLink>Помощь</AboutLink>
                        <AboutLink>Правила</AboutLink>
                        <AboutLink>White Label авиабилеты</AboutLink>
                        </FooterMenu>
                        <FooterMenu>
                        <Social>
                            <SocialImg src={vk} />
                            <SocialLink>Вконтакте</SocialLink>
                        </Social>
                        <Social>
                            <SocialImg src={facebook} />
                            <SocialLink>Фейсбук</SocialLink>
                        </Social>
                        <Social>
                            <SocialImg src={instagram} />
                            <SocialLink>Инстаграм</SocialLink>
                        </Social>
                        <Social>
                            <SocialImg src={twitter} />
                            <SocialLink>Твиттер</SocialLink>
                        </Social>
                        <Social>
                            <SocialImg src={viber} />
                            <SocialLink>Вайбер</SocialLink>
                        </Social>
                        </FooterMenu>
                        <SearcLink>Поиск и бронирование отелей</SearcLink>
                    </About>
                    <Download>
                        <DownloadIn>
                            <AppImg src={appstore} />
                            <AppImg src={windows} />
                            <AppImg src={google} />
                        </DownloadIn>
                        <Oficial>© 2007–2018, Aviasales — дешевые авиабилеты</Oficial>
                    </Download>
                </FooterAbout>
            </div>
        </Footer>
    )
}