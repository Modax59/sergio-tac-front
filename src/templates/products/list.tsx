
import { useProductsQuery } from '@/hooks/api/useProductsQuery';
import ProductItemList from '@/layout/products/itemList';
export default function List() {
  const { data, isLoading } = useProductsQuery();
  return (

    <div>
      <Caroussel />
      <ListCategory />
      <div className="bg-blackst">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="mb-8  text-center font-Sackers text-5xl font-extrabold tracking-tight text-white">
            Les nouveautés
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <ProductItemList key={product.id} product={product} />
            ))}
          </div>
        </div>
        <Cta />
        <ListCollection />
      </div>
    </div>
  );
}
