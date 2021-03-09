import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Card = styled.div`
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  width: 75%;
  padding: 20px;
  background-color: #ffffff;
`;

const Content = styled.div`
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Cards: React.FunctionComponent = (props) => {
  return (
    <Container>
      <Card>
        <Content>{props.children}</Content>
      </Card>
    </Container>
  );
};

export default Cards;
