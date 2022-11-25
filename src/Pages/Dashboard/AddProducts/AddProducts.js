import React from 'react';

const AddProducts = () => {
    return (
        <div>
            <h1 className='text-2xl font-bold my-5 text-green-500'>Add Products</h1>
            <form>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input type="text"  className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Resale Price</span>
                        </label>
                        <input type="text"  className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Conditon Type</span>
                        </label>
                        <input type="text" placeholder="Excellent or Good or Fair" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Mobile Number</span>
                        </label>
                        <input type="text"  className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input type="text"  className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Product Category</span>
                        </label>
                        <select name='category' className="select select-bordered w-full max-w-xs">
                            <option>637f2b9aef46343e5857af67</option>
                            <option>637f2b9aef46343e5857af68</option>
                            <option>637f2b9aef46343e5857af69</option>
                        </select>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text"  className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Orginal Price</span>
                        </label>
                        <input type="text"  className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Year of purchase</span>
                        </label>
                        <input type="text"  className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
                <input className='btn btn-primary mt-2 w-full' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddProducts;