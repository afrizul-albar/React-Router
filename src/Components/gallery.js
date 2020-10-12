import React from 'react';

class Gallery extends React.Component {
    render() {
        return(
            <div>
                    <div class="site-section first-section">
                    <div class="container">
                        <div class="row mb-5">
                        <div class="col-md-12 text-center" data-aos="fade"><br />
                            <h2 class="site-section-heading text-uppercase text-center font-secondary">Galeri Adiwiyata</h2>
                        </div>
                        </div>
                        <div class="row">
                        <div class="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="">
                            <a href={process.env.PUBLIC_URL + 'image/image1.jpg'} data-fancybox="gallery"><img src={process.env.PUBLIC_URL + 'image/image1.jpg'} alt="Image" class="img-fluid" /></a>
                        </div>
                        <div class="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="100">
                            <a href={process.env.PUBLIC_URL + 'image/image2.jpg'} data-fancybox="gallery"><img src={process.env.PUBLIC_URL + 'image/image2.jpg'} alt="Image" class="img-fluid" /></a>
                        </div>
                        <div class="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="200">
                            <a href={process.env.PUBLIC_URL + 'image/image3.jpg'} data-fancybox="gallery"><img src={process.env.PUBLIC_URL + 'image/image3.jpg'} alt="Image" class="img-fluid" /></a>
                        </div>
                        <div class="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="300">
                            <a href={process.env.PUBLIC_URL + 'image/image4.jpg'} data-fancybox="gallery"><img src={process.env.PUBLIC_URL + 'image/image4.jpg'} alt="Image" class="img-fluid" /></a>
                        </div>

                        <div class="col-md-6 col-lg-6 mb-4" data-aos="fade-up" data-aos-delay="">
                            <a href={process.env.PUBLIC_URL + 'image/image5.jpg'} data-fancybox="gallery"><img src={process.env.PUBLIC_URL + 'image/image5.jpg'} alt="Image" class="img-fluid" /></a>
                        </div>
                        <div class="col-md-6 col-lg-6 mb-4" data-aos="fade-up" data-aos-delay="100">
                            <a href={process.env.PUBLIC_URL + 'image/image6.jpg'} data-fancybox="gallery"><img src={process.env.PUBLIC_URL + 'image/image6.jpg'} alt="Image" class="img-fluid" /></a>
                        </div>

                        <div class="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="">
                            <a href={process.env.PUBLIC_URL + 'image/image7.jpg'} data-fancybox="gallery"><img src={process.env.PUBLIC_URL + 'image/image7.jpg'} alt="Image" class="img-fluid" /></a>
                        </div>
                        <div class="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="100">
                            <a href={process.env.PUBLIC_URL + 'image/image1.jpg'} data-fancybox="gallery"><img src={process.env.PUBLIC_URL + 'image/image1.jpg'} alt="Image" class="img-fluid" /></a>
                        </div>
                        <div class="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="200">
                            <a href={process.env.PUBLIC_URL + 'image/image2.jpg'} data-fancybox="gallery"><img src={process.env.PUBLIC_URL + 'image/image2.jpg'} alt="Image" class="img-fluid" /></a>
                        </div>
                        <div class="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="300">
                            <a href={process.env.PUBLIC_URL + 'image/image3.jpg'} data-fancybox="gallery"><img src={process.env.PUBLIC_URL + 'image/image3.jpg'} alt="Image" class="img-fluid" /></a>
                        </div>
                        <div class="col-md-6 col-lg-6 mb-4" data-aos="fade-up" data-aos-delay="">
                            <a href={process.env.PUBLIC_URL + 'image/image5.jpg'} data-fancybox="gallery"><img src={process.env.PUBLIC_URL + 'image/image5.jpg'} alt="Image" class="img-fluid" /></a>
                        </div>
                        <div class="col-md-6 col-lg-6 mb-4" data-aos="fade-up" data-aos-delay="100">
                            <a href={process.env.PUBLIC_URL + 'image/image6.jpg'} data-fancybox="gallery"><img src={process.env.PUBLIC_URL + 'image/image6.jpg'} alt="Image" class="img-fluid" /></a>
                        </div>
                        </div>
                    </div>
                    </div>
            </div>
        )
    }
}

export default Gallery;