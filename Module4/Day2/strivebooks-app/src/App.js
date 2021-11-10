import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import LatestReleases from './components/LatestRelease';
import WarningSign from './components/WarningSign';



function App() {
  return (
    <div>
      <MyNavbar brand= "StriveBooks" />
      <MyFooter />
      <Welcome />
      <WarningSign name="I'm a warning message!" />
      <LatestReleases />
    </div>
  );
}

export default App;
