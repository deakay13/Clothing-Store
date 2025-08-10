import { db, auth } from "./firebase";
import {
    collection,
    getDocs,
    getDoc,
    DocumentReference,
    Timestamp,
    setDoc,
    query,
    where,
    doc,
    deleteDoc,
    updateDoc,
} from "firebase/firestore";
import {
    createUserWithEmailAndPassword,
} from "firebase/auth";

export type Role = {
    Name: string;
    Permission: string[] | Record<string, string>;
};

export interface User {
    id: string;
    email: string;
    roleName: string;
    timeCreate?: string;
}

const formatTime = (value: Timestamp | string | null | undefined): string => {
    if (value instanceof Timestamp) {
        return value.toDate().toLocaleString("vi-VN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        });
    }

    if (typeof value === "string") return value;
    return "Chưa có";
};

export const fetchUsers = async (): Promise<User[]> => {
    const snapshot = await getDocs(collection(db, "users"));
    const users: User[] = await Promise.all(
        snapshot.docs.map(async (docSnap) => {
        const data = docSnap.data();
        const roleRef = data.role as DocumentReference | undefined;
        let roleName = "Không xác định";
        if (roleRef) {
            try {
            const roleSnap = await getDoc(roleRef);
            if (roleSnap.exists()) {
                const roleData = roleSnap.data() as Role;
                roleName = roleData.Name ?? "Không xác định";
            }
            } catch (error) {
            console.error("Lỗi khi lấy role:", error);
            }
        }
        const timeCreate = formatTime(data.createdAt);
        return {
            id: docSnap.id,
            email: data.email ?? "No Email",
            timeCreate,
            roleName,
        };
        })
    );
    return users;
};

export const createUser = async (
    email: string,
    password: string,
    roleName: string = "user",
    extraData?: Record<string, unknown>
    ): Promise<void> => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    const roleQuery = query(collection(db, "roles"), where("Name", "==", roleName));
    const roleSnapshot = await getDocs(roleQuery);

    if (roleSnapshot.empty) {
        throw new Error(`⚠️ Không tìm thấy role '${roleName}' trong collection roles!`);
    }

    const roleRef = doc(db, "roles", roleSnapshot.docs[0].id);

    await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        role: roleRef,
        createdAt: new Date(),
        ...extraData,
    });
};

export const updateUser = async (
    userId: string,
    userData: {
        email: string;
        roleName: string;
        name?: string;
        phone?: string;
    }
    ): Promise<void> => {
    const { email, roleName, ...extraData } = userData;

    // 🔍 Tìm role
    const roleQuery = query(
        collection(db, "roles"),
        where("Name", "==", roleName)
    );
    const roleSnapshot = await getDocs(roleQuery);
    if (roleSnapshot.empty) {
        throw new Error(`⚠️ Không tìm thấy role '${roleName}'`);
    }
    const roleRef = doc(db, "roles", roleSnapshot.docs[0].id);

    // 🔄 Cập nhật Firestore
    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, {
        email,
        role: roleRef,
        ...extraData,
    });
};

export const deleteUser = async (userId: string): Promise<void> => {
    await deleteDoc(doc(db, "users", userId));
};

