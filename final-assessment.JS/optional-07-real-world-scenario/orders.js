// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}


// TODO: buatlah variabel yang menampung data orders
// Kita inisialisasi sebagai array kosong
let orders = [];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  // 1. Hitung total harga menggunakan reduce
  const totalPrice = items.reduce((sum, currentItem) => {
    return sum + currentItem.price;
  }, 0);

  // 2. Buat objek pesanan baru
  const newOrder = {
    id: generateUniqueId(),
    customerName: customerName,
    items: items,
    totalPrice: totalPrice,
    status: 'Menunggu' // Status default
  };

  // 3. Tambahkan pesanan baru ke dalam array 'orders'
  orders.push(newOrder);
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  // 1. Cari pesanan berdasarkan ID menggunakan find()
  const orderToUpdate = orders.find((order) => order.id === orderId);

  // 2. Jika pesanan ditemukan, perbarui statusnya
  if (orderToUpdate) {
    orderToUpdate.status = status;
  }
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  // 1. Filter pesanan yang statusnya 'Selesai'
  const completedOrders = orders.filter((order) => order.status === 'Selesai');

  // 2. Jumlahkan 'totalPrice' dari pesanan yang sudah selesai tersebut
  const totalRevenue = completedOrders.reduce((sum, order) => {
    return sum + order.totalPrice;
  }, 0);

  return totalRevenue;
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  // 1. Gunakan filter untuk membuat array baru yang tidak berisi order dengan id yang cocok
  // 2. Tetapkan (assign) kembali variabel 'orders' ke array baru tersebut
  orders = orders.filter((order) => order.id !== id);
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };