export interface BookModel{
    name: string;
    description: string;
    price: number;
    category: BookCategory;
    createDate: number;
    isAvailable: boolean;
}

export const enum BookCategory{
    comedy,
    action,
    horror
}