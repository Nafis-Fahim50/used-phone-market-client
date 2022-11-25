import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddProducts = () => {
    const navigate = useNavigate();

    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;
        const model = form.model.value;
        const resalePrice = form.resalePrice.value;
        const condition = form.condition.value;
        const mobileNumber = form.mobileNumber.value;
        const location = form.location.value;
        const category_id = form.category_id.value;
        const description = form.description.value;
        const orginalPrice = form.orginalPrice.value;
        const purchasesYear = form.purchasesYear.value;

        const productInfo = {
            model,
            resalePrice,
            condition,
            mobileNumber,
            location,
            category_id,
            description,
            orginalPrice,
            purchasesYear
        }

        fetch('http://localhost:5000/addProducts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(productInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Succssfully booked your order');
                    navigate('/dashboard/myProducts')
                }
            })
    }
    return (
        <div>
            <h1 className='text-2xl font-bold my-5 text-green-500'>Add Products</h1>
            <form onSubmit={handleAddProduct}>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input type="text" name='model' className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Resale Price</span>
                        </label>
                        <input type="text" name='resalePrice' className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Conditon Type</span>
                        </label>
                        <input type="text" name='condition' placeholder="Excellent or Good or Fair" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Mobile Number</span>
                        </label>
                        <input type="text" name='mobileNumber' className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input type="text" name='location' className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Product Category</span>
                        </label>
                        <select name='category_id' className="select select-bordered w-full max-w-xs">
                            <option>637f2b9aef46343e5857af67</option>
                            <option>637f2b9aef46343e5857af68</option>
                            <option>637f2b9aef46343e5857af69</option>
                        </select>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" name='description' className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Orginal Price</span>
                        </label>
                        <input type="text" name='orginalPrice' className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Year of purchase</span>
                        </label>
                        <input type="text" name='purchasesYear' className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
                    <input className='btn btn-primary mt-2 w-full' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddProducts;