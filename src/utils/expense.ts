import { Category } from "@src/types/categoryTypes";

export const getCategoryById  = (id: string, categories: Category[]) => {
    const matchedItem = categories.find(item => item.id === id);
    return matchedItem && matchedItem.name ? matchedItem.name : "";
}

export function formatCurrencyVND(amount: string): string {
    // Convert the string to a number
    const numericAmount = parseFloat(amount);

    // Check if the conversion was successful
    if (isNaN(numericAmount)) {
        throw new Error("Invalid amount: Must be a valid number.");
    }

    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(numericAmount);
}