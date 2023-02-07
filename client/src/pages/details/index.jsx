import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import "./index.scss"
const DetailsPage = () => {
  const [flower, setFlower] = useState({});
  const { id } = useParams();
  const getDataById = async () => {
    const response = await axios.get(`http://localhost:8080/flowers/${id}`);
    setFlower(response.data);
  };
  useEffect(() => {
    getDataById()
  }, [])
  
  return (
    <div id="details-page">
       <Helmet>
        <title>{flower.name}</title>
      </Helmet>
      <div className="container">
        <div className="details-page">
          <div className="img">
            <img src={flower.image} alt="" />
          </div>
          <div className="about">
            <h1>{flower.name}</h1>
            <p>{flower.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
