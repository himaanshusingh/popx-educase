import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button.jsx";
import Input from "./Input.jsx";

const SignupForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: "yes",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/profile");
  };

  return (
    <form className="flex flex-1 flex-col gap-6" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4">
        <Input
          label="Full Name"
          name="fullName"
          placeholder="Enter full name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <Input
          label="Phone number"
          name="phoneNumber"
          type="tel"
          placeholder="Enter phone number"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
        <Input
          label="Email address"
          name="email"
          type="email"
          placeholder="Enter email address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          label="Password"
          name="password"
          type="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <Input
          label="Company name"
          name="companyName"
          placeholder="Enter your company"
          value={formData.companyName}
          onChange={handleChange}
        />

        <fieldset className="flex flex-col gap-2 border-0 p-0">
          <legend className="text-sm font-medium text-popx-text">
            Are you an Agency?<span className="text-popx-primary"> *</span>
          </legend>
          <div className="flex gap-6">
            {["yes", "no"].map((option) => (
              <label
                key={option}
                className="flex cursor-pointer items-center gap-2 text-sm text-popx-text"
              >
                <input
                  type="radio"
                  name="isAgency"
                  value={option}
                  checked={formData.isAgency === option}
                  onChange={handleChange}
                  className="h-4 w-4 accent-popx-primary"
                />
                {option === "yes" ? "Yes" : "No"}
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <Button type="submit" className="mt-auto">
        Create Account
      </Button>
    </form>
  );
};

export default SignupForm;
