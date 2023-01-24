import React from 'react'
import brandIcon from "../../assets/img/cj-logo-mobile.png";
import Footer from '../footer/Footer';
import "./home.scss";

function Home() {
  return (
    <div className="home">
        <div className="container">
            <div className="content">
                <div className="logo">
                    <img src={brandIcon} alt="" />
                </div>

                <div className="topSection">
                    <div className="title">
                        <h1>Online Registration form for test</h1>
                    </div>

                    <div className="bottomArea">
                        <div className="revisionDate">
                            Last revision made on: 02/05/2022
                        </div>

                        <div className="renewedDate">
                            Renewed with effect from: 02/05/2023
                        </div>
                    </div>
                </div>

                <div className="formPersonInfo">
                    <div className="label">Label</div>

                    <div className="name">
                        <span>Name:</span> Mahmudul Hasan
                    </div>

                    <div className="address">
                        <span>Address:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, impedit.
                    </div>

                    <div className="location">
                        <div className="loc area">
                            <span>Area:</span> Demo Text
                        </div>
                        <div className="loc district">
                            <span>District:</span> Demo Text
                        </div>
                        <div className="loc division">
                            <span>Division:</span> Demo Text
                        </div>
                    </div>
                </div>

                <div className="formRegistration">
                    <div className="topArea">
                        <div className="data regNo">
                            <span>Registration No:</span> 28Bgt55
                        </div>

                        <div className="data regSignOn">
                            <span>Registration Sign On:</span> 10/10/2022
                        </div>

                        <div className="data regSignExpire">
                            <span>Registration Will Expire On:</span> 15/10/22
                        </div>
                    </div>

                    <div className="middleArea">
                        <div className="data">
                            <span>Registration by: </span> Demo text
                        </div>
                    </div>

                    <div className="bottomArea">
                        <div className="data position">
                            <span>Position: </span> Senior Marketing Manager, Information Technology
                        </div>

                        <div className="data mobile">
                            <span>Mobile No:</span> +880 1234567891
                        </div>

                        <div className="data email">
                            <span>Email:</span> moshiur.rahmane@text.com
                        </div>
                    </div>
                </div>

                <div className="termsCondition">
                    <div className="topArea">
                        <p>Read Terms & Condition</p>
                    </div>

                    <form className="middleArea">
                        <div className="checkboxArea">
                            <input type="checkbox" />
                            <label>After having read and and agreed to all the Terms and Conditions, I give my approval in Cyber Jahan Lts. to complete the registration</label>
                        </div>

                        <div className="buttons">
                            <button className="approve" type="submit">Approve</button>
                            <button className="change" type="submit">Change</button>
                            <button className="Renew" type="submit">Renew</button>
                            <button className="Print" type="submit">Print</button>
                        </div>
                    </form>

                    <div className="mobileContent">
                        <p>Last revision made on: 02/05/2022</p>
                        <p>Renewed with effect from: 15/06/2022</p>
                    </div>

                    <p>This registration page successfully submitted on: 12/10/21</p>
                </div>
                <p className="bottomLabel">Label: Online Registration Page</p>
            </div>
            
            <Footer/>
        </div>
    </div>
  )
}

export default Home