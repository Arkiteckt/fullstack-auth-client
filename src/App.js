import logo from './logo.svg';
import './App.css';
import{createBrowserRouter, RouterProvider} from "react-router-dom";

// function App() {
//   // return (
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//   );
//  }
const router = createBrowserRouter([
{
  path: "/",
  element: <todo-form/>,
  children: [
    { index: true,
      element: <ToDoFormPage/> //./src/App.js:Add ToDoFormPage as a child route of "/" with the path "/todo-form
    },
  ])

  return (
		<div className="App-header">
    <RouterProvider router={router} />
    
		</div>
	);
export default App;
