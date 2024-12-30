import PopularProductList from '../../product/popular-product';
import ProductList from '../../product';
import ExchangeRate from '../../exchange/ExchangeRate';
import CategoryList from '../../product/category';

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-3">
      <PopularProductList />
      <CategoryList />
      <div className="flex gap-3">
        <ProductList />
        <ExchangeRate />
      </div>
    </div>
  );
};

export default Dashboard;
