const AllToysRow = ({toy , index}) => {
    const {toyName,sellerName,subCategory,price,availableQuantity,} = toy
    // console.log(toy);
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{sellerName}</td>
      <td>{toyName}</td>
      <td>{subCategory}</td>
      <td>{price}</td>
      <td>{availableQuantity}</td>
      <td>Show Details</td>
    </tr>
  );
};

export default AllToysRow;
