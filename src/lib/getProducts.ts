import fs from "fs";
import path from "path";
import { parse } from "csv-parse/sync";

export interface Product {
  slug: string;
  title: string;
  description: string;
  price: string;
  image: string;
}

export function getProducts(): Product[] {
  const file = path.resolve("public/data/products.csv");
  const csv = fs.readFileSync(file, "utf-8");

  const records: Product[] = parse(csv, {
    columns: true,
    skip_empty_lines: true,
  });

  return records;
}

export function getProductBySlug(slug: string): Product | undefined {
  const products = getProducts();
  return products.find((p) => p.slug === slug);
}
