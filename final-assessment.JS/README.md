# Bookshelf API (Submission Dicoding)

Ini adalah *submission project* untuk kelas "Belajar Membuat Aplikasi Back-End untuk Pemula" dari Dicoding. Proyek ini adalah RESTful API sederhana untuk mengelola data buku (Bookshelf) yang dibangun menggunakan framework Hapi.js.

## 🚀 Deskripsi Proyek

API ini menyediakan serangkaian *endpoint* untuk melakukan operasi CRUD (Create, Read, Update, Delete) pada koleksi buku. API ini menyimpan data buku di dalam memori server (menggunakan array) selama server berjalan.

Proyek ini dibangun untuk memenuhi semua kriteria yang disyaratkan, termasuk:
* Menjalankan server di port 9000.
* Menyediakan skrip `npm run start` untuk menjalankan server.
* Menangani validasi *input* (seperti `name` yang wajib diisi dan `readPage` yang tidak boleh lebih besar dari `pageCount`).
* Memberikan format respons yang spesifik untuk setiap skenario sukses dan gagal.

## 💻 Teknologi yang Digunakan

* **Node.js**: Lingkungan eksekusi JavaScript.
* **Hapi.js (`@hapi/hapi`)**: Framework web untuk membangun API.
* **nanoid (`nanoid@3`)**: Library untuk menghasilkan ID unik (digunakan untuk `bookId`).

## 🏃‍♂️ Cara Menjalankan Proyek

Berikut adalah tata cara untuk menjalankan proyek ini di komputer Anda:

1.  Buka terminal atau Command Prompt.
2.  Masuk ke direktori utama proyek ini (folder `Bookshelf API`).
3.  Install semua *dependency* yang diperlukan (seperti Hapi dan nanoid) dengan menjalankan perintah:
    ```bash
    npm install
    ```
    *(Perintah ini akan membaca file `package.json` dan mengunduh modul yang diperlukan ke dalam folder `node_modules`).*

4.  Setelah instalasi selesai, jalankan server dengan perintah:
    ```bash
    npm run start
    ```
    *(Perintah ini akan mengeksekusi skrip `start` yang ada di `package.json`, yaitu `node src/server.js`).*

5.  Server sekarang berjalan di `http://localhost:9000` (karena `host` diatur ke `0.0.0.0` dan `port` ke `9000`). Anda siap menguji API menggunakan Postman.

## 📖 Dokumentasi API

API ini memiliki 5 *endpoint* utama:

---

### 1. Tambah Buku

Menambahkan buku baru ke dalam rak.

* **Endpoint:** `POST /books`
* **Body Request:** `application/json`
    ```json
    {
        "name": "Buku A",
        "year": 2010,
        "author": "John Doe",
        "summary": "Lorem ipsum dolor sit amet",
        "publisher": "Dicoding Indonesia",
        "pageCount": 100,
        "readPage": 25,
        "reading": false
    }
    ```
* **Respons Sukses (201 Created):**
    ```json
    {
        "status": "success",
        "message": "Buku berhasil ditambahkan",
        "data": {
            "bookId": "Qbax5Oy7L8WKf74l"
        }
    }
    ```
* **Respons Gagal (400 Bad Request):**
    * Jika `name` tidak diisi:
        ```json
        {
            "status": "fail",
            "message": "Gagal menambahkan buku. Mohon isi nama buku"
        }
        ```
    * Jika `readPage` > `pageCount`:
        ```json
        {
            "status": "fail",
            "message": "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount"
        }
        ```

---

### 2. Tampilkan Semua Buku

Mendapatkan daftar semua buku. Mendukung *query parameter* untuk filter.

* **Endpoint:** `GET /books`
* **Query Parameters (Opsional):**
    * `?name={string}`: Filter buku berdasarkan nama (case-insensitive).
    * `?reading={0 | 1}`: Filter buku yang sedang/tidak sedang dibaca.
    * `?finished={0 | 1}`: Filter buku yang sudah/belum selesai dibaca.
* **Respons Sukses (200 OK):**
    *(Hanya menampilkan `id`, `name`, dan `publisher`)*
    ```json
    {
        "status": "success",
        "data": {
            "books": [
                {
                    "id": "Qbax5Oy7L8WKf74l",
                    "name": "Buku A",
                    "publisher": "Dicoding Indonesia"
                }
            ]
        }
    }
    ```

---

### 3. Tampilkan Detail Buku

Mendapatkan detail lengkap dari sebuah buku berdasarkan ID.

* **Endpoint:** `GET /books/{bookId}`
* **Respons Sukses (200 OK):**
    *(Menampilkan semua properti buku)*
    ```json
    {
        "status": "success",
        "data": {
            "book": {
                "id": "Qbax5Oy7L8WKf74l",
                "name": "Buku A",
                "year": 2010,
                // ... properti lainnya
                "insertedAt": "2021-03-04T09:11:44.598Z",
                "updatedAt": "2021-03-04T09:11:44.598Z"
            }
        }
    }
    ```
* **Respons Gagal (404 Not Found):**
    * Jika `bookId` tidak ditemukan:
        ```json
        {
            "status": "fail",
            "message": "Buku tidak ditemukan"
        }
        ```

---

### 4. Ubah Data Buku

Memperbarui data buku yang sudah ada berdasarkan ID.

* **Endpoint:** `PUT /books/{bookId}`
* **Body Request:** `application/json`
    *(Sama seperti `POST /books`)*
    ```json
    {
        "name": "Buku A (Revisi)",
        "year": 2011,
        // ... properti lainnya
    }
    ```
* **Respons Sukses (200 OK):**
    ```json
    {
        "status": "success",
        "message": "Buku berhasil diperbarui"
    }
    ```
* **Respons Gagal (400 Bad Request):**
    * Validasi `name` dan `readPage` berlaku sama seperti saat menambah buku.
* **Respons Gagal (404 Not Found):**
    * Jika `bookId` tidak ditemukan:
        ```json
        {
            "status": "fail",
            "message": "Gagal memperbarui buku. Id tidak ditemukan"
        }
        ```

---

### 5. Hapus Buku

Menghapus buku dari rak berdasarkan ID.

* **Endpoint:** `DELETE /books/{bookId}`
* **Respons Sukses (200 OK):**
    ```json
    {
        "status": "success",
        "message": "Buku berhasil dihapus"
    }
    ```
* **Respons Gagal (404 Not Found):**
    * Jika `bookId` tidak ditemukan:
        ```json
        {
            "status": "fail",
            "message": "Buku gagal dihapus. Id tidak ditemukan"
        }
    }
    ```
