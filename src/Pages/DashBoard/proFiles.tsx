
export default function proFiles() {
    return (
        <div className="m-3">
            <div className="card">
                <div className="card-header"><h3>Thông tin cá nhân</h3></div>
                <div className="card-body">
                    <form className="container">
                        <div className="mb-3">
                        <label htmlFor="fullName" className="form-label">Họ và tên</label>
                        <input type="text" className="form-control" id="fullName" placeholder="Nguyễn Văn A"/>
                        </div>
                        <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="example@gmail.com"/>
                        </div>
                        <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Số điện thoại</label>
                        <input type="tel" className="form-control" id="phone" placeholder="0901234567"/>
                        </div>
                        <div className="mb-3">
                        <label className="form-label">Giới tính</label>
                        <div>
                            <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="gender" id="male" value="Nam"/>
                            <label className="form-check-label" htmlFor="male">Nam</label>
                            </div>
                            <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="gender" id="female" value="Nữ"/>
                            <label className="form-check-label" htmlFor="female">Nữ</label>
                            </div>
                        </div>
                        </div>
                        <div className="mb-3">
                        <label htmlFor="dob" className="form-label">Ngày sinh</label>
                        <input type="date" className="form-control" id="dob"/>
                        </div>
                        <div className="mb-3">
                        <label htmlFor="avatar" className="form-label">Ảnh đại diện</label>
                        <input className="form-control" type="file" id="avatar"/>
                        </div>
                        <div className="mb-3">
                        <label htmlFor="bio" className="form-label">Giới thiệu bản thân</label>
                            <textarea className="form-control" id="bio" rows={3} placeholder="Viết vài dòng về bạn..."></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary float-end">Lưu hồ sơ</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
