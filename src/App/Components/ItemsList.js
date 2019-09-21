import React from "react";
import { useHttp } from "../hooks/http";
const ItemsList = props => {
  const [isLoading, fetchedData] = useHttp(
    `https://swapi.co/api/${props.type}`,
    [props.onTypeSelect]
  );
  const selectedItems = fetchedData
    ? fetchedData.results.map((item, index) => ({
        name: item.name,
        title: item.title,
        id: index + 1
      }))
    : [];

  let content = <p>Loading {props.type}...</p>;

  if (!isLoading && selectedItems && selectedItems.length > 0) {
    content = (
      <div>
        {selectedItems.map(item => (
          <p key={item.id}> {item.name || item.title}</p>
        ))}
      </div>
    );
  } else if (!isLoading && (!selectedItems || selectedItems.length === 0)) {
    content = <p>Could not fetch any data.</p>;
  }
  return content;
};

export default ItemsList;
