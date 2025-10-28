// Anda hanya boleh menggunakan module node:test dan node:assert
import { test, describe, it } from 'node:test';
import assert from 'node:assert';

// Import fungsi sum dari index.js
import sum from './index.js';

describe('Uji Fungsi sum', () => {
  // Skenario 1: Input valid (angka non-negatif)
  // Ini menguji jalur 'return a + b;'
  describe('ketika input valid (angka non-negatif)', () => {
    it('should return 3 untuk sum(1, 2)', () => {
      assert.strictEqual(sum(1, 2), 3);
    });

    it('should return 10 untuk sum(5, 5)', () => {
      assert.strictEqual(sum(5, 5), 10);
    });

    it('should handle 0 sebagai argumen pertama', () => {
      assert.strictEqual(sum(0, 5), 5);
    });

    it('should handle 0 sebagai argumen kedua', () => {
      assert.strictEqual(sum(5, 0), 5);
    });

    it('should return 0 untuk sum(0, 0)', () => {
      assert.strictEqual(sum(0, 0), 0);
    });

    it('should handle floating point numbers', () => {
      assert.strictEqual(sum(2.5, 2.5), 5);
    });
  });

  // Skenario 2: Input angka negatif
  // Ini menguji jalur 'if (a < 0 || b < 0)'
  describe('ketika input adalah angka negatif', () => {
    it('should return 0 jika argumen pertama negatif', () => {
      assert.strictEqual(sum(-1, 5), 0);
    });

    it('should return 0 jika argumen kedua negatif', () => {
      assert.strictEqual(sum(5, -1), 0);
    });

    it('should return 0 jika kedua argumen negatif', () => {
      assert.strictEqual(sum(-5, -5), 0);
    });
  });

  // Skenario 3: Input bukan angka (non-number)
  // Ini menguji jalur 'if (typeof a !== 'number' || typeof b !== 'number')'
  describe('ketika input bukan angka (non-number)', () => {
    it('should return 0 jika argumen pertama adalah string', () => {
      assert.strictEqual(sum('1', 2), 0);
    });

    it('should return 0 jika argumen kedua adalah string', () => {
      assert.strictEqual(sum(1, '2'), 0);
    });

    it('should return 0 jika kedua argumen adalah string', () => {
      assert.strictEqual(sum('1', '2'), 0);
    });

    it('should return 0 jika argumen adalah null', () => {
      assert.strictEqual(sum(null, 2), 0);
      assert.strictEqual(sum(2, null), 0);
    });

    it('should return 0 jika argumen adalah undefined', () => {
      assert.strictEqual(sum(undefined, 2), 0);
      assert.strictEqual(sum(2, undefined), 0);
    });

    it('should return 0 jika argumen adalah object', () => {
      assert.strictEqual(sum({}, 2), 0);
    });

    it('should return 0 jika argumen adalah array', () => {
      assert.strictEqual(sum(1, []), 0);
    });

    it('should return 0 jika argumen adalah boolean', () => {
      assert.strictEqual(sum(true, false), 0);
    });
  });
});