const bannerVariants = {
  teal: "bg-teal-600 text-white",
  violet: "bg-violet-600 text-white",
  emerald: "bg-emerald-600 text-white",
};

export function ProductImage({
  image,
  alt = "",
  category = "RUN",
  variant = "teal",
}) {
  const bgClasses = bannerVariants[variant] || bannerVariants.teal;

  return (
    <div
      className={`aspect-video w-full overflow-hidden ${bgClasses} flex items-center justify-center`}
    >
      {image ? (
        <img
          src={image}
          alt={alt}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      ) : (
        <span className="text-4xl font-extrabold tracking-tight uppercase transition duration-300 select-none group-hover:scale-110">
          {category}
        </span>
      )}
    </div>
  );
}

export default ProductImage;