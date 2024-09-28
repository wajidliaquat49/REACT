import { useEffect, useState } from "react";
import { Pagination } from "antd";
import "./App.css";
import Navbar from "./assets/navbar";

function App() {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(20);
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
      .then((res) => res.json())
      .then((res) => {
        console.log("Response=>", res);
        setProducts(res.products);
        setTotal(res.total);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [limit, skip]);

  console.log("Products Length==>", products.length);

  return (
    <div>
      {/* <h1 className="text-3xl font-bold underline">
        Pagination in React E-commerce
      </h1> */}

      <Navbar />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5 gap-5 my-10">
        {loading ? <h1 className="text-center my-2">Loading...</h1> : null}
        {products.map((data) => (
          <div
            key={data.id}
            className="border shadow flex justify-center flex-col items-center"
          >
            <img
              src={data.thumbnail}
              height={200}
              width={200}
              alt={data.title}
            />
            <div className="flex justify-between p-2 w-full">
              <h1 className="font-semibold">{data.title}</h1>
              <h1 className="font-semibold">${data.price}</h1>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          onChange={(page) => {
            setSkip((page - 1) * limit);
          }}
          onShowSizeChange={(current, pageSize) => {
            setLimit(pageSize);
            setSkip(0);
          }}
          current={skip / limit + 1}
          total={total}
          pageSize={limit}
        />
      </div>
    </div>
  );
}

export default App;
