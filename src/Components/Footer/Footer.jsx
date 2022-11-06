import React from 'react'

const Footer = () => {
    return (
        <div>

            <footer className="text-center text-lg-start" style={{backgroundColor: "#db6930"}}>
                <div className="container d-flex justify-content-center py-5">
                    <a href='https://github.com/Ravshanbekjon' target="blank" className="btn btn-primary btn-lg btn-floating mx-2" style={{backgroundColor: "#54456b"}}>
                        <i className="fab fa-github"></i>
                    </a>
                    <a href='https://www.linkedin.com/in/ravshan-karimov-a28534237' target='blank' className="btn btn-primary btn-lg btn-floating mx-2" style={{backgroundColor: "#54456b"}}>
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href='https://intagram.com/karimov_ravshan_' target='blank' className="btn btn-primary btn-lg btn-floating mx-2" style={{backgroundColor: "#54456b"}}>
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href='https://t.me/Ravshan_Kar1mov' target='blank' className="btn btn-primary btn-lg btn-floating mx-2" style={{backgroundColor: "#54456b"}}>
                        <i className="fab fa-telegram"></i>
                    </a>
                </div>

                <div className="text-center text-white p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                    © 2022 Copyright: 
                    <a className="text-white" target='blank' href="https://t.me/Ravshan_Kar1mov"> Ravshan Karimov</a>
                </div>
            </footer>

        </div>
    )
}

export default Footer