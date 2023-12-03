const Product = ({ params, searchParams }) => {
  console.log(searchParams);
  return (
    <div className="text-2xl mx-auto">
      Product {params.id} <br />
      Search by : {searchParams.category}
    </div>
  );
};

export default Product;
