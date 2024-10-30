import { collection, addDoc } from 'firebase/firestore';
import { db } from '@src/firebase.js';
import dayjs from 'dayjs';

type TAddData = {
  formData: any;
  collectionName: string;
}
export const addData = async ({ formData, collectionName }: TAddData): Promise<any> => {
    let error = "";
    const now = dayjs();
    try {
        const docRef = await addDoc(collection(db, collectionName), {
          ...formData,
          createdAt: now.format('YYYY-MM-DD HH:mm:ss'),
        });
        return docRef.id;
      } catch (e: any) {
        error = e.message;
        return { error };
      }
};