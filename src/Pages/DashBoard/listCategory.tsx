import { useEffect, useState } from "react";
import { fetchCategory, deleteCategory } from "../../Services/categoryServices";
import type { Category } from "../../Services/categoryServices";
import AddCategory from "./addCategory";

export default function ListCategory() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const [Category, setCategory] = useState<Category[]>([]);
    const [editingCategory, setEditingCategory] = useState<Category | null>(null);
    useEffect(() => {
        fetchCategory()
        .then(setCategory)
        .catch((error) => console.error("❌ Lỗi khi fetch:", error));
    }, []);

    const loadCategory = async () => {
        try {
        const updated = await fetchCategory();
        setCategory(updated);
        } catch (error) {
        console.error("❌ Lỗi khi loadCategory:", error);
        }
    };

    const handleDelete = async (id: string) => {
        if (!window.confirm("Bạn có chắc muốn xóa danh mục này không?")) return;
        try {
        await deleteCategory(id);
        const updated = await fetchCategory();
        setCategory(updated);
        } catch (error) {
        console.error("❌ Lỗi khi xóa:", error);
        }
    };
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = Category.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(Category.length / itemsPerPage);
    return (
        <div>
            <AddCategory
            onAdd={loadCategory}
            onUpdate={loadCategory}
            editingCategory={editingCategory}
            />
            <div className="px-3 py-2">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                <li className="breadcrumb-item fw-bold">
                    <a>Home</a>
                </li>
                <li className="breadcrumb-item fw-bold">
                    <a>Quản lý Sản Phẩm</a>
                </li>
                <li className="breadcrumb-item fw-bold" aria-current="page">
                    Danh mục Sản phẩm
                </li>
                </ol>
            </nav>
            </div>
            <div className="card d-flex justify-content-between mx-4">
            <div className="card-header">
                <div className="d-flex justify-content-between m-2">
                <h5 className="fw-bold">Danh mục sản phẩm</h5>
                <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => setEditingCategory(null)}
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
                        <th>Danh Mục sản phẩm</th>
                        <th>Mô tả</th>
                        <th>Thời gian tạo</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {currentItems.length === 0 ? (
                        <tr>
                            <td colSpan={5} className="text-center text-muted">
                            Không có dữ liệu
                            </td>
                        </tr>
                        ) : (
                        currentItems.map((Category, index) => (
                            <tr key={Category.id}>
                            <td>{indexOfFirstItem + index + 1}</td>
                            <td>{Category.name}</td>
                            <td>{Category.description ?? ""}</td>
                            <td>{Category.timeCreate ? new Date(Category.timeCreate).toLocaleString() : ""}</td>
                            <td>
                                <div className="d-flex justify-content-center align-items-center gap-2">
                                <button
                                    type="button"
                                    className="btn btn-info"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    onClick={() => setEditingCategory(Category)}
                                >
                                    <i className="bi bi-pencil-square"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(Category.id)}
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
                    <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                        <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)}>
                        &laquo;
                        </button>
                    </li>

                    {Array.from({ length: totalPages }, (_, i) => (
                        <li key={i} className={`page-item ${currentPage === i + 1 ? "active" : ""}`}>
                        <button className="page-link" onClick={() => setCurrentPage(i + 1)}>
                            {i + 1}
                        </button>
                        </li>
                    ))}

                    <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                        <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)}>
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
