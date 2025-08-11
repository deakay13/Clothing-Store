import { useState, useEffect } from "react";
import { db } from "../Services/firebase";
import { doc, setDoc, onSnapshot, deleteDoc } from "firebase/firestore";
import { useAuth } from "./useAuthServices";

export type CartItem = {
    id: string;
    name: string;
    price: number;
    quantity: number;
    imageUrl?: string;
};

export const useCart = () => {
    const { user } = useAuth();
    const [cart, setCart] = useState<CartItem[]>([]);

    // ✅ Lắng nghe realtime khi user thay đổi
    useEffect(() => {
        if (!user || !user.uid) return;

        const ref = doc(db, "carts", user.uid);

        const unsubscribe = onSnapshot(ref, (snap) => {
        if (snap.exists()) {
            const data = snap.data();
            setCart(data.items || []);
            console.log("🔄 Giỏ hàng realtime cập nhật:", data.items);
        } else {
            setCart([]);
            console.log("🛒 Giỏ hàng trống hoặc chưa tạo.");
        }
        });

        return () => unsubscribe(); // cleanup khi component unmount
    }, [user]);

    const saveCart = async (items: CartItem[]) => {
        if (!user || !user.uid) {
            console.warn("❌ Không có user để lưu giỏ hàng");
            return;
        }

        const ref = doc(db, "carts", user.uid);

        try {
            if (items.length === 0) {
            await deleteDoc(ref); // ✅ Xóa hẳn document nếu giỏ hàng trống
            console.log("🗑️ Đã xóa giỏ hàng khỏi Firestore");
            } else {
            await setDoc(ref, { items });
            console.log("✅ Giỏ hàng đã lưu:", items);
            }
            // Không cần gọi loadCart vì có realtime listener
        } catch (error) {
            console.error("❌ Lỗi khi lưu giỏ hàng:", error);
        }
    };


    const addToCart = async (item: CartItem) => {
        if (!item.id || !item.name || !item.price || item.quantity <= 0) {
        console.warn("❌ Dữ liệu sản phẩm không hợp lệ:", item);
        return;
        }

        const existing = cart.find((i) => i.id === item.id);
        let updatedCart;

        if (existing) {
        updatedCart = cart.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
        } else {
        updatedCart = [...cart, item];
        }

        await saveCart(updatedCart);
    };

    const updateCartQuantity = async (id: string, quantity: number) => {
        if (!user || !user.uid) return;
        if (quantity < 1) return; // không cho số lượng < 1

        const updatedCart = cart.map((item) =>
            item.id === id ? { ...item, quantity } : item
        );

        await saveCart(updatedCart);
    };


    const removeFromCart = async (id: string) => {
        const updated = cart.filter((item) => item.id !== id);
        await saveCart(updated);
    };

    const clearCart = async () => {
        await saveCart([]);
    };

    return { cart, addToCart, removeFromCart, clearCart, updateCartQuantity };
};
