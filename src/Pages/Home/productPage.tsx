import { Link } from "react-router-dom";
import Filter from "../../Component/Home/filter";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Product } from "../../Services/productServices";
import { fetchProduct } from "../../Services/productServices";

export default function Product() {
    const { categoryName } = useParams();
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const loadProducts = async () => {
            const allProducts = await fetchProduct();
            const filtered = allProducts.filter(
            (p) => p.category.toLowerCase() === categoryName?.toLowerCase()
            );
            setProducts(filtered);
        };
        loadProducts();
    }, [categoryName]);

    return (
        <div className="container-fluid py-4">
            <div className="row">
                <Filter />
                <div className="col-md-9">
                <h4>Danh sách sản phẩm</h4>
                    <div className="row g-3">
                    {products.map((product) => (
                    <div key={product.id} className="col-3 d-flex align-items-stretch">
                        <div className="card shadow-sm">
                        <img
                            src={product.img}
                            className="card-img-top"
                            style={{ height: "200px", objectFit: "cover" }}
                            alt={product.name}
                        />
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text text-muted">
                            {product.description?.slice(0, 60)}...
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                            <span className="fw-bold text-danger">
                                {product.price.toLocaleString()}đ
                            </span>
                            <Link
                                to={`/ProductDetail/${product.id}`}
                                className="btn btn-primary btn-sm"
                            >
                                Mua Ngay
                            </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            </div>
            <div className="mt-3 justify-content-center d-flex">
                <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                    <a className="page-link" aria-label="Previous" href="/">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                    </li>
                    <li className="page-item">
                    <a className="page-link" href="/">
                        1
                    </a>
                    </li>
                    <li className="page-item">
                    <a className="page-link" href="/">
                        2
                    </a>
                    </li>
                    <li className="page-item">
                    <a className="page-link" href="/">
                        3
                    </a>
                    </li>
                    <li className="page-item">
                    <a className="page-link" href="/" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                    </li>
                </ul>
                </nav>
            </div>
        </div>

    );
}
