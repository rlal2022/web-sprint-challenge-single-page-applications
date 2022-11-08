import React, { useState, useEffect } from "react";
import axios from "axios";

const Form = (props) => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(inititalFormErrors);
  const [form, setForm] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/orders", formValues)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.error(err));
  };

  const initialFormValues = {
    name: "",
    size: "",
    sauce: "",
    pepperoni: false,
    chicken: false,
    bacon: false,
    cheese: false,
    arugula: false,
    olives: false,
    jalapenos: false,
  };

  const initialFormErrors = {
    name: "",
    size: "",
    sauce: "",
    pepperoni: "",
    chicken: "",
    bacon: "",
    cheese: "",
    arugula: "",
    olives: "",
    jalapenos: "",
  };

  return (
    <div>
      <h2>Lets start building your pizza!</h2>
      <form onSubmit={submitForm} id="byo-form">
        <label>Whats your Name?</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={onChange}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
        />

        <label>
          Pizza Size:
          <select value={values.size} name="size" onChange={onChange}>
            <option value="small">Small - 10" </option>
            <option value="medium">Medium - 12"</option>
            <option value="large">Large - 16"</option>
            <option value="xl">Extra Large - 18"</option>
          </select>
        </label>

        <label>
          Choose your sauce:
          <select value={values.sauce} name="sauce" onChange={onChange}>
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
            checked={topping}
            onChange={onChange}
          />
          <input
            type="checkbox"
            id="toppings"
            name="chicken"
            checked={topping}
            onChange={onChange}
          />
          <input
            type="checkbox"
            id="toppings"
            name="bacon"
            checked={topping}
            onChange={onChange}
          />
          <input
            type="checkbox"
            id="toppings"
            name="cheese"
            checked={topping}
            onChange={onChange}
          />
          <input
            type="checkbox"
            id="toppings"
            name="olives"
            checked={topping}
            onChange={onChange}
          />
          <input
            type="checkbox"
            id="toppings"
            name="arugula"
            checked={topping}
            onChange={onChange}
          />
          <input
            type="checkbox"
            id="toppings"
            name="jalapenos"
            checked={topping}
            onChange={onChange}
          />
        </label>

        <div className="submit">
          <button>Submit your order</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
