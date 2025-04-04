import React, { useState } from "react";
import "./Signup.css";

function Signup() {
  const [step, setStep] = useState(1);
  const [mobileNumber, setMobileNumber] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    pan: "",
    birthDate: "",
    agreedToTerms: false,
  });
  const [errors, setErrors] = useState({});
  const [countryCode, setCountryCode] = useState("+91");
  const [validated, setValidated] = useState(false);

  const handleMobileChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 10) {
      setMobileNumber(value);
      setErrors({ ...errors, mobile: null });
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    setErrors({ ...errors, [name]: null });
  };

  const validateMobile = () => {
    if (mobileNumber.length !== 10) {
      setErrors({ ...errors, mobile: "Please enter a valid 10-digit mobile number" });
      return false;
    }
    return true;
  };

  const continueToNextStep = () => {
    if (validateMobile()) {
      setStep(2);
    }
  };

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }
    
    // Additional validation
    let newErrors = {};
    if (formData.pan && !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.pan.toUpperCase())) {
      newErrors.pan = "Please enter a valid PAN";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Submit the form data
      console.log("Form submitted:", { 
        mobile: `${countryCode}${mobileNumber}`, 
        ...formData 
      });
      // Move to success step
      setStep(3);
    }
    
    setValidated(true);
  };

  return (
    <div className="container-fluid py-5 bg-light">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6 col-xl-5">
          <div className="card border-0 shadow-sm">
            
            {/* Card Header */}
            <div className="card-header bg-white text-center border-0 pt-4 pb-3">
              <img 
                src="/media/images/logo.svg" 
                alt="Zerodha" 
                className="img-fluid mb-4" 
                style={{ height: "40px" }}
              />
              <h2 className="fw-normal fs-4 mb-4">Open a Zerodha Account</h2>
              
              {step < 3 && (
                <div className="d-flex justify-content-center align-items-center">
                  <span className={`step-indicator ${step >= 1 ? 'active' : ''}`}>1</span>
                  <div className="step-line mx-2"></div>
                  <span className={`step-indicator ${step >= 2 ? 'active' : ''}`}>2</span>
                </div>
              )}
            </div>
            
            {/* Step 1: Mobile Number */}
            {step === 1 && (
              <div className="card-body p-4">
                <h3 className="fs-5 text-center mb-4">Enter your mobile number to get started</h3>
                
                <div className="mb-4">
                  <div className="input-group">
                    <select 
                      className="form-select country-code-select"
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      style={{ maxWidth: "100px" }}
                    >
                      <option value="+91">+91</option>
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                      <option value="+61">+61</option>
                      <option value="+65">+65</option>
                    </select>
                    <input
                      type="tel"
                      className={`form-control form-control-lg ${errors.mobile ? 'is-invalid' : ''}`}
                      placeholder="Your 10-digit mobile number"
                      value={mobileNumber}
                      onChange={handleMobileChange}
                      maxLength="10"
                    />
                    {errors.mobile && <div className="invalid-feedback">{errors.mobile}</div>}
                  </div>
                </div>
                
                <button 
                  className="btn btn-primary w-100 py-2"
                  onClick={continueToNextStep}
                  disabled={mobileNumber.length !== 10}
                >
                  Continue
                </button>
                
                <div className="text-center text-muted mt-4">
                  <p className="small mb-2">You'll receive an OTP on your mobile number</p>
                  <p className="small">By continuing, I agree to the <a href="#" className="text-decoration-none">Terms & Conditions</a></p>
                </div>
              </div>
            )}
            
            {/* Step 2: Personal Information */}
            {step === 2 && (
              <div className="card-body p-4">
                <h3 className="fs-5 text-center mb-4">Complete your profile</h3>
                
                <form 
                  onSubmit={handleSubmit}
                  className={validated ? 'was-validated' : ''}
                  noValidate
                >
                  <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">Full Name (As per PAN)</label>
                    <input
                      type="text"
                      className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                    <div className="invalid-feedback">
                      {errors.fullName || "Please provide your full name"}
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                    <div className="invalid-feedback">
                      {errors.email || "Please provide a valid email address"}
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="pan" className="form-label">PAN</label>
                    <input
                      type="text"
                      className={`form-control ${errors.pan ? 'is-invalid' : ''}`}
                      id="pan"
                      name="pan"
                      value={formData.pan}
                      onChange={handleChange}
                      placeholder="ABCDE1234F"
                      maxLength="10"
                      required
                    />
                    <div className="invalid-feedback">
                      {errors.pan || "Please provide a valid PAN"}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="birthDate" className="form-label">Date of Birth</label>
                    <input
                      type="date"
                      className={`form-control ${errors.birthDate ? 'is-invalid' : ''}`}
                      id="birthDate"
                      name="birthDate"
                      value={formData.birthDate}
                      onChange={handleChange}
                      required
                    />
                    <div className="invalid-feedback">
                      {errors.birthDate || "Please select your date of birth"}
                    </div>
                  </div>
                  
                  <div className="mb-4 form-check">
                    <input
                      type="checkbox"
                      className={`form-check-input ${errors.agreedToTerms ? 'is-invalid' : ''}`}
                      id="agreedToTerms"
                      name="agreedToTerms"
                      checked={formData.agreedToTerms}
                      onChange={handleChange}
                      required
                    />
                    <label className="form-check-label" htmlFor="agreedToTerms">
                      I agree to the <a href="#" className="text-decoration-none">Terms and Conditions</a>,{" "}
                      <a href="#" className="text-decoration-none">Policies</a> and{" "}
                      <a href="#" className="text-decoration-none">Fee Structure</a>
                    </label>
                    <div className="invalid-feedback">
                      {errors.agreedToTerms || "You must agree before submitting"}
                    </div>
                  </div>
                  
                  <button type="submit" className="btn btn-primary w-100 py-2">
                    Continue
                  </button>
                </form>
              </div>
            )}
            
            {/* Step 3: Success */}
            {step === 3 && (
              <div className="card-body p-4 text-center">
                <div className="success-checkmark mb-4">
                  <div className="check-icon">
                    <span className="icon-line line-tip"></span>
                    <span className="icon-line line-long"></span>
                  </div>
                </div>
                
                <h3 className="fs-4 mb-3">Application Received</h3>
                <p className="mb-2">Thank you for choosing Zerodha</p>
                <p className="fw-bold mb-2">{countryCode} {mobileNumber}</p>
                <p className="text-muted mb-4">Your account opening process has been initiated. You will receive updates on your mobile number and email.</p>
                
                <a href="/" className="btn btn-primary py-2 px-4">
                  Return to Home
                </a>
              </div>
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;