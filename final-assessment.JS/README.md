````{"id":"30951","variant":"standard","title":"README.md – Final Assessment JavaScript"}
# 🧩 Final Assessment: JavaScript Dasar & Lanjutan

Asesmen ini merupakan **tugas akhir (final assessment)** dari modul pembelajaran JavaScript di Dicoding.  
Tujuannya adalah untuk menguji kemampuan Anda dalam menulis kode JavaScript yang mencakup **pemahaman dasar hingga konsep lanjutan** seperti OOP, modul, rekursi, dan pengujian.

---

## 🚀 Tujuan Asesmen

Proyek ini bertujuan untuk mengukur kemampuan peserta dalam:

* Menulis dan mengelola kode JavaScript dengan gaya yang konsisten.  
* Mengimplementasikan konsep **Object-Oriented Programming (OOP)**.  
* Menggunakan **modul (import/export)** dengan benar.  
* Menggunakan **rekursi (recursion)** untuk menyelesaikan permasalahan matematis.  
* Melakukan **pengujian unit (unit testing)** menggunakan `node:test` dan `node:assert`.  

---

## 🧱 Struktur Folder

Proyek final assessment ini terdiri atas beberapa bagian yang masing-masing menguji topik tertentu:

| Folder | Deskripsi |
|--------|------------|
| `01-writing-comments` | Menulis komentar satu baris dan banyak baris di JavaScript. |
| `02-consistent-style` | Menulis kode JavaScript dengan gaya penulisan konsisten. |
| `03-unit-testing` | Membuat pengujian dasar untuk fungsi sederhana. |
| `04-oop-inventory` | Membangun sistem manajemen inventaris barang dengan konsep OOP. |
| `05-recursive` | Mengimplementasikan fungsi rekursif (Faktorial dan Fibonacci). |
| `06-full-coverage-testing` | Melakukan pengujian secara menyeluruh (*full coverage testing*) menggunakan `node:test`. |

---

## 🧩 Ketentuan Umum

1. **Jangan ubah kode** yang telah disediakan di file `index.js` atau `package.json`, kecuali diminta secara eksplisit.  
2. Semua tugas harus menggunakan **fitur modern JavaScript (ES6+)**.  
3. Gunakan `export` dan `import` untuk setiap modul.  
4. Pengujian harus menggunakan **modul bawaan Node.js**, bukan library eksternal seperti Jest atau Mocha.  
5. Setiap bagian asesmen akan dijalankan secara independen.

---

## 🧭 Langkah Pengerjaan

1. Baca setiap instruksi yang ada di dalam file `README.md` pada masing-masing folder tugas.  
2. Kerjakan file yang diminta sesuai petunjuk (misal `index.js`, `index.test.js`, atau `main.js`).  
3. Jalankan kode menggunakan Node.js versi terbaru, misalnya:
   ```bash
   node main.js
   ```
   atau untuk tugas pengujian:
   ```bash
   node --test
   ```
4. Pastikan semua output sesuai dengan yang diharapkan dan tidak ada error.

---

## 🧮 Contoh Bagian dari Asesmen

### 🔹 OOP – Sistem Manajemen Inventaris Barang

Anda akan membuat dua class:
- `Item`: merepresentasikan satu barang.
- `Inventory`: mengelola daftar barang dengan method `addItem`, `removeItem`, dan `listItems`.

Contoh hasil output:
```
Initial Inventory:
ID: 1, Name: Laptop, Quantity: 10, Price: 1000
ID: 2, Name: Mouse, Quantity: 50, Price: 20
```

---

### 🔹 Recursive – Faktorial & Fibonacci

Anda harus membuat dua fungsi:
- `factorial(n)` → Menghitung faktorial secara rekursif.  
- `fibonacci(n)` → Menghasilkan deret Fibonacci hingga elemen ke-n.

Contoh output:
```
Faktorial dari 5 adalah 120
Deret Fibonacci hingga elemen 10 adalah:
[0]
[0, 1]
[0, 1, 1]
...
```

---

### 🔹 Full Coverage Testing

Gunakan `node:test` dan `node:assert` untuk menguji fungsi `sum` agar mencakup semua kemungkinan jalur logika:
```bash
node --test
```

---

## ✅ Kriteria Penilaian

| Aspek | Bobot |
|-------|--------|
| Kebenaran Kode | 40% |
| Struktur & Modularisasi | 20% |
| Gaya Penulisan | 15% |
| Pemahaman OOP & Rekursi | 15% |
| Pengujian & Validasi | 10% |

---

✍️ **Catatan:**
Pastikan seluruh folder dan file telah lengkap serta dapat dijalankan tanpa error sebelum mengumpulkan proyek final ini.
````
