import React from 'react';

function SignIn(props) {
    return (
        <div className="container py-5">
             <div className="row">
                <div className="col">
                        <h1 className="card-title">Login</h1>
                        <span className="card-subtitle">Get access to your Orders,Wishlist and Recommendations</span>
                </div>
                <div className="col">
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1"  />

                    </div>
                    <div class="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" class="btn btn-primary-pink w-100">Signin</button>
                    </form>  
                </div>
            </div>
        </div>
    );
}

export default SignIn;