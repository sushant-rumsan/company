import axios from 'axios'
import { useState, useContext } from 'react'
import '../styles/form.scss'
import {Multiselect} from 'multiselect-react-dropdown';
import {formContext} from '../context/formContext'

const Add = () => {
    //Import contexts
    const {handleChange, handleSubmit, arrayPushLan, arrayPushFrm, languageData, frameworkData} = useContext(formContext) 
    return(
        <div className="center">
            <h4 className='addCompany'>Add your company</h4>
        <form>
            <div className="formElements">
            <label htmlFor="companyName">Company name</label>
            <input type="text" name="companyName" onChange={handleChange}/>
            </div>

            <div className="formElements">
            <label htmlFor="city">City</label>
            <input type="text" name="city" onChange={handleChange}/>
            </div>

            <div className="formElements">
            <label htmlFor="language">Language</label>
            <Multiselect options={languageData} displayValue = "language" onSelect={arrayPushLan}/>
            </div>

            <div className="formElements">
            <label htmlFor="framework">Framework</label>
            <Multiselect options={frameworkData} displayValue = "frm" onSelect={arrayPushFrm}/>
            </div>

            <div className="formElements">
            <label htmlFor="phone">Phone</label>
            <input type="text" name="phone" onChange={handleChange}/>
            </div>

            <div className="formElements">
            <label htmlFor="address">Address</label>
            <input type="text" name="address" onChange={handleChange}/>
            </div>

            <div className="formElements">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" onChange={handleChange}/>
            </div>

            <div className="formElements">
            <label htmlFor="website">Website</label>
            <input type="text" name="website" onChange={handleChange}/>
            </div>

            <div className="formElements">
            <label htmlFor="hiring">Hiring</label>
            true
            <input type="radio" name="hiring" value='true' onChange={handleChange}/>
            false
            <input type="radio" name="hiring" value='false' onChange={handleChange}/>
            </div>

            <div className="formElements">
            <label htmlFor="projects">Projects</label>
            <input type="text" name="projects" onChange={handleChange}/>
            </div>

            <div className="formElements">
            <label htmlFor="projects">Open position title</label>
            <input type="text" name="projects" onChange={handleChange}/>
            </div>

            <div className="formElements">
            <label htmlFor="projects">Open position post</label>
            <input type="text" name="projects" onChange={handleChange}/>
            </div>

            <button onClick={handleSubmit}>Submit</button>
        </form>
        </div>
    )
}
 
export default Add;