import React from 'react';
import { SketchPicker } from 'react-color';
import { useSnapshot } from 'valtio';

import state from '../store';

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3" >
      <SketchPicker 
        color={snap.color}
        disableAlpha
        presetColors={[
          '#FF5733', '#33FF57 ','#3357FF', '#FF33A1','#FFDB33', '#33FFF7',
          '#A133FF', '#FF9633','#33FF99', '#FF3333','#3380FF', '#FF8C33'
        ]}
        onChange={(color) => state.color = color.hex }
      />
    </div>
  )
}

export default ColorPicker
