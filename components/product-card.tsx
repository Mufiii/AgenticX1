import Image from 'next/image'
import Link from 'next/link'
import type { Product } from '@/lib/products'

function ProductTitle({
  nameLead,
  nameAccent,
  nameJoin,
}: Pick<Product, 'nameLead' | 'nameAccent' | 'nameJoin'>) {
  return (
    <>
      {nameLead}
      {nameJoin === 'break' ? <br /> : nameJoin === 'space' ? ' ' : null}
      <span className="product-card-title-accent">{nameAccent}</span>
    </>
  )
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className={`product-card product-card--${product.id}`}>
      <div className="product-card-copy">
        <p className="product-card-eyebrow">
          <span className="product-card-index">{product.index}</span>
          <span className="product-card-eyebrow-rule" aria-hidden="true">
            |
          </span>
          <span>{product.eyebrow}</span>
        </p>
        <h3 className={product.nameJoin === 'break' ? 'product-card-title--stacked' : undefined}>
          <ProductTitle
            nameLead={product.nameLead}
            nameAccent={product.nameAccent}
            nameJoin={product.nameJoin}
          />
        </h3>
        <p className="product-card-tagline">{product.tagline}</p>
        <p className="product-card-description">{product.description}</p>
        <Link href={product.href} className="product-card-link">
          {product.ctaLabel} <span aria-hidden="true">→</span>
        </Link>
      </div>
      <div className="product-card-media">
        {product.imageSrc ? (
          <Image
            src={product.imageSrc}
            alt={product.imageAlt}
            width={1600}
            height={1000}
            sizes="(max-width: 800px) 100vw, (max-width: 1180px) 55vw, 620px"
            className="product-card-image"
          />
        ) : (
          <div className="product-card-placeholder" aria-hidden="true" />
        )}
      </div>
    </article>
  )
}
