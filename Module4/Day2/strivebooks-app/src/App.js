import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import LatestReleases from './components/LatestRelease';



function App() {
  return (
    <div>
      <MyNavbar brand= "StriveBooks" />
      <MyFooter />
      <Welcome />
      <LatestReleases />
    </div>
  );
}

export default App;
