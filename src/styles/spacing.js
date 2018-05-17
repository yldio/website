export const base = 10;
export const unit = 'px';

export const spacing = (m = 1) => `${base * m}${unit}`;

export const gridColumns = 16;
export const gridColWidth = 60;
export const gridWidth = gridColumns * gridColWidth;

export const columns = (n = 1) => gridColWidth * n;
