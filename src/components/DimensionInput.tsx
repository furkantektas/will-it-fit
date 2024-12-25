import React from 'react';

interface DimensionInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
}

export const DimensionInput: React.FC<DimensionInputProps> = ({ label, value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    if (!isNaN(newValue)) {
      onChange(Math.max(0.01, Number(newValue.toFixed(2))));
    }
  };

  return (
    <div className="flex-1">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <div className="relative">
        <input
          type="number"
          inputMode="decimal"
          value={value}
          onChange={handleChange}
          className="px-3 py-2 w-full rounded-lg border border-gray-300"
          min="0.01"
          step="0.01"
          style={{
            appearance: 'textfield',
            MozAppearance: 'textfield',
            WebkitAppearance: 'textfield',
          }}
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
          cm
        </span>
      </div>
    </div>
  );
}