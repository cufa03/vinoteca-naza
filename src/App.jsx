import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='app__wrapper'>
      <div>
        <h1> NIZA Bemos de Alcohol</h1>
      </div>
      <div>
        <Link to={'/vinos'}>
          <h3>Ver mas vinos</h3>
        </Link>
      </div>
    </div>
  );
}

export default App;
