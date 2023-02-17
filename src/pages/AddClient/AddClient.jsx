import { useState, useRef, useEffect } from "react"

function AddClient(props) {
  const[formData, setFormData] = useState({
    name: "",
    email:"",
  })
  
  const [validForm, setValidForm] = useState(false)
  
  const formElement = useRef()
  
  
	const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
	}
  
    useEffect(() => {
      formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
    }, [formData])
    

	return (
		<>
			<h1>Add Client</h1>
			<form autoComplete="off" ref={formElement}>
				<div className="form-group mb-3">
					<label htmlFor="name-input" className="form-label">
						Name
					</label>
					<input 
						type="text"
						className="form-control"
						id="name-input"
						name="name"
            value={formData.name}
            onChange={handleChange}
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
            value={formData.email}
            onChange={handleChange}
						required
					/>
				</div>
				<div className="d-grid">
					<button
						type="submit"
						className="btn btn-primary btn-fluid"
            disabled={!validForm}
					>
						Add Client
					</button>
				</div>
			</form>
		</>
	)
}

export default AddClient