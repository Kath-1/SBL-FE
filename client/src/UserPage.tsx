const UserPage = () => {
  return (
    <>
      <div className="flex justify-center my-4">
        <button className="h-10 w-24 flex justify-center items-center text-center  rounded-sm bg-white">
          Bears
        </button>
        <div className="h-10 w-10 flex justify-center items-center text-center ">
          @
        </div>
        <button className="h-10 w-24 flex justify-center items-center text-center  rounded-sm bg-orange-200">
          Packers
        </button>
        <input
          type="number"
          className="h-10 w-20 mx-4 text-right p-2 shadow-inner rounded-sm"
        ></input>
      </div>
      <div className="flex justify-center my-4">
        <button className="h-10 w-24 flex justify-center items-center text-center  rounded-sm bg-white">
          Bears
        </button>
        <div className="h-10 w-10 flex justify-center items-center text-center ">
          @
        </div>
        <button className="h-10 w-24 flex justify-center items-center text-center  rounded-sm bg-white">
          Packers
        </button>
        <input
          type="number"
          className="h-10 w-20 mx-4 text-right p-2 shadow-inner rounded-sm"
        ></input>
      </div>

      <button className="bg-slate-300 rounded-sm py-2 px-4 mr-2">Save</button>
      <button className="bg-pink-500 text-white rounded-sm py-2 px-4">
        Submit
      </button>
    </>
  );
};

export default UserPage;
