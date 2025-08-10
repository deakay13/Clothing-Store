import MainBanner from "../../Component/Home/mainBanner";
import { useEffect, useState } from "react";
import { fetchProduct } from "../../Services/productServices";
import type { Product } from "../../Services/productServices";
import { Link } from "react-router-dom";

export default function MainPage() {
  const [products, setProducts] = useState<Product[]>([]);

  const featuredCategories = ["Áo", "Quần", "Phụ kiện", "Giày"];

  useEffect(() => {
    const loadProducts = async () => {
      const allProducts = await fetchProduct();
      setProducts(allProducts);
    };
    loadProducts();
  }, []);

  const renderCategorySection = (categoryName: string) => {
    const filtered = products
      .filter((p) => p.category === categoryName && p.rating && p.rating >= 5)
      .slice(0, 4);

    if (filtered.length === 0) return null;

    return (
      <div key={categoryName} className="mb-5">
        <h2 className="text-center mb-4">Sản phẩm {categoryName} nổi bật</h2>
        <div className="row g-3 mb-3">
          {filtered.map((product) => (
            <div key={product.id} className="col-3 d-flex align-items-stretch">
              <div className="card shadow-sm h-100 d-flex flex-column">
                <img
                  src={product.img}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                  alt={product.name}
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text text-muted">
                      {product.description?.slice(0, 60)}...
                    </p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-3">
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

        <div className="text-center">
          <Link
            to={`/Product/${encodeURIComponent(categoryName)}`}
            className="btn btn-outline-primary"
          >
            Xem tất cả {categoryName}
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div>
      <MainBanner />
      <div className="container mt-4">
        {featuredCategories.map((cat) => renderCategorySection(cat))}
      </div>
    </div>
  );
}
