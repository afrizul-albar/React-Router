import React from 'react';

class Hari extends React.Component {
    render() {
        return(
            <div>
                <div class="card-deck">
                <div class="card">
                    <img src={process.env.PUBLIC_URL + 'image/hutan.jpg'} class="card-img-top" alt="" />
                    <div class="card-body">
                    <h5 class="card-title">Hari Hutan Sedunia</h5>
                    <p class="card-text">Memperingati hari hutan sedunia.</p>
                    </div>
                    <div class="card-footer">
                    <small class="text-muted">21 Maret</small>
                    </div>
                </div>
                <div class="card">
                    <img src={process.env.PUBLIC_URL + 'image/download.jpg'} class="card-img-top" alt="" />
                    <div class="card-body">
                    <h5 class="card-title">Hari Air Sedunia</h5>
                    <p class="card-text">Memperingati hari air sedunia.</p>
                    </div>
                    <div class="card-footer">
                    <small class="text-muted">22 Maret</small>
                    </div>
                </div>
                <div class="card">
                    <img src={process.env.PUBLIC_URL + 'image/bumi.jpg'} class="card-img-top" alt="" />
                    <div class="card-body">
                    <h5 class="card-title">Hari Bumi</h5>
                    <p class="card-text">Memperingati hari bumi.</p>
                    </div>
                    <div class="card-footer">
                    <small class="text-muted">22 April</small>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Hari;