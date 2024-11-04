import { Category } from "@src/types/categoryTypes";
import { TExpense } from "@src/types/expenseTypes";

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

export const groupExpensesByMonth = (expenses: TExpense[]) => {
    if (!expenses.length) {
        return {}
    }
    return expenses.reduce((acc, currentItem) => {
        const date = new Date(currentItem.date);
        const month = date.toLocaleDateString("default", { month: "long" });
        const year = date.getFullYear();
        
        const monthYearKey = `${month} ${year}`;

        if (!acc[monthYearKey]) {
            acc[monthYearKey] = 0;
        }
        acc[monthYearKey] = acc[monthYearKey] + Number(currentItem.expense);
        return acc;
    }, {})
}

export const formatDescription = (str: string) => {
    if (!str || typeof str !== "string") {
        return "";
    }
    return str.slice(0, 5) + "...";
}
