import { Link } from "react-router-dom";

const Header = () => (
  <header className="fixed w-full px-5 py-3">
    <nav className="flex  justify-between ">
      <Link to={`/`}>
        <h1>SBL</h1>
      </Link>
      <Link to={`/user`}>My page</Link>
    </nav>
  </header>
);

export default Header;
