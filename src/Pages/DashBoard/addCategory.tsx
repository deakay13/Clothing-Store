import { useState, useEffect } from "react";
import { createCategory, updateCategory } from "../../Services/categoryServices";
import type { Category } from "../../Services/categoryServices";

type AddModalProps = {
    onAdd: () => void;
    editingCategory?: Category | null;
    onUpdate?: () => void;
};

export default function AddModal({ onAdd, editingCategory, onUpdate }: AddModalProps) {
    const [CategoryName, setCategoryName] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        if (editingCategory) {
        setCategoryName(editingCategory.name);
        setDescription(editingCategory.description ?? "");
        } else {
        setCategoryName("");
        setDescription("");
        }
    }, [editingCategory]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!CategoryName.trim()) return;

        try {
        if (editingCategory) {
            await updateCategory(editingCategory.id, CategoryName, {
            description,
            timeCreate: editingCategory.timeCreate,
            });
            onUpdate?.();
        } else {
            const newCategory: Category = {
            id: "",
            name: CategoryName,
            description,
            timeCreate: new Date().toISOString(),
            };
            await createCategory(newCategory);
            onAdd();
        }
        setCategoryName("");
        setDescription("");
        } catch (error) {
            console.error("❌ Lỗi khi xử lý danh mục:", error);
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
                        <h5 className="modal-title">{editingCategory ? "Chỉnh sửa danh muc" : "Thêm mới danh mục"}</h5>
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
                                placeholder=""
                                value={CategoryName}
                                onChange={(e) => setCategoryName(e.target.value)}
                                />
                                <label htmlFor="floatingUsername">Tên danh mục</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                type="text"
                                className="form-control"
                                id="Description"
                                placeholder=""
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                />
                                <label htmlFor="Description">Mô tả</label>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleSubmit}>
                            {editingCategory ? "Update" : "Add New"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}