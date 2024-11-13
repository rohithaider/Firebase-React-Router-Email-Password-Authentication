import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebase.init";

export default function Register() {
  // State to hold form values for email and password
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  // Function to handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth,formValues.email,formValues.password)
    .then((result)=>{
        console.log(result.user)
    })
    .catch((error)=>{
        console.log('ERROR',error)
    })
  }

  // Function to handle changes in input fields
  function handleChange(e) {
    const { name, value } = e.target;
    // Update formValues dynamically based on input field's name attribute
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      {/* Email Input */}
      <label className="input input-bordered flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
          <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
        </svg>
        <input
          onChange={handleChange} // Use handleChange to update form values dynamically
          type="email"
          name="email"
          className="grow"
          placeholder="Email"
          value={formValues.email} // Controlled input for email
        />
      </label>

      {/* Password Input */}
      <label className="input input-bordered flex items-center gap-2 mt-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
            clipRule="evenodd"
          />
        </svg>
        <input
          type="password"
          name="password"
          className="grow"
          placeholder="Password"
          value={formValues.password} // Controlled input for password
          onChange={handleChange} // Use handleChange to update form values dynamically
        />
      </label>

      <button type="submit" className="btn btn-accent btn-wide mt-4">
        Register
      </button>
    </form>
  );
}
