import SingleSell from './SingleSell';

const ListSells = ({ sellData }) => {
  return (
    <div>
      <h3 className='text-center'>add a searchbar</h3>
      <h3 className='text-center my-5 font-bold'>The last sells are: </h3>
      <ul className='w-1/3 mx-auto my-3 border p-2'>
        {sellData.map((item) => {
          return <SingleSell item={item} key={item.id}></SingleSell>;
        })}
      </ul>
    </div>
  );
};

export default ListSells;
