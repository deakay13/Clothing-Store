import { Link } from "react-router-dom";

export default function RefundPage() {
  return (
    <div className="container-fluid p-5">
      <div className="row">
        <div className="col-md-3">
          <nav
            id="navbar-example3"
            className="h-100 flex-column align-items-stretch pe-4 border-end"
          >
            <nav className="nav nav-pills flex-column">
              <a className="nav-link text-dark fw-bold" href="#item-1">
                Gửi Yêu cầu
              </a>
              <a className="nav-link text-dark fw-bold" href="#item-2">
                Xử lý yêu cầu
              </a>
              <a className="nav-link text-dark fw-bold" href="#item-3">
                Trả hàng
              </a>
              <a className="nav-link text-dark fw-bold" href="#item-4">
                Hoàn tiền
              </a>
            </nav>
          </nav>
        </div>
        <div className="col-md-9">
          <h4 className="text-center fw-bold text-uppercase">
            Cẩm nang Trả hàng hoàn tiền
          </h4>
          <div
            data-bs-spy="scroll"
            data-bs-target="#navbar-example3"
            data-bs-smooth-scroll="true"
            className="scrollspy-example-2"
            tabIndex={0}
          >
            <div id="item-1">
              <h4 className="text-danger">Gửi Yêu cầu</h4>
              <ul className="list-unstyled">
                <Link to="">
                  <li>
                    Tôi có thể yêu cầu đổi sản phẩm khác không khi đã nhận hàng?
                  </li>
                </Link>
                <Link to="">
                  <li>Thời gian tối đa để gửi yêu cầu Trả hàng/Hoàn tiền?</li>
                </Link>
                <Link to="">
                  <li>
                    Tôi đã nhấn “Đã nhận được hàng”, tôi có yêu cầu trả
                    hàng/hoàn tiền được không?
                  </li>
                </Link>
                <Link to="">
                  <li>
                    Tôi có thể yêu cầu Trả hàng/Hoàn tiền cho Quà tặng 0Đ đã
                    nhận từ giảm giá không?
                  </li>
                </Link>
                <Link to="">
                  <li>
                    Làm thế nào để yêu cầu Trả hàng/Hoàn tiền cho sản phẩm?
                  </li>
                </Link>
                <Link to="">
                  <li>Người mua cần cung cấp những bằng chứng gì?</li>
                </Link>
                <Link to="">
                  <li>Điều kiện Trả hàng/Hoàn tiền của cửa hàng là gì?</li>
                </Link>
              </ul>
            </div>
            <div id="item-2">
              <h4 className="text-danger">Xử lý yêu cầu</h4>
              <ul className="list-unstyled">
                <Link to="">
                  <li>Cửa hàng sẽ làm gì sau khi nhận được yêu cầu của tôi?</li>
                </Link>
                <Link to="">
                  <li>
                    Cửa hàng sẽ xử lý yêu cầu Trả hàng/Hoàn tiền của tôi như thế
                    nào?
                  </li>
                </Link>
              </ul>
            </div>
            <div id="item-3">
              <h4 className="text-danger">Trả hàng</h4>
              <ul className="list-unstyled">
                <Link to="">
                  <li>Làm thế nào để trả hàng về cho Cửa hàng?</li>
                </Link>
                <Link to="">
                  <li>Cách đóng gói đơn hàng hoàn trả</li>
                </Link>
                <Link to="">
                  <li>Cách ghi thông tin lên gói hàng cần gửi trả</li>
                </Link>
                <Link to="">
                  <li>Cửa hàng có hỗ trợ phí trả hàng không?</li>
                </Link>
              </ul>
            </div>
            <div id="item-4">
              <h4 className="text-danger">Hoàn tiền</h4>
              <ul className="list-unstyled">
                <Link to="">
                  <li>
                    Mất bao lâu để tôi nhận lại tiền sau khi gửi trả hàng thành
                    công?
                  </li>
                </Link>
                <Link to="">
                  <li>
                    Tiền hoàn cho yêu cầu Trả hàng/hoàn tiền sẽ như thế nào khi
                    tôi thanh toán bằng bằng Thẻ Tín dụng?
                  </li>
                </Link>
                <Link to="">
                  <li>
                    Tôi có được hoàn lại phí vận chuyển ban đầu khi yêu cầu Trả
                    hàng/Hoàn tiền không?
                  </li>
                </Link>
                <Link to="">
                  <li>
                    Tôi có được hoàn lại Mã giảm giá khi yêu cầu Trả hàng/Hoàn
                    tiền không?
                  </li>
                </Link>
                <Link to="">
                  <li>
                    Tôi có được hoàn lại Mã giảm giá nếu đơn hàng bị hủy không?
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
