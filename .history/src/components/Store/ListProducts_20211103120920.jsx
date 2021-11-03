import SingleProduct from './SingleProduct';

const ListProducts = ({ productData, setProductData }) => {
  return (
    <div>
      <h3 className='text-center'>add a searchbar</h3>
      <ul className='w-1/3 mx-auto my-3 border px-4'>
        {productData.map((item) => {
          return (
            <SingleProduct
              setSellData={setSellData}
              sellData={sellData}
              item={item}
              key={item.id}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ListProducts;
