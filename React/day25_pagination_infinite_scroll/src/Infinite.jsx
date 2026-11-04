import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import { getAllProducts } from "./api/productApi";
import ProductCard from "../src/components/ProductCard"

const Infinite = () => {
  let limit = 10
  let {data, isPending , fetchNextPage,hasNextPage,isFetchingNextPage} = useInfiniteQuery({
    queryKey:["products"],
    queryFn:({pageParam})=>getAllProducts(limit,pageParam),
    initialPageParam:0,
    getNextPageParam:(lastPage, pages)=>{
      let loadedData = pages.length * limit;
      if(loadedData<lastPage.total) return loadedData
      return undefined;
    }
  })

  if(isPending) return "Loading..."

  let allProducts = data?.pages?.flatMap(val=>val.products )??[]
  console.log(allProducts);
  
  return (
    <div className="flex flex-col gap-6 items-center">
      <div className="grid w-full p-4 grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" >
        {
          allProducts.map((val)=>(
            <ProductCard key={val.id} product={val}/>
          ))
        }
      </div>
      {
        hasNextPage && <button className="p-5 bg-danger" onClick={()=>fetchNextPage()}>
          {isFetchingNextPage?"Loading...":"Load More"}
        </button>
      }
    </div>
  );
};

export default Infinite;
