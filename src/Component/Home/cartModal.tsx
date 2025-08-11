import { useCart } from "../../Services/cartServices";

export default function CartModal() {
    const { cart, removeFromCart, clearCart, updateCartQuantity } = useCart();

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const handleCheckout = async () => {
    await clearCart();
    alert("✅ Đã thanh toán thành công!");
    };

    return (
        <div
        className="modal fade"
        id="cartModal"
        tabIndex={-1}
        aria-labelledby="cartModalLabel"
        aria-hidden="true"
        >
        <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="cartModalLabel">
                Giỏ hàng của bạn
                </h5>
                <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Đóng"
                ></button>
            </div>
            <div className="modal-body">
                {cart.length === 0 ? (
                <p className="text-center">🛒 Giỏ hàng trống</p>
                ) : (
                <>
                    <div className="table-responsive">
                    <table className="table table-bordered align-middle">
                        <thead className="table-light text-center">
                        <tr>
                            <th>Sản phẩm</th>
                            <th>Số lượng</th>
                            <th>Giá</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody className="text-center">
                        {cart.map((item) => (
                            <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>
                                <input
                                type="number"
                                className="form-control form-control-sm text-center"
                                value={item.quantity}
                                min={1}
                                onChange={(e) =>
                                updateCartQuantity(item.id, Number(e.target.value))
                                }
                                />
                            </td>
                            <td>
                                {(item.price * item.quantity).toLocaleString()}đ
                            </td>
                            <td>
                                <button
                                className="btn btn-sm btn-danger"
                                onClick={() => removeFromCart(item.id)}
                                >
                                Xóa
                                </button>
                            </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <button
                        className="btn btn-danger"
                        type="button"
                        onClick={clearCart}
                    >
                        Xóa tất cả
                    </button>
                    </div>
                    <div className="mt-3 text-end">
                    <h5>
                        Tổng cộng: <strong>{total.toLocaleString()}đ</strong>
                    </h5>
                    </div>
                </>
                )}
            </div>
            <div className="modal-footer">
                <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                >
                Tiếp tục mua sắm
                </button>
                <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={handleCheckout}>
                Thanh toán
                </button>
            </div>
            </div>
        </div>
        </div>
    );
}
