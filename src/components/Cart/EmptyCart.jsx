import { ShoppingCart } from "lucide-react";

function EmptyCart() {
  return (
    <div>
        <div className="flex justify-center items-center">
         <ShoppingCart size={70} color="gray"></ShoppingCart>
          </div>
        <h2 className="text-center text-2xl text-gray-400">Cart Empty</h2>
        </div>
  )
}

export default EmptyCart;