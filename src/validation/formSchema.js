import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .required("Please enter your name for this order")
    .min(2, "Name has to be at least 2 characters"),
  email: yup.string().required("A valid email is required"),
  size: yup
    .string()
    .required("Choose the size of your Pizza")
    .oneOf(["small", "medium", "large", "xl"]),
  sauce: yup
    .boolean()
    .oneOf(["marinara", "pesto", "bbq", "alfredo"])
    .required("Choose your sauce base"),
  toppings: yup.boolean(),
  request: yup.string(),
});

export default formSchema;
