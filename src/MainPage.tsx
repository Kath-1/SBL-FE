import React from "react";
import ExpandableSection from "./ExpandableSection";
import Leaderboard from "./Leaderboard";
import eagles from "./assets/eagles.png";

const TestElement = () => <p>Hello!</p>;

const Game = () => {
  return (
    <div className="bg-white rounded-md max-w-xs p-2">
      <div className="flex items-center justify-center">
        <div className="bg-teal-500 text-lg text-white p-2 rounded-md mr-2 w-10 text-center">
          17
        </div>
        <h3>
          <span>Packers</span>
          <span className="mx-2">@</span>
          <span>Bears</span>
        </h3>
        <div className="bg-gray-400 text-lg text-white p-2 rounded-md ml-2 w-10 text-center">
          7
        </div>
      </div>
      <p className="text-center">–</p>
      <table className="table-auto border-separate border-spacing-x-6 border-spacing-y-1 m-auto">
        <tbody>
          <tr>
            <td>Karro</td>
            <td>
              <img src={eagles} alt="" className="h-6 opacity-40" />
            </td>

            <td className="text-center text-gray-400">(240)</td>
          </tr>
          <tr>
            <td>Thomas</td>
            <td>
              <img
                src={eagles}
                alt=""
                className="h-6                                                                                                                                                                          00"
              />
            </td>
            <td className=" bg-yellow-300/50 rounded-lg w-14 text-center">
              320
            </td>
          </tr>
          <tr>
            <td>Micke</td>
            <td>
              <img
                src={eagles}
                alt=""
                className="h-6                                                                                                                                                                          00"
              />
            </td>
            <td className=" bg-yellow-300/50 rounded-lg w-14 text-center">
              320
            </td>
          </tr>
          <tr>
            <td>Max</td>
            <td>
              <img src={eagles} alt="" className="h-6 opacity-40" />
            </td>

            <td className="text-center text-gray-400">(240)</td>
          </tr>
          <tr>
            <td>Jocke</td>
            <td>
              <img
                src={eagles}
                alt=""
                className="h-6                                                                                                                                                                          00"
              />
            </td>
            <td className=" bg-yellow-300/50 rounded-lg w-14 text-center">
              320
            </td>
          </tr>
          <tr>
            <td>Victor</td>
            <td>
              <img
                src={eagles}
                alt=""
                className="h-6                                                                                                                                                                          00"
              />
            </td>
            <td className=" bg-yellow-300/50 rounded-lg w-14 text-center">
              320
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const MainPage = () => {
  return (
    <React.Fragment>
      <Leaderboard />
      <ExpandableSection title="Ongoing games" expandedInitially={true}>
        <Game />
      </ExpandableSection>
      <ExpandableSection title="Upcoming games" expandedInitially={false}>
        <TestElement />
      </ExpandableSection>
      <ExpandableSection title="Finished games" expandedInitially={false}>
        <TestElement />
      </ExpandableSection>
    </React.Fragment>
  );
};

export default MainPage;
