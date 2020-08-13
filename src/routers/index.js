import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LayoutMain from '../pages/layouts/LayoutMain'
import LayoutAdmin from '../pages/layouts/LayoutAdmin'
//Admin
import Dashboard from '../pages/views/Admin/Dashboard'
import ProductsManager from '../pages/views/Admin/Products'
import Addproduct from '../pages/views/Admin/AddProduct'
import EditProduct from '../pages/views/Admin/EditProduct';
//Views
import About from '../pages/views/Main/About'
import Home from '../pages/views/Main/Home'
import Detail from '../pages/views/Main/Detail'





const Routers = ({ products, onRemove, onAdd, onUpdate}) => {
    const onHandleRemove = (id) => {
        onRemove(id)
    }
    const onHandleAdd = (product) => {
        onAdd(product)
    }
    const onHandleUpdate = (id ) => {
        onUpdate(id,)
    }
    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?/:path?" exact>
                    <LayoutAdmin>
                        <Switch>
                            <Route path='/admin' exact>
                                <Dashboard />
                            </Route>
                            <Route path='/admin/products'>
                                <ProductsManager products={products} onRemove={onHandleRemove} />
                            </Route>
                            <Route path='/admin/addproducts'>
                                <Addproduct onAdd={onHandleAdd} />
                            </Route>
                            <Route path='/admin/editproduct/:id'>
                                <EditProduct onUpdate={onHandleUpdate} products={products} />
                            </Route>
                        </Switch>
                    </LayoutAdmin>
                </Route>
                <Route>
                    <LayoutMain>
                        <Switch>
                            <Route path="/" exact>
                                <Home products={products} />
                            </Route>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path='/main/detail/:id'>
                                <Detail products={products} />
                            </Route>
                        </Switch>
                    </LayoutMain>
                </Route>
            </Switch>
        </Router>
    )
}

Routers.propTypes = {

}

export default Routers
