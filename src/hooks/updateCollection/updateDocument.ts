import { db } from '@src/firebase.js';
import { doc, updateDoc } from 'firebase/firestore';
import { TExpense } from '@src/types/expenseTypes';

export const updateExpense = async ( formData: TExpense): Promise<any> => {
  try {
    const expenseRef = doc(db, 'expenses', formData.id || "");
    const data = await updateDoc(expenseRef, {
      ...formData,
      updatedAt: new Date(),
    });
    return data;
  } catch (e) {
    console.log("There's some error", e);
  }
};
