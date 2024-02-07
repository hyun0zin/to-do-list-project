import { CardContext } from "context/CardContext";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  list-style-type: none;
  border: 5px solid rgb(155, 155, 161);
  border-radius: 10px;

  width: 300px;
  padding: 20px;
  margin: 10px;
`;

const StDiv = styled.div`
  display: flex;
  justify-content: space-between;

  gap: 10px;
`;

const StButton = styled.button`
  width: 50%;
`;

function DetailPage() {
  const params = useParams();
  const { cards, id, title, text, changeDateType } = useContext(CardContext);

  //find
  const foundData = cards.find((item) => item.id === params.id);
  console.log(id);
  console.log(cards);

  return (
    <>
      <Container>
        <h2>{title}</h2>
        <p>{text}</p>
        <p style={{ color: "red", fontWeight: "600" }}>
          DEADLINE : {changeDateType}
        </p>
        <StDiv>
          <StButton type="button" className="btn btn-danger">
            Delete
          </StButton>
          &nbsp;
          <StButton type="button" className="btn btn-success">
            EDIT
          </StButton>
        </StDiv>
      </Container>
    </>
  );
}

export default DetailPage;
