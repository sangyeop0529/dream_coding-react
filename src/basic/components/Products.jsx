import React, { useState } from "react";
import useProducts from "../../hooks/use-products";

export default function Products() {
  const [checked, setChecked] = useState(false);
  const [loading, error, products] = useProducts({ salesOnly: checked });

  const handleChange = () => setChecked((prev) => !prev);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

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
