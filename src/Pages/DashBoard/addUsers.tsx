import { useState, useEffect } from "react";
import { createUser, updateUser } from "../../Services/usersServices";
import { fetchRoles } from "../../Services/roleServices";
import type { Role } from "../../Services/roleServices";

type Props = {
  onUserAdded: () => void;
  initialData?: {
    id: string;
    email: string;
    roleName: string;
  };
};

export default function AddUsers({ onUserAdded, initialData }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [roleOptions, setRoleOptions] = useState<Role[]>([]);
  useEffect(() => {
    fetchRoles().then(setRoleOptions).catch(console.error);
  }, []);

  useEffect(() => {
    if (initialData) {
      setEmail(initialData.email);
      setRole(initialData.roleName);
    }
  }, [initialData]);

  const handleSubmit = async () => {
    try {
      if (initialData) {
        await updateUser(initialData.id, {
          email,
          roleName: role,
        });
      } else {
        await createUser(email, password, role);
      }

      onUserAdded();
      setEmail("");
      setPassword("");
      setRole("user");
    } catch (error) {
      console.error("❌ Lỗi:", error);
      alert("Không thể xử lý user.");
    }
  };

  return (
    <div
      className="modal"
      id="exampleModal"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      tabIndex={-1}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {initialData ? "Chỉnh sửa người dùng" : "Thêm mới người dùng"}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form className="p-2">
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingEmail"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="floatingEmail">Email</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Mật khẩu"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="floatingPassword">Mật khẩu</label>
              </div>
              <div className="form-floating mb-3">
                <div className="mb-3">
                  <label htmlFor="" className="form-label">
                    Vai trò
                  </label>
                  <select
                    className="form-select"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    {roleOptions.map((r) => (
                      <option key={r.id} value={r.name}>
                        {r.name.charAt(0).toUpperCase() + r.name.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="submit"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={handleSubmit}
            >
              {initialData ? "Cập nhật" : "Thêm"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
