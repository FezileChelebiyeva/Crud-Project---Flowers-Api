import * as yup from "yup";

export const flowersSchema = yup.object().shape({
  image: yup
    .string()
    .required("pleace write image url")
    .url("image must be url"),
  name: yup.string().required("pleace write flowers name"),
  price: yup.number().required("pleace write flowers price"),
});
