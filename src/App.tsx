import "./App.css";
import AddButton from "./components/AddButton";
import FileCard from "./components/File";
import LinkCard from "./components/Link";
import Module from "./components/Module";

function App() {
  return (
    <div className="px-4 py-8 sm:px-16 md:px-48">
      <header className="flex justify-between items-center py-2 max-w-[1024px] m-auto">
        <h5 className="text-lg font-semibold">Course builder</h5>
        <AddButton />
      </header>
      <div>
        <Module />
        <LinkCard />
        <FileCard />
      </div>
    </div>
  );
}

export default App;
