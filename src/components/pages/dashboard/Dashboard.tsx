import PopularProductList from '../../product/popular-product';
import ProductList from '../../product';

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-3">
      <PopularProductList />
      <ProductList />
    </div>
  );
};

export default Dashboard;
