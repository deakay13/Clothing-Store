import { Link, useParams } from "react-router-dom";
import Filter from "../../Component/Home/filter";
import { useEffect, useState } from "react";
import type { Product } from "../../Services/productServices";
import { fetchProduct } from "../../Services/productServices";

export default function Product() {
    const { categoryName } = useParams();
    const [products, setProducts] = useState<Product[]>([]);
    const [currentPage, setCurrentPage] = useState(1);

    const PRODUCTS_PER_PAGE = 40;

    useEffect(() => {
        const loadProducts = async () => {
        const allProducts = await fetchProduct();
        const filtered = allProducts.filter(
            (p) => p.category.toLowerCase() === categoryName?.toLowerCase()
        );
        setProducts(filtered);
        setCurrentPage(1); // reset page when category changes
        };
        loadProducts();
    }, [categoryName]);

    const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const currentProducts = products.slice(
        startIndex,
        startIndex + PRODUCTS_PER_PAGE
    );

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
        setCurrentPage(page);
        }
    };

    return (
        <div className="container-fluid py-4">
        <div className="row">
            <Filter />
            <div className="col-md-9">
            <h4>Danh sách sản phẩm</h4>
            <div className="row g-3">
                {currentProducts.map((product) => (
                <div
                    key={product.id}
                    className="col-3 d-flex align-items-stretch"
                >
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
                            Chi tiết
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            <div className="mt-4 justify-content-center d-flex">
                <nav aria-label="Page navigation">
                <ul className="pagination">
                    <li
                    className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                    >
                    <button
                        className="page-link"
                        onClick={() => handlePageChange(currentPage - 1)}
                    >
                        &laquo;
                    </button>
                    </li>
                    {Array.from({ length: totalPages }, (_, i) => (
                    <li
                        key={i + 1}
                        className={`page-item ${
                        currentPage === i + 1 ? "active" : ""
                        }`}
                    >
                        <button
                        className="page-link"
                        onClick={() => handlePageChange(i + 1)}
                        >
                        {i + 1}
                        </button>
                    </li>
                    ))}
                    <li
                    className={`page-item ${
                        currentPage === totalPages ? "disabled" : ""
                    }`}
                    >
                    <button
                        className="page-link"
                        onClick={() => handlePageChange(currentPage + 1)}
                    >
                        &raquo;
                    </button>
                    </li>
                </ul>
                </nav>
            </div>
            </div>
        </div>
        </div>
    );
}
