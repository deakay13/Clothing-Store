import { Link } from "react-router-dom";
import BannerLogo from "../../Assets/Icon/image-Photoroom.png";

export default function Footer() {
    return (
        <footer className="bg-dark text-light pt-5 pb-4">
            <div className="container text-center text-md-start">
                <div className="row">
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 d-flex flex-column align-items-center">
                    <img
                        src={BannerLogo}
                        alt="BannerLogo"
                        height="100"
                        width="auto"
                    />
                    <hr className="mb-2 mt-0 d-inline-block mx-auto w-100 h-2p" />
                    <p>
                        Chuyên cung cấp sản phẩm chất lượng cao với giá tốt nhất. Hãy
                        trải nghiệm mua sắm thú vị cùng chúng tôi!
                    </p>
                    </div>
                    {/* Cột liên kết */}
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold d-flex justify-content-center">Q&A</h6>
                    <hr className="mb-2 mt-0 d-inline-block mx-auto w-100 h-2p" />
                    <p>
                        <Link to="/" className="text-reset text-decoration-none">
                        Trang chủ
                        </Link>
                    </p>
                    <p>
                        <Link to="/Guarantee" className="text-reset text-decoration-none">
                        Chính sách bảo hành
                        </Link>
                    </p>
                    <p>
                        <Link to="/Refund" className="text-reset text-decoration-none">
                        Chính sách mua và đổi trả
                        </Link>
                    </p>
                    </div>
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold justify-content-center d-flex">Liên hệ</h6>
                    <hr className="mb-2 mt-0 d-inline-block mx-auto w-100 h-2p" />
                    <p>
                        <i className="bi bi-house-door-fill"></i> 123 Đường ABC, TP. HCM
                    </p>
                    <p>
                        <i className="bi bi-envelope-fill"></i> info@shopname.vn
                    </p>
                    <p>
                        <i className="bi bi-phone-fill"></i> 0123 456 789
                    </p>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold justify-content-center d-flex">Mạng xã hội</h6>
                    <hr className="mx-auto mb-2 mt-0 w-100 h-2p" />
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-light me-3 icon-link icon-link-hover">
                        <i className="bi bi-facebook fs-4"></i>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-light me-3 icon-link icon-link-hover">
                        <i className="bi bi-instagram fs-4"></i>
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-light me-3 icon-link icon-link-hover">
                        <i className="bi bi-twitter-x fs-4"></i>
                    </a>
                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="text-light icon-link icon-link-hover">
                        <i className="bi bi-youtube fs-4"></i>
                    </a>
                    </div>
                </div>
            </div>
            <div className="text-center mt-4">
            <p className="mb-0">&copy; 2025 Puppy. All rights reserved.</p>
            </div>
        </footer>
    );
}
