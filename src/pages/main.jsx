import logo from "../assets/logo.png";

function Main() {
  return (
    <div className="h-screen bg-gray-900 text-white relative overflow-hidden">
      <nav className="navbar flex items-center justify-between px-28 z-10">
        <img src={logo} width={150} />

        <div className="menu flex items-center gap-10 z-10">
          <a href="/">IT образование</a>
          <a href="/">Стартапы</a>
          <a href="/">РеАзидентство</a>
          <a href="/">О нас</a>
          <a href="/">Контакты</a>
        </div>

        <div></div>
      </nav>
      <div className="main flex items-center justify-center flex-col px-28 gap-5 z-10">
        <h1 className="text-6xl font-bold z-10">START LOCAL & GO GLOBAL</h1>

        <p className="text-xl w-10/12 text-center z-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime officiis molestias iusto illum pariatur sequi at soluta voluptas sit voluptatum adipisci, hic vero laborum itaque sint temporibus tenetur perspiciatis quis?</p>

        <button className="start-btn p-3 px-10 rounded-3xl border-2 border-green-800 z-10 font-bold">СТАРТ</button>
      </div>
      <div className="shape1 absolute z-1"></div>
      <div className="shape2 absolute z-1"></div>
    </div>
  );
}

export default Main;
