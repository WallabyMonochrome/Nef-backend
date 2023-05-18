import {_computeNefturianId} from "../../src/nft/controller";
describe('_computeNefturianId', () => {
  test('should return a number', () => {
    const result = _computeNefturianId('0xF62C3c7c7d87aF1F3eAc7070E0eB9c7bd512Ce20');
    expect(typeof result).toBe('number');
  });

  test('should return a number in range 1 - 1240', () => {
    const result = _computeNefturianId('0xF62C3c7c7d87aF1F3eAc7070E0eB9c7bd512Ce20');
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(1240);
  });
});
