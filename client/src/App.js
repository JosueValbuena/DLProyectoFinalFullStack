import './App.css';
import { DataProvider } from './context/DataContext';
import Routers from './router/Routers';
import NavBar from './views/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <DataProvider>
        <NavBar />
        <Routers />
    </DataProvider>
  );
}

export default App;
