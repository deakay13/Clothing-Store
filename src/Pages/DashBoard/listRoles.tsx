import { useEffect, useState } from "react";
import { fetchRoles, deleteRole } from "../../Services/roleServices";
import type { Role } from "../../Services/roleServices";
import AddRoles from "./addRoles";

export default function ListRole() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [roles, setRoles] = useState<Role[]>([]);
  const [editingRole, setEditingRole] = useState<Role | null>(null);
  useEffect(() => {
    fetchRoles()
      .then(setRoles)
      .catch((error) => console.error("❌ Lỗi khi fetch:", error));
  }, []);

  const loadRoles = async () => {
    try {
      const updated = await fetchRoles();
      setRoles(updated);
    } catch (error) {
      console.error("❌ Lỗi khi loadRoles:", error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Bạn có chắc muốn xóa vai trò này không?")) return;
    try {
      await deleteRole(id);
      const updated = await fetchRoles();
      setRoles(updated);
    } catch (error) {
      console.error("❌ Lỗi khi xóa:", error);
    }
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = roles.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(roles.length / itemsPerPage);
  return (
    <div>
      <AddRoles
        onAdd={loadRoles}
        onUpdate={loadRoles}
        editingRole={editingRole}
      />
      <div className="px-3 py-2">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item fw-bold">
              <a>Home</a>
            </li>
            <li className="breadcrumb-item fw-bold">
              <a>Quản lý tài khoản</a>
            </li>
            <li className="breadcrumb-item fw-bold" aria-current="page">
              Vai trò tài khoản
            </li>
          </ol>
        </nav>
      </div>
      <div className="card d-flex justify-content-between mx-4">
        <div className="card-header">
          <div className="d-flex justify-content-between m-2">
            <h5 className="fw-bold">Vai trò</h5>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={() => setEditingRole(null)}
            >
              Thêm
            </button>
          </div>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover table-borderless align-middle border">
              <thead className="table-light">
                <tr>
                  <th>No</th>
                  <th>Vai trò</th>
                  <th>Quyền thực hiện</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {currentItems.length === 0 ? (
                  <tr>
                    <td colSpan={3} className="text-center text-muted">
                      Không có dữ liệu
                    </td>
                  </tr>
                ) : (
                  currentItems.map((role, index) => (
                    <tr key={role.name}>
                      <td>{indexOfFirstItem + index + 1}</td>
                      <td>
                        <div>{role.name}</div>
                      </td>
                      <td>
                        <ul className="list-unstyled">
                          {role.permissions.map((p, i) => (
                            <li key={i}>{p}</li>
                          ))}
                        </ul>
                      </td>
                      <td>
                        <div className="d-flex justify-content-center align-items-center gap-2">
                          <button
                            type="button"
                            className="btn btn-info"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            onClick={() => setEditingRole(role)}
                          >
                            <i className="bi bi-pencil-square"></i>
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => handleDelete(role.id)}
                          >
                            <i className="bi bi-trash3"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            <nav
              aria-label="Page navigation"
              className="d-flex justify-content-center"
            >
              <ul className="pagination">
                <li
                  className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                >
                  <button
                    className="page-link"
                    onClick={() => setCurrentPage(currentPage - 1)}
                  >
                    &laquo;
                  </button>
                </li>

                {Array.from({ length: totalPages }, (_, i) => (
                  <li
                    key={i}
                    className={`page-item ${
                      currentPage === i + 1 ? "active" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => setCurrentPage(i + 1)}
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
                    onClick={() => setCurrentPage(currentPage + 1)}
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
