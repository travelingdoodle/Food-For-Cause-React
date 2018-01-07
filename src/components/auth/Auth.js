import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';
// import agent from '../../agent';

// class Login extends React.Component {
//   constructor(props) {
//     super(props);

//     this.handleInputChange = this.handleInputChange.bind(this);
//     this.handleFormSubmit = this.handleFormSubmit.bind(this);
//   }

//   handleInputChange(event) {
//     this.setState({ value: event.target.value });
//   }

//   handleFormSubmit(event) {
//     this.setState({ value: event.target.value });
//     event.preventDefault();
//   }
//   render() {
//     const email = this.props.email;
//     const password = this.props.password;
//     return (
//       <div className="container login">
//         <form className="form-signin" >
//           <h2 className="form-signin-heading text-center">Log in</h2>
//           <label htmlFor="inputEmail" className="sr-only">
//         Email address
//           </label>
//           <input
//             onChange={this.handleInputChange}
//             value={email}
//             name="email"
//             type="email"
//             id="inputEmail"
//             className="form-control"
//             placeholder="Email address"
//             required
//             autoFocus
//         />
//           <label htmlFor="inputPassword" className="sr-only">
//         Password
//           </label>
//           <input
//             onChange={this.handleInputChange}
//             value={password}
//             name="password"
//             type="password"
//             id="inputPassword"
//             className="form-control"
//             placeholder="Password"
//             required
//         />
//           <div className="checkbox">
//             <label>
//               <input type="checkbox" value="remember-me" /> Remember me
//             </label>
//           </div>
//           <button
//             className="btn btn-lg btn-secondary btn-block"
//             type="submit"
//             onClick={this.handleFormSubmit}
//         >
//         Log in
//           </button>
//         </form>
//         <div id="create" className="text-center">
//           <p>
//         First time? <Link to="/register">Create an account</Link>
//           </p>
//         </div>
//       </div>
//     );
//   }
// }
const Login = props => (
  <div className="container login">
    <form className="form-signin" >
      <h2 className="form-signin-heading text-center">Log in</h2>
      <label htmlFor="inputEmail" className="sr-only">
        Email address
      </label>
      <input
        onChange={props.handleInputChange}
        value={props.email}
        name="email"
        type="email"
        id="inputEmail"
        className="form-control"
        placeholder="Email address"
        required
        autoFocus
      />
      <label htmlFor="inputPassword" className="sr-only">
        Password
      </label>
      <input
        onChange={props.handleInputChange}
        value={props.password}
        name="password"
        type="password"
        id="inputPassword"
        className="form-control"
        placeholder="Password"
        required
      />
      <div className="checkbox">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <button
        className="btn btn-lg btn-secondary btn-block"
        type="submit"
        onClick={props.handleFormSubmit}
      >
        Log in
      </button>
    </form>
    <div id="create" className="text-center">
      <p>
        First time? <Link to="/register">Create an account</Link>
      </p>
    </div>
  </div>
);

export default Login;
