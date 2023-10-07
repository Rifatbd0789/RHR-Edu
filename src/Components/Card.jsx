import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Card = ({ data }) => {
  const { id, image, name, shorts, price } = data;
  return (
    <div>
      <div
        className="card bg-base-100 shadow-xl mx-auto border "
        data-aos="flip-right"
        data-aos-duration="2000"
      >
        <figure>
          <img className="w-full h-44" src={image} alt="Shoes" />
        </figure>
        <div className="card-body gap-1 p-2 h-64">
          <h2 className="card-title">{name}</h2>

          <p>{shorts}</p>
          <hr />
          <p className="text-center">Price: {price}$</p>
          <div className="card-actions justify-center">
            <Link
              className="btn btn-primary bg-[#013E62] border-none text-white hover:bg-slate-400 hover:text-black"
              to={`/details/${id}`}
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.object,
};

export default Card;
