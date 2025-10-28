// Impor modul yang diperlukan dari node:test dan node:assert
import { describe, it } from 'node:test';
import assert from 'node:assert';

// Impor fungsi 'sum' yang akan diuji
// Perhatikan: ini adalah 'named import' (menggunakan {}) 
// sesuai dengan 'export { sum };' di index.js
import { sum } from './index.js';

// 'describe' mengelompokkan tes-tes terkait
describe('Uji Fungsi sum', () => {
  
  // 'it' mendefinisikan satu kasus uji spesifik
  it('should return 3 when summing 1 and 2', () => {
    const actual = sum(1, 2);
    const expected = 3;
    // 'assert.strictEqual' memeriksa apakah nilai 'actual' sama persis dengan 'expected'
    assert.strictEqual(actual, expected);
  });

  // Kasus uji tambahan untuk robustnes
  it('should correctly sum a positive and a negative number', () => {
    assert.strictEqual(sum(10, -5), 5);
  });

  it('should correctly handle zero', () => {
    assert.strictEqual(sum(7, 0), 7);
  });

  it('should correctly sum two negative numbers', () => {
    assert.strictEqual(sum(-5, -5), -10);
  });
});