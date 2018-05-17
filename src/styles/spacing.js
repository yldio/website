export const base = 10;
export const unit = 'px';

export const spacing = (m = 1) => `${base * m}${unit}`;

export const gridColumns = 12;
export const gridColumnsWide = 16;
export const gridColWidth = 80;
export const gridWidth = gridColumns * gridColWidth;
export const gridWidthWide = gridColumnsWide * gridColWidth;
