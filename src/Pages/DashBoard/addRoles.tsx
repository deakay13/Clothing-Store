import { useState, useEffect } from "react";
import { createRole, updateRole } from "../../Services/roleServices";
import type { Role } from "../../Services/roleServices";

type AddModalProps = {
  onAdd: () => void;
  editingRole?: Role | null;
  onUpdate?: () => void;
};

export default function AddModal({
  onAdd,
  editingRole,
  onUpdate,
}: AddModalProps) {
  const [roleName, setRoleName] = useState("");

  useEffect(() => {
    if (editingRole) {
      setRoleName(editingRole.name);
    } else {
      setRoleName("");
    }
  }, [editingRole]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!roleName.trim()) return;
    try {
      const permissions = ["create", "read", "delete", "update"];
      if (editingRole) {
        await updateRole(editingRole.id, roleName, permissions);
        onUpdate?.();
      } else {
        const newRole = {
          id: "",
          name: roleName,
          permissions,
        };
        await createRole(newRole);
        onAdd();
      }
      setRoleName("");
    } catch (error) {
      console.error("❌ Lỗi khi xử lý role:", error);
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
              {editingRole ? "Chỉnh sửa vai trò" : "Thêm mới vai trò"}
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
                  type="text"
                  className="form-control"
                  id="floatingUsername"
                  placeholder="Tên đăng nhập"
                  value={roleName}
                  onChange={(e) => setRoleName(e.target.value)}
                />
                <label htmlFor="floatingUsername">Role Name</label>
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
              {editingRole ? "Update" : "Add New"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
