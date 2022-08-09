export interface Cateogry{
    id: 0;
    name: string;

}

export interface Product{
    id: string;
    title: string;
    price: number;
    images: string[];
    description: string;
    category: Cateogry;
}

export interface createProductDto extends Omit<Product, 'id' | 'category'>{
   categoryId: number
}

export interface UpdateProductDTO extends Partial<createProductDto>{}