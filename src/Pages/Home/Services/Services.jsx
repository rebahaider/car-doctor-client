import { useEffect } from "react";
import { useState } from "react";
import SeviceCard from "./SeviceCard";


const Services = () => {



    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="mt-5">
            <div className="text-center space-y-4">
                <h2 className="text-xl text-orange-600 font-bold">Services</h2>
                <h2 className="text-3xl font-bold">Our Service Area</h2>
                <p>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <SeviceCard key={service._id} service={service}></SeviceCard>)
                }
            </div>
        </div>
    );
};

export default Services;