import camIcon from "../assets/cam.svg";

const ProfilePage = () => {
  return (
    <section className="flex h-full flex-col">
      <header className="shrink-0 border-b border-popx-border bg-popx-surface px-6 py-4 shadow-popx-nav">
        <h1 className="text-base font-semibold text-popx-text">
          Account Settings
        </h1>
      </header>

      <article className="flex-1 overflow-y-auto px-6 py-8">
        <div className="mb-6 flex items-center gap-4">
          <div className="relative shrink-0">
            <div
              className="flex h-20 w-20 items-center justify-center rounded-full bg-popx-primary-light text-2xl font-semibold text-popx-primary"
              aria-hidden
            >
              MD
            </div>
            <img
              className="absolute -bottom-0.5 -right-0.5 h-7 w-7"
              src={camIcon}
              alt=""
              aria-hidden
            />
          </div>
          <div>
            <h2 className="text-base font-semibold text-popx-text">Marry Doe</h2>
            <p className="text-sm text-popx-muted">Marry@Gmail.Com</p>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-popx-muted">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
          Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad
          Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut
          Aliquip Ex Ea Commodo Consequat. Duis Aute Irure Dolor In
          Reprehenderit In Voluptate Velit Esse Cillum Dolore Eu Fugiat Nulla
          Pariatur. Excepteur Sint Occaecat Cupidatat Non Proident, Sunt In
          Culpa Qui Officia Deserunt Mollit Anim Id Est Laborum.
        </p>
      </article>
    </section>
  );
};

export default ProfilePage;
