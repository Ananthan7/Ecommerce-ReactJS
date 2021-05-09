import React from 'react';

const Imagehelper = ({product}) => {
    const imageurl = product ? product.image : product.name
    return (
        <div className="rounded borderd border-success p-2"> 
          <img
            src={imageurl} 
            style={{ maxHeight: "100%", maxWidth: "100%" }}
            className="mb-3 rounded card-img-top" 
            alt="products"/>
        </div>
    );
}

export default Imagehelper;
