import { queryDatabase } from './manager';

export type Category = { 
    id: number;
    name: string;
    slug: string;
};

export const getAllCategories = async (): Promise<Category[]> => {
    const rows = await queryDatabase("SELECT id, name, slug FROM categories ORDER BY lower(name)");
    return rows.map((r: any) => ({ id: r.id, name: r.name, slug: r.slug }));
};
