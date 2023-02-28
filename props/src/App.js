import {Header}   from './component/Header'
import {ListTodo} from './component/ListTodo';
import { Footer } from './component/Footer';


import './App.css';

function App() {
  return (
    <div className="App">
        <Header/>
        <ListTodo/>
        <Footer/>
    </div>
  );
}

export default App;
