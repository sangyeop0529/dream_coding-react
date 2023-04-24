import React, { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);

  const handleChange = () => setChecked((prev) => !prev);

  useEffect(() => {
    fetch(`data/${checked ? "sale_" : ""}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("데이터를 네트워크에서 받아옴");
        setProducts(data);
      });
    return () => {
      console.log("데이터를 지움");
    };
  }, [checked]);

  return (
    <>
      <input
        type="checkbox"
        name="checkbox"
        id="checkbox"
        value={checked}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">Show Only Sale</label>
      <ul>
        {products.map((item, index) => (
          <li key={index}>
            <article>
              <h3>{item.name}</h3>
              <p>{item.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
