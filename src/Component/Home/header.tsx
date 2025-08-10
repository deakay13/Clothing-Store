import bannerLogo from "../../Assets/Icon/image-Photoroom.png";
import CartModal from "./cartModal";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCategory } from "../../Services/categoryServices";
import type { Category } from "../../Services/categoryServices";

export default function Header() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const loadCategory = async () => {
      const data = await fetchCategory();
      setCategories(data);
    };
    loadCategory();
  }, []);

  const clothingCategories = categories.filter((cat) =>
    ["Áo", "Quần"].includes(cat.name)
  );

  const accessoryCategories = categories.filter(
    (cat) => !["Áo", "Quần"].includes(cat.name)
  );

  return (
    <header>
      <CartModal />
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container">
          <img src={bannerLogo} alt="BannerLogo" height="70" width="auto" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-list-ul"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link fw-bold text-uppercase" to="/">
                  Trang chủ
                </Link>
              </li>

              {/* Dropdown Quần áo */}
              <li className="nav-item dropdown">
                <button
                  className="nav-link fw-bold dropdown-toggle text-uppercase"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Quần áo
                </button>
                <ul className="dropdown-menu">
                  {clothingCategories.map((cat) => (
                    <li key={cat.id}>
                      <Link
                        className="dropdown-item"
                        to={`/Product/${encodeURIComponent(cat.name)}`}
                      >
                        {cat.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {/* Dropdown Phụ kiện */}
              <li className="nav-item dropdown">
                <button
                  className="nav-link fw-bold dropdown-toggle text-uppercase"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Phụ Kiện
                </button>
                <ul className="dropdown-menu">
                  {accessoryCategories.map((cat) => (
                    <li key={cat.id}>
                      <Link
                        className="dropdown-item"
                        to={`/Product/${encodeURIComponent(cat.name)}`}
                      >
                        {cat.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li className="nav-item">
                <button
                  type="button"
                  className="nav-link fw-bold text-uppercase btn btn-link"
                >
                  Khuyến mãi
                </button>
              </li>
            </ul>

            <button
              onClick={() => navigate("/SignIn")}
              className="btn btn-outline-primary me-2"
            >
              <i className="bi bi-person"></i> Đăng nhập
            </button>
            <button
              className="btn btn-outline-danger"
              data-bs-toggle="modal"
              data-bs-target="#cartModal"
            >
              <i className="bi bi-cart"></i> Giỏ hàng
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
