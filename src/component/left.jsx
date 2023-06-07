import '../styles/left.scss'
import {Link} from 'react-router-dom'
import {formContext} from '../context/formContext'
import { useContext, useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const Left = () => {

    //Set state
    const [formData, setFormData] = useState({
        city: "all",
        language: "all",
        hiring: "all"
    });

    //Import contexts
    const {company, setCompany} = useContext(formContext) 

    //Handle change function
    const handleChange = (e)=>{
        setFormData((prev) => {
            return(
                {...prev, [e.target.name] : e.target.value}
            )
        })
    }

    //Search function
    const handleSubmit = () => {
        console.log(formData.city)
        axios.get(`http://localhost:8800/search/${formData.city}/${formData.language}/${formData.hiring}`)
        .then((res)=>{
        setCompany(res.data)
        })
    }
    
    return ( 
    <div className="left">
        {/* Bottom part */}
        <div className="top">
            <h4>Search Software company</h4>
            <div className="topContainer">
                <label htmlFor="selectTech">Select Technology</label>
                <select name="language" onChange={handleChange}>
                    <option value="all">All technology</option>
                    <option value="js">Javascript</option>
                    <option value="python">Python</option>
                    <option value="c++">C++</option>
                    <option value="php">PHP</option>
                </select>

                <label htmlFor="selectTech">Select City</label>
                <select name="city" onChange={handleChange}>
                    <option value="all">All Nepal</option>
                    <option value="pokhara">Pokhara</option>
                    <option value="chitwan">Chitwan</option>
                    <option value="kathmandu">Kathmandu</option>
                    <option value="birjung">Birjung</option>
                </select>

                <div className="hiring">
                    <label htmlFor="hiring">All</label>
                    <input className="radio" type="radio" name="hiring" value='all' onChange={handleChange} />
                    <label htmlFor="hiring">Only hiring</label>
                    <input className="radio" type="radio" name="hiring" value='true' onChange={handleChange} />
                </div>

                <button className="button" onClick={handleSubmit}><Link className='link' to={'/'}>Search</Link></button>
            </div>
        </div>

        {/* Bottom part */}
        <div className="bottom">
            <h4>Add your company</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta ipsam, non debitis officia assumenda dignissimos, et magnam quisquam ipsum delectus, quae blanditiis cumque necessitatibus ipsa. Maiores exercitationem aspernatur enim sit?</p>
            <button className="button"> <Link className='link' to={'/add'}> Add </Link></button>
        </div>
    </div> );
}
 
export default Left;