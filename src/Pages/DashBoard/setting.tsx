export default function setting() {
    return (
        <div className="m-3">
            <div className="card">
                <div className="card-header"><h3>Cài đặt</h3></div>
                <div className="card-body">
                    <form className="container">
                        <div className="mb-3">
                        <label htmlFor="currentPassword" className="form-label">Mật khẩu hiện tại</label>
                        <input type="password" className="form-control" id="currentPassword" placeholder="Nhập mật khẩu cũ"/>
                        </div>
                        <div className="mb-3">
                        <label htmlFor="newPassword" className="form-label">Mật khẩu mới</label>
                        <input type="password" className="form-control" id="newPassword" placeholder="Nhập mật khẩu mới"/>
                        </div>
                        <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label">Xác nhận mật khẩu mới</label>
                        <input type="password" className="form-control" id="confirmPassword" placeholder="Nhập lại mật khẩu mới"/>
                        </div>
                        <div className="mb-3">
                        <label className="form-label">Thông báo</label>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="emailNotify" checked/>
                            <label className="form-check-label" htmlFor="emailNotify">Nhận thông báo qua email</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="smsNotify"/>
                            <label className="form-check-label" htmlFor="smsNotify">Nhận thông báo qua SMS</label>
                        </div>
                        </div>
                        <div className="mb-3">
                        <label htmlFor="language" className="form-label">Ngôn ngữ</label>
                        <select className="form-select" id="language">
                            <option value="vi">Tiếng Việt</option>
                            <option value="en">English</option>
                        </select>
                        </div>
                        <div className="mb-3">
                        <label className="form-label">Quyền riêng tư</label>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="privacy" id="public" value="public" checked/>
                            <label className="form-check-label" htmlFor="public">Công khai</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="privacy" id="private" value="private"/>
                            <label className="form-check-label" htmlFor="private">Riêng tư</label>
                        </div>
                        </div>
                        <button type="submit" className="btn btn-primary float-end">Lưu Cài Đặt</button>
                    </form>

                </div>
            </div>
        </div>
    )
}
