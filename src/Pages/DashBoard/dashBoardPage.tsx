import Chatmess from "../../assets/chatmessage.png";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../Services/firebase";

export default function DashBoardPage() {
    const [base64Image, setBase64Image] = useState<string>("");

    const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return;
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = async () => {
            const base64 = reader.result as string;
            setBase64Image(base64);

            // Lưu vào Firestore
            const imageRef = doc(db, "images", file.name);
            await setDoc(imageRef, {
            name: file.name,
            data: base64,
            uploadedAt: new Date(),
            });
        };

        reader.readAsDataURL(file);
    };



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
                        <div className="col-9">
                            <h3>📤 Upload ảnh vào Firestore (Base64)</h3>
                            <input type="file" onChange={handleUpload} />
                            {base64Image && (
                                <div className="mt-3">
                                <p><strong>Ảnh đã lưu:</strong></p>
                                <img src={base64Image} alt="Uploaded" style={{ maxWidth: "300px" }} />
                                </div>
                            )}
                        </div>
                        <div className="col-3">
                            <div className="card">
                            <div className="card-header">
                                Featured
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">An item</li>
                                <li className="list-group-item">A second item</li>
                                <li className="list-group-item">A third item</li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
