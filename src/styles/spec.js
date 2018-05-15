import { spacing } from './spacing';

describe('styles/spacing', () => {
  test('spacing returns base spacing * multiplier and a concatenated unit', () => {
    expect(spacing()).toEqual('10px');
    expect(spacing(2)).toEqual('20px');
    expect(spacing(-1)).toEqual('-10px');
    expect(spacing(1.5)).toEqual('15px');
  });
});
