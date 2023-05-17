
import './App.css';
import { BrowserRouter , Route ,Routes} from 'react-router-dom';
import { Router } from './router';

function App() {
  return (
    < BrowserRouter>
    <div className="App">
     <Routes>

      {Router.map((page)=>{
        return <Route exact path={page.url}  element={<page.component/>}></Route>
      })}
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
