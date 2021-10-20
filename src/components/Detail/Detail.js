import React from 'react';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react/cjs/react.development';

const Detail = () => {
    const { serviceId } = useParams();
    const [serviceDetails, setserviceDetails] = useState([]);
    const [foundDetail, setFoundDetail] = useState({});

    useEffect(() => {
        fetch('/serviceDetail.json')
            .then(res => res.json())
            .then(data => setserviceDetails(data))
    }, [])
    useEffect(() => {
        const foudDetail = serviceDetails.find(detail => detail.id === +serviceId);
        setFoundDetail(foudDetail);
    }, [serviceDetails])
    console.log(foundDetail);


    return (
        <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-2">
                    <img height="100px" width="300px" src={foundDetail?.img} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{foundDetail?.name}</h5>
                        <p class="card-text">{foundDetail?.description}</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;