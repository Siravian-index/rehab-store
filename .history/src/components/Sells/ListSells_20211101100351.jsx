const ListSells = ({ sellData }) => {
  return (
    <div>
      <h3>The last sells are: </h3>
      <ul>
        {sellData.map((item) => {
          return <SingleSell item={item} key={item.id}></SingleSell>;
        })}
      </ul>
    </div>
  );
};

export default ListSells;
