import Jonh from "../../assets/jon.png"
import { getAuth, signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    
    const handleLogout = async () => {
        const auth = getAuth();
        try {
            await signOut(auth);
            alert("🔴 Đã đăng xuất thành công!");
            navigate("/signIn");
        } catch (err) {
            console.error("❌ Lỗi khi đăng xuất:", err);
        }
    };

    return (
        <nav className="navbar bg-light">
            <div className="container-fluid">
                <div className="d-flex align-items-center gap-4">
                    <button
                    className="btn btn-light fw-bold fs-5"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasWithBothOptions"
                    aria-controls="offcanvasWithBothOptions"
                    >
                    <i className="bi bi-list-ul"></i>
                    </button>
                    <div
                    className="input-group me-3"
                    style={{ flex: 1, maxWidth: "250px" }}
                    >
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Tìm..."
                        aria-label="Search"
                    />
                    <button className="btn btn-outline-secondary" type="button">
                        <i className="bi bi-search"></i>
                    </button>
                    </div>
                </div>
                <div className="d-flex align-items-center gap-4">
                    <button
                    className="position-relative btn btn-outline-primary rounded-circle border-0"
                    type="button"
                    >
                        <i className="bi bi-bell-fill"></i>
                        <span className="badge bg-danger position-absolute top-25 start-100 translate-middle">
                            3
                        </span>
                    </button>
                    <img
                    src={Jonh}
                    alt="avatar"
                    width="50"
                    height="50"
                    className="rounded-circle border dropdown-toggle"
                    data-bs-toggle="dropdown"
                    />
                    <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                            <Link className="dropdown-item" to="/Profiles">Hồ sơ</Link>
                        </li>
                        <li>
                            <Link className="dropdown-item" to="/Setting">Cài đặt</Link>
                        </li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li>
                            <button className="dropdown-item"  onClick={handleLogout}>Đăng xuất</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
