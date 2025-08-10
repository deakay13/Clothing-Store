import AddProduct from "./addProduct";
import { useEffect, useState } from "react";
import { deleteProduct, fetchProduct } from "../../Services/productServices";
import type { Product } from "../../Services/productServices";

interface BootstrapModal {
    show: () => void;
    hide: () => void;
    toggle: () => void;
}
interface Bootstrap {
    Modal: new (element: HTMLElement) => BootstrapModal;
}
declare const bootstrap: Bootstrap;

export default function ListProduct() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const [Product, setProduct] = useState<Product[]>([]);
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);

    useEffect(() => {
        fetchProduct().then(setProduct).catch(console.error);
    }, []);

    const handleEdit = (product: Product) => {
        setEditingProduct(product);
        const modal = new bootstrap.Modal(
            document.getElementById("exampleModal")!
        );
        modal.show();
        modal.show();
    };

    const handleSuccess = () => {
        fetchProduct().then(setProduct);
        setEditingProduct(null);
    };

    const handleDeleteUser = async (id: string) => {
        if (!window.confirm("Bạn có chắc muốn xóa người dùng này không?")) return;
        try {
        await deleteProduct(id);
        const updated = await fetchProduct();
        setProduct(updated);
        } catch (error) {
        console.error("❌ Lỗi khi xóa:", error);
        }
    };
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = Product.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(Product.length / itemsPerPage);
    return (
        <div>
            <AddProduct editingProduct={editingProduct} onSuccess={handleSuccess} />
            <div className="px-3 py-2">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                <li className="breadcrumb-item fw-bold">
                    <a>Home</a>
                </li>
                <li className="breadcrumb-item fw-bold">
                    <a>Quản lý sản phẩm</a>
                </li>
                <li className="breadcrumb-item fw-bold" aria-current="page">
                    Danh sách sản phẩm
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
                        <th>Tên Sản phẩm</th>
                        <th>Giá</th>
                        <th>Danh mục</th>
                        <th>Màu</th>
                        <th>form</th>
                        <th>Chất liệu</th>
                        <th>kích thước</th>
                        <th>Trạng thái</th>
                        <th>Đánh giá</th>
                        <th>Bình luận</th>
                        <th>Img</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {currentItems.map((product, index) => (
                        <tr key={product.id}>
                        <td>{indexOfFirstItem + index + 1}</td>
                        <td>{product.name}</td>
                        <td>{product.price.toLocaleString()}₫</td>
                        <td>{product.category}</td>
                        <td>{product.color}</td>
                        <td>{product.form}</td>
                        <td>{product.material}</td>
                        <td>{product.size}</td>
                        <td>{product.status}</td>
                        <td>{product.rating ?? 0}</td>
                        <td>{product.reviews?.length ?? 0}</td>
                        <td>
                            <img src={product.img} alt={product.name} width="80" />
                        </td>
                        <td>
                            <div className="d-flex justify-content-center align-items-center gap-2">
                            <button
                                type="button"
                                className="btn btn-info"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                                onClick={() => handleEdit(product)}

                            >
                                <i className="bi bi-pencil-square"></i>
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => handleDeleteUser(product.id)}
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
