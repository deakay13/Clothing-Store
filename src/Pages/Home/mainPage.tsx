import Ao1 from "@assets/Áo1.jpg";
import Ao2 from "@assets/áo2.jpg";
import Ao3 from "@assets/áo3.jpg";
import Ao4 from "../../assets/Áo1.jpg";
import MainBanner from "../../Component/Home/mainBanner";

export default function MainPage() {
  return (
    <div>
      <MainBanner />
      <div className="container my-3">
        <div className="row">
          <div className="col-3 d-flex align-items-stretch">
            <div className="card shadow-sm">
              <img
                src={Ao1}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
                alt="Tên sản phẩm"
              />
              <div className="card-body">
                <h5 className="card-title">Áo thun nam</h5>
                <p className="card-text text-muted">
                  Chất liệu cotton 100%, thoáng mát, phù hợp mùa hè.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="fw-bold text-danger">250.000đ</span>
                  <a
                    href="productDetail.html"
                    className="btn btn-primary btn-sm"
                  >
                    Mua Ngay
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3 d-flex align-items-stretch">
            <div className="card shadow-sm">
              <img
                src={Ao2}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
                alt="Tên sản phẩm"
              />
              <div className="card-body">
                <h5 className="card-title">Áo thun nam</h5>
                <p className="card-text text-muted">
                  Chất liệu cotton 100%, thoáng mát, phù hợp mùa hè.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="fw-bold text-danger">250.000đ</span>
                  <a
                    href="productDetail.html"
                    className="btn btn-primary btn-sm"
                  >
                    Mua Ngay
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3 d-flex align-items-stretch">
            <div className="card shadow-sm">
              <img
                src={Ao3}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
                alt="Tên sản phẩm"
              />
              <div className="card-body">
                <h5 className="card-title">Áo thun nam</h5>
                <p className="card-text text-muted">
                  Chất liệu cotton 100%, thoáng mát, phù hợp mùa hè.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="fw-bold text-danger">250.000đ</span>
                  <a
                    href="productDetail.html"
                    className="btn btn-primary btn-sm"
                  >
                    Mua Ngay
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3 d-flex align-items-stretch">
            <div className="card shadow-sm">
              <img
                src={Ao4}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
                alt="Tên sản phẩm"
              />
              <div className="card-body">
                <h5 className="card-title">Áo thun nam</h5>
                <p className="card-text text-muted">
                  Chất liệu cotton 100%, thoáng mát, phù hợp mùa hè.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="fw-bold text-danger">250.000đ</span>
                  <a
                    href="productDetail.html"
                    className="btn btn-primary btn-sm"
                  >
                    Mua Ngay
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
