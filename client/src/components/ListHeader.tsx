import React from "react";
import styled from "styled-components";

interface ListHeaderProps {
  listName?: string;
}

const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: space-evenly;
  align-items: center;
  background-color: #fff;
  box-shadow:
    0 6px 24px rgba(0, 0, 0, 0.05),
    0 0 0 1px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  padding: 10px;
  max-width: clamp(300px, 80%, 700px);
  margin-top: 50px;

  h1 {
    margin-bottom: 10px;
  }

  @media (max-width: 650px) {
    flex-direction: column;
  }

  @media (max-width: 400px) {
    align-items: center;
  }
`;

const Button = styled.button`
  background-color: pink;
  color: #fff;
  padding: 0.6rem 1rem;
  margin: 0 0.5rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: palevioletred;
    outline: 2px solid hotpink;
    outline-offset: 2px;
  }

  @media (max-width: 600px) {
    font-size: 1.2rem;
    margin: 0.5rem 0;
  }

  @media (max-width: 400px) {
    font-size: 1rem;
  }
`;

const StyledHr = styled.hr`
  position: absolute;
  bottom: 0;
  border: none;
  height: 1px;
  background-color: gray;
  border-radius: 10px;
  width: clamp(300px, 96%, 700px);
`;

const signOut = () => {
  console.log("sign out");
};

const ListHeader: React.FC<ListHeaderProps> = ({ listName }) => {
  return (
    <>
      <Container>
        <h1>{listName}</h1>
        <Button type="button" aria-label="Button Text">
          ADD NEW
        </Button>
        <Button type="button" aria-label="Button Text" onClick={signOut}>
          SIGN OUT
        </Button>
        <StyledHr />
      </Container>
    </>
  );
};

export default ListHeader;
