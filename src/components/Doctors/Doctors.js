import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import Footer from '../Footer/Footer';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    console.log(doctors);
    return (
        <div>
            <div className='row container m-auto'>
                <h1 className='text-center'>Our  Doctors</h1>
                {
                    doctors.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Doctors;