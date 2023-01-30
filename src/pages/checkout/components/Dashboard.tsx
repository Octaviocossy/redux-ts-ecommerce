import { useCartSelector } from '../../../redux/selectors';

const Dashboard = () => {
  const { products } = useCartSelector();

  return (
    <div>
      <h2>dashboard</h2>
      <p>Cantidad Productos: {0}</p>
      <p>Total: {0}</p>
    </div>
  );
};

export default Dashboard;
