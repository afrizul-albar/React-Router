import React from 'react';
import Main from './Components/Main';
import {Link} from 'react-router-dom';

class App extends React.Component {
  render(){
    return(
      <div> 
        <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light">
          <Link class="navbar-brand font-weight-bold" to="/">Adiwiyata</Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="ftco-nav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <Link class="nav-link" to="/">Beranda</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/gallery">Galeri</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/hari">Hari Besar</Link>
              </li>
            </ul>
          </div>
        </nav>


         <p><Main /></p> 
      </div>
    )
  }
}

export default App;
