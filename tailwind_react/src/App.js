import "./App.css";

function App() {
  return (
    <>
      <div className="bg-green-500 p-8">
        <h2 className="text-center text-white font-bold text-2xl">
          React Tailwind
        </h2>
      </div>

      <div className="w-[50%] mt-5 mx-auto rounded-lg p-20 before:rounded-lg custom_clip_path">
        <h2 className="text-center text-white text-2xl titl">clip path</h2>
        <h2 className="text-center text-white text-2xl titl">clip path</h2>
        <h2 className="text-center text-white text-2xl titl">clip path</h2>
        <h2 className="text-center text-white text-2xl titl">clip path</h2>
        <h2 className="text-center text-white text-2xl titl">clip path</h2>
      </div>
    </>
  );
}

export default App;
