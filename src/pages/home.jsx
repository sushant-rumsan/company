import axios from 'axios'
import { useState, useContext, useEffect } from 'react'
import '../styles/home.scss'
import emailImg from '../assets/email.png'
import location from '../assets/location.png'
import phoneImg from '../assets/phone.png'
import {formContext} from '../context/formContext'
import {Link} from 'react-router-dom'

const Home = () => {

    //import context
    const {company, setCompany} = useContext(formContext) 

    useEffect(()=>{
        axios.get('http://localhost:8800/10')
    .then((res)=>{
        setCompany(res.data)
    })
    }, [])
    

    return (
        <div className="center">
            
            <div className="centerContainer">
            <h4 className='companyText'>Companies</h4>
            {company? 
            company.map((comp)=>{
                const {_id, companyName, city, language, framework, phone, address, email,  hiring} = comp
                
                return(
                    
                    <div key={comp._id} className="companyContainer">
                        
                        <div className="topPart">
                       <h4><Link to={`/company/${_id}`} style={{color: "black", textDecoration: "none"}}>{companyName}</Link></h4>
                       <div className='hiring'>
                       <span>Hiring</span>
                       {hiring === true ? <div className="green"></div> :(<div className="red"></div>)}
                       </div>
                       </div>

                       <p>{city}</p>
                       <ul>
                       {language? language.map((lan)=>{
                        return(
                            <div className="listContainer">
                            <div className="bullet"></div><li>{lan}</li>
                            </div>
                        )
                       })
                       :(<>No language</>)}
                       </ul>
                        
                        <ul>
                        {framework? framework.map((frm)=>{
                            return(
                                <div className="listContainer">
                                <div className="bullet"></div><li>{frm}</li>
                                </div>
                            )
                       })
                       :(<>No language</>)}
                        </ul>

                        <div className="contactContainer">

                        <div className="contactField">
                        <img src={phoneImg} alt="phone"/>
                        <span className="contactInfo">{phone}</span>
                        </div>
                        
                        <div className="contactField">
                        <img src={location} alt="location"/>
                        <span className="contactInfo">{address}</span>
                        </div>
                        <div className="contactField">
                        <img src={emailImg} alt="email"/>
                        <span className="contactInfo">{email}</span>
                        </div>
                        </div>    

                        
                                         
                    </div>
                )
            })
             :(<h1>Loading....</h1>)}
             </div>
        </div>
     );
}
 
export default Home;