import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import firebase from '../../../../firebase'

const Addproduct = ({ onAdd }) => {
    const { register, handleSubmit, errors } = useForm();
    let history = useHistory();
    const imageArr = [];
    const onHandleSubmit = (data) => {
        // console.log(data.image[0]);
        let files = data.gallery;
        for (let file of files) {
            // tạo reference chứa ảnh trên firesbase
            let storageRef = firebase.storage().ref(`images/${file.name}`);
            // đẩy ảnh lên đường dẫn trên
            storageRef.put(file).then(function () {
                storageRef.getDownloadURL().then((url) => {
                    // console.log(url);
                    // Tạo object mới chứa toàn bộ thông tin từ input
                    imageArr.push(url)
                })
            });
        }
        setTimeout(()=>{
            // console.log(imageArr)
            const newData = {
                id: Math.random().toString(36).substr(2, 9),
                ...data,
                gallery: imageArr
            }
             console.log(newData);
            // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
            //onAdd(newData)
            //history.push('/admin/products')
        },1000)

    }

    return (
        <div className="card-body">
            <form onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="form-group">
                    <label htmlFor="inputProductName">Ten san pham</label>
                    <input type="text" className="form-control col-md-6" name="name" id="inputProductName" ref={register({ required: true, minLength: 5 })} />
                    {errors.name && errors.name.type === "required" && <span>Yeu cau ko de trong</span>}
                    {errors.name && errors.name.type === "minLength" && <span>it nhat nhap 5 ky tu</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="inputProductImage">Anh san pham</label>
                    <input type="file" className="form-control col-md-6" name="gallery" multiple id="inputProductImage" ref={register({ required: true })} />
                </div>
                <div className="form-group">
                    <label htmlFor="inputProductPrice">Gia san pham</label>
                    <input type="text" className="form-control col-md-6" name="price" id="inputProductPrice" ref={register({ required: true })} />
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>
    )
}

export default Addproduct
