import SignupForm from "../components/SignupForm.jsx";

const SignupPage = () => {
  return (
    <section className="flex h-full flex-col overflow-y-auto px-6 pb-8 pt-16">
      <h1 className="mb-6 text-[22px] font-bold leading-snug text-popx-text">
        Create your PopX account
      </h1>
      <SignupForm />
    </section>
  );
};

export default SignupPage;
