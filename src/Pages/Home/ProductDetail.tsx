import Ao1 from "@assets/Áo1.jpg";

export default function productDetail() {
    return (
        <div className="container mb-5 mt-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
        <div className="card">
            <div className="row g-0">
            {/* <!-- Hình ảnh sản phẩm --> */}
            <div className="col-md-4">
                <img
                src={Ao1}
                className="img-fluid rounded w-95 h-100"
                alt="Áo Thun Nam"
                />
            </div>
            {/* <!-- Nội dung chi tiết --> */}
            <div className="col-md-8 my-3">
                <h2>Áo Thun Nam Cá Tính</h2>
                <p className="text-muted">Thương hiệu: StreetStyleVN</p>
                <h4 className="text-danger">250.000₫</h4>
                <p>
                Áo thun nam được thiết kế theo phong cách năng động, chất liệu
                cotton co giãn 4 chiều, thấm hút mồ hôi tốt. Phù hợp cho cả đi
                chơi và đi làm.
                </p>
                <ul>
                <li>Chất liệu: 100% cotton</li>
                <li>Form: Regular fit</li>
                <li>Màu sắc: Đen, Trắng, Xanh navy</li>
                <li>Size: M, L, XL, XXL</li>
                </ul>
                <div className="mb-3">
                <label htmlFor="size" className="form-label">
                    Chọn size:
                </label>
                <select id="size" className="form-select w-50">
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                    <option>XXL</option>
                </select>
                </div>
                <button className="btn btn-primary">🛒 Thêm vào giỏ hàng</button>
            </div>
            </div>
            <hr className="mt-4 d-inline-block mx-auto w-50 h-2p" />
            <div className="container-fluid">
            <div className="fw-bold mb-2">Viết đánh giá</div>
            <div className="row g-2 mb-2">
                <div className="col-md-6">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Tên của bạn"
                />
                </div>
                <div className="col-md-6">
                <input
                    type="email"
                    className="form-control"
                    placeholder="Email của bạn"
                />
                </div>
            </div>
            <div className="row g-2 mt-2 mb-2">
                <div className="col-md-6">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Số điện thoại của bạn"
                />
                </div>
                <div className="col-md-6">
                <select
                    className="form-select"
                    aria-label="Default select example"
                >
                    <option selected>Đã mua sản phẩm tại cửa hàng</option>
                    <option value="2">Chưa mua sản phẩm tại cửa hàng</option>
                    <option value="2">Đang quan tâm sản phẩm tại cửa hàng</option>
                    <option value="3">Khác</option>
                </select>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-3 fw-bold mb-2"> Đánh giá</div>
                <div className="col-sm-9">
                <div className="d-flex flex-wrap gap-2">
                    <div>Chưa hài lòng</div>
                    <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="choices"
                        id="radio1"
                    />
                    <label className="form-check-label" htmlFor="radio1">
                        1
                    </label>
                    </div>
                    <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="choices"
                        id="radio2"
                    />
                    <label className="form-check-label" htmlFor="radio2">
                        2
                    </label>
                    </div>
                    <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="choices"
                        id="radio1"
                    />
                    <label className="form-check-label" htmlFor="radio1">
                        3
                    </label>
                    </div>
                    <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="choices"
                        id="radio2"
                    />
                    <label className="form-check-label" htmlFor="radio2">
                        4
                    </label>
                    </div>
                    <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="choices"
                        id="radio1"
                    />
                    <label className="form-check-label" htmlFor="radio1">
                        5
                    </label>
                    </div>
                    <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="choices"
                        id="radio1"
                    />
                    <label className="form-check-label" htmlFor="radio1">
                        6
                    </label>
                    </div>
                    <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="choices"
                        id="radio2"
                    />
                    <label className="form-check-label" htmlFor="radio2">
                        7
                    </label>
                    </div>
                    <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="choices"
                        id="radio1"
                    />
                    <label className="form-check-label" htmlFor="radio1">
                        8
                    </label>
                    </div>
                    <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="choices"
                        id="radio2"
                    />
                    <label className="form-check-label" htmlFor="radio2">
                        9
                    </label>
                    </div>
                    <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="choices"
                        id="radio2"
                    />
                    <label className="form-check-label" htmlFor="radio2">
                        10
                    </label>
                    </div>
                    <div>Hài lòng</div>
                </div>
                </div>
                <div className="mb-3">
                <textarea className="form-control" rows={3}></textarea>
                </div>
                <div className="mb-2">
                <button className="btn btn-primary">Gửi đánh giá</button>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}
