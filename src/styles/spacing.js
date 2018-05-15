export const base = 10;
export const unit = 'px';

export const spacing = (m = 1) => `${base * m}${unit}`;

export const gridWidth = 960;
export const gridColWidth = gridWidth / 16;
export const columns = (n = 1) => gridColWidth * n;
