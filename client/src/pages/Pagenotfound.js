import React from 'react'
import Layout from './../components/Layout/Layout';
import { Link } from 'react-router-dom';
const Pagenotfound = () => {
	return (
		<Layout>
			<div className='pnf'>
				<h1>404</h1>
				<h2>Oops ! Page not Found </h2>
				<Link to="/" className="pnf-btn">Go Back</Link>
			</div>
		</Layout>
	)
}

export default Pagenotfound