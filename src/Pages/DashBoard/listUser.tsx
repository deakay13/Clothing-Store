import AddUsers from "./addUsers";
import { useEffect, useState } from "react";
import { deleteUser, fetchUsers } from "../../Services/usersServices";
import type { User } from "../../Services/usersServices";

export default function ListUser() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [users, setUsers] = useState<User[]>([]);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  useEffect(() => {
    fetchUsers().then(setUsers).catch(console.error);
  }, []);

  const handleDeleteUser = async (id: string) => {
    if (!window.confirm("Bạn có chắc muốn xóa người dùng này không?")) return;
    try {
      await deleteUser(id);
      const updated = await fetchUsers();
      setUsers(updated);
    } catch (error) {
      console.error("❌ Lỗi khi xóa:", error);
    }
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(users.length / itemsPerPage);
  return (
    <div>
      <AddUsers
        initialData={editingUser ?? undefined}
        onUserAdded={async () => {
          const updated = await fetchUsers();
          setUsers(updated);
          setEditingUser(null); // reset sau khi xong
        }}
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
              tài khoản người dùng
            </li>
          </ol>
        </nav>
      </div>
      <div className="card d-flex justify-content-between mx-4">
        <div className="card-header">
          <div className="d-flex justify-content-between m-2">
            <h5 className="fw-bold">User</h5>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
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
                  <th>Email</th>
                  <th>Vai trò</th>
                  <th>Thời gian tạo</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((user, index) => (
                  <tr key={user.id}>
                    <td>{indexOfFirstItem + index + 1}</td>
                    <td>{user.email}</td>
                    <td>{user.roleName}</td>
                    <td>{user.timeCreate}</td>
                    <td>
                      <div className="d-flex justify-content-center align-items-center gap-2">
                        <button
                          type="button"
                          className="btn btn-info"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          onClick={() => setEditingUser(user)}
                        >
                          <i className="bi bi-pencil-square"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => handleDeleteUser(user.id)}
                        >
                          <i className="bi bi-trash3"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
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
