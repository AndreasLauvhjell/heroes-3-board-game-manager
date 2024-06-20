// NavBar Component
import React from 'react';

function NavBar() {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">Heroes 3 of Might and Magic the Board Game Manager</a>
        </div>
        <ul className="nav navbar-nav">
          <li className="active">
            <a href="#">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
