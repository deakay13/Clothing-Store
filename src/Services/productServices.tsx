import { db } from "./firebase";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

export type Product = {
    id: string;
    img: string;
    name: string;
    price: number;
    description?: string;
    category: string;
    color: string;
    form: string;
    material: string;
    size: string;
    status?: "Còn hàng" | "Hết hàng" | "Ngừng kinh doanh";
    rating?: number;
    reviews?: Review[];
};
type Review = {
    userId: string;
    comment: string;
    rating: number;
    time: string;
};

export const fetchProduct = async (): Promise<Product[]> => {
    const snapshot = await getDocs(collection(db, "products"));

    const loadedProduct: Product[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        img: doc.data().Img ?? "",
        name: doc.data().Name ?? "Unnamed",
        price: doc.data().Price ?? 0,
        description: doc.data().Description ?? "",
        category: doc.data().Category ?? "",
        color: doc.data().Color ?? "",
        form: doc.data().Form ?? "",
        material: doc.data().Material ?? "",
        size: doc.data().Size ?? "",
        status: doc.data().Status ?? "available",
        rating: doc.data().Rating ?? 0,
        reviews: doc.data().Reviews ?? [],
    }));
    return loadedProduct;
};

export const createProduct = async (newProduct: Product): Promise<void> => {
    await addDoc(collection(db, "products"), {
        Img: newProduct.img,
        Name: newProduct.name,
        Price: newProduct.price,
        Description: newProduct.description ?? "",
        Category: newProduct.category,
        Color: newProduct.color,
        Form: newProduct.form,
        Material: newProduct.material,
        Size: newProduct.size,
        Status: newProduct.status ?? "available",
        Rating: newProduct.rating ?? 0,
        Reviews: newProduct.reviews ?? [],
    });
};

export const updateProduct = async (
    productId: string,
    updatedProduct: Partial<Product>
    ): Promise<void> => {
    const productRef = doc(db, "products", productId);
    await updateDoc(productRef, {
        Img: updatedProduct.img,
        Name: updatedProduct.name,
        Price: updatedProduct.price,
        Description: updatedProduct.description,
        Category: updatedProduct.category,
        Color: updatedProduct.color,
        Form: updatedProduct.form,
        Material: updatedProduct.material,
        Size: updatedProduct.size,
        TimeUpdate: new Date().toISOString(),
        Status: updatedProduct.status,
        Rating: updatedProduct.rating,
        Reviews: updatedProduct.reviews,
    });
};

export const deleteProduct = async (productId: string): Promise<void> => {
    const productRef = doc(db, "products", productId);
    await deleteDoc(productRef);
};