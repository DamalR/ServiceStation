import React from 'react'
import '../styles/appoinments.css'

function Appoinments() {
    return (
        <table class="table caption-top">
            <caption>List of Appoinments</caption>
            <thead>
                <tr>
                    <th scope="col">AppointmentId</th>
                    <th scope="col">Date</th>
                    <th scope="col">Time</th>
                    <th scope="col">Status</th>
                    <th scope="col">Customer Name</th>
                    <th scope="col">Telephone Number</th>
                    <th scope="col">Vehicle Number</th>
                    <th scope="col">Manufacturer</th>
                    <th scope="col">Vehicle Type</th>
                    <th scope="col">Customer Id</th>
                    <th scope="col">Vehicle Id</th>
                </tr>
            </thead>
            <tbody>
                <tr class="custom-row-height">
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                </tr>
                <tr class="custom-row-height">
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Appoinments