import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function Cart() {
  const CartItem = ({
    id,
    imgSrc,
    name,
    price,
    qty,
    decrement,
    increment,
    deletehandler,
  }) => (
    <div className="cartItem">
      <img src={imgSrc} alt="Images" />
      <article>
        <h3>{name}</h3>
        <h3>${price}</h3>
      </article>
      <div>
        <button onClick={() => decrement(id)}>-</button>
        <p>{qty}</p>
        <button onClick={() => increment(id)}>+</button>
      </div>

      <AiFillDelete onClick={() => deletehandler(id)} />
    </div>
  );

  const { CartItems,SubTotal, Total, Tax, Shipping } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const decrement = (id) => {
    dispatch({
      type: "decrement",
      payload: id,
    });

    dispatch({
      type: "calculatePrice",
    });
  };
  const increment = (id) => {
    dispatch({
      type: "addToCart",
      payload: { id },
    });

    dispatch({
      type: "calculatePrice",
    });
  };
  const deletehandler = (id) => {
    dispatch({
      type: "deleteFromCart",
      payload: id,
    });

    dispatch({
      type: "calculatePrice",
    });
  };

  return (
    <div className="cart">
      <main>
        {CartItems.length > 0 ? (
          CartItems.map((i) => (
            <CartItem
              imgSrc={i.imgSrc}
              name={i.name}
              price={i.price}
              qty={i.quantity}
              id={i.id}
              key={i.id}
              decrement={decrement}
              increment={increment}
              deletehandler={deletehandler}
            />
          ))
        ) : (
          <h1>No Items Yet...</h1>
        )}
      </main>
      <aside>
        <h2>Subtotal: ${SubTotal}</h2>
        <h2>Shipping: ${Shipping}</h2>
        <h2>Tax: ${Tax}</h2>
        <h2>Total: ${Total}</h2>
      </aside>
    </div>
  );
}

export default Cart;
