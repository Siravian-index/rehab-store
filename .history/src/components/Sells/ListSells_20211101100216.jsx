const ListSells = ({ sellData }) => {
  return (
    <div>
      <h3>The last sells are: </h3>
      {sellData.map((item) => {
        return <SingleSell></SingleSell>;
      })}
    </div>
  );
};

export default ListSells;
