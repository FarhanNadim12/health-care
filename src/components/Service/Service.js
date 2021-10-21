import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = (props) => {
    const { img, name, description, id, } = props.service;
    return (

        <div className='card-group col-md-4 container mb-5'>
            <div className="card">
                <img src={img} class="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>{description}</p>

                </div>
                <div className="card-footer">
                    <Link className='detailBtn' to={`detail/${id}`}>Detail</Link>
                </div>
            </div>



        </div>



    );
};

export default Service;