export default function RoleUser() {
  return (
    <div>
      <div className="px-3 py-2">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item fw-bold">
              <a>Home</a>
            </li>
            <li className="breadcrumb-item fw-bold">
              <a>Quản lý nhân sự</a>
            </li>
            <li className="breadcrumb-item fw-bold" aria-current="page">
              Chấm Công
            </li>
          </ol>
        </nav>
      </div>
      <div className="card d-flex justify-content-between mx-4">
        <div className="card-header">
          <div className="d-flex justify-content-between m-2">
            <h5 className="fw-bold">Chấm công</h5>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Add
            </button>
          </div>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover table-borderless align-middle border">
              <thead className="table-light text-center">
                <tr>
                  <th>STT</th>
                  <th>Họ và Tên</th>
                  <th>Phòng Ban</th>
                  <th>Ngày</th>
                  <th>Giờ Vào</th>
                  <th>Giờ Ra</th>
                  <th>Số Giờ Làm</th>
                  <th>Ghi Chú</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr>
                  <td>1</td>
                  <td>Nguyễn lê Duy Khang</td>
                  <td>Nhóm trưởng</td>
                  <td>07/08/2025</td>
                  <td>08:00</td>
                  <td>17:00</td>
                  <td>8</td>
                  <td></td>
                  <td>
                    <div className="d-flex justify-content-center align-items-center gap-2">
                      <button
                        type="button"
                        className="btn btn-info"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i className="bi bi-pencil-square"></i>
                      </button>
                      <button type="button" className="btn btn-danger">
                        <i className="bi bi-trash3"></i>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Trần Ngô Hải Đăng</td>
                  <td>Lập trình viên</td>
                  <td>07/08/2025</td>
                  <td>10:00</td>
                  <td>16:00</td>
                  <td>5</td>
                  <td>Đi làm trễ</td>
                  <td>
                    <div className="d-flex justify-content-center align-items-center gap-2">
                      <button
                        type="button"
                        className="btn btn-info"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i className="bi bi-pencil-square"></i>
                      </button>
                      <button type="button" className="btn btn-danger">
                        <i className="bi bi-trash3"></i>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Vũ Minh Đức</td>
                  <td>lập trình viên</td>
                  <td>07/08/2025</td>
                  <td>10:00</td>
                  <td>17:00</td>
                  <td>6</td>
                  <td>có xin đi trễ</td>
                  <td>
                    <div className="d-flex justify-content-center align-items-center gap-2">
                      <button
                        type="button"
                        className="btn btn-info"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i className="bi bi-pencil-square"></i>
                      </button>
                      <button type="button" className="btn btn-danger">
                        <i className="bi bi-trash3"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <nav
              aria-label="Page navigation"
              className="d-flex justify-content-center"
            >
              <ul className="pagination">
                <li className="page-item disabled">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li className="page-item active" aria-current="page">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
