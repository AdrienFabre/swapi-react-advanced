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
        id: index + 1,
        url: item.url
      }))
    : [];

  let content = <p>Loading {props.type}...</p>;

  if (!isLoading && selectedItems && selectedItems.length > 0) {
    content = (
      <div>
        <p>
          {selectedItems.length} {props.type} loaded!
        </p>
        {selectedItems.map(item => (
          <div key={item.id}>
            <p> {item.name || item.title}</p>{" "}
          </div>
        ))}
      </div>
    );
  } else if (!isLoading && (!selectedItems || selectedItems.length === 0)) {
    content = <p>Could not fetch any data.</p>;
  }
  return content;
};

export default ItemsList;
