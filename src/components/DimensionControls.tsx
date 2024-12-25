import React from 'react';
import { DimensionInput } from './DimensionInput';

interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

interface DimensionControlsProps {
  dimensions: Dimensions;
  onChange: (dimensions: Dimensions) => void;
}

export const DimensionControls: React.FC<DimensionControlsProps> = ({ dimensions, onChange }) => {
  return (
    <div className="flex gap-4">
      <DimensionInput
        label="Width"
        value={dimensions.width}
        onChange={(width) => onChange({ ...dimensions, width })}
      />
      <DimensionInput
        label="Height"
        value={dimensions.height}
        onChange={(height) => onChange({ ...dimensions, height })}
      />
      <DimensionInput
        label="Depth"
        value={dimensions.depth}
        onChange={(depth) => onChange({ ...dimensions, depth })}
      />
    </div>
  );
}