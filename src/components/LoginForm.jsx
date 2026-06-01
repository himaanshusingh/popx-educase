import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button.jsx";
import Input from "./Input.jsx";

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/profile");
  };

  return (
    <form className="mt-auto flex flex-col gap-5" onSubmit={handleSubmit}>
      <Input
        label="Email Address"
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
      <Button type="submit">Login</Button>
    </form>
  );
};

export default LoginForm;
