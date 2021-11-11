import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import { Welcome } from './components/Welcome';

import WarningSign from './components/WarningSign';
import MyBadge from './components/MyBadge';
import SingleBook from './components/SingleBook'
import HorrorBooks from './data/horror.json'
import BookList from './components/BookList';



function App() {
  return (
    <div>
      <MyNavbar brand= "StriveBooks" />
      <MyFooter />
      <Welcome />
      <WarningSign name="I'm a warning message!" />
      <MyBadge text="Badge" color="success" />
      <SingleBook book={HorrorBooks[0]} />
      <BookList books={HorrorBooks} />
    </div>
  );
}

export default App;
