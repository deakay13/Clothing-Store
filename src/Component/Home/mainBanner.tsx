import BannerHome from "../../assets/Banner/BannerHome.jpg";
import BannerHome1 from "../../assets/Banner/BannerLogin.jpg";
import BannerHome2 from "../../Assets/Banner/BannerHome2.jpg";

export default function mainBanner() {
    return (
        <div className="text-center">
            <div
                id="carouselExampleAutoplaying"
                className="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval="3000"
                data-bs-pause="hover"
            >
                <div className="carousel-indicators">
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                ></button>
                </div>
                <div className="carousel-inner">
                <div className="carousel-item active">
                    <img
                    className="img-fluid rounded-3 d-block w-100"
                    style={{ height: "500px", objectFit: "cover" }}
                    src={BannerHome}
                    alt="BannerHome"
                    />
                </div>
                <div className="carousel-item">
                    <img
                    className="img-fluid rounded-3 d-block w-100"
                    style={{ height: "500px", objectFit: "cover" }}
                    src={BannerHome1}
                    alt="BannerHome"
                    />
                </div>
                <div className="carousel-item">
                    <img
                    className="img-fluid rounded-3 d-block w-100"
                    style={{ height: "500px", objectFit: "cover" }}
                    src={BannerHome2}
                    alt="BannerHome"
                    />
                </div>
                </div>
                <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
                >
                <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
                </button>
                <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
                >
                <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
                </button>
        </div>
        </div>
    );
}
