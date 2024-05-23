import React from 'react';

function InputBox({
  label,
  amount,
  currencyOptions,
  onCurrencyChange,
  onAmountChange,
  selectCurrency,
  amountDisable = false,
}) {
  return (
    <div className="flex flex-col">
      <label className="mb-2 text-gray-700 font-semibold">{label}</label>
      <div className="flex items-center space-x-3">
        <input
          type="number"
          value={amount}
          onChange={(e) => onAmountChange(parseFloat(e.target.value))}
          className="w-2/3 p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
          disabled={amountDisable}
        />
        <select
          value={selectCurrency}
          onChange={(e) => onCurrencyChange(e.target.value)}
          className="w-1/3 p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
