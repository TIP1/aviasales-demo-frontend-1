import React from "react";
import styled from "styled-components";
import coloredLine from "./colored-line.svg";
import fb from "./fb.png";
import vk from "./vk.png";
import rss from "./rss.png";
import tw from "./tw.png";

const KnowMore = styled.section`
    background-color: #fff;
    padding-bottom: 24px;
    &:before{
        content: url(${coloredLine});
        display: block;
        width: 100%;
        padding-bottom: 32px;
    }
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const Title = styled.h2`
    font-style: normal;
    font-weight: bold;
    line-height: 20px;
    font-size: 16px;
    color: #5C5C5C;
    margin: 0;
    @media screen and (max-width: 1024px) {
        text-align: center;
    }
`;

const Text = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    line-height: 22px;
    font-size: 16px;
    color: #5C5C5C;
    padding-top: 4px;
    padding-right: 100px;
    margin: 0;
    @media screen and (max-width: 1024px) {
        text-align: center;
        padding: 0 204px;
    }
`;

const Subscribe = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  @media screen and (max-width: 1024px) {
      padding: 30px 0;
  }
`;

const Icon = styled.img`
  width: 36px;
  height: 36px;
  margin-right: 6px;
`;

const SubscribeSocial = styled.div`
    text-align: center;
  @media screen and (min-width: 1024px) {
    display: flex;
  }
`;

const SubcriptionButton = styled.button`
  padding: 8px 20px;
  border: none;
  background-color: #ff8e41;
  color: #fff;
  border-radius: 2px;
  cursor: pointer;
`;

const SubcriptionMail = styled.input`
  border-radius: 2px;
  width: auto;
  padding: 7px 13px;
  outline: none;
  border: 1px solid #A0B0B9;
`;


export default () => {
    return (
        <KnowMore>
            <div className="container">
                <div className="row">
                    <div className="col-xl-offset-1 col-xl-5">
                        <Title>Хотите знать всё о скидках на авиабилеты?</Title>
                        <Text>Вы можете подписаться на нашу рассылку через соцсети или по электронной почте.</Text>
                    </div>
                    <div className="col-xl-5">
                        <SubscribeSocial>
                            <Subscribe>
                                <Icon alt="tw" src={tw} />
                                <Icon alt="fb" src={fb} />
                                <Icon alt="vk" src={vk} />
                                <Icon alt="rss" src={rss} />
                            </Subscribe>
                            <SubcriptionMail placeholder="Ваш email" />
                            <SubcriptionButton>Подписаться</SubcriptionButton>
                        </SubscribeSocial>
                    </div>
                </div>
            </div>
        </KnowMore>
    )
}