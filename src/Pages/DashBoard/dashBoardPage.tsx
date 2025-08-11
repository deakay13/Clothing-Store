import Chatmess from "../../assets/chatmessage.png";
import ChartDB from "../../assets/chartDB1.png";

export default function DashBoardPage() {
    return (
        <div className="m-2">
            <div className="d-flex justify-content-between gap-2 mb-2">
                <div className="card flex-fill">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-8">
                                <h2 className="text-primary">1</h2>
                                <h5 className="card-title">Hóa đơn</h5>
                            </div>
                            <div className="col-4">
                                <img className="h-auto w-100" src={Chatmess} alt="chatmessage"/>
                            </div>
                        </div>
                        <div> tổng hóa đơn trong tháng</div>
                    </div>
                </div>
                <div className="card flex-fill">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-8">
                                <h2 className="text-primary">10</h2>
                                <h5 className="card-title">Khách hàng</h5>
                            </div>
                            <div className="col-4">
                                <img className="h-auto w-100" src={Chatmess} alt="Play"/>
                            </div>
                        </div>
                        <div> tổng khách hàng trong tháng</div>
                    </div>
                </div>
                <div className="card flex-fill">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-8">
                                <h2 className="text-primary">1</h2>
                                <h5 className="card-title">Nhà cung cấp</h5>
                            </div>
                            <div className="col-4">
                                <img className="h-auto w-100" src={Chatmess} alt="chatmessage"/>
                            </div>
                        </div>
                        <div> tổng nhà cung cấp trong tháng</div>
                    </div>
                </div>
                <div className="card flex-fill">
                    <div className="card-body">
                        <div className="row ">
                            <div className="col-8">
                                <h2 className="text-primary">1</h2>
                                <h5 className="card-title">Sản phẩm hết hàng</h5>
                            </div>
                            <div className="col-4">
                                <img className="h-auto w-100" src={Chatmess} alt="chatmessage"/>
                            </div>
                        </div>
                        <div>Các sản phẩm cần tháng</div>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-title d-flex align-items-center gap-3 border p-2">
                    <div className="text-primary fw-bold"> <h4>Biểu đồ theo dõi bán hàng</h4></div>
                    <div className="text-secondary fw-bold">Trong 20 ngày gần đây</div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <img src={ChartDB} alt="chartDB" />
                    </div>
                </div>
            </div>
        </div>
    );
}
