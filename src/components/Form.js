import React, { useState } from "react";
import axios from "axios";
import * as yup from "yup";
import formSchema from "../validation/formSchema";

const Form = () => {
  const [form, setFormValues] = useState({
    name: "",
    size: "",
    sauce: false,
    pepperoni: false,
    chicken: false,
    bacon: false,
    cheese: false,
    request: ''
  });

  const [errors, setErrors] = useState({
    name: "",
    size: "",
    sauce: "",
    pepperoni: "",
    chicken: "",
    bacon: "",
    cheese: "",
    request: ""
  });

  const setFormErrors = (name, value) => {
yup
.reach(formSchema, name)
.validate(value)
.then(() => {
  setErrors({
    ...errors, [name]: value
  });
}).catch((error) => {
  setErrors({
    ...errors, [name]: error.errors[0]
  })
})

  };

  const onChange = (e) => {
    const { name, value, checked, type } = e.target;
    const newVal = type === "checkbox" ? checked : value;
    setFormErrors(name, newVal);
    setFormValues({ ...form, [name]: newVal });
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(form);
    axios
      .post("https://reqres.in/api/orders", form)
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => console.error(err))
  };



  return (
    <div>
      <h2>Lets start building your pizza!</h2>
      <form onSubmit={submitForm} id="pizza-form">
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          id="name-input"
          value={form.name}
          onChange={onChange}
        />
        <div>{errors.name}</div>

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={onChange}
        />

        <label>
          Pizza Size:
          <select value={form.size} name="size" id="size-dropdown" onChange={onChange}>
            <option value="small">Small - 10" </option>
            <option value="medium">Medium - 12"</option>
            <option value="large">Large - 16"</option>
            <option value="xl">Extra Large - 18"</option>
          </select>
        </label>

        <label>
          Choose your sauce:
          <select value={form.sauce} name="sauce" onChange={onChange}>
            <option value="marinara">Marinara </option>
            <option value="pesto">Garlic Pesto</option>
            <option value="bbq">BBQ Sauce"</option>
            <option value="alfredo">Alfredo Sauce"</option>
          </select>
        </label>

        <label>
          Toppings:
          <input
            type="checkbox"
            id="toppings"
            name="pepperoni"
            checked={form.toppings}
            onChange={onChange}
          />
          <input
            type="checkbox"
            id="toppings"
            name="chicken"
            checked={form.toppings}
            onChange={onChange}
          />
          <input
            type="checkbox"
            id="toppings"
            name="bacon"
            checked={form.toppings}
            onChange={onChange}
          />
          <input
            type="checkbox"
            id="toppings"
            name="cheese"
            checked={form.toppings}
            onChange={onChange}
          />
        </label>
        <label>
          Any special requests?
          <input
            onChange={onChange}
            type="text"
            id="special-text"
            name="request"
            value={form.request}
          />
        </label>

        <div className="submit">
          <button name="order-button" id="order-button" type="submit">Submit your order</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
