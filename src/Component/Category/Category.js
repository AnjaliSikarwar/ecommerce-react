import React from 'react'

function Category({category}) {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="cat-item d-flex align-items-center mb-4">
                <div className="" style={{ width: "100px", height: "100px" }}>
                    <img className="img-fluid" src={category.image.url} alt="" />
                </div>
                <div className="mx-3">
                    <h6 className="text-dark fw-bolder">{category.cname}</h6>
                    <small className="text-muted">100 Products</small>
                </div>
            </div>
        </div>
    )
}

export default Category