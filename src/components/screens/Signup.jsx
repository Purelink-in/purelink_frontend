import React, { useState, useEffect } from 'react'
import './../css/form.css'
import { Helmet } from 'react-helmet';

export default function Signup() {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      password: "",
      age: "",
      gender: "",
      address: "",
      district: "",
      bloodGroup: "",
      bloodPreference: "",
      lastDonation: "",
      hasTattoo: "",
    });
  
    const [passwordError, setPasswordError] = useState(""); // For showing password error message
    const [formErrors, setFormErrors] = useState({
      name: "",
      email: "",
      phone: "",
      age: "",
    });
  
    // Validation function for each page
    const validatePage = () => {
      if (page === 0) {
        return (
          formData.name &&
          formData.email &&
          !passwordError &&
          !formErrors.name &&
          !formErrors.email &&
          !formErrors.phone
        );
      } else if (page === 1) {
        return (
          formData.age &&
          formData.gender &&
          formData.address &&
          formData.district &&
          !formErrors.age
        );
      } else if (page === 2) {
        return (
          formData.bloodGroup &&
          formData.bloodPreference &&
          formData.lastDonation &&
          formData.hasTattoo
        );
      }
      return false;
    };
    
    // Validate name
    const validateName = (name) => {
      if (name.length < 3) {
        setFormErrors((prev) => ({ ...prev, name: "Name must be at least 3 characters long" }));
      } else {
        setFormErrors((prev) => ({ ...prev, name: "" }));
      }
    };
  
      // Validate email
      const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          setFormErrors((prev) => ({ ...prev, email: "Invalid email format (e.g. name@gmail.com)" }));
        } else {
          setFormErrors((prev) => ({ ...prev, email: "" }));
        }
      };
    
      // Validate phone number
      const validatePhone = (phone) => {
        if (phone.length !== 10 || !/^\d+$/.test(phone)) {
          setFormErrors((prev) => ({ ...prev, phone: "Phone number must be 10 digits" }));
        } else {
          setFormErrors((prev) => ({ ...prev, phone: "" }));
        }
      };
  
    // Password validation function
    const validatePassword = (password) => {
      const minLength = 8;
      const hasNumber = /\d/.test(password);
      const hasLetter = /[a-zA-Z]/.test(password);
      const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
      if (password.length < minLength) {
        setPasswordError("At least 8 characters long with one number,one symbol");
      } else if (!hasNumber) {
        setPasswordError("Password must contain at least one number");
      } else if (!hasLetter) {
        setPasswordError("Password must contain at least one letter");
      } else if (!hasSymbol) {
        setPasswordError("Password must contain at least one symbol");
      } else {
        setPasswordError(""); // Reset error if password is valid
      }
    };
  
    // Validate age
    const validateAge = (age) => {
      const ageNumber = parseInt(age, 10);
      if (isNaN(ageNumber) || ageNumber < 18 || ageNumber > 60) {
        setFormErrors((prev) => ({ ...prev, age: "Age must be between 18 and 60" }));
      } else {
        setFormErrors((prev) => ({ ...prev, age: "" }));
      }
    };
  
    // Handle input change
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
  
      // Validation checks
      if (name === "password") {
        validatePassword(value);
      } else if (name === "name") {
        validateName(value);
      } else if (name === "phone") {
        validatePhone(value);
      } else if (name === "email") {
        validateEmail(value);
      } else if (name === "age") {
        validateAge(value);
      }
    };
  
    useEffect(() => {
      validatePassword(formData.password);
      validateName(formData.name);
      validatePhone(formData.phone);
      validateEmail(formData.email);
      validateAge(formData.age);
    }, [formData]); // Validate all fields when formData changes
  
    return (
      <div className="app-container">
        <Helmet>
                <title>PureLink | Register</title>
        </Helmet>

        <div id="register">
          <div className="register-left">
            <img src={require('./../assets/static/images/logo/full-logo.svg').default} alt={require('./../assets/static/images/logo/full-logo.svg').default} className="register-logo" />
            <div className="register-form-container">
              <form className="register-form">
                <div className="page-switcher">
                  <div className={page === 0 ? "page-active" : "page"}>1</div>
                  <div className={page === 1 ? "page-active" : "page"}>2</div>
                  <div className={page === 2 ? "page-active" : "page"}>3</div>
                  <div className="line"></div>
                </div>
  
                {page === 0 ? (
                  <>
                    <div className="create">Create your account</div>
                    <div className="sub">Please enter your details</div>
                    <div className="input-container">
                      <label htmlFor='name' className="input-title">Name*</label>
                      <input
                        id='name'
                        type="text"
                        name="name"
                        placeholder="Enter your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      {formErrors.name && (
                        <div className="error-message" style={{ color: "red" }}>
                          {formErrors.name}
                        </div>
                      )}
                    </div>
                    <div className="input-container">
                      <label htmlFor='email' className="input-title">Email*</label>
                      <input
                        id='email'
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {formErrors.email && (
                        <div className="error-message" style={{ color: "red" }}>
                          {formErrors.email}
                        </div>
                      )}
                    </div>
                    <div className="input-container">
                      <label htmlFor='phone' className="input-title">Phone Number</label>
                      <input
                        id='phone'
                        type="text"
                        name="phone"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      {formErrors.phone && (
                        <div className="error-message" style={{ color: "red" }}>
                          {formErrors.phone}
                        </div>
                      )}
                    </div>
                    <div className="input-container">
                      <label htmlFor='password' className="input-title">Password*</label>
                      <input
                      id='password'
                        type="password"
                        name="password"
                        placeholder="Create a password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                      {/* Error message for invalid password */}
                      {passwordError && (
                        <div className="error-message" style={{ color: "red" }}>
                          {passwordError}
                        </div>
                      )}
                    </div>
                    <button
                      className="next-button"
                      onClick={() => setPage(1)}
                      disabled={!validatePage()}
                      style={{ opacity: validatePage() ? 1 : 0.6 }}
                    >
                      Next
                    </button>
                  </>
                ) : page === 1 ? (
                  <>
                    <div className="create">Personal Information</div>
                    <div className="sub">Please enter your details</div>
                    <div className="input-container">
                      <label htmlFor='age' className="input-title">Age</label>
                      <input
                       id='age'
                        type="text"
                        name="age"
                        placeholder="Enter your Age"
                        value={formData.age}
                        onChange={handleChange}
                      />
                      {formErrors.age && (
                        <div className="error-message" style={{ color: "red" }}>
                          {formErrors.age}
                        </div>
                      )}
                    </div>
                    <div className="input-container">
                      <label htmlFor='gender' className="input-title">Gender</label>
                      <select id='gender' name="gender" value={formData.gender} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="input-container">
                      <label htmlFor='address' className="input-title">Address</label>
                      <input
                       id='address'
                        type="text"
                        name="address"
                        placeholder="Enter your Address"
                        value={formData.address}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="input-container">
                      <label htmlFor='district' className="input-title">District</label>
                      <select id='district' name="district" value={formData.district} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="kasargod">Kasargod</option>
                        <option value="kannur">Kannur</option>
                        <option value="wayanad">Wayanad</option>
                        <option value="kozhikode">Kozhikode</option>
                        <option value="malappuram">Malappuram</option>
                        <option value="palakkad">Palakkad</option>
                        <option value="thrissur">Thrissur</option>
                        <option value="ernakulam">Ernakulam</option>
                        <option value="idukki">Idukki</option>
                        <option value="kottayam">Kottayam</option>
                        <option value="alappuzha">Alappuzha</option>
                        <option value="pathanamthitta">Pathanamthitta</option>
                        <option value="kollam">Kollam</option>
                        <option value="thiruvananthapuram">Thiruvananthapuram</option>
                      </select>
                    </div>
                    <button
                      className="next-button"
                      onClick={() => setPage(2)}
                      disabled={!validatePage()}
                      style={{ opacity: validatePage() ? 1 : 0.6 }}
                    >
                      Next
                    </button>
                  </>
                ) : (
                  <>
                    <div className="create">Blood Information</div>
                    <div className="sub">Please enter your details</div>
                    <div className="input-container">
                      <label htmlFor='bloodGroup' className="input-title">Blood group</label>
                      <input
                       id='bloodGroup'
                        type="text"
                        name="bloodGroup"
                        placeholder="Enter your blood group"
                        value={formData.bloodGroup}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="input-container">
                      <label htmlFor='preference' className="input-title">Blood preference</label>
                      <select id='preference' name="bloodPreference" value={formData.bloodPreference} onChange={handleChange}>
                        <option value="">Select</option>
                      </select>
                    </div>
                    <div className="input-container">
                      <label htmlFor='lastDonation' className="input-title">Last donation</label>
                      <input
                       id='lastDonation'
                        type="date"
                        name="lastDonation"
                        placeholder="DD/MM/YYYY"
                        value={formData.lastDonation}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="input-container">
                      <label htmlFor='tattoo' className="input-title">Has tattoo</label>
                      <select id='tattoo' name="hasTattoo" value={formData.hasTattoo} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                    <button
                      className="next-button"
                      disabled={!validatePage()}
                      style={{ opacity: validatePage() ? 1 : 0.6 }}
                      type='submit'
                    >
                      Register
                    </button>
                  </>
                )}
              </form>
            </div>
          </div>
          <div className="register-right">
            <div className="register-right-image"></div>
          </div>
        </div>
      </div>
    );
}
