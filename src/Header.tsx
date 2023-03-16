import { Link } from "react-router-dom";
import karrosProfilePicture from "./assets/karro.png";

const Header = () => (
  // <header className="fixed px-8 py-3 max-w-7xl mx-auto w-full left-1/2 -translate-x-1/2 ">
  <header className="sticky px-8 py-3 max-w-7xl mx-auto w-full  ">
    <nav className="flex justify-between items-center text-slate-800">
      <div className="flex items-center">
        <Link to={`/`} className="text-4xl text-pink-600 mr-6">
          SBL
        </Link>
        <Link to={"/stats"} className="mr-6">
          Stats
        </Link>
        <Link to="/history">Previous weeks</Link>
      </div>
      <Link to={`/user`}>
        {karrosProfilePicture ? (
          <img
            src={karrosProfilePicture}
            alt=""
            className="h-14 rounded-full bg-white border-2 border-gray-400"
          />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            className="w-14 h-14 stroke-slate-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        )}
      </Link>
    </nav>
  </header>
);

export default Header;
