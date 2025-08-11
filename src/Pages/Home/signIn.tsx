import BannerLogin from "../../Assets/Banner/BannerLogin.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../../Services/authServices";

export default function SignInLayout() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const userCredential = await loginUser(email, password);
            const Email = userCredential.user.email;
            navigate("/MainDash");
            alert("🟢 Đăng nhập thành công:" + Email);
        } catch {
            alert("tài khoản không đúng");
        }
    };

    // const navigate = useNavigate();
    return (
        <div className="container my-3 mb-3">
            <div className="card shadow-lg">
            <div className="row g-0">
                <div className="col-md-6">
                <img
                    className="img-fluid h-100 w-100 object-fit-cover rounded-start"
                    src={BannerLogin}
                    alt="BannerLogin"
                />
                </div>
                <div className="col-md-6 d-flex align-items-center">
                <div className="card-body p-4 w-100">
                    <h3 className="mb-4 text-center">Đăng nhập</h3>
                    <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                        Email
                        </label>
                        <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Nhập email"
                        value={email} onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                        Mật khẩu
                        </label>
                        <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Nhập mật khẩu"
                        value={password} onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-3 form-check">
                        <input
                        type="checkbox"
                        className="form-check-input"
                        id="remember"
                        />
                        <label className="form-check-label" htmlFor="remember">
                        Ghi nhớ đăng nhập
                        </label>
                    </div>
                    <button
                        // onClick={() => navigate("/MainDash")}
                        type="submit"
                        className="btn btn-primary w-100"
                    >
                        Đăng nhập
                    </button>
                    </form>
                    <div className="mt-3 text-center">
                    <p>
                        Chưa có tài khoản? <Link to="/SignUp">Đăng ký ngay</Link>
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
}
