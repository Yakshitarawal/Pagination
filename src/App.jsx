import "./styles.css";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";

export default function App() {
  const [data, setData] = useState([]);
  const [ttlpage, setTtlpage] = useState(3);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);
  const getData = async () => {
    let res = await fetch(
      `https://reqres.in/api/users?page=${page}&&per_page=${limit}`
    );
    res = await res.json();
    console.log(res);
    setData(res.data);
    setTtlpage(res.total / limit);
  };

  const handlePagination = (e) => {
    // alert(e);
    setPage(e);
  };

  useEffect(() => {
    getData();
  }, [page, limit]);

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)"
        }}
      >
        {data.map((el) => (
          <div>
            <img src={el.avatar} alt="avatar" />
            <h1>{el.first_name}</h1>
          </div>
        ))}
      </div>
      <Pagination
        handlePagination={handlePagination}
        total_no_pages={ttlpage}
      />
      <select name="" id="" onChange={(e) => setLimit(e.target.value)}>
        <option value="3">3</option>
        <option value="6">6</option>
      </select>
    </>
  );
}
