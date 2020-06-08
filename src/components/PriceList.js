import React from "react";
// import "../styles/PriceList.scss";

const PriceList = ({ prices }) => {
  const priceListRows = prices.map((item, index) => (
    <tr key={index}>
      <td>{item.name}</td>
      <td>{`${item.price} zł`}</td>
    </tr>
  ));
  return (
    <table>
      <tbody>{priceListRows}</tbody>
    </table>
  );
};
export default PriceList;
