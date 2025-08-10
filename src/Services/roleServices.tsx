// services/roleService.ts
import { db } from "./firebase";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

export type Role = {
    id: string;
    name: string;
    permissions: string[];
};

export const fetchRoles = async (): Promise<Role[]> => {
    const snapshot = await getDocs(collection(db, "roles"));

    const loadedRoles: Role[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().Name ?? "Unnamed",
        permissions: Array.isArray(doc.data().Permission)
        ? doc.data().Permission
        : Object.values(doc.data().Permission ?? {}),
    }));

    return loadedRoles;
};
export const createRole = async (newRole: Role): Promise<void> => {
    await addDoc(collection(db, "roles"), {
        Name: newRole.name,
        Permission: newRole.permissions,
    });
};

export const updateRole = async (id: string, name: string, updatedPermissions: string[]) => {
    await updateDoc(doc(db, "roles", id), {
        Name: name,
        Permission: updatedPermissions,
    });
};

export const deleteRole = async (id: string) => {
    await deleteDoc(doc(db, "roles", id));
};
