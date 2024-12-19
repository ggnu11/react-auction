import PopularProductList from '../../product/popular-product';
import ProductList from '../../product';

const Dashboard = () => {
  return (
    <div className="flex flex-col">
      <div>
        <PopularProductList />
      </div>
      <div>
        <ProductList />
      </div>
    </div>
  );
};

export default Dashboard;
