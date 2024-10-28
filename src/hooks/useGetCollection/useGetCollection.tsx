import React, { useEffect, useState } from "react";
import { collection, DocumentData, getDocs } from 'firebase/firestore';
import { db } from '@src/firebase.js';

type useGetCollectionProps = {
    collectionName: string;
    dependencies?: any[];
}

function sortByDateDescending(data) {
  return data.sort((a, b) => {
    // Assuming a.date and b.date are in ISO format or Date objects
    const dateA: any = new Date(a.date || ""); // Convert date string to Date object
    const dateB: any = new Date(b.date || ""); // Convert date string to Date object
    return dateB - dateA; // Sort from latest to oldest
  });
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
              const sortedData = sortByDateDescending(dataArray)
              setData(sortedData);
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