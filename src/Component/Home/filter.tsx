export default function Filter() {
    return (
        <div className="col-md-3">
            <div className="card p-3">
                <h4>Bộ lọc</h4>
                <div className="mb-3 input-group me-3" style={{ maxWidth: "300px" }}>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nhập sản phẩm"
                        aria-label="Search"
                    />
                    <button className="btn btn-outline-secondary" type="button">
                        <i className="bi bi-search"></i>
                    </button>
                </div>
                <ul className="list-unstyled d-flex flex-column gap-0">
                    <li className="nav-item">
                        <a
                            className="btn btn-light focus-ring-secondary w-100 text-start d-flex justify-content-between"
                            data-bs-toggle="collapse"
                            href="#submenu1"
                            role="button"
                            aria-expanded="false"
                            aria-controls="submenu1"
                        >
                            <div className="d-flex gap-2 fw-bold">
                            <i className="bi bi-gender-trans"></i>
                            Giới tính
                            </div>
                            <span className="float-end dropdown-toggle"></span>
                        </a>
                        <div className="collapse" id="submenu1">
                            <ul className="nav flex-column m-3">
                                <li className="nav-item">
                                    <a className="focus-ring-secondary w-100 text-start d-flex gap-2">
                                        <div className="form-check">
                                            <input
                                            className="form-check-input"
                                            type="radio"
                                            name="radioDefault"
                                            id="radioDefault1"
                                            />
                                                <label
                                                className="form-check-label text-dark"
                                                htmlFor="radioDefault1"
                                                >
                                                    Nam
                                                </label>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="focus-ring-secondary w-100 text-start d-flex gap-2">
                                        <div className="form-check">
                                            <input
                                            className="form-check-input"
                                            type="radio"
                                            name="radioDefault"
                                            id="radioDefault2"
                                            />
                                                <label
                                                className="form-check-label text-dark"
                                                htmlFor="radioDefault2"
                                                >
                                                    Nữ
                                                </label>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a
                            className="btn btn-light focus-ring-secondary w-100 text-start d-flex justify-content-between"
                            data-bs-toggle="collapse"
                            href="#submenu2"
                            role="button"
                            aria-expanded="false"
                            aria-controls="submenu2"
                        >
                            <div className="d-flex gap-2 fw-bold">
                                <i className="bi bi-palette-fill"></i>
                                Màu sắc
                            </div>
                            <span className="float-end dropdown-toggle"></span>
                        </a>
                        <div className="collapse" id="submenu2">
                            <ul className="nav flex-column m-3">
                                <li className="nav-item">
                                    <a className="focus-ring-secondary w-100 text-start d-flex gap-0">
                                        <div className="form-check">
                                            <input
                                            className="form-check-input"
                                            type="radio"
                                            name="radioDefault"
                                            id="radioDefault1"
                                            />
                                            <label
                                            className="form-check-label text-dark"
                                            htmlFor="radioDefault1"
                                            >
                                                Đen
                                            </label>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="focus-ring-secondary w-100 text-start d-flex gap-0">
                                        <div className="form-check">
                                            <input
                                            className="form-check-input"
                                            type="radio"
                                            name="radioDefault"
                                            id="radioDefault2"
                                            />
                                            <label
                                            className="form-check-label text-dark"
                                            htmlFor="radioDefault2"
                                            >
                                                Trắng
                                            </label>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="focus-ring-secondary w-100 text-start d-flex gap-0">
                                        <div className="form-check">
                                            <input
                                            className="form-check-input"
                                            type="radio"
                                            name="radioDefault"
                                            id="radioDefault2"
                                            />
                                            <label
                                            className="form-check-label text-dark"
                                            htmlFor="radioDefault2"
                                            >
                                                Xanh Navy
                                            </label>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="focus-ring-secondary w-100 text-start d-flex gap-0">
                                        <div className="form-check">
                                            <input
                                            className="form-check-input"
                                            type="radio"
                                            name="radioDefault"
                                            id="radioDefault2"
                                            />
                                            <label
                                            className="form-check-label text-dark"
                                            htmlFor="radioDefault2"
                                            >
                                                Đỏ
                                            </label>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="focus-ring-secondary w-100 text-start d-flex gap-0">
                                        <div className="form-check">
                                            <input
                                            className="form-check-input"
                                            type="radio"
                                            name="radioDefault"
                                            id="radioDefault2"
                                            />
                                            <label
                                            className="form-check-label text-dark"
                                            htmlFor="radioDefault2"
                                            >
                                                Xám
                                            </label>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="focus-ring-secondary w-100 text-start d-flex gap-0">
                                        <div className="form-check">
                                            <input
                                            className="form-check-input"
                                            type="radio"
                                            name="radioDefault"
                                            id="radioDefault2"
                                            />
                                            <label
                                            className="form-check-label text-dark"
                                            htmlFor="radioDefault2"
                                            >
                                                Tím
                                            </label>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a
                            className="btn btn-light w-100 text-start d-flex justify-content-between"
                            data-bs-toggle="collapse"
                            href="#submenu3"
                            role="button"
                            aria-expanded="false"
                            aria-controls="submenu3"
                        >
                            <div className="d-flex gap-2 fw-bold">
                                <i className="bi bi-bag-fill"></i>
                                Kiểu dáng
                            </div>
                            <span className="float-end dropdown-toggle"></span>
                        </a>
                    <div className="collapse" id="submenu3">
                        <ul className="nav flex-column ms-3">
                            <li className="nav-item">
                                <div className="form-check">
                                    <input
                                    className="form-check-input"
                                    type="radio"
                                    name="radioDefault"
                                    id="radioDefault"
                                    />
                                    <label
                                    className="form-check-label text-dark"
                                    htmlFor="radioDefault"
                                    >
                                    Áo Thun
                                    </label>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="form-check">
                                    <input
                                    className="form-check-input"
                                    type="radio"
                                    name="radioDefault"
                                    id="radioDefault"
                                    />
                                    <label
                                    className="form-check-label text-dark"
                                    htmlFor="radioDefault"
                                    >
                                    Áo Khoác
                                    </label>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="form-check">
                                    <input
                                    className="form-check-input"
                                    type="radio"
                                    name="radioDefault"
                                    id="radioDefault"
                                    />
                                    <label
                                    className="form-check-label text-dark"
                                    htmlFor="radioDefault"
                                    >
                                    Áo Sơ Mi
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
