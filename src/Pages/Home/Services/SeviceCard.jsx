import { FaArrowRight } from "react-icons/fa";


const SeviceCard = ({ service }) => {

    const { img, title, price } = service;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="text-orange-600 text-xl font-bold flex items-center">
                    <p>Price: ${price}</p>
                    <button><FaArrowRight /></button>
                </div>
            </div>
        </div>
    );
};

export default SeviceCard;