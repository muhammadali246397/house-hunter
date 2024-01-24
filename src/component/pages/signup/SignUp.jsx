
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        
       const {name,role,password,number,email}=data
       const userInfo = {name, role, password, number, email}
       const response = axios.post('https://house-hunter-server-ecru.vercel.app/saveInfo',userInfo,{
        headers:{
            'Content-Type':'application/json'
        }
       })
       .then(response => {
        console.log(response)
        if(response?.data.acknowledged){
            Swal.fire({
                title: 'Success!',
                text: 'Do you want to continue',
                icon: 'success',
                confirmButtonText: 'ok'
              })
        }else{
            Swal.fire({
                title: 'Error!',
                text: `${response.data}`,
                icon: 'error',
                confirmButtonText: 'ok'
              })

        }
       }).catch(error => {
       
       })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className=" lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-1/2 shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className='flex justify-between'>
                                <div className="form-control w-2/5">
                                    <label className="label font-semibold">
                                        <span className="label-text">Full Name</span>
                                    </label>
                                    <input type="text" placeholder="Full Name..." className="input input-bordered" {...register("name", { required: true, maxLength: 80 })} />
                                </div>

                                <div className="form-control w-2/5">
                                    <label className="label font-semibold">
                                        <span className="label-text">Role</span>
                                    </label>
                                    <select className="input input-bordered" {...register("role", { required: true })}>
                                        <option value="House Owner">House Owner</option>
                                        <option value="House Renter">House Renter</option>

                                    </select>
                                </div>
                            </div>

                            <div className='flex justify-between'>
                                <div className="w-2/5 form-control">
                                    <label className="label font-semibold">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="Email..." className="input input-bordered" {...register("email", { required: true, maxLength: 80 })} />

                                </div>
                                <div className="w-2/5 form-control">
                                    <label className="label font-semibold">
                                        <span className="label-text">Contact Number</span>
                                    </label>
                                    <input type="text" placeholder="Phone Number..." className="input input-bordered" {...register("number", { required: true, maxLength: 80 })} />
                                </div>
                            </div>

                            <div className="form-control">
                                <label className="label font-semibold">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Password..." className="input input-bordered" {...register("password", { required: true, maxLength: 80 })} />
                            </div>
                            <div className="form-control mt-6">
                                <input className='btn btn-primary' type="submit" value='SignUp' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;