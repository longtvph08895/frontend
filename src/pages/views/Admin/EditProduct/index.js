import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { useForm } from "react-hook-form";
import { useParams, useHistory } from 'react-router-dom';


const EditProduct = ({ products, onUpdate }) => {
    const { register, handleSubmit, errors } = useForm();
    let { id } = useParams();
    let history = useHistory();
    const product = products.find(product => product.id === id);
    const onHandleSubmit = (data) => {
        const newData = {
            id,
            ...data,
        }
        onUpdate(newData)
        // console.log(newData)
        history.push('/admin/products')
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit(onHandleSubmit)} className="w-50">
                <div className="form-group">
                    <label htmlFor="productName">Tên sản phẩm</label>
                    <input id="name" type="text" name="name" placeholder="Nhập tên "
                        className="form-control"
                        defaultValue={product.name}
                        ref={register({ required: true, minLength: 4 })} />
                    {errors.name && errors.name.type === "required" && (
                        <div style={{ color: 'red' }}>Tên không được để trống </div>)}
                    {errors.name && errors.name.type === "minLength" && (
                        <div style={{ color: 'red' }}>Ít nhất 4 ký tự </div>)}
                </div>
                <div className="form-group">
                    <label htmlFor="productName">Gia sản phẩm</label>
                    <input id="price" type="text" name="price" placeholder="Nhập gia "
                        className="form-control"
                        defaultValue={product.price}
                        ref={register({ required: true })} />
                    {errors.name && errors.name.type === "required" && (
                        <div style={{ color: 'red' }}>Gia không được để trống </div>)}
                </div>
                <button className="btn btn-primary">Cập nhật</button>
            </form>
        </div>
    )
}

EditProduct.propTypes = {
    products: PropTypes.array
}

export default EditProduct