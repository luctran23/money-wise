import { db } from '@src/firebase.js';
import { doc, deleteDoc } from 'firebase/firestore';

export const deleteExpense = async (id): Promise<any> => {
  try {
    const expenseRef = doc(db, 'expenses', id);
    await deleteDoc(expenseRef);
  } catch (e) {
    console.log(e);
  }
};