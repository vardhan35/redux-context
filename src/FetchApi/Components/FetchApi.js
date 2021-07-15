import React, { useState, useEffect } from "react";

const FetchApi = () => {
  const [fetchApiData, setFetchApiData] = useState([]);

  const fetchApi = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setFetchApiData(data);
  };

  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div>
      <h1>ASYNC FETCH API AWAIT DATA</h1>
      {fetchApiData.map((user) => {
        const { id, name } = user;
        return <h2 key={id}>{name}</h2>;
      })}
    </div>
  );
};

export default FetchApi;
