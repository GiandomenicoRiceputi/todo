import React from "react";

interface ListHeaderProps {
  listName?: string;
}

const ListHeader: React.FC<ListHeaderProps> = ({ listName }) => {
  return (
    <>
      <h1>{listName}</h1>
    </>
  );
};

export default ListHeader;
