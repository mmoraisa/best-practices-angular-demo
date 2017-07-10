import { ICategory } from '../categories/category'
import { IAuthor } from '../authors/author'

export interface IBook{
    id: number;
    name: string;
    description: string;
    author: IAuthor;
    category: ICategory;
}