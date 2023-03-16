import React from "react";
import ExpandableSection from "./ExpandableSection";
import Leaderboard from "./Leaderboard";
import eagles from "./assets/eagles.png";

const TestElement = () => <p>Hello!</p>;

const Game = () => {
  return (
    <div className="bg-white rounded-md max-w-xs">
      <h3 className="text-center">
        <span>Packers</span>
        <span className="mx-2">@</span>
        <span>Bears</span>
      </h3>
      <p className="text-center">–</p>
      <table className="table-auto border-separate border-spacing-2">
        <tbody>
          <tr>
            <td>Karro</td>
            <td>
              <img src={eagles} alt="" className="h-6 opacity-40" />
            </td>

            <td className="text-right">0</td>
            <td className="text-right text-gray-400">(240)</td>
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

            <td className="text-right">0</td>
            <td className="text-right text-gray-400">(240)</td>
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
      <ExpandableSection title="Ongoing games">
        <Game />
      </ExpandableSection>
      <ExpandableSection title="Upcoming games">
        <TestElement />
      </ExpandableSection>
      <ExpandableSection title="Finished games">
        <TestElement />
      </ExpandableSection>
    </React.Fragment>
  );
};

export default MainPage;
