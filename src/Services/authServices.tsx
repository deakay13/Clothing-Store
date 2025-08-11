// authServices.ts
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "firebase/auth";
import type { User } from "firebase/auth";
import { auth, db } from "./firebase";
import {
    doc,
    setDoc,
    collection,
    query,
    where,
    getDocs,
} from "firebase/firestore";

export const loginUser = async (email: string, password: string) => {
    return await signInWithEmailAndPassword(auth, email, password);
};


export const registerUser = async (
email: string,
password: string,
): Promise<User> => {
    const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
    );
    const user = userCredential.user;
    const roleQuery = query(collection(db, "roles"), where("Name", "==", "user"));
    const roleSnapshot = await getDocs(roleQuery);

    if (roleSnapshot.empty)
    throw new Error("⚠️ Không tìm thấy role 'user' trong collection roles!");

    const roleId = roleSnapshot.docs[0].id;
    const roleRef = doc(db, "roles", roleId);

    await setDoc(doc(db, "users", user.uid), {
    email: user.email,
    role: roleRef,
    createdAt: new Date(),
    });

    return user;
};

