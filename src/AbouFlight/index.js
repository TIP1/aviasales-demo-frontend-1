import React from "react";
import styled from "styled-components";
import list from "./list.png";
import mail from "./mail.png";
import plane from "./plane.png";

const AboutFlight = styled.section`
    background-color: #fff;
    padding: 21px 0 40px;
`;

const Title = styled.h2`
    font-style: normal;
    font-weight: bold;
    line-height: 18px;
    font-size: 13px;
    color: #4A4A4A;
    margin:0 0 16px;
    &:nth-child(1):before{
        content: url(${plane});
        margin-right: 7px;
        vertical-align: middle;
    }
    &:nth-child(3):before{
        content: url(${mail});
        margin-right: 7px;
        vertical-align: middle;
        vertical-align: -webkit-baseline-middle;
    }
    &:nth-child(5):before{
        content: url(${list});
        margin-right: 7px;
        vertical-align: middle;
        vertical-align: -webkit-baseline-middle;
    }
`;

const Text = styled.p`
    font-style: normal;
    font-weight: normal;
    line-height: 20px;
    font-size: 14px;
    color: #4A4A4A;
    margin-top: 16px;
    margin-bottom: 24px;
`;

const MoreInfo = styled.a`
    font-style: normal;
    font-weight: normal;
    line-height: 20px;
    font-size: 14px;
    color: #00ACE2;
    margin-left: 15px;
    cursor: pointer;
`;

export default () => {
    return (
        <AboutFlight>
            <div className="container">
                <div className="col-lg-offset-1 col-lg-10">
                    <Title>КАК КУПИТЬ ДЕШЕВЫЕ АВИАБИЛЕТЫ?</Title>
                    <Text>Aviasales.ru — это метапоисковик авиабилетов. Мы ищем билеты на самолет по сотням авиакомпаний и находим за считанные минуты самые дешевые авиабилеты. Чтобы купить авиабилет дешево,
                     воспользуйтесь нашим поиском, который совершенно бесплатно сравнивает цены на авиабилеты онлайн и находит самые дешевые перелеты. Больше нет смысла ходить в авиакассы, обзванивать агентства — дешевый билет находится на расстоянии клика.
                      На нашем сайте вы можете подобрать дешевые билеты на самолет в Европу,
                     Азию и на другие континенты. Мы написали для вас простую инструкцию о том, как пользоваться поиском и экономить на перелетах от 1000 до 20 000 руб в год.<MoreInfo>Подробнее</MoreInfo></Text>
                     <Title>ЭЛЕКТРОННЫЙ АВИАБИЛЕТ</Title>
                     <Text>Электронный авиабилет — это, по сути, обычный билет на самолет, но только в менее привычном для путешественника виде. Вся информация об авиаперелете (данные пассажира, маршрут следования) хранится в электронной базе, а пассажир получает на руки маршрут-квитанцию.
                      Некоторые пассажиры, купив авиабилет онлайн и получив маршрут-квитанцию,
                      удивлены ее видом — это обыкновенный лист формата А4, на котором распечатана вся информация о предстоящем перелете.
                      Однако это действительно официальный документ, подтверждающий договор между авиаперевозчиком и пассажиром.
                      При регистрации на рейс пассажир должен предъявить маршрут-квитанцию вместе с удостоверением личности точно так же, как предъявляют обыкновенный бумажный билет.
                      Следует отметить, что электронный билет, приобретенный онлайн, стоит дешевле своего бумажного аналога.<MoreInfo>Подробнее</MoreInfo></Text>
                     <Title>20 СОВЕТОВ АВИАПУТЕШЕСТВЕННИКАМ</Title>
                     <Text>Есть масса путеводителей по странам, но ни одного о том, как провести время в самолете. Для того, чтобы сделать ваш перелет максимально комфортным, мы написали 20 советов о подготовке к путешествию.
                      Ведь настоящее путешествие начинается со слов «Добро пожаловать на борт нашего самолета»!<MoreInfo>Подробнее</MoreInfo></Text>
                </div>
            </div> 
        </AboutFlight>
    )
}