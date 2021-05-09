import React from 'react'

const Base = ({
    title = " MY Title",
    description = "My description",
    className = "bg-dark text-white p-4",
    children,
}) => {
    return (
        <div>
            <div className="container-fluid">
                <div className="jumbotron text-center bg-dark text-white">
                    <h2 className="display-4">{title}</h2>
                    <p className="lead">{description}</p>
                </div>
                <div className={className}>{children}</div>
            </div>
            <footer className="footer bg-dark mt-auto py-3">
                <div className="container-fluid bg-dark text-white text-center py-3">
                    <h4>if you got any questions reach me on instagra</h4>
                    <button className="btn btn-warning btn-lg">contact us</button>
                </div>

            </footer>
        </div>
    )
}
export default Base;