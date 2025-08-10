import { Link } from "react-router-dom";
import BannerSignUp from "@assets/Banner/BannerLogin.jpg";
import { registerUser } from "../../Services/authServices";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    const navigate = useNavigate();
    // const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("❌ Mật khẩu xác nhận không khớp!");
            return;
        }

        try {
            // ✅ Gọi hàm không truyền roleId nữa, vì mặc định là "user" bên trong
            const user = await registerUser(email, password);

            alert("✅ Đăng ký thành công: " + user.email);
            navigate("/signIn");
        } catch (err) {
            console.error("❌ Lỗi đăng ký:", err);
            alert("⚠️ Đăng ký thất bại! Kiểm tra lại role 'user' trong bảng roles.");
        }
    };




    return (
        <div className="container my-3 mb-3">
        <div className="card shadow-lg">
            <div className="row g-0">
            <div className="col-md-6">
                <img
                className="img-fluid h-100 w-100 object-fit-cover rounded-start"
                src={BannerSignUp}
                alt="BannerLogin"
                />
            </div>
            <div className="col-md-6 d-flex align-items-center">
                <div className="card-body p-4 w-100">
                <h3 className="mb-4 text-center">Đăng ký tài khoản</h3>
                <form onSubmit={handleRegister}>
                    {/* <div className="mb-3">
                        <label htmlFor="fullname" className="form-label">
                            Họ và tên
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="fullname"
                            placeholder="Nhập họ tên"
                            onChange={(e) => setFullName(e.target.value)}

                        />
                    </div> */}
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
                    <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">
                        Xác nhận mật khẩu
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Nhập lại mật khẩu"
                    />
                    </div>
                    <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="agree"
                    />
                    <label className="form-check-label" htmlFor="agree">
                        Tôi đồng ý với <a href="#"> Điều khoản sử dụng</a>
                    </label>
                    </div>
                    <button type="submit" className="btn btn-success w-100">
                    Đăng ký
                    </button>
                </form>
                <div className="mt-3 text-center">
                    <p>
                    Đã có tài khoản? <Link to="/signIn">Đăng nhập ngay</Link>
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}
