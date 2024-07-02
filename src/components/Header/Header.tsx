import Logo from "../../assets/imdb.svg";

const Header = () => {
  return (
    <header className="w-full bg-bg-card shadow-xl flex items-center p-8">
      <img src={Logo} alt="Logo imdb" className="w-16 h-16 object-contain" />
    </header>
  );
};

export default Header;
