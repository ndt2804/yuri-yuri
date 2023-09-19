export interface License {
    id: number;
    name: string;
    publisher: string;
    category: string;
    created_at: string;
    image_li: string;
    slug: string;
}
export interface Filter {
    publisher: string;
    category: string;
}
