import Button from "../components/Button";
import QuantityBtn from "../components/QuantityBtn";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { RiDeleteBin5Line } from "react-icons/ri";
import { deleteProduct } from "../redux/CartSlice";
import { useNavigate } from "react-router-dom";

const ShoppingCart = () => {
  const { products, total: cartTotal } = useAppSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  function handleDelete(id: string) {
    dispatch(deleteProduct({ id }));
  }

  function handleNavigate() {
    navigate("/shop", { relative: "path" });
  }

  const cartproducts = products?.map(
    ({ id, name, price, sku, url, quantity, total }) => (
      <section key={id} className="flex gap-4 p-4 shadow-lg">
        <div className="object-contain w-32 md:w-2/12 aspect-[1/1.2]">
          <img className="w-full h-full" src={url} alt={name} />
        </div>
        <article className="flex flex-col w-full gap-4 p-4 md:flex-row md:text-500">
          <div className="font-clashDisplay">
            <h2 className="mb-3">{name}</h2>
            <p>${price}</p>
          </div>
          <div className="flex flex-col justify-between flex-1 gap-4 md:items-center md:flex-row">
            <QuantityBtn sku={sku} quantity={quantity} productId={id} />
            <p className="">Total: ${total}</p>
            <RiDeleteBin5Line
              onClick={() => handleDelete(id)}
              className="cursor-pointer"
            />
          </div>
        </article>
      </section>
    )
  );

  return (
    <main className="p-6 bg-white text-darkPrimary">
      <div className="mx-auto md:w-11/12">
        <h1 className="font-clashDisplay text-700 md:text-900">
          Your shopping cart
        </h1>
        <section className="grid gap-6 py-4 divide-y-2 divide-borderGray/[0.3]">
          {products.length > 0 ? (
            cartproducts
          ) : (
            <section className="flex flex-col items-center justify-center p-8">
              <h2 className="font-clashDisplay text-700">
                Your shopping cart is empty
              </h2>
              <Button
                name="Back To Shopping"
                style="bg-darkPrimary text-white my-8"
                onClick={handleNavigate}
              />
            </section>
          )}
        </section>
        <section className="my-6 text-right text-primary">
          <h3 className="font-clashDisplay text-600">
            Subtotal{" "}
            <span className="ml-3 text-700 text-darkPrimary">${cartTotal}</span>
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
