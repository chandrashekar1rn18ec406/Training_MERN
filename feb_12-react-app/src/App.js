// import './App.css';
import Forminput from "./Components/Forminput";
import List from "./Components/List";
import Footer from "./Components/Footer";
import DataProvider from "./Components/DataProvider";
import NoteState from "./ContextApi/ContextState";
import CallContext from "./ContextApi/CallContext";
import File from "./ContextApi/File";

function App() {
  return (
    // <DataProvider>
    // <div className="App">
    //   {/* <h1>To Do List</h1>
    //     <Forminput/>
    //     <List/>
    //     <Footer/> */}

        
    // </div>
    // </DataProvider>
    <NoteState>
      <CallContext/>
      <File/>
    </NoteState>
  );
}

export default App;
