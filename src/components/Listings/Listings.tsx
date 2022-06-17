import { FC } from "react";
import Card from "../Card/Card";
import { ListingsBlock, ListingsContainer, ListingsHeading } from "./Listings.styled";
import { DataListings } from "./ListingsLists";

type Props = {
  heading: string;
  data: DataListings[];
};

const Listings: FC<Props> = ({ heading, data }) => {
  return (
    <ListingsContainer>
      <ListingsHeading>{heading}</ListingsHeading>
      <ListingsBlock>
        {data?.map((product, index) => (
          <Card key={index} {...product} />
        ))}
      </ListingsBlock>
    </ListingsContainer>
  );
};

export default Listings;
