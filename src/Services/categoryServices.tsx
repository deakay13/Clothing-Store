// services/roleService.ts
import { db } from "./firebase";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

export type Category = {
    id: string;
    name: string;
    description?: string;
    timeCreate?: string;
};

export const fetchCategory= async (): Promise<Category[]> => {
    const snapshot = await getDocs(collection(db, "category"));

    const loadedCategory: Category[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().Name ?? "Unnamed",
        description: doc.data().Description ?? "",
        timeCreate: doc.data().TimeCreate ?? "",

    }));

    return loadedCategory;
};
export const createCategory = async (newCategory: Category ): Promise<void> => {
    await addDoc(collection(db, "category"), {
        Name: newCategory.name,
        Description: newCategory.description,
        TimeCreate: newCategory.timeCreate ?? new Date().toISOString(),
    });
};

export const updateCategory = async (id: string, name: string, updatedData: Partial<Category>) => {
    await updateDoc(doc(db, "category", id), {
        Name: name,
        Description: updatedData.description,
        TimeCreate: updatedData.timeCreate,
    });
};

export const deleteCategory = async (id: string) => {
    await deleteDoc(doc(db, "category", id));
};
