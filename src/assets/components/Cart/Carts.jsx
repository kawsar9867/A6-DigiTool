function Carts({cart}) {

  console.log(cart);
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
              <button className="btn"> Remove </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carts;
