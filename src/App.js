import React from 'react';
import './App.css'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            txtUsername: '',
            txtPassword: '',
            // txtDescription: '',
            // sltGender: 0,
            // rdLanguage: 'en',
            // chkbStatus: false
        };
        // this.onHandleChange = this.onHandleChange.bind(this);
        // this.onHandleSubmit = this.onHandleSubmit.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.Login = this.Login.bind(this);
    }

    // onHandleChange(event) {
    //     let target = event.target;
    //     let name = target.name;
    //     let value = target.type === 'checkbox' ? target.checked : target.value;

    //     this.setState({
    //         [name]: value
    //     });
    // }

    // onHandleSubmit(event) {
    //     event.preventDefault();
    //     console.log(this.state);
    // }

    onChangeUsername(event) {
        this.setState({
            txtUsername: event.target.value,
        });
    }

    onChangePassword(event) {
        this.setState({
            txtPassword: event.target.value,
        });
    }

    Login() {
        console.log(this.state.txtUsername);
        console.log(this.state.txtPassword);
    }

    render() {
        return (
            // <div className="container mt-30">
            //     <div className="row">
            //         <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            //             <div className="panel panel-primary">
            //                 <div className="panel-heading">
            //                     <h3 className="panel-title">Panel title</h3>
            //                 </div>
            //                 <div className="panel-body">
            //                     <form onSubmit={this.onHandleSubmit}>

            //                         <div className="form-group">
            //                             <label>Username: </label>
            //                             <input
            //                                 type="text"
            //                                 className="form-control"
            //                                 name="txtUsername"
            //                                 onChange={this.onHandleChange}
            //                                 value={this.state.txtUsername}
            //                             />
            //                         </div>

            //                         <div className="form-group">
            //                             <label>Password: </label>
            //                             <input
            //                                 type="password"
            //                                 className="form-control"
            //                                 name="txtPassword"
            //                                 onChange={this.onHandleChange}
            //                                 value={this.state.txtPassword}
            //                             />
            //                         </div>

            //                         <div className="form-group">
            //                             <label>Description: </label>
            //                             <textarea
            //                                 name="txtDescription"
            //                                 className="form-control"
            //                                 rows="3"
            //                                 onChange={this.onHandleChange}
            //                                 value={this.state.txtDescription}
            //                             >
            //                             </textarea>
            //                         </div>

            //                         <label>Gender: </label>
            //                         <select
            //                             name="sltGender"
            //                             className="form-control"
            //                             value={ this.state.sltGender }
            //                             onChange={ this.onHandleChange }
            //                         >
            //                             <option value={0} >Female</option>
            //                             <option value={1} >Male</option>
            //                         </select>
            //                         <br />

            //                         <label>Language: </label>
            //                         <div className="radio">
            //                             <label>
            //                                 <input
            //                                     type="radio"
            //                                     name="rdLanguage"
            //                                     value="en"
            //                                     onChange={ this.onHandleChange }
            //                                     checked={ this.state.rdLanguage === "en"}
            //                                 />
            //                                 English
            //                             </label>
            //                             <br />
            //                             <label>
            //                                 <input
            //                                     type="radio"
            //                                     name="rdLanguage"
            //                                     value="vi"
            //                                     onChange={ this.onHandleChange }
            //                                     checked={ this.state.rdLanguage === "vi"}
            //                                 />
            //                                 Vietnamese
            //                             </label>
            //                         </div>


            //                         <div className="checkbox">
            //                             <label>
            //                                 <input 
            //                                     type="checkbox" 
            //                                     name="chkbStatus"
            //                                     value={true}
            //                                     onChange={ this.onHandleChange }
            //                                     checked= { this.state.chkbStatus === true }
            //                                 />
            //                                 Status
            //                             </label>
            //                         </div>


            //                         <button type="submit" className="btn btn-primary">Save</button>&nbsp;
            //                         <button type="reset" className="btn btn-default">Reset</button>
            //                     </form>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </div>

            <div>
                <p>Username: {this.state.txtUsername}</p>
                <input onChange={this.onChangeUsername} />
                <br />
                <input onChange={this.onChangePassword} />
                <br />
                <button onClick={this.Login}>Login</button>
            </div>
        );
    }
}

export default App;
