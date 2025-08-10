
export default function CartModal() {
    
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
                <div className="table-responsive">
                    <table className="table table-bordered align-middle">
                    <thead className="table-light text-center">
                        <tr>
                        <th>Sản phẩm</th>
                        <th>Số lượng</th>
                        <th>Giá</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr>
                        <td>Áo thun nam</td>
                        <td>
                            <input
                            type="number"
                            className="form-control form-control-sm text-center"
                            value="1"
                            min="1"
                            />
                        </td>
                        <td>250.000đ</td>
                        </tr>
                        <tr>
                        <td>Quần jeans</td>
                        <td>
                            <input
                            type="number"
                            className="form-control form-control-sm text-center"
                            value="2"
                            min="1"
                            />
                        </td>
                        <td>400.000đ</td>
                        </tr>
                        <tr>
                        <td>Giày sneaker</td>
                        <td>
                            <input
                            type="number"
                            className="form-control form-control-sm text-center"
                            value="1"
                            min="1"
                            />
                        </td>
                        <td>850.000đ</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                {/* Tổng tiền */}
                <div className="mt-3 text-end">
                    <h5>
                    Tổng cộng: <strong>1.900.000đ</strong>
                    </h5>
                </div>
                </div>
                <div className="modal-footer">
                <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                >
                    Tiếp tục mua sắm
                </button>
                <button type="button" className="btn btn-success">
                    Thanh toán
                </button>
                </div>
            </div>
            </div>
        </div>
    );
}
