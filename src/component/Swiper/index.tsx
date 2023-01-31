import React from 'react'
import "../../styles/common/common.scss";
import banner2 from "../../styles/images/banner2.jpg";
import banner3 from "../../styles/images/banner_3.jpeg";
const Swiper = (props: any) => {
    return (
        <div className='swiperContainer'>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={props.BannerHead} className="d-block w-100 banner" alt="..." />
                        <div className="content">
                            <h1 data-animation="fadeInUp" data-delay=".5s" className="animationTextBig">{props.Header}  </h1>
                            <p data-animation="fadeInUp" data-delay=".3s" className='animationText'>{props.Main}</p>

                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={props.BannerSecond} className="d-block w-100 banner" alt="..." />
                        <div className="content manpower">
                            <p data-animation="fadeInUp" data-delay=".3s" className='animationText'>{props.BannerSecondContentHead}</p>
                            <h1 data-animation="fadeInUp" data-delay=".5s" className="animationTextBig">{props.BannerSecondContentMain}</h1>
                            <a href="/AboutServices">
                                <button type="button" className="btn btn-warning">Read More</button>
                            </a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={props.BannerThird} className="d-block w-100 banner" alt="..." />
                        <div className="content hrPartner">
                            <h1 data-animation="fadeInUp" data-delay=".5s" className="animationTextBig">{props.BannerThirdContent}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bannerOuter">
                <img src={props.BannerBottom} alt="" className="bannerOuterCover" />
            </div>
        </div>

    )
}

export default Swiper