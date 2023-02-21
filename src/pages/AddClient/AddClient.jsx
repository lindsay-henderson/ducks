import { useState } from "react"

function AddPuppy(props) {
	return (
		<>
			<h1>Add Client</h1>
			<form autoComplete="off">
				<div className="form-group mb-3">
					<label htmlFor="name-input" className="form-label">
						Client's Name (required)
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
					<label htmlFor="breed-input" className="form-label">
						Client's Breed (required)
					</label>
					<input 
						type="text"
						className="form-control"
						id="breed-input"
						name="breed"
						required
					/>
				</div>
				<div className="form-group mb-4">
					<label htmlFor="age-input" className="form-label">
						Client's Age
					</label>
					<input 
						type="number"
						className="form-control"
						id="age-input"
						name="age"
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

export default AddPuppy