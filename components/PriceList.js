import React from "react";

const PriceList = ({ types }) => {
  const priceListRows = types.map((item, index) => (
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
