import { notFound } from "next/navigation";
import { products, getProduct } from "../../data/products";
import ProductDetail from "../../components/shop/ProductDetail";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);
  return { title: product ? product.name : "Product not found" };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <div className="bg-[#faf6f1]">
      <ProductDetail product={product} />
    </div>
  );
}
