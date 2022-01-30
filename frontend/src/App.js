import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Container } from "react-bootstrap";

import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import Header from "./components/header/header";

import CartScreen from "./screens/CartScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import ProductAddScreen from "./screens/ProductAddScreen";

// import ProductListScreen from "./screens/ProductListScreen";

// import Footer from "./components/Footer";

import ProductScreen from "./screens/ProductScreen";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import StoreOrdersScreen from "./screens/StoreOrdersScreen";
import AdminProductListScreen from "./screens/AdminProductListScreen";

import OrderListScreen from "./screens/OrderListScreen"
// import CartScreen from "./screens/CartScreen";
// import ProfileScreen from "./screens/ProfileScreen";
// import ShippingScreen from "./screens/ShippingScreen";
// import PaymentScreen from "./screens/PaymentScreen";
// import PlaceOrderScreen from "./screens/PlaceOrderScreen";
// import OrderScreen from "./screens/OrderScreen";
// import UserListScreen from "./screens/UserListScreen";
// import UserEditScreen from "./screens/UserEditScreen";
// import OrderListScreen from "./screens/OrderListScreen";

const App = () => {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <Header />

        <main>
          <Container>
            <Switch>
              {/* <Route exact path="/productedit" component={ProductEditScreen} /> */}
              <Route exact path="/" component={HomeScreen} />
              <Route exact path="/login" component={LoginScreen} />
              <Route exact path="/register" component={RegisterScreen} />
              <Route exact path="/cart" component={CartScreen} />
              <Route path="/addproduct" component={ProductAddScreen} />
              <Route path="/product/:productId" component={ProductScreen} />
              <Route path="/shippingaddress" component={ShippingAddressScreen} />
              <Route path="/placeorder" component={PlaceOrderScreen} />
              <Route exact path="/orderList" component={OrderListScreen} />
              <Route path="/storeOrders" component={StoreOrdersScreen} />
              <Route path="/admin/productList/:adminId/" component={AdminProductListScreen} />
              <Route path="/admin/product/:productId/edit" component={ProductEditScreen} />
            </Switch>
          </Container>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
