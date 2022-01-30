import React, { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import userAction from "../services/userAction";
import { Table, Button } from "react-bootstrap";

function StoreOrdersScreen() {
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const [orders, setOrders] = useState(undefined); 
    let adminId;

    if (userInfo && (userInfo.userrole === 'admin')){ 
        adminId = userInfo._id;
    }

    useEffect(() => {
        if(adminId){
            userAction.getStoreOrders(adminId).then(response => {
                setOrders(response.data);
            })
        }
    }, [adminId]) 

    if (!userInfo || !(userInfo.userrole === 'admin')){
        return (
            <div>Please sign in as a store manager first.</div>
        )
    } 
    else if (!orders) {
        return (
            <div>This store has no orders.</div>
        )
    }
    else {
        console.log(orders);

        return (
            <>
                <h1>Orders</h1>

                <Table striped bordered hover className="table-sm">
                    <thead>
                    <tr>
                        <th>ORDER ID</th>
                        <th>CUSTOMER</th>
                        <th>STORE SUBTOTAL</th>
                        <th>NO. OF ITEMS</th>
                        <th>STRIPE PAYMENT ID</th>

                        <th></th>
                    </tr>
                    </thead>
                    <tbody>

                    {orders.map((order) => (
                        <tr key={order._id} >
                        <td>{order._id}</td>
                        <td>{order.shipping.name}</td>
                        <td>${order.amount}</td>
                        <td>{order.items.length}</td>
                        <td>{order.payment.stripe.payment_method_id}</td>

                        <td>

                            <Button href={`#${order._id}`} variant="light" className="btn-sm">
                                Details
                            </Button>

                        </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
                <Fragment>
                {orders.map((order) => (
                    <React.Fragment key={order._id}>
                        <h2 className="my-5" id={order._id}> Order # {order._id}</h2>

                        <h4 className="mb-4"> Shipping Info</h4>
                        <p>Name: {order.shipping.name}</p>
                        <p>Address: {order.shipping.address}, {order.shipping.city}, {order.shipping.state}, {order.shipping.zipcode}</p>

                        <h4 className="mb-4"> Order Items</h4>
                        <hr/>
                        <div>
                            {order.items.map(
                            (item) => {
                                return (
                                <div key={item._id} className="row my-5">
                                    <div className="col-4 col-lg-2">
                                    <img size="small" src={item.image} alt={item.title} height="45" width="65" />
                                    </div>
                                    <div className="col-5 col-lg-5"><p>{item.title}</p></div>
                                    <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                                    <p>Price: ${item.price}</p>
                                    </div>
                                    <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                                    <p>Quantity: {item.qty}</p>
                                    </div>
                                </div>
                                )
                            })}
                        </div>

                        <h4 className="mb-4">Store Subtotal: ${order.amount}</h4>
                        <br></br>
                        <br></br>
                    </React.Fragment>  
                ))}
                </Fragment>
            </>
        )
    }
}

export default StoreOrdersScreen;