import { toast } from "react-toastify";
import EmptyCart from "./EmptyCart";

function Carts({ cart, setCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const deleteAll = () => {
    setCart([]);
toast.success("Payment Done", {
  style: {
    background: "#15803D", // green
    color: "#fff",
  },
});
  };
  const removeItem = (itm) => {
    const newArray = cart.filter((c) => c.id !== itm.id);
    setCart(newArray);
    toast.error("Item Removed", {
      style: {
        background: "#FECACA",
        color: "red"
      }
    });
  };


  return (
    <div className="px-5">
      <div className=" border-2 border-gray-200 rounded-lg space-y-3 p-5 mb-10 mt-5 ">
        <div>
              <h2 className="font-bold text-[24px] mb-3 text-gray-500">Your Cart</h2>
            </div>
{cart.length === 0 ? (
  <EmptyCart></EmptyCart>
) : (
            <>
        {cart.map((item, index) => (
          <div key={index} className="bg-[#F9FAFC] p-5 flex justify-between rounded-xl">
            <div className="flex gap-3">
              <div>
                <img className="w-10 h-10 border-1 border-gray-300 rounded-full" src={item.icon} alt="" />
              </div>
              <div>
                <p>{item.name}</p>
                <p> {item.price} </p>
              </div>
            </div>
            <div>
              <button onClick={() => removeItem(item)} className="btn rounded-full border border-red-400 text-red-500 hover:bg-red-100">
                {" "}
                Remove{" "}
              </button>
            </div>
          </div>
        ))}
       
        <div className="flex justify-between">
          <p className="text-[18px] font-semibold text-gray-500">Total:</p>
          <p className="text-[19px] font-semibold   text-green-500"> ${total} </p>
        </div>
        <button onClick={deleteAll} className="btn rounded-full w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white hover:from-[#3b2dd4] hover:to-[#7e12d8]">
          {" "}
          Proced to Checkout
        </button>
        </>
        )}
      </div>
    </div>
  );
}

export default Carts;
