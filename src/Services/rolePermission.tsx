import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import type { Role } from "./roleServices";

export const getCurrentUserRole = async (): Promise<Role | null> => {
    const currentUser = auth.currentUser;
    if (!currentUser) return null;

    const userRef = doc(db, "users", currentUser.uid);
    const userSnap = await getDoc(userRef);
    if (!userSnap.exists()) return null;

    const userData = userSnap.data();
    const roleRef = userData.role;
    if (!roleRef) return null;

    const roleSnap = await getDoc(roleRef);
    if (!roleSnap.exists()) return null;

    const roleData = roleSnap.data() as {
        Name?: string;
        Permissions?: string[];
    };
    return {
        id: roleRef.id,
        name: roleData.Name ?? "Unnamed",
        permissions: roleData.Permissions ?? [],
    };
};
