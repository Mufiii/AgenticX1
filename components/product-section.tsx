import { ProductCard } from '@/components/product-card'
import { SectionLabel } from '@/components/section-label'
import { pageContent } from '@/lib/page-content'
import { products } from '@/lib/products'

export function ProductSection() {
  const productCopy = pageContent.products

  return (
    <section className="product-section" id="products">
      <div className="product-pin">
        <header className="product-heading">
          <SectionLabel>PRODUCTS</SectionLabel>
          <h2>{productCopy.title}</h2>
          <p>{productCopy.intro}</p>
        </header>
        <div className="product-stage">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
