import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
const Axios = () => {
  const [apiData, setApiData] = useState([]);

  const fetchApi = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setApiData(response.data);
      })
      .catch((err) => {
        return err.message;
      });
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div>
      {apiData.map((user) => {
        return <li key={user.id}>{user.name}</li>;
      })}
    </div>
  );
};

export default Axios;
