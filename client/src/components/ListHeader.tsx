import React from "react";
import styled from "styled-components";

interface ListHeaderProps {
  listName?: string;
}

// .container {
//     display: flex; /* Use flexbox for easy alignment */
//     flex-direction: column; /* Arrange elements vertically */
//     align-items: center; /* Center elements horizontally */
//     text-align: center; /* Center text inside the container */
// }
//
// .title {
//     font-size: 18px; /* Adjust font size as needed */
//     margin-bottom: 10px; /* Add spacing between title and buttons */
// }
//
// .buttons {
//     display: flex; /* Use flexbox to arrange buttons */
//     justify-content: center; /* Center buttons horizontally */
// }
//
// .buttons button {
//     margin: 0 5px; /* Add spacing between buttons */
// }

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: rgb(255, 255, 255);
  box-shadow:
    rgba(0, 0, 0, 0.05) 0 6px 24px,
    rgba(0, 0, 0, 0.08) 0 0 0 1px;
  border-radius: 10px;
  padding: 10px;
  width: 800px;
  margin-top: 50px;

  h1 {
    margin-bottom: 10px;
  }

  div {
    display: flex;
    justify-content: center;
  }

  button {
    margin: 0 5px;
    background-color: #3498db;
    color: #ffffff;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }

  button:hover {
    background-color: #2980b9;
  }

  button:active {
    background-color: #1f618d;
  }

  button:focus {
    outline: none;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
  }
`;

const signOut = () => {
  console.log("sign out");
};

const ListHeader: React.FC<ListHeaderProps> = ({ listName }) => {
  return (
    <Container>
      <h1>{listName}</h1>
      <div>
        <button>ADD NEW</button>
        <button onClick={signOut}>SIGN OUT</button>
      </div>
    </Container>
  );
};

export default ListHeader;
