import { toast } from "react-toastify";

function Carts({ cart, setCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const deleteAll = () => {
    setCart([]);
    toast.success("Payment Done");
  };
  const removeItem = (itm) => {
    const newArray = cart.filter((c) => c.id !== itm.id);
    setCart(newArray);
    toast.success("Item Removed");
  };
  return (
    <div className="px-5">
      <div className=" border space-y-3 p-5">
        {cart.map((item) => (
          <div className="bg-amber-200 p-5 flex justify-between">
            <div className="flex gap-3">
              <div>
                <img className="w-10 h-10" src={item.icon} alt="" />
              </div>
              <div>
                <p>{item.name}</p>
                <p> {item.price} </p>
              </div>
            </div>
            <div>
              <button onClick={() => removeItem(item)} className="btn">
                {" "}
                Remove{" "}
              </button>
            </div>
          </div>
        ))}
        <div className="flex justify-between">
          <p>total</p>
          <p> $ {total} </p>
        </div>
        <button onClick={deleteAll} className="btn w-full">
          {" "}
          Proced to Checkout
        </button>
      </div>
      <div></div>
    </div>
  );
}

export default Carts;
