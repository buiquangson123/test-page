import "./App.css";
import SearchTable from "./components/test-page/SearchTable";
import ListTable from "./components/test-page/ListTable";
import HeaderPage from "./components/test-page/HeaderPage";

function App() {
  return (
    <div className="App">
      <HeaderPage></HeaderPage>
      <SearchTable></SearchTable>
      {/* <ListTable></ListTable> */}
    </div>
  );
}

export default App;
