import Carousel from "react-elastic-carousel";
import styled from "styled-components";

const Item = styled.div`
  display: felx;
  justify-content:center;
  align-item:center;
  height250px;
  width:100%;
  backgroud-color: white;
  color:blue;
  margin:0 15px;
  font-size:4em;


`;

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export function Sample() {
  return (
    <>
      <h1 breakPoints={breakPoints}>Carousle</h1>
      <Carousel>
        <Item>ONe</Item>
        <Item>Two</Item>
        <Item>Three</Item>
        <Item>Four</Item>
        <Item>Five</Item>
        <Item>Six</Item>
        <Item>Seven</Item>
        <Item>Eight</Item>
        <Item>Nine</Item>
      </Carousel>
    </>
  );
}
