Tentu, ini adalah file `README.md` lengkap berdasarkan konten yang Anda berikan.

-----

```markdown
# 🧪 Asesmen: Menulis Kode Pengujian Secara Menyeluruh (Full Coverage Testing)

## 📖 Deskripsi
Tugas ini bertujuan untuk menguji pemahaman Anda tentang **pengujian unit (unit testing)** di JavaScript menggunakan modul bawaan **`node:test`** dan **`node:assert`**.  
Anda diminta untuk menulis kode pengujian dengan cakupan penuh (*full coverage*) terhadap fungsi `sum` yang sudah disediakan.

---

## 📂 Struktur Proyek
```

final-assessment/
├── optional-06-full-coverage-testing/
│   ├── index.js
│   ├── index.test.js
│   ├── package.json
│   └── README.md

````

---

## ⚙️ Tujuan Pembelajaran
1. Memahami dasar penggunaan `node:test` dan `node:assert` tanpa library eksternal seperti Jest atau Mocha.  
2. Mampu membuat skenario uji yang mencakup seluruh percabangan logika dalam fungsi.  
3. Mampu menjalankan dan membaca hasil pengujian melalui terminal.  

---

## 🧩 Kode yang Diuji (`index.js`)
```javascript
// Jangan ubah kode di berkas ini.

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 0;
  }

  if (a < 0 || b < 0) {
    return 0;
  }

  return a + b;
}

export default sum;
````

-----

## 🧠 Analisis Fungsi

Fungsi `sum` memiliki **tiga jalur logika utama**:

1.  Jika salah satu argumen **bukan number** → mengembalikan `0`.
2.  Jika salah satu argumen **negatif** → mengembalikan `0`.
3.  Jika kedua argumen **valid dan positif** → mengembalikan hasil penjumlahan.

Artinya, kita perlu membuat **uji kasus (test case)** yang mencakup semua skenario tersebut agar mencapai *full coverage*.

-----

## 🧪 Langkah Pengerjaan

### 1️⃣. Buka file `index.js`

Pelajari fungsi `sum` dan pahami kondisi logikanya.

### 2️⃣. Buka file `index.test.js`

Tulis kode pengujian dengan `node:test` dan `node:assert`.  
Contoh implementasi:

```javascript
import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('Harus mengembalikan hasil penjumlahan jika dua angka valid', () => {
  assert.strictEqual(sum(5, 7), 12);
});

test('Harus mengembalikan 0 jika salah satu argumen bukan number', () => {
  assert.strictEqual(sum('5', 7), 0);
  assert.strictEqual(sum(5, '7'), 0);
  assert.strictEqual(sum('a', 'b'), 0);
});

test('Harus mengembalikan 0 jika salah satu angka negatif', () => {
  assert.strictEqual(sum(-1, 3), 0);
  assert.strictEqual(sum(4, -2), 0);
  assert.strictEqual(sum(-5, -5), 0);
});

test('Harus mengembalikan 0 jika salah satu argumen undefined', () => {
  assert.strictEqual(sum(undefined, 5), 0);
  assert.strictEqual(sum(10, undefined), 0);
});
```

-----

## ▶️ Cara Menjalankan Pengujian

### 1️⃣. Pastikan Anda berada di folder yang benar

Masuk ke direktori asesmen:

```bash
cd C:\Users\ASUS\Downloads\final-assessment\optional-06-full-coverage-testing
```

### 2️⃣. Jalankan pengujian

Gunakan perintah berikut di terminal:

```bash
node --test
```

atau jika di `package.json` sudah ada script:

```bash
npm test
```

-----

## ✅ Hasil yang Diharapkan

Jika semua skenario sudah diuji dengan benar, output di terminal akan menampilkan bahwa **semua test case berhasil (passed)** tanpa error, contohnya:

```
TAP version 13
# Harus mengembalikan hasil penjumlahan jika dua angka valid
# Harus mengembalikan 0 jika salah satu argumen bukan number
# Harus mengembalikan 0 jika salah satu angka negatif
# Harus mengembalikan 0 jika salah satu argumen undefined
ok 4 test cases passed
```

-----

## 🏁 Kesimpulan

Dengan menyelesaikan asesmen ini, Anda telah mempraktikkan:

  - Penulisan pengujian unit menggunakan `node:test`.
  - Penggunaan `assert` untuk validasi hasil.
  - Pembuatan skenario pengujian menyeluruh untuk mencapai **full coverage**.

-----

✍️ **Catatan:** Pastikan tidak mengubah isi file `index.js` dan `package.json`, karena perubahan pada kode utama dapat menggagalkan penilaian otomatis.

```
```
