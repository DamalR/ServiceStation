import React, { useEffect, useState } from 'react'
import '../styles/appoinments.css'
import axios from 'axios'

function Appoinments() {
    const [appoinments, setAppointments] = useState([])

    useEffect(() => {
        loadAppointments()
    }, []);

    const loadAppointments = async () => {
        const result = await axios.get("http://localhost:8080/api/v1.0/appointment/appointments")
        setAppointments(result.data.data);
    }
    const [selectedAppointment, setSelectedAppointment] = useState({
        appointmentId: '',
        customerName: '',
        telephoneNumber: '',
        vehicleNumber: '',
        manufacturer: '',
        vehicleType: '',
        date: '',
        time: '',
        status: ''
    });
    const handleEditClick = (appoinment) => {
        setSelectedAppointment(appoinment);
    };

    const handleDeleteClick = async (appointment) => {
        await axios.delete(`http://localhost:8080/api/v1.0/appointment/${appointment.appointmentId}`);
        
        setAppointments(prevAppointments => 
            prevAppointments.filter(a => a.appointmentId !== appointment.appointmentId)
        );
    };

    const handleInputChange = (e) => {
        setSelectedAppointment({
            ...selectedAppointment,
            [e.target.name]: e.target.value
        });
    };
    const handleAddAppointmentClick = async (selectedAppointment) =>{
        console.log("come to funtion");
        const response = await axios.post('http://localhost:8080/api/v1.0/appointment/new', selectedAppointment);
    }

    return (
        <dev>
            <dev>
                <form className="row g-3 needs-validation" novalidate>
                    <div className="col-md-4">
                        <label for="validationCustom01" className="form-label">Appointment ID</label>
                        <input type="text" className="form-control" id="validationCustom01" name="appointmentId"
                            value={selectedAppointment.appointmentId}
                            onChange={handleInputChange} ></input>
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <dev></dev>
                    <div className="col-md-4">
                        <label for="validationCustom02" className="form-label">Customer Name</label>
                        <input type="text" className="form-control" id="validationCustom02" name="customerName"
                            value={selectedAppointment.customerName}
                            onChange={handleInputChange}></input>
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label for="validationCustom03" className="form-label">Telephone Number</label>
                        <input type="text" className="form-control" id="validationCustom03" name="telephoneNumber"
                            value={selectedAppointment.telephoneNumber}
                            onChange={handleInputChange}></input>
                        <div className="invalid-feedback">
                            Please provide a valid city.
                        </div>
                    </div>
                    <dev></dev>
                    <div className="col-md-4">
                        <label for="validationCustom05" className="form-label">Vehicle Number</label>
                        <input type="text" className="form-control" id="validationCustom05" name="vehicleNumber"
                            value={selectedAppointment.vehicleNumber}
                            onChange={handleInputChange}></input>
                        <div className="invalid-feedback">
                            Please provide a valid zip.
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label for="validationCustom05" className="form-label">Manufacturer</label>
                        <input type="text" className="form-control" id="validationCustom05" name="manufacturer"
                            value={selectedAppointment.manufacturer}
                            onChange={handleInputChange}></input>
                        <div classname="invalid-feedback">
                            Please provide a valid zip.
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label for="validationCustom04" className="form-label">Vehicle Type</label>
                        <select className="form-select" id="validationCustom04" name="vehicleType"
                            value={selectedAppointment.vehicleType}
                            onChange={handleInputChange}>
                            <option selected disabled value="">Choose...</option>
                            <option>Car</option>
                            <option>SUV</option>
                            <option>Van</option>
                        </select>
                        <div className="invalid-feedback">
                            Please select a valid state.
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label for="validationCustom05" className="form-label">Date</label>
                        <input type="text" className="form-control" id="validationCustom05" name="date"
                            value={selectedAppointment.date}
                            onChange={handleInputChange}></input>
                        <div className="invalid-feedback">
                            Please provide a valid zip.
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label for="validationCustom05" className="form-label">Time</label>
                        <input type="text" className="form-control" id="validationCustom05" name="time"
                            value={selectedAppointment.time}
                            onChange={handleInputChange}></input>
                        <div className="invalid-feedback">
                            Please provide a valid zip.
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label for="validationCustom05" className="form-label">Status</label>
                        <input type="text" className="form-control" id="validationCustom05" name="status"
                            value={selectedAppointment.status}
                            onChange={handleInputChange} required></input>
                        <div className="invalid-feedback">
                            Please provide a valid zip.
                        </div>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary" type="submit" onClick={() => handleAddAppointmentClick(selectedAppointment)}>ADD Appointment</button>
                    </div>
                </form>
            </dev>
            <hr></hr>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Appointment_id </th>
                        <th scope="col">Date</th>
                        <th scope="col">Status</th>
                        <th scope="col">Time</th>
                        <th scope="col">Customer Name</th>
                        <th scope="col">Telephone Number</th>
                        <th scope="col">Vehicle Number</th>
                        <th scope="col">Manufacturer</th>
                        <th scope="col">Vehicle Type</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {appoinments.map((appoinment, index) => (
                        <tr key={appoinment.id || index}>
                            <th scope="row">
                                {index + 1}
                            </th>
                            <td>{appoinment.date}</td>
                            <td>{appoinment.status}</td>
                            <td>{appoinment.time}</td>
                            <td>{appoinment.customerName}</td>
                            <td>{appoinment.telephoneNumber}</td>
                            <td>{appoinment.vehicleNumber}</td>
                            <td>{appoinment.manufacturer}</td>
                            <td>{appoinment.vehicleType}</td>
                            <td>
                                <button type="button" className="btn btn-secondary btn-sm"  onClick={() => handleEditClick(appoinment)}>Edit</button>
                                <button type="button" className="btn btn-secondary btn-sm" onClick ={() =>handleDeleteClick(appoinment)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </dev>

    )
}

export default Appoinments