import "./App.css";
import AddButton from "./components/AddButton";

function App() {
  return (
    <div className="px-4 py-8 sm:px-16 md:px-48">
      <header className="flex justify-between items-center p-2 max-w-[1024px] m-auto">
        <h5 className="text-lg font-semibold">Course builder</h5>
        <AddButton />
      </header>
      <div></div>
    </div>
  );
}

export default App;
