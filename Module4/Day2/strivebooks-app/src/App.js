import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import { Jumbotron } from 'react-bootstrap';


function App() {
  return (
    <div>
      <MyNavbar brand= "StriveBooks" />
      <Jumbotron />
    </div>
  );
}

export default App;
