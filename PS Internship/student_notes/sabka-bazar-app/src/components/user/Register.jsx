import React from 'react';

function Register(props) {
    return (
        <div className="container py-5">
             <div className="row">
                <div className="col">
                        <h1 className="card-title">Register</h1>
                        <span className="card-subtitle">We do not share your personal details with any one</span>
                </div>
                <div className="col">
                <form>
                    <div class="form-group">
                        <label htmlFor="fname">FirstName</label>
                        <input type="text" class="form-control" id="fname" />
                    </div>
                    <div class="form-group">
                        <label htmlFor="lname">LastName</label>
                        <input type="text" class="form-control" id="lname" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" class="form-control" id="email"  />

                    </div>
                    <div class="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" class="form-control" id="password" />
                    </div>
                    <div class="form-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type="password" class="form-control" id="confirm-password" />
                    </div>
                    <button type="submit" class="btn btn-primary-pink w-100">Signup</button>
                    </form>  
                </div>
            </div>
        </div>
    );
}

export default Register;