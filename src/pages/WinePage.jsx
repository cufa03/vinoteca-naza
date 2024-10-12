import React from 'react';
import { Link, useParams } from 'react-router-dom';
const WinePage = () => {
  const params = useParams();
  return (
    <div>
      <div>
        <h1>WinePage {params.vinoId}</h1>
      </div>
      <div>
        <Link to={'/vinos'}>Volver atras</Link>
      </div>
      <div>
        <Link to={'/'}>Volver al Home</Link>
      </div>
    </div>
  );
};

export default WinePage;
