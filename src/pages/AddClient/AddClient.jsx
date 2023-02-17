import { useState } from "react"

function AddClient(props) {
	return (
		<>
			<h1>Add Client</h1>
			<form autoComplete="off">
				<div className="form-group mb-3">
					<label htmlFor="name-input" className="form-label">
						Name
					</label>
					<input 
						type="text"
						className="form-control"
						id="name-input"
						name="name"
						required
					/>
				</div>
				<div className="form-group mb-3">
					<label htmlFor="email-input" className="form-label">
						Email
					</label>
					<input 
						type="text"
						className="form-control"
						id="email-input"
						name="email"
						required
					/>
				</div>
				<div className="d-grid">
					<button
						type="submit"
						className="btn btn-primary btn-fluid"
					>
						Add Client
					</button>
				</div>
			</form>
		</>
	)
}

export default AddClient