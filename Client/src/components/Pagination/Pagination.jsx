import { useEffect } from "react";
import "./Pagination.css";

export function Pagination({ page, setPage, page2, setPage2, products }) {

    useEffect(() => {
        setPage(1)
    }, [products])

  return (
    <main>
      {products &&
        Array.from(
          { length: Math.ceil((products?.length) / 5) },
          (v, i) => i
        ).map((e) => {
          return <button className="buttonPag" onClick={() => setPage((e+1))}>{e+1}</button>;
        })}
    </main>
  );
}
