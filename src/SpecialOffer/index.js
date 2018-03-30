import React from "react";
import styled from "styled-components";
import pobeda from "./pobeda.svg";
import lufthansa from "./lufthansa.svg";
import CardHeaderLogo from "./CardHeaderLogo.png";

const SpecialOffer = styled.section`
    background: linear-gradient(106.41deg, #00B0DE -42.02%, #196EBD 57.98%);
    padding: 24px 0;
`;

const Title = styled.h2`
    font-style: normal;
    font-weight: 500;
    line-height: 42px;
    font-size: 30px;
    color: #FFFFFF;
    margin: 0 0 0 -10px;
    text-align: left;
`;

const SpecialCards = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 20px;
    margin-left: -5px;
    margin-right: -10px
    @media screen and (max-width: 768px) {
        flex-wrap: wrap;
    }
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    width: 100%;
    &:nth-child(2){
        margin: 0 68px;
    }
    @media screen and (max-width: 1024px) {
        &:nth-child(2){
        margin: 0 16px;
        }
    }
    @media screen and (max-width: 768px) {
        &:nth-child(2){
        margin: 12px 0;
    }
    }
`;

const CardHeader = styled.div`
    background: #CD2027;  
    padding: 22px 16px;  
    position: relative;
`;

const HeaderLogo = styled.img`
    position: absolute;
    top: 12px;
    right: 12px;
`;

const CardTitle = styled.h2`
    font-style: normal;
    font-weight: normal;
    line-height: 20px;
    font-size: 16px;
    color: #FFFFFF; 
    margin: 0;
    
`;

const CardBody = styled.div`
    padding: 18px 16px 20px;
    display: flex;
    flex-direction: column;
    position: relative;
`;

const TicketInfo = styled.div`
    display: flex;
    flex-directiom: row;
    align-content: center;
    justify-content: space-between;
`;

const TicketCompany = styled.img`

`;

const TicketDescription = styled.div`
    display: flex;
    flex-direction: column;
`;

const TicketPrice = styled.h2`
    font-style: normal;
    font-weight: normal;
    line-height: 16px;
    font-size: 20px;
    text-align: right;
    color: #5C5C5C;
    margin: 0;
`;

const From = styled.span`
    font-style: normal;
    font-weight: normal;
    line-height: 16px;
    font-size: 12px;
    color: #5C5C5C;
    padding-right: 4px;
`;

const DaysLeft = styled.h2`
    font-style: normal;
    font-weight: normal;
    line-height: 15px;
    font-size: 12px;
    text-align: right;
    color: #D93633;
    margin: 0;
    padding-top: 5px;
`;

const TicketSpecification = styled.h2`
    font-style: normal;
    font-weight: normal;
    line-height: 16px;
    font-size: 12px;
    color: #242424;
    margin-top: 12px;
    margin-bottom: 44px;
`;

const KnowMore = styled.button`
    background: rgba(0, 0, 0, 0.0001);
    border: 2px solid #CD1F27;
    border-radius: 3px;
    font-style: normal;
    font-weight: normal;
    line-height: 20px;
    font-size: 16px;
    text-align: center;
    color: #D93533;
    cursor: pointer;
`;

const AllOffers = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 25px;
    @media screen and (max-width: 768px) {
        flex-wrap: wrap;
        text-align: center;
        justify-content: space-around;
    }
    
`;

const SeeAll = styled.h2`
    font-style: normal;
    font-weight: normal;
    line-height: 20px;
    font-size: 16px;
    text-decoration-line: underline;
    color: #FFFFFF;
    margin: 0;
`;

const MiddlePrice = styled.h2`
    font-style: normal;
    font-weight: normal;
    line-height: 20px;
    font-size: 16px;
    text-align: right;
    color: #FFFFFF;
    margin: 0;
`;


export default () => {
    return (
        <SpecialOffer>
            <div className="container">
                <div className="col-lg-offset-1 col-lg-10">
                    <Title>Спецпредложения на авиабилеты</Title>
                    <SpecialCards>
                        <Card>
                            <CardHeader>
                                <CardTitle>Билеты от 499 рублей!</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <TicketInfo>
                                    <TicketCompany src={pobeda} />
                                    <TicketDescription>
                                        <TicketPrice><From>от</From>499 ₽</TicketPrice>
                                        <DaysLeft>Осталось 45 дней</DaysLeft>
                                    </TicketDescription>
                                </TicketInfo>
                                <TicketSpecification>Билеты от 499 рублей! Специальное предложение от авиакомпании Победа</TicketSpecification>
                                <KnowMore>Узнать подробности</KnowMore>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>В Нью-Йорк от 20680 рублей!</CardTitle>
                                <HeaderLogo src={CardHeaderLogo} />
                            </CardHeader>
                            <CardBody>
                                <TicketInfo>
                                    <TicketCompany src={lufthansa} />
                                    <TicketDescription>
                                        <TicketPrice><From>от</From>20 680 ₽</TicketPrice>
                                        <DaysLeft>Осталось 19 дней</DaysLeft>
                                    </TicketDescription>
                                </TicketInfo>
                                <TicketSpecification>Из Москвы в США от 20680 рублей! Специальное предложение от авиакомпании Lufthansa</TicketSpecification>
                                <KnowMore>Узнать подробности</KnowMore>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>В Лос-Анджелес от 22360 р...</CardTitle>
                                <HeaderLogo src={CardHeaderLogo} />
                            </CardHeader>
                            <CardBody>
                                <TicketInfo>
                                    <TicketCompany src={lufthansa} />
                                    <TicketDescription>
                                        <TicketPrice><From>от</From>20 360 ₽</TicketPrice>
                                        <DaysLeft>Осталось 19 дней</DaysLeft>
                                    </TicketDescription>
                                </TicketInfo>
                                <TicketSpecification>Из Москвы в США от 22360 рублей! Специальное предложение от авиакомпании Lufthansa</TicketSpecification>
                                <KnowMore>Узнать подробности</KnowMore>
                            </CardBody>
                        </Card>
                    </SpecialCards>
                    <AllOffers>
                        <SeeAll>Смотреть все спецпредложения</SeeAll>
                        <MiddlePrice>* средняя цена по направлению</MiddlePrice>
                    </AllOffers>
                </div>
            </div>
        </SpecialOffer>
    )
}