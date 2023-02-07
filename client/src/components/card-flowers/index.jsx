import React, { useEffect, useState } from "react";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { deleteData, getData } from "../../redux/slice/dataSlice";
import { Link } from "react-router-dom";
import EventsCard from "../card-events";
import {
  addToWishlist,
  removeToWishlist,
} from "../../redux/slice/wishlistSlice";
import { Space, Spin } from "antd";

const CardFlowers = () => {
  const [sort, setSort] = useState(true);
  const dispatch = useDispatch();
  const flowers = useSelector((state) => state.flowers);
  const wishlist = useSelector((state) => state.wishlist);
  useEffect(() => {
    dispatch(getData(""));
  }, []);
  const handleSortByPrice = () => {
    setSort(!sort);
    sort ? dispatch(getData(1)) : dispatch(getData(""));
  };
  return (
    <div id="card-flowers">
      <div className="container">
        <div className="card-flowers">
          <p>Devoted to wonderful beauty</p>
          <h1>Flowers Pricing</h1>
          <div className="sort-search">
            <input
              onChange={(e) => dispatch(getData(e.target.value))}
              type="text"
              placeholder="Search flowers..."
            />
            <button onClick={() => handleSortByPrice()}>Sort By Price</button>
          </div>
          <div className="cards">
            {flowers.loading ? (
              <div className="spin">
                <Space size="middle">
                  <Spin size="small" />
                  <Spin />
                  <Spin size="large" />
                </Space>
              </div>
            ) : (
              flowers.data?.map((element) => {
                return (
                  <div key={element._id} className="card">
                    <Link to={`/${element._id}`}>
                      <div className="img">
                        <img src={element.image} alt="" />
                      </div>
                    </Link>
                    <div className="info">
                      <h3>{element.name}</h3>
                      <p>${element.price}</p>
                      {wishlist.data.find(
                        (elem) => elem._id === element._id
                      ) ? (
                        <div
                          onClick={() =>
                            dispatch(removeToWishlist(element._id))
                          }
                          className="icon"
                        >
                          <i className="fa-solid fa-heart"></i>
                        </div>
                      ) : (
                        <div
                          onClick={() => dispatch(addToWishlist(element))}
                          className="icon"
                        >
                          <i className="fa-regular fa-heart"></i>
                        </div>
                      )}

                      <div className="btn">
                        <button
                          onClick={() =>
                            dispatch(deleteData(element._id)).then(() =>
                              dispatch(getData(""))
                            )
                          }
                        >
                          Delete Flowers
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
      <EventsCard />
    </div>
  );
};

export default CardFlowers;
