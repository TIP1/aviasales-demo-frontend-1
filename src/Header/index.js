import React from "react";
import styled from "styled-components";
import logoImage from "./aviasales.svg";
import arrow from "./arrow.svg";
import calendar from "./calendar.svg";
import dropdown from "./dropdown.svg";
import aero from "./aero.svg";


const Header = styled.header`
  background-color: #00b0de;
  background: linear-gradient(
    148.48deg,
    #00b0de 22.46%,
    #01aedc 26.15%,
    #02abdb 29.89%,
    #02abdb 33.59%,
    #02abdb 33.81%,
    #196ebd 122.26%
  );
`;

const Logo = styled.img`
  width: 30px;
  height: 29px;
  padding-top: 12px;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const LogoText = styled.p`
  display: none;
  @media screen and (min-width: 768px) {
    display: inline;
    margin: 0;
    font-size: 1.2rem;
    line-height: 1.3;
    font-weight: 400;
    color: #fff;
    padding-top: 12px;
    padding-left:  12px;
  }
`;

const Title = styled.h1`
    font-style: normal;
    font-weight: bold;
    line-height: 48px;
    font-size: 40px;
    text-align: center;
    color: #FFFFFF;
    margin: 0;
    padding-top: 213px;
    @media screen and (min-width: 1024px) {
      font-size: 32px;
      padding-top: 83px;
    }
    @media screen and (max-width: 768px) {
      font-size:20px;
      padding-top:47px;
    }
`;

const SubTitle = styled.h2`
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    font-size: 24px;
    text-align: center;
    color: #FFFFFF;
    padding-top: 8px;
    padding-bottom: 40px; 
    @media screen and (min-width: 1024px) {
      font-size: 20px;
    }
    @media screen and (max-width: 768px) {
      display: none;
    }
`;

const Form = styled.div`
    padding-top: 40px;
    display: flex;
    flex-wrap: nowrap;
    @media screen and (max-width: 1025px) {
      display: none;
    }
`;
const MdForm = styled.div`
    padding-top: 40px;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: center;
    @media screen and (min-width: 1026px) {
      display: none;
    }
    @media screen and (max-width: 768px) {
      margin-bottom:16px;
    }
    @media screen and (max-width: 1024px) {
      margin-bottom:32px;
    }
`;

const InputContainer = styled.div`
  position: relative;
`;

const InputFrom = styled.input`
border-radius: 5px 0 0 5px;
border: none;
height: 20px;
width:auto;
padding: 18px 16px;
color: #4A4A4A;
margin-bottom:2px;
@media screen and (max-width: 1024px) {
  width: 311px;
  border-radius: 5px 0 0 0;
}
@media screen and (max-width: 550px) {
 width: 314px;
}
@media screen and (max-width: 375px) {
    width: 254px;
    border-radius: 5px 5px 0 0;
  }
`;

const PlaceholderTxt = styled.p`
  margin:0;
  position: absolute;
  top: 18px;
  right: 43px;
  font-size: 16px;
  color: #A0B0B9;
`;

const PlaceholderImg = styled.img`
  position: absolute;
  top: 19px;
  right: 16px;
`;
const PlaceholderImgDropdown = PlaceholderImg.extend`
  top: 25px;
  right: 16px;
`;

const InputTo = InputFrom.extend`
  color: #A0B0B9;
  border-radius: 0;
  margin: 0 2px;
  @media screen and (max-width: 1024px) {
  border-radius: 0 5px 0 0;
}
  @media screen and (max-width: 375px) {
    width: 254px;
    border-radius: 0;
  }
`;

const InputDateTo = styled.input`
  width: auto;
  height: 20px;
  padding: 18px 16px;
  border: none;
  margin-bottom:2px;
  &::placeholder{
    color: #A0B0B9;
  }
  margin-right: 2px;
  @media screen and (max-width: 1024px) {
  width: 138.5px;
  }
  @media screen and (max-width: 550px) {
    margin: 2px 1px 2px 1px;
    width: 140px;
  }
  @media screen and (max-width: 375px) {
    width: 109.5px;
  }
`;

const InputDropdown = styled.input`
  width: auto;
  height: 20px;
  padding: 18px 16px;
  border: none;
  border-radius: 0 5px 5px 0;
  margin-bottom:2px;
  &::placeholder{
    color: #A0B0B9;
  }
  @media screen and (max-width: 1024px) {
  width: 314px;
  border-radius: 0 0 5px 0;
  }
  @media screen and (max-width: 375px) {
    width: 254px;
    border-radius: 0 0 5px 5px;
  }
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (min-width: 1024px) {
    padding-bottom: 168px;
  }
`;

const ButtonFindTicket = styled.button`
  border: none;
  background-color: #ff9241;
  padding: 14px 93px 14px 52px;
  color: #fff;
  font-size: 1.5rem;
  font-family: "Roboto", Helvetica Neue, Open Sans, sans-serif;
  font-weight: bold;
  line-height: 1.25;
  margin-bottom: 254px;
  &:after {
    content: url(${aero});
    position: absolute;
    padding-left: 16px;
  }
  @media screen and (min-width: 1024px) {
    margin-bottom: 122px;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 88px;
    font-size: 21px;
  }
`;

export default () => {
    return (
        <Header>
            <div className="container">
                <Link>
                    <Logo alt="Logo" src={logoImage} />
                    <LogoText>aviasales</LogoText>
                </Link>
                <Title>Поиск дешевых авиабилетов</Title>
                <SubTitle>Лучший способ купить авиабилеты дешево</SubTitle>
                  <Form>
                    <InputContainer>
                      <InputFrom value="Москва" />
                      <PlaceholderTxt>MOW</PlaceholderTxt>
                      <PlaceholderImg src={arrow} />
                    </InputContainer>
                    <InputTo value="Город прибытия" />
                    <InputContainer>
                      <InputDateTo placeholder="Туда" />
                      <PlaceholderImg src={calendar} />
                    </InputContainer>
                    <InputContainer>
                      <InputDateTo placeholder="Обратно" />
                      <PlaceholderImg src={calendar} />
                    </InputContainer>
                    <InputContainer>
                      <InputDropdown placeholder="1 пассажир, эконом" />
                      <PlaceholderImgDropdown src={dropdown} />
                    </InputContainer>
                  </Form>
                  <MdForm>
                    <InputContainer>
                      <InputFrom value="Москва" />
                      <PlaceholderTxt>MOW</PlaceholderTxt>
                      <PlaceholderImg src={arrow} />
                    </InputContainer>
                    <InputTo value="Город прибытия" />
                    <InputContainer>
                      <InputDateTo placeholder="Туда" />
                      <PlaceholderImg src={calendar} />
                    </InputContainer>
                    <InputContainer>
                      <InputDateTo placeholder="Обратно" />
                      <PlaceholderImg src={calendar} />
                    </InputContainer>
                    <InputContainer>
                      <InputDropdown placeholder="1 пассажир, эконом" />
                      <PlaceholderImgDropdown src={dropdown} />
                    </InputContainer>
                  </MdForm>
                <Button>
                  <ButtonFindTicket>Найти билеты</ButtonFindTicket>
                </Button>
            </div>
        </Header>
    );
};