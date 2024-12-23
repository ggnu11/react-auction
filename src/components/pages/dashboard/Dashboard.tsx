import PopularProductList from '../../product/popular-product';
import ProductList from '../../product';

const Dashboard = () => {
  return (
    <div className="flex flex-col">
      <PopularProductList />
      <ProductList />
    </div>
  );
};

export default Dashboard;
