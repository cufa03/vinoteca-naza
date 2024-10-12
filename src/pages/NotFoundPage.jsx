import React from 'react';
import { Link } from 'react-router-dom';
const NotFoundPage = () => {
  return (
    <div>
      <h3>404 Pagina no encontrada</h3>
      <Link to={'/'}>Volver al home</Link>
    </div>
  );
};

export default NotFoundPage;
