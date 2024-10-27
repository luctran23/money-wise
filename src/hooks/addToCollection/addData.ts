import { collection, addDoc } from 'firebase/firestore';
import { db } from '@src/firebase.js';
import { TExpense } from '@src/types/expenseTypes';

export const addData = async ( formData: TExpense): Promise<any> => {
    let error = "";
    try {
        const docRef = await addDoc(collection(db, 'expenses'), {
          ...formData,
          createdAt: new Date(),
        });
        return docRef.id;
      } catch (e: any) {
        error = e.message;
        return { error };
      }
};