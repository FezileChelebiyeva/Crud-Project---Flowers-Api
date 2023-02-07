import React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { flowersSchema } from "./schema";
import "./index.scss";
import { postData } from "../../redux/slice/dataSlice";
import { Helmet } from "react-helmet";
const AddFlowersPage = () => {
  const dispatch = useDispatch();
  const { handleSubmit, handleChange, values, errors, touched, resetForm } =
    useFormik({
      initialValues: {
        image: "",
        name: "",
        price: "",
      },
      validationSchema: flowersSchema,
      onSubmit: (values) => {
        dispatch(postData(values));
        resetForm();
      },
    });
  return (
    <div id="add-page">
      <Helmet>
        <title>Add Flowers</title>
      </Helmet>
      <div className="container">
        <div className="add-page">
          <h1>Add Flowers</h1>
          <div className="form">
            <form onSubmit={handleSubmit}>
              <div className="input">
                <input
                  id="image"
                  name="image"
                  type="text"
                  placeholder="Image"
                  onChange={handleChange}
                  value={values.image}
                />
                {errors.image && touched.image && (
                  <p className="error">{errors.image}</p>
                )}
              </div>

              <div className="input">
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Name"
                  onChange={handleChange}
                  value={values.name}
                />
                {errors.name && touched.name && (
                  <p className="error">{errors.name}</p>
                )}
              </div>

              <div className="input">
                <input
                  id="price"
                  name="price"
                  type="text"
                  placeholder="Price"
                  onChange={handleChange}
                  value={values.price}
                />
                {errors.price && touched.price && (
                  <p className="error">{errors.price}</p>
                )}
              </div>

              <div className="btn">
                <button type="submit">Add Flowers</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFlowersPage;
