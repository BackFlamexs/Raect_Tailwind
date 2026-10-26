import { Badge } from "./Badge";
import { Button } from "./Button";
import { ProductImage } from "./ProductImage";

export function ProductCard({
  name,
  category,
  description,
  price,
  badge,
  image,
  badgeVariant = "success",
  bannerVariant = "teal",
}) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xs transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <ProductImage
        image={image}
        alt={name}
        category={category}
        variant={bannerVariant}
      />

      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <div className="flex flex-wrap items-center gap-2.5">
            <h2 className="text-lg font-extrabold tracking-tight text-slate-900">
              {name}
            </h2>
            {badge && <Badge variant={badgeVariant}>{badge}</Badge>}
          </div>

          <p className="mt-2 text-xs text-slate-500">{description}</p>
        </div>

        <div className="mt-5 flex items-center gap-4">
          <strong className="text-xl font-extrabold tracking-tight text-slate-900">
            {price}
          </strong>

          <Button variant="dark" className="h-10 px-6">
            Buy
          </Button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;