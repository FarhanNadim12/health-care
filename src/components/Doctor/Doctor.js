import React from 'react';
import './Doctor.css'
const Doctor = (props) => {

    const { img, name, specialist, id, } = props.doctor;
    return (
        <div className='card-group col-md-4 container mb-5'>
            <div className="card">
                <img src={img} class="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <h5>{specialist}</h5>
                </div>

            </div>
        </div>
    );
};

export default Doctor;