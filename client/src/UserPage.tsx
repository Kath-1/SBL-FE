import { useReducer } from "react";

const SET_BET: string = "SET_BET";
const SET_GAMES_TO_BET: string = "SET_GAMES_TO_BET";

function gamesToBetReducer(state, action) {
  switch (action.type) {
    case SET_BET: {
      return state;
    }
    case SET_GAMES_TO_BET: {
      return state;
    }
    default:
      return state;
  }
}

const UserPage = () => {
  const [gamesToBet, dispatch] = useReducer(gamesToBetReducer, []);
  return (
    <>
      <div className="flex justify-center my-4 items-center">
        <button className="h-12 w-24 flex justify-center items-center text-center  rounded-sm bg-white">
          <img
            src="https://static.www.nfl.com/image/private/f_auto/league/teguylrnqqmfcwxvcmmz"
            alt=""
            className="h-8 mr-2 opacity-40"
          />
          <div className="text-gray-400">
            <div>SF</div>
            <div className="text-sm">2.25</div>
          </div>
        </button>
        <div className="h-12 w-10 flex justify-center items-center text-center ">
          @
        </div>
        <button className="h-12 w-24 flex justify-center items-center text-center  rounded-sm bg-white ring-offset-2 ring-2 ring-orange-500">
          <img
            src="https://static.www.nfl.com/image/private/f_auto/league/teguylrnqqmfcwxvcmmz"
            alt=""
            className="h-8 mr-2"
          />
          <div>
            <div>GB</div>
            <div className="text-sm">1.00</div>
          </div>
        </button>
        <input
          type="number"
          className="h-10 w-20 mx-4 text-right p-2 shadow-inner rounded-sm"
          value={100}
        ></input>
      </div>
      <div className="flex justify-center my-4 items-center">
        <button className="h-12 w-24 flex justify-center items-center text-center  rounded-sm bg-white">
          <img
            src="https://static.www.nfl.com/image/private/f_auto/league/teguylrnqqmfcwxvcmmz"
            alt=""
            className="h-8 mr-2"
          />
          CHI
        </button>
        <div className="h-12 w-10 flex justify-center items-center text-center ">
          @
        </div>
        <button className="h-12 w-24 flex justify-center items-center text-center  rounded-sm bg-white">
          <img
            src="https://static.www.nfl.com/image/private/f_auto/league/teguylrnqqmfcwxvcmmz"
            alt=""
            className="h-8 mr-2"
          />
          PHI
        </button>
        <div className="relative">
          <input
            type="number"
            className="h-10 w-20 mx-4 text-right p-2 shadow-inner rounded-sm"
            value={250}
          ></input>
          <span className="absolute top-0 left-5 text-xs text-gray-600">
            890
          </span>
        </div>
      </div>

      <button className="bg-slate-300 rounded-sm py-2 px-4 mr-2">Save</button>
      <button className="bg-orange-500 text-white rounded-sm py-2 px-4">
        Submit
      </button>
    </>
  );
};

export default UserPage;
