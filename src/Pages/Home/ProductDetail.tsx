import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProduct } from "../../Services/productServices";
import type { Product } from "../../Services/productServices";

export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        const loadProduct = async () => {
        const allProducts = await fetchProduct();
        const found = allProducts.find((p) => p.id === id);
        setProduct(found ?? null);
        };
        loadProduct();
    }, [id]);

    if (!product) {
        return (
        <div className="container py-5">
            <h4 className="text-danger">Không tìm thấy sản phẩm.</h4>
        </div>
        );
    }

    return (
        <div className="container mb-5 mt-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
            <div className="row g-3">
            <div className="col-md-4">
                <img
                src={product.img}
                className="img-fluid rounded w-95 h-100"
                alt={product.name}
                />
            </div>
            <div className="col-md-8 my-3">
                <h2>{ product.name}</h2>
                <p className="text-muted fw-bold">Danh Mục: {product.category}</p>
                <h4 className="text-danger">{product.price.toLocaleString()}VND</h4>
                <p>{product.description}</p>
                <ul>
                    <li>Chất liệu: {product.material}</li>
                    <li>Form: {product.form}</li>
                    <li>Màu sắc: {product.color}</li>
                    <li>Size: {product.size}</li>
                </ul>
                <div className="mb-3">
                <label htmlFor="size" className="form-label">
                    Chọn size:
                </label>
                <select id="size" className="form-select w-50">
                    {product.size.split(",").map((s) => (
                    <option key={s}>{s.trim()}</option>
                    ))}
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
    );
}
