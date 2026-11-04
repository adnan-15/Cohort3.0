import React from "react";

const App = () => {
  const [products, setProducts] = useState(null);
  const [page, setPage] = useState(0)
  const limit = 10;
  console.log(products);

  

  return <div className="flex flex-col gap-6 items-center">
    <div className="">
      {
      products?.products.map((val)=>(
        <ProductCard key={val.id} product={val}/>
      ))
    }
    </div>
    <div className="flex gap-5 items-center">
      <button
        disabled={page===0}
        onClick={()=>setPage(page-1)}
       className="p-3 bg-red-700 text-white">
        Prev
      </button>
      <p>page {page+1} of {total}</p>
      <button 
      disabled={page >= total-1}
      onClick={()=>setPage(page+1)}
      className="p-3 bg-red-700 text-white">Next</button>
    </div>
    </div>;
};

export default App;
