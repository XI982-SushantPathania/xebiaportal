import React from "react";
import "./Details.css";
import 'whatwg-fetch';
import history from './history';
export class Details extends React.Component {
    constructor() {
        super();
        this.state = {
            empDetails: {
                name: "",
                emp_id: "",
                emp_type: "",
                email: "",
                phone: "",
                doj: "",
                title: "",
                role: ""
            }
        }
    }
    handleEmpdetailsChange(e) {
        const { value, name } = e.target;
        this.state.empDetails = Object.assign({}, this.state.empDetails, { [name]: value })
    }
    handleCancel(event) {
        event.preventDefault();
        history.push("/Menu")
        window.location.reload();
    }
    handleClear(event) {
        event.preventDefault();
        this.setState({
            name: "",
            emp_id: "",
            emp_type: "",
            email: "",
            phone: "",
            doj: "",
            title: "",
            role: ""
        });
        alert("Are you sure You want to clear.")
    }
    handleSubmit(event) {
        event.preventDefault();
        this.postmethod(this.state.empDetails).then(response => {
            console.log(response)
            alert("Thanks For submitting your Details");
            this.setState({
                name: "",
                emp_id: "",
                emp_type: "",
                email: "",
                phone: "",
                doj: "",
                title: "",
                role: ""
            });
        }
        )
    }


    postmethod(empDetails) {
        return fetch("http://localhost:8085/create/employee/", {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Proxy-Authorization': 'm88BdZpuDX2VLGWAN6hggQZ32Xb3kulo',
                'Access-Control-Allow-Origin': '*',
                'access-control-allow-credentials': true,
                'Access-Control-Allow-Headers': true
            },
            body: JSON.stringify(empDetails)
        }).then(response => {
            return response.json();
        })
    }
    render() {
        return (
            <form>
                <div className="left">
                    <input type="text"
                        placeholder="Employee"
                        className="search" />
                </div>
                <div className="right">
                    <h2 className="details">DETAILS
                        </h2>
                    <div>
                        <tr>
                            <td>
                                <label for="Eid"
                                    className="L1">Emp ID </label>
                                <input type="number"
                                    className="Eid"
                                    name="emp_id"
                                    onChange={this.handleEmpdetailsChange.bind(this)}
                                    value={this.state.emp_id} />
                            </td>
                            <td>
                                <label for="mail"
                                    className="L2">Email</label>
                                <input type="email"
                                    className="mail"
                                    name="email"
                                    onChange={this.handleEmpdetailsChange.bind(this)}
                                    value={this.state.email} />
                            </td>
                        </tr>
                    </div>
                    <div>
                        <tr>
                            <td>
                                <label for="name"
                                    className="L1">Name</label>
                                <input type="text"
                                    className="Eid"
                                    name="name"
                                    onChange={this.handleEmpdetailsChange.bind(this)}
                                    value={this.state.name} />
                            </td>
                            <td>
                                <label for="Mno."
                                    className="L2">MobileNo.</label>
                                <input type="number"
                                    className="mail"
                                    name="phone"
                                    onChange={this.handleEmpdetailsChange.bind(this)}
                                    value={this.state.phone} />
                            </td>
                        </tr>
                    </div>
                    <div>
                        <tr>
                            <td>
                                <label for="title"
                                    className="L1">Title</label>
                                <input type="text"
                                    className="Eid"
                                    name="title"
                                    onChange={this.handleEmpdetailsChange.bind(this)}
                                    value={this.state.title} />
                            </td>
                            <td>
                                <label for="JD"
                                    className="L2">Joining Date</label>
                                <input type="Date"
                                    className="mail"
                                    name="doj"
                                    onChange={this.handleEmpdetailsChange.bind(this)}
                                    value={this.state.doj} />
                            </td>
                        </tr>
                    </div>
                    <div>
                        <tr>
                            <td>
                                <label for="role"
                                    className="L1">Role</label>
                                <input type="text"
                                    className="Eid"
                                    name="role"
                                    onChange={this.handleEmpdetailsChange.bind(this)}
                                    value={this.state.role} />
                            </td>
                            <td>
                                <label for="ET"
                                    className="L2">Emp Type</label>
                                <input type="text"
                                    className="mail"
                                    name="emp_type"
                                    onChange={this.handleEmpdetailsChange.bind(this)}
                                    value={this.state.emp_type} />
                            </td>
                        </tr>
                    </div>
                    <div className="submit">
                        <input type="button"
                            className="save"
                            onClick={this.handleSubmit.bind(this)}
                            value="Save" />

                        <input type="button"
                            className="save"
                            onClick={this.handleClear.bind(this)}
                            value="Clear" />
                        <input type="button"
                            className="save"
                            value="Cancel"
                            onClick={this.handleCancel.bind(this)} />
                    </div>
                    <tr>
                        <td>
                            <input type="text"
                                placeholder="Current Address"
                                className="address" />
                            <div className="submit1">
                                <input type="button"
                                    className="save1"
                                    value="Save"
                                />
                                <input type="button"
                                    className="save1"
                                    value="Clear"
                                />
                                <input type="button"
                                    className="save1"
                                    value="Cancel"
                                    onClick={this.handleCancel.bind(this)} />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="text" placeholder="Permanent address" className="address" />
                            <div className="submit1">
                                <input type="button"
                                    className="save1"
                                    value="Save"
                                />
                                <input type="button"
                                    className="save1"
                                    value="Clear"
                                />
                                <input type="button"
                                    className="save1"
                                    value="Cancel"
                                    onClick={this.handleCancel.bind(this)} />
                            </div>
                        </td>
                    </tr>
                </div>
            </form>
        );
    }
}
