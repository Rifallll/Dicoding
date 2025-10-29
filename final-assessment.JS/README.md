# 🎓 Final Assessment - JavaScript

Repositori ini berisi kumpulan tugas akhir JavaScript yang mencakup berbagai konsep penting seperti **Object-Oriented Programming (OOP)**, **Rekursi**, dan **Full Coverage Testing**.  
Setiap bagian berada pada folder terpisah sesuai topiknya.

---

## 📦 Struktur Proyek

```
final-assessment/
│
├── 01-writing-comments/
├── 02-code-style/
├── 03-writing-test/
├── optional-04-oop/
├── optional-05-recursive/
├── optional-06-full-coverage-testing/
└── optional-07-real-world-scenario/
```

---

## 🧱 Object-Oriented Programming (OOP)

### 📘 Deskripsi

Pada bagian ini, Anda diminta membuat **Sistem Manajemen Inventaris Barang** menggunakan konsep **Class** di JavaScript.  
Program harus mampu:

- Menambah barang ke dalam inventaris  
- Menghapus barang dari inventaris  
- Memperbarui data barang  
- Menampilkan seluruh daftar barang

### 💡 Contoh Output

```
Initial Inventory:
ID: 1, Name: Laptop, Quantity: 10, Price: 1000
ID: 2, Name: Mouse, Quantity: 50, Price: 20

Inventory after update:
ID: 1, Name: Laptop, Quantity: 8, Price: 950
ID: 2, Name: Mouse, Quantity: 50, Price: 20

Inventory after removal:
ID: 1, Name: Laptop, Quantity: 8, Price: 950
```

---

## 🧩 Recursive – Faktorial & Fibonacci

### 📘 Deskripsi

Anda harus membuat dua fungsi rekursif:

- `factorial(n)` → Menghitung faktorial dari bilangan `n`.
- `fibonacci(n)` → Menghasilkan deret Fibonacci hingga elemen ke-`n`.

### 💡 Contoh Output

```
Faktorial dari 5 adalah 120
Deret Fibonacci hingga elemen 10 adalah:
[0]
[0, 1]
[0, 1, 1]
[0, 1, 1, 2]
[0, 1, 1, 2, 3]
[0, 1, 1, 2, 3, 5]
[0, 1, 1, 2, 3, 5, 8]
[0, 1, 1, 2, 3, 5, 8, 13]
[0, 1, 1, 2, 3, 5, 8, 13, 21]
[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
```

---

## 🧪 Full Coverage Testing

### 📘 Deskripsi

Bagian ini bertujuan untuk menguji kemampuan Anda dalam menulis **pengujian unit** menggunakan modul bawaan Node.js:  
`node:test` dan `node:assert`.

Anda diminta menulis pengujian menyeluruh (*full coverage*) untuk fungsi `sum` di berkas `index.js`.

### 💻 Fungsi yang Diuji (`index.js`)

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
```

### 🧠 Tujuan Pengujian

Pastikan semua jalur logika diuji:
1. Argumen bukan angka → `0`
2. Argumen negatif → `0`
3. Argumen valid (dua angka positif) → hasil penjumlahan

### 🧰 Cara Menjalankan Pengujian

Gunakan perintah berikut di terminal:

```bash
node --test
```

### 💡 Contoh Hasil Pengujian

```
TAP version 13
# Harus mengembalikan hasil penjumlahan jika dua angka valid
# Harus mengembalikan 0 jika salah satu argumen bukan number
# Harus mengembalikan 0 jika salah satu angka negatif
ok 3 test cases passed
```

---

## 🧾 Kriteria Penilaian

| Aspek                         | Bobot |
|-------------------------------|-------|
| Kebenaran Kode                |  40%  |
| Struktur & Modularisasi       |  20%  |
| Gaya Penulisan                |  15%  |
| Pemahaman OOP & Rekursi       |  15%  |
| Pengujian & Validasi          |  10%  |

---

> ⚠️ **Catatan Penting:**  
> Pastikan seluruh folder dan file lengkap serta dapat dijalankan tanpa error sebelum mengumpulkan tugas.  
> Jangan ubah `index.js` dan `package.json` kecuali diminta secara eksplisit.

---

📚 **Dikembangkan untuk asesmen akhir JavaScript – Dicoding Academy**
