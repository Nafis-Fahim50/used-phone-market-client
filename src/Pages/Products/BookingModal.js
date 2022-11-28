import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const BookingModal = ({productData, setProductData}) => {
    const {user} = useContext(AuthContext);
    const {model,resalePrice, img} = productData;

    const handleBooking = event =>{
        event.preventDefault();
        const form = event.target;
        const customerName = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const location = form.location.value;

        const booking = {
            customer: customerName,
            email,
            model,
            price: resalePrice,
            phone,
            img,
            location
        }

        fetch('https://used-phone-market-server.vercel.app/bookings',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.acknowledged){
                toast.success('Succssfully booked your order');
                setProductData(null)
            }
        })

    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h1 className='text-2xl font-bold'>Confirm Your Order.</h1>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input name='name' defaultValue={user?.displayName} disabled type="text" placeholder="Full Name" className="input input-bordered  input-md  w-full max-w-full" />

                        <input name='email' defaultValue={user?.email} disabled type="email" placeholder="Email Address" className="input input-bordered  input-md  w-full max-w-full" />

                        <input type="text" value={model} placeholder="Type here" disabled className="input bg-gray-200 input-md  w-full max-w-full" />
                        
                        <input type="text" value={resalePrice} placeholder="Type here" disabled className="input bg-gray-200 input-md  w-full max-w-full" />
                        
                        <input name='phone' type="text" placeholder="Enter Phone Number" required className="input input-bordered  input-md  w-full max-w-full" />

                        <input name='location' type="text" placeholder="Enter Meeting Location" required className="input input-bordered  input-md  w-full max-w-full" />

                        <input className='btn btn-primary w-full' type="submit" value="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;