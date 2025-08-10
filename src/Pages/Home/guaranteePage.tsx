export default function GuaranteePage() {
    return (
        <div className="container-fluid p-5">
            <div className="row">
                <div className="col-md-3">
                <nav
                    id="navbar-example3"
                    className="h-100 flex-column align-items-stretch pe-4 border-end"
                >
                    <nav className="nav nav-pills flex-column">
                    <a className="nav-link text-dark fw-bold" href="#item-1">
                        1. Điều kiện bảo hành
                    </a>
                    <nav className="nav nav-pills flex-column">
                        <a className="nav-link ms-3 my-1 text-dark" href="#item-1-1">
                        a. Không bảo được bảo hành
                        </a>
                    </nav>
                    <a className="nav-link text-dark fw-bold" href="#item-2">
                        2. Thời hạn bảo hành
                    </a>
                    <a className="nav-link text-dark fw-bold" href="#item-3">
                        3. Trung tâm bảo hành
                    </a>
                    <a className="nav-link text-dark fw-bold" href="#item-4">
                        4. Thời gian bảo hành
                    </a>
                    <nav className="nav nav-pills flex-column">
                        <a className="nav-link ms-3 my-1 text-dark" href="#item-4-1">
                        a. Bảo hành tại nhà sản xuất
                        </a>
                        <a className="nav-link ms-3 my-1 text-dark" href="#item-4-2">
                        b. Bảo hành thông qua cửa hàng
                        </a>
                    </nav>
                    </nav>
                </nav>
                </div>
                <div className="col-md-9">
                <h4 className="text-center fw-bold text-uppercase">
                    Cẩm nang Trả hàng hoàn tiền
                </h4>
                <div
                    data-bs-spy="scroll"
                    data-bs-target="#navbar-example3"
                    data-bs-smooth-scroll="true"
                    className="scrollspy-example-2"
                    tabIndex={0}
                >
                    <div id="item-1">
                    <h4>1. Điều kiện bảo hành</h4>
                    <ul>
                        <li>Sản phẩm bị lỗi kỹ thuật do nhà sản xuất</li>
                        <li>
                        Còn trong thời hạn bảo hành (trên phiếu bảo hành hoặc trên hệ
                        thống bảo hành điện tử)
                        </li>
                        <li>
                        Có hóa đơn điện tử (khi Người mua có yêu cầu) hoặc mã đơn hàng
                        (ID đơn hàng)
                        </li>
                        <li>
                        Tất cả các trường hợp khách hàng báo lỗi với thông tin chưa rõ
                        ràng hoặc chưa chắc chắn đều phải chuyển cho Trung Tâm Bảo
                        Hành thẩm định trước khi ra quyết định bảo hành hoặc trả hàng.
                        </li>
                    </ul>
                    </div>
                    <div id="item-1-1">
                    <h5>
                        a. Những trường hợp không được bảo hành hoặc phát sinh phí bảo
                        hành:
                    </h5>
                    <ul>
                        <li>
                        Vi phạm một trong những điều kiện bảo hành miễn phí ở mục A.
                        </li>
                        <li>
                        Số series, model sản phẩm không hợp lệ (không khớp với thông
                        tin trên Phiếu bảo hành hoặc trên hệ thống bảo hành điện tử)
                        </li>
                        <li>
                        Khách hàng tự ý can thiệp sửa chữa sản phẩm hoặc sửa chữa tại
                        những trung tâm bảo hành không được sự ủy nhiệm của Hãng
                        </li>
                        <li>
                        Sản phẩm bị hư hỏng do lỗi người sử dụng, và lỗi hư không nằm
                        trong phạm vi bảo hành của nhà sản xuất
                        </li>
                    </ul>
                    </div>
                    <div id="item-2">
                    <h4>2. Thời hạn bảo hành</h4>
                    <ul>
                        <li>
                        Thời hạn bảo hành được tính kể từ ngày mua hàng hoặc ngày nhận
                        được sản phẩm, tùy theo từng sản phẩm của từng nhà sản xuất
                        khác nhau.
                        </li>
                        <li>
                        Lưu ý: Người Mua có thể gửi yêu cầu hóa đơn VAT tới bộ phận
                        Chăm sóc khách hàng để được hỗ trợ
                        </li>
                    </ul>
                    </div>
                    <div id="item-3">
                    <h4>3. Trung tâm bảo hành</h4>
                    <ul>
                        <li>
                        Thông tin của trung tâm bảo hành sẽ được ghi trong phiếu bảo
                        hành kèm theo sản phẩm hoặc trên phần mô tả thông tin chi tiết
                        của sản phẩm. Quý khách vui lòng liên hệ trực tiếp với trung
                        tâm bảo hành để được hỗ trợ trong thời gian ngắn nhất
                        </li>
                        <li>
                        Trong trường hợp quý khách gặp khó khăn trong việc liên hệ
                        trung tâm bảo hành, ở quá xa trung tâm bảo hành hoặc gặp các
                        vấn đề bất tiện không thể đến trung tâm bảo hành trực tiếp,
                        quý khách có thể liên hệ Bộ phận chăm sóc khách hàng Shopee để
                        được hỗ trợ:
                        </li>
                    </ul>
                    </div>
                    <div id="item-4">
                    <h4>4. Thời gian bảo hành</h4>
                    </div>
                    <div id="item-4-1">
                    <h4>a. Bảo hành tại nhà sản xuất</h4>
                    <ul>
                        <li>
                        Sản phẩm cung cấp được đảm bảo hàng chính hãng nên khuyến
                        khích quý khách gửi sản phẩm trực tiếp đến địa chỉ bảo hành
                        được đề cập trong phần mô tả chi tiết của sản phẩm để được hỗ
                        trợ bảo hành trong thời gian nhanh nhất. Thời gian bảo hành
                        trung bình từ vài ngày tùy thuộc vào Trung tâm bảo hành sẽ
                        thông báo cụ thể đến quý khách
                        </li>
                    </ul>
                    </div>
                    <div id="item-4-2">
                    <h4>b. Bảo hành tại cửa hàng</h4>
                    <ul>
                        <li>
                        Trường hợp quý khách gửi sản phẩm bảo hành tại cửa hàng, chúng
                        tôi sẽ gửi thông báo xác nhận đến quý khách khi nhận được sản
                        phẩm. Thời gian bảo hành sản phẩm của quý khách dự kiến từ 20
                        ngày đến 45 ngày làm việc tính từ lúc nhận được sản phẩm, tùy
                        thuộc vào Hãng và cửa sẽ thông báo chi tiết đến quý khách sau
                        khi có thông tin từ bên bảo hành.
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}
