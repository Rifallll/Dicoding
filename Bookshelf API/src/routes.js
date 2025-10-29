const {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
} = require('./handler');

const routes = [
  // Kriteria 3: Menyimpan Buku
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  // Kriteria 4: Menampilkan Seluruh Buku (Termasuk Query Opsional)
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  // Kriteria 5: Menampilkan Detail Buku
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookByIdHandler,
  },
  // Kriteria 6: Mengubah Data Buku
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBookByIdHandler,
  },
  // Kriteria 7: Menghapus Buku
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;