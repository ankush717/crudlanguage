import React, { createContext } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Rest from './Components/Rest';
import Language from './Components/Language';
import Delete from './Components/Delete';
import Deletelang from './Components/Deletelang';
import Update from './Components/Update';
import Add from './Components/Add';
import Search from './Components/Search';
import Main from './Components/Main';

import Searchlang from './Components/Searchlang';
import {Switch,Route} from 'react-router-dom';
import NavBar from './Components/NavBar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <>
     
     <NavBar/>

     <Switch>



       <Route exact path ="/" component={Home} ></Route>
      <Route exact path ="/Add" component={Add} ></Route>
      <Route exact path ="/Search" component={Search} ></Route>
      <Route exact path ="/Update" component={Update} ></Route>
      <Route exact path ="/Delete" component={Delete} ></Route>
      <Route exact path ="/Language" component={Language} ></Route>
      <Route exact path ="/Main" component={Main} ></Route>


             {/* <Home></Home>
             <Rest></Rest> */}
             {/* <Language></Language> */}
             {/* <Delete></Delete> */}
             {/* <Deletelang></Deletelang> */}
             {/* <Update></Update> */}
             {/* <Add></Add> */}
            {/* <Search></Search> */}
        
    </Switch>
    </>
  );
}

export default App;
