import React, { useState, useEffect } from "react";
import axios from "axios";
import '../../dist/orderhistory.css';
import ReviewForm from "./ReviewForm";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OrderHistoryTab = () => {
    const [visibleOrders, setVisibleOrders] = useState(8);
    const [orders, setOrders] = useState([]);
    const ordersPerPage = 10;

    useEffect(() => {
        const user_id = sessionStorage.getItem('user_id');

        if (user_id) {
            axios.get('http://127.0.0.1:8000/api/payment/history', {
                params: { user_id: user_id }
            })
            .then(response => {
                console.log('Orders Data:', response.data); // Debugging data
                setOrders(response.data);
            })
            .catch(error => {
                console.error('Error fetching orders:', error);
            });
        }
    }, []);

    const handleLoadMore = () => {
        setVisibleOrders((prevVisibleOrders) => prevVisibleOrders + ordersPerPage);
    };

    const handleReviewSubmit = (orderId, rating, photo, description) => {
        const user_id = sessionStorage.getItem('user_id');
        const order = orders.find(order => order.order_id === orderId);
        const product_id = order?.items[0]?.product_id;

        if (!product_id) {
            toast.error('ID produk tidak valid.');
            return;
        }

        const formData = new FormData();
        formData.append('user_id', user_id);
        formData.append('product_id', product_id);
        formData.append('rating', rating);
        formData.append('comment', description);
        if (photo) {
            formData.append('photo', photo);
        }

        axios.post('http://127.0.0.1:8000/api/reviews', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            toast.success('Review berhasil dikirim!');
        })
        .catch(error => {
            if (error.response && error.response.status === 422) {
                const validationErrors = error.response.data.errors;
                let errorMessage = 'Gagal mengirim review: ';
                for (const key in validationErrors) {
                    errorMessage += `${validationErrors[key].join(' ')} `;
                }
                toast.error(errorMessage);
            } else {
                toast.error('Gagal mengirim review');
            }
        });
    };

    const formatRupiah = (number) => {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col table-responsive">
                        <table className="table table-striped table-borderless">
                            <thead>
                                <tr>
                                    <th scope="col">Tanggal Pesanan</th>
                                    <th scope="col" className="order-number-column">Nomor Pesanan</th>
                                    <th scope="col">Item</th>
                                    <th scope="col">Kuantitas</th>
                                    <th scope="col">Total</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Review</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.slice(0, Math.min(visibleOrders, orders.length)).map((order) => (
                                    <tr key={order.order_id}>
                                        <td>{new Date(order.created_at).toLocaleDateString()}</td>
                                        <td className="order-number-column">{order.order_id}</td>
                                        <td>
                                            <ul>
                                                {order.items && order.items.map((item) => (
                                                    <li key={item.product_id}>
                                                        {item.name || "Nama produk tidak tersedia"}
                                                    </li>
                                                ))}     
                                            </ul>
                                        </td>
                                        <td>
                                            <ul>
                                                {order.items && order.items.map((item) => (
                                                    <li key={item.product_id}>
                                                        {item.quantity}
                                                    </li>
                                                ))}
                                            </ul>
                                        </td>
                                        <td>
                                            {typeof order.price === 'number' 
                                                ? formatRupiah(order.price) 
                                                : !isNaN(Number(order.price)) 
                                                    ? formatRupiah(Number(order.price))
                                                    : 'N/A'}
                                        </td>
                                        <td>
                                            <span className={`status ${order.status}`}>
                                                {order.status}
                                            </span>
                                        </td>
                                        <td>
                                            {order.status === 'success' && (
                                                <ReviewForm orderId={order.order_id} onSubmit={handleReviewSubmit} />
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row">
                    {orders.length > visibleOrders && (
                        <div className="col-12">
                            <button type="button" onClick={handleLoadMore} className="btn btn-secondary">
                                Muat Lebih Banyak
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default OrderHistoryTab;
