import { useNavigate } from "react-router-dom";
import Button from "../components/Button.jsx";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <section className="flex h-full flex-col justify-between px-6 pb-10 pt-16">
      <div className="space-y-4">
        <h1 className="text-[26px] font-bold leading-tight text-popx-text">
          Welcome to PopX
        </h1>
        <p className="text-sm leading-relaxed text-popx-muted">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <Button onClick={() => navigate("/register")}>Create Account</Button>
        <Button variant="secondary" onClick={() => navigate("/login")}>
          Already Registered? Login
        </Button>
      </div>
    </section>
  );
};

export default LandingPage;
