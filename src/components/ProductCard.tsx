type ProductCardProps = {
  name: string;
  price: number;
  unit: string;
  image: string;
};

const ProductCard = ({ name, price, unit, image }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{name}</h3>
        <p className="text-gray-700">
          ${price.toFixed(2)} per {unit}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
