import React from 'react';
import Media from './Media';

class Beranda extends React.Component {
    render() {
        return(
            <div class="site-wrap">
                <div class="jumbotron jumbotron-fluid bg-success">
                    <div class="container">
                        <Media image="Adiwiyata.png">
                        <h1 class="display-4">Adiwiyata</h1>
                        <p class="lead">Adiwiyata adalah upaya membangun program atau wadah yang baik dan ideal untuk mendapatkan ilmu pengetahuan dan berbagai norma serta etika yang dapat menjadi dasar manusia menuju terciptanya kesejahteraan hidup untuk Cita-cita pembangunan berkelanjutan. Adiwiyata merupakan nama program pendidikan lingkungan hidup.</p>
                        </Media>
                    </div>
                </div>


                <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={process.env.PUBLIC_URL + 'image/image3.jpg'} class="d-block w-100" alt="" />
                    </div>
                    <div class="carousel-item">
                        <img src={process.env.PUBLIC_URL + 'image/image5.jpg'} class="d-block w-100" alt="" />
                    </div>
                    <div class="carousel-item">
                        <img src={process.env.PUBLIC_URL + 'image/image6.jpg'} class="d-block w-100" alt="" />
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Beranda;