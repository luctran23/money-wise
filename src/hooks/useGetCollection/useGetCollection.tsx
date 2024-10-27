import React, { useEffect, useState } from "react";
import { collection, DocumentData, getDocs } from 'firebase/firestore';
import { db } from '@src/firebase.js';

type useGetCollectionProps = {
    collectionName: string;
    dependencies?: any[];
}

export const useGetCollection = ({ collectionName, dependencies = [] }: useGetCollectionProps) => {
    const [data, setData] = useState<DocumentData>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
              const querySnapshot = await getDocs(collection(db, collectionName));
              const dataArray: DocumentData = [];
              querySnapshot.forEach((doc) => {
                dataArray.push({ id: doc.id, ...doc.data() });
              });
              setData(dataArray);
            } catch (error) {
              console.error("Error fetching documents: ", error);
            } finally {
              setLoading(false);
            }
          };
      
          fetchData();
    }, [...dependencies]);
    return {
        data,
        loading
    }
}