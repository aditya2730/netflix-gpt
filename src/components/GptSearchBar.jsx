const GptSearchBar = () => {
  return (
    <div className="pt-[8%] flex justify-center z-10 absolute w-full">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-11/12 md:w-2/3 lg:w-1/2 grid grid-cols-12 bg-black/70 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 transition-all duration-300 hover:shadow-red-600/40"
      >
        <input
          type="text"
          className="p-4 m-4 bg-white col-span-9 text-gray-900 rounded-lg text-lg focus:outline-none focus:ring-4 focus:ring-red-500/50 shadow-inner transition-all duration-200 placeholder-gray-500"
          placeholder="What would you like to watch today?"
        />
        <button
          type="submit"
          className="py-2 px-4 m-4 bg-red text-white bg-red-600 rounded-lg col-span-3 cursor-pointer hover:scale-105 hover:bg-red-700 transition-transform duration-300 font-semibold text-lg"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
