import React from 'react';
import { Link } from 'react-router-dom';
const WinesPage = () => {
  const wines = [1, 2, 3, 4, 5];
  return (
    <>
      <h1>Pagina para vinos</h1>
      {wines.map((wine) => (
        <div>
          <Link key={wine} to={`/vinos/${wine}`}>
            Pagina de vinos {wine}
          </Link>
        </div>
      ))}
      <div>
        <Link to={'/'}>Volver Atras</Link>
      </div>
    </>
  );
};

export default WinesPage;
