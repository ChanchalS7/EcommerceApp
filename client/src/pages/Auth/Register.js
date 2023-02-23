import React, { useState } from 'react'
import Layout from './../../components/Layout/Layout';
import { toast } from 'react-toastify';

const Register = () => {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("")

	//form function
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(name, email, password, phone, address);
		toast.success('Registered Succssfully')
	}

	return (
		<Layout title={"Register-Ecommerce App"}>

			<div className='register'>
				<h3 >Register</h3>
				<form onSubmit={handleSubmit}>
					<div className="mb-3">

						<input
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
							className="form-control"
							id="exampleInputName"
							required
							placeholder='Enter Your Name' />

					</div>
					<div className="mb-3">

						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="form-control"
							id="exampleInputEmail1"
							required
							placeholder='Enter Your Email' />

					</div>
					<div className="mb-3">

						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="form-control"
							id="exampleInputPassword1"
							required
							placeholder='Enter Your Password' />
					</div>
					<div className="mb-3">

						<input
							type="text"
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
							className="form-control"
							id="exampleInputPhone"
							required
							placeholder='Enter Your Phone' />
					</div>
					<div className="mb-3">

						<input
							type="text"
							value={address}
							onChange={(e) => setAddress(e.target.value)}
							className="form-control"
							id="exampleInputAddress"
							required
							placeholder='Enter Your Address' />
					</div>

					<button type="submit" className="btn btn-primary">Submit</button>
				</form>

			</div>
		</Layout>

	)
}

export default Register