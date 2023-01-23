import Button from "../components/Button";
import QuantityBtn from "../components/QuantityBtn";
import { useGetFeaturedProductsQuery } from "../redux/ApiSlice";

const ShoppingCart = () => {
  const { data } = useGetFeaturedProductsQuery(2);
  return (
    <main className="p-6 bg-white text-darkPrimary">
      <div className="mx-auto md:w-11/12">
        <h1 className="font-clashDisplay text-700 md:text-900">
          Your shopping cart
        </h1>
        <div className="md:divide-y-2">
          <section className="items-center justify-between hidden p-4 md:flex">
            <p>Product</p>
            <p>Quantity</p>
            <p>Total</p>
          </section>
          <section className="grid gap-6 py-4">
            {data?.map(({ id, name, price, sku, url }) => (
              <section key={id} className="flex gap-4">
                <div className="w-1/3 md:w-2/12 md:aspect-[1/1.2] object-cover">
                  <img className="w-full h-full" src={url} alt={name} />
                </div>
                <article className="flex flex-col justify-between w-full p-4 md:items-start md:flex-row md:text-500">
                  <div className="font-clashDisplay">
                    <h2 className="mb-3">{name}</h2>
                    <p>${price}</p>
                  </div>
                  <QuantityBtn sku={sku} />
                  <p className="hidden md:block">$210</p>
                </article>
              </section>
            ))}
          </section>
        </div>
        <section className="my-6 text-right text-primary">
          <h3 className="font-clashDisplay text-600">
            Subtotal <span className="text-700 text-darkPrimary">$210</span>
          </h3>
          <p className="text-300">
            Taxes and shipping are calculated at checkout
          </p>
          <Button
            name="Go To Checkout"
            style="w-full bg-darkPrimary text-white ml-auto my-8 md:w-1/4"
          />
        </section>
      </div>
    </main>
  );
};

export default ShoppingCart;
