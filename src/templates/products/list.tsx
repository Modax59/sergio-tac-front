import { useProductsQuery } from '@/hooks/api/useProductsQuery';
import ProductItemList from '@/layout/products/itemList';

export default function List() {
  const { data, isLoading } = useProductsQuery();
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          Customers also purchased
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {!isLoading &&
            data?.data?.map((product: any) => (
              <ProductItemList
                key={product.id}
                // @ts-ignore
                product={{
                  id: product.id,
                  title: product.attributes.Title,
                  imageSrc: product.attributes.Thumbnail?.data?.attributes?.url,
                  imageAlt: product.attributes.Title,
                  price: product.attributes.Price.toString(),
                  category: product.attributes.Categories.data.attributes.name,
                }}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
