import LoginForm from "../components/LoginForm.jsx";

const LoginPage = () => {
  return (
    <section className="flex h-full flex-col px-6 pb-10 pt-16">
      <div className="mb-8 space-y-3">
        <h1 className="text-[22px] font-bold leading-snug text-popx-text">
          Signin to your PopX account
        </h1>
        <p className="text-sm leading-relaxed text-popx-muted">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>
      <LoginForm />
    </section>
  );
};

export default LoginPage;
