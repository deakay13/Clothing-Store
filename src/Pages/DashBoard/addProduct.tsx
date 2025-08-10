import { useState, useEffect } from "react";
import {
  createProduct,
  updateProduct,
} from "../../Services/productServices";
import { fetchCategory } from "../../Services/categoryServices";
import type { Category } from "../../Services/categoryServices";
import type { Product } from "../../Services/productServices";

type Props = {
  editingProduct?: Product | null;
  onSuccess?: () => void;
};

export default function AddProduct({ editingProduct, onSuccess }: Props) {
  const [category, setCategory] = useState<Category[]>([]);
  const [formData, setFormData] = useState<Product>({
    id: "",
    img: "",
    name: "",
    price: 0,
    description: "",
    category: "",
    color: "",
    form: "",
    material: "",
    size: "",
    status: "Còn hàng",
    rating: 0,
    reviews: [],
  });

  useEffect(() => {
    fetchCategory().then(setCategory).catch(console.error);
  }, []);

  useEffect(() => {
    if (editingProduct) {
      setFormData(editingProduct);
    }
  }, [editingProduct]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "price" || name === "rating"
          ? parseFloat(value.replace(/^0+/, ""))
          : value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;
      setFormData((prev) => ({ ...prev, img: base64 }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async () => {
    try {
      if (editingProduct) {
        await updateProduct(formData.id, formData);
      } else {
        await createProduct(formData);
      }
      if (onSuccess) onSuccess();
      setFormData({
        id: "",
        img: "",
        name: "",
        price: 0,
        description: "",
        category: "",
        color: "",
        form: "",
        material: "",
        size: "",
        status: "Còn hàng",
        rating: 0,
        reviews: [],
      });
    } catch (error) {
      console.error("❌ Lỗi khi lưu sản phẩm:", error);
    }
  };

  return (
    <div className="modal fade" id="exampleModal" tabIndex={-1}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {editingProduct ? "Cập nhật sản phẩm" : "Thêm sản phẩm"}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div className="modal-body">
            <div className="row g-3">
              {[
                { label: "Tên sản phẩm", name: "name" },
                { label: "Giá", name: "price", type: "number" },
                { label: "Màu", name: "color" },
                { label: "Form", name: "form" },
                { label: "Chất liệu", name: "material" },
                { label: "Kích thước", name: "size" },
                { label: "Trạng thái", name: "status" },
                { label: "Đánh giá", name: "rating", type: "number" },
              ].map(({ label, name, type = "text" }) => (
                <div className="col-md-6" key={name}>
                  <label className="form-label">{label}</label>
                  <input
                    type={type}
                    name={name}
                    value={String(formData[name as keyof Product] ?? "")}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
              ))}

              <div className="col-md-6">
                <label className="form-label">Danh mục</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="">-- Chọn danh mục --</option>
                  {category.map((cat) => (
                    <option key={cat.id} value={cat.name}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label">Hình ảnh</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="form-control"
                />
                {formData.img && (
                  <img
                    src={formData.img}
                    alt="Preview"
                    style={{ maxWidth: "100%", marginTop: "10px" }}
                  />
                )}
              </div>

              <div className="col-12">
                <label className="form-label">Mô tả</label>
                <textarea
                  name="description"
                  value={formData.description ?? ""}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={handleSubmit}
            >
              {editingProduct ? "Cập nhật" : "Thêm mới"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
