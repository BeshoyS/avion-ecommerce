import React, { FC } from "react";
import { DataListings } from "../Listings/ListingsLists";
import {
  CardContainer,
  ContentContainer,
  Img,
  Price,
  Title,
} from "./Card.styled";

type Props = DataListings;

const Card: FC<Props> = ({ id, img, title, price }) => {
  return (
    <CardContainer onClick={() => alert(`id no.${id}`)}>
      <Img src={img} alt={title} />
      <ContentContainer>
        <Title>{title}</Title>
        <Price>${price}</Price>
      </ContentContainer>
    </CardContainer>
  );
};

export default Card;
