import { useCartSelector } from '../../redux/selectors';

const Checkout = () => {
  const { products } = useCartSelector();

  return (
    <div className="flex">
      <div className="flex-1">
        {products.map((item) => (
          <p key={item.product.id}>{item.product.name}</p>
        ))}
      </div>
      <div>
        <h2>dashboard</h2>
        <p>Cantidad Productos: {0}</p>
        <p>Total: {0}</p>
      </div>
    </div>
  );
};

export default Checkout;
