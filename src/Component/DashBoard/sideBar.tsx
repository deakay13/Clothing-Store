import Logo from "../../assets/Icon/android-chrome-192x192.png"
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div
      className="offcanvas offcanvas-start text-bg-dark"
      data-bs-scroll="true"
      tabIndex={-1}
      id="offcanvasWithBothOptions"
      aria-labelledby="offcanvasWithBothOptionsLabel"
    >
      <div className="offcanvas-header">
        <div className="d-flex gap-4">
          <img
            src={Logo}
            width="50"
            height="50"
            className="rounded-circle border dropdown-toggle"
            alt="Logo"
          />
          <h2 className="offcanvas-title fw-bold" id="staticBackdropLabel">
            <Link className="text-decoration-none text-white" rel="stylesheet" to="/MainDash">
              Dash Board
            </Link>
          </h2>
        </div>
        <button
          type="button"
          className="btn-close"
          data-bs-theme="dark"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <hr className="mx-auto w-50" />
      <div className="offcanvas-body">
        <ul className="list-unstyled d-flex flex-column gap-2">
          <li className="nav-item">
            <a
              className="btn btn-dark focus-ring-secondary w-100 text-start d-flex justify-content-between"
              data-bs-toggle="collapse"
              href="#submenu1"
              role="button"
              aria-expanded="false"
              aria-controls="submenu1"
            >
              <div className="d-flex gap-2">
                <i className="bi bi-person-fill-gear"></i>
                Quản lý tài khoản
              </div>
              <span className="float-end dropdown-toggle"></span>
            </a>
            <div className="collapse" id="submenu1">
              <ul className="nav flex-column ms-3">
                <li className="nav-item">
                  <a
                    className="btn btn-dark focus-ring-secondary w-100 text-start d-flex gap-2"
                    href="/ListUser"
                  >
                    <i className="bi bi-people-fill"></i>
                    Tài khoản người dùng
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="btn btn-dark focus-ring-secondary w-100 text-start d-flex gap-2"
                    href="/ListRoles"
                  >
                    <i className="bi bi-key-fill"></i>
                    vai trò tài khoản
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="btn btn-dark w-100 text-start  d-flex justify-content-between"
              data-bs-toggle="collapse"
              href="#submenu2"
              role="button"
              aria-expanded="false"
              aria-controls="submenu2"
            >
              <div className="d-flex gap-2">
                <i className="bi bi-database-fill-gear"></i>
                Quản lý sản phẩm
              </div>
              <span className="float-end dropdown-toggle"></span>
            </a>
            <div className="collapse" id="submenu2">
              <ul className="nav flex-column ms-3">
                <li className="nav-item">
                  <a className="btn btn-dark focus-ring-secondary w-100 text-start d-flex gap-2" href="/ListProduct">
                    <i className="bi bi-list-columns"></i>
                    Danh sách sản phẩm
                  </a>
                </li>
                <li className="nav-item">
                  <a className="btn btn-dark focus-ring-secondary w-100 text-start d-flex gap-2" href="/ListCategory">
                    <i className="bi bi-list-columns-reverse"></i>
                    Danh Mục sản phẩm
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="btn btn-dark w-100 text-start  d-flex justify-content-between"
              data-bs-toggle="collapse"
              href="#submenu3"
              role="button"
              aria-expanded="false"
              aria-controls="submenu3"
            >
              <div className="d-flex gap-2">
                <i className="bi bi-file-person-fill"></i>
                Quản lý nhân sự
              </div>
              <span className="float-end dropdown-toggle"></span>
            </a>
            <div className="collapse" id="submenu3">
              <ul className="nav flex-column ms-3">
                <li className="nav-item">
                  <a
                    className="btn btn-dark focus-ring-secondary w-100 text-start d-flex gap-2"
                    href="/ListStaff"
                  >
                    <i className="bi bi-person-lines-fill"></i>
                    Quản lý nhân viên
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="btn btn-dark focus-ring-secondary w-100 text-start d-flex gap-2"
                    href="/TimeKeeping"
                  >
                    <i className="bi bi-calendar2-range-fill"></i>
                    Chấm Công
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
