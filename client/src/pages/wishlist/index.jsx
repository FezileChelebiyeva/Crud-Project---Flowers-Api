import React from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import "./index.scss"
const WishlistPage = () => {
  const wishlist = useSelector((state) => state.wishlist);
  return (
    <div id="wishlist">
      <Helmet>
        <title>Wishlist</title>
      </Helmet>
      <div className="container">
        <div className="wishlist">
        <p>Devoted to wonderful beauty</p>
          <h1>Favorite Flowers</h1>
        <div className="cards">
            {wishlist.data?.map((element) => {
              return (
                <div key={element._id} className="card">
                    <div className="img">
                      <img src={element.image} alt="" />
                    </div>
                  <div className="info">
                    <h3>{element.name}</h3>
                    <p>${element.price}</p>
                
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;
