import React from "react";
import {Link} from "react-router-dom";

const HotelCard = ({name, image, description, rating, link}) => {
  return (
    <Link to={link}>
      <div className='w-full rounded-lg my-4 bg-white shadow-lg'>
        <img
          src={image}
          className='rounded-t-lg h-32 w-full object-cover'
          alt={name}
        />
        <div className='p-2'>
          <h4 className='font-semibold'>
            {name}
            <span>
              {rating || 4} <i className='fa fa-star'></i>
            </span>
          </h4>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default HotelCard;
