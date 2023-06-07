import axios from 'axios'
import { useContext, useEffect } from 'react'
import '../styles/form.scss'
import { useParams } from 'react-router-dom';
import {Multiselect} from 'multiselect-react-dropdown';
import {formContext} from '../context/formContext'



const Update = () => {


    //Import contexts
    const {handleChange, arrayPushLan, arrayPushFrm, languageData, frameworkData} = useContext(formContext) 
    const {company, setCompany, handleUpdate} = useContext(formContext) 

    // Declare array
    let newLanguage = []
    let newFramework = []

    // Get id from URL
    const {id} = useParams();

    // Get company data
    useEffect(()=>{
    axios.get(`http://localhost:8800/company/${id}`)
    .then((res)=>{
    setCompany(res.data)
    })
    }, [])

   

    return ( 

        <div className="center">
            <h4 className='addCompany'>Add your company</h4>


            {company ? company.map((comp)=>{
                const {companyName, city, language, framework, phone, address, email, projects, website,  hiring} = comp
                return(
                <form>
                    <div className="formElements">
                    <label htmlFor="companyName">Company name</label>
                    <input type="text" name="companyName" onChange={handleChange} defaultValue={companyName}/>
                    </div>
        
                    <div className="formElements">
                    <label htmlFor="city">City</label>
                    <input type="text" name="city" onChange={handleChange} defaultValue={city}/>
                    </div>
                    
                    {
                    //Form array of selected language value
                        language.map((lanSel)=>{
                            newLanguage.push({language: lanSel})
                        })
                    }
                    <div className="formElements">
                    <label htmlFor="language">Language</label>
                    <Multiselect options={languageData} selectedValues={newLanguage} displayValue = "language" onSelect={arrayPushLan}/>
                    </div>

                    {
                    //Form array of selected framework value
                    framework.map((frmSel)=>{
                            newFramework.push({frm: frmSel})
                        })
                        
                    }
        
                    <div className="formElements">
                    <label htmlFor="framework">Framework</label>
                    <Multiselect options={frameworkData} selectedValues={newFramework}  displayValue = "frm" onSelect={arrayPushFrm}/>
                    </div>
        
                    <div className="formElements">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" name="phone" onChange={handleChange} defaultValue={phone}/>
                    </div>
        
                    <div className="formElements">
                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" onChange={handleChange} defaultValue={address}/>
                    </div>
        
                    <div className="formElements">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" onChange={handleChange} defaultValue={email}/>
                    </div>
        
                    <div className="formElements">
                    <label htmlFor="website">Website</label>
                    <input type="text" name="website" onChange={handleChange} defaultValue={website}/>
                    </div>
        
                    <div className="formElements">
                    <label htmlFor="hiring">Hiring</label>
                    True
                    {hiring ? <><input type="radio" checked name="hiring" value='true' onChange={handleChange}/>
                    False
                    <input type="radio" name="hiring" value='false' onChange={handleChange}/></> : 
                    (<><input type="radio" name="hiring" value='true' onChange={handleChange}/>
                    False
                    <input type="radio" checked name="hiring" value='false' onChange={handleChange}/></>)}
                    
                    </div>
        
                    <div className="formElements">
                    <label htmlFor="projects">Projects</label>
                    <input type="text" name="projects" onChange={handleChange} defaultValue={projects}/>
                    </div>
        
                    <div className="formElements">
                    <label htmlFor="projects">Open position title</label>
                    <input type="text" name="projects" onChange={handleChange} defaultValue={companyName}/>
                    </div>
        
                    <div className="formElements">
                    <label htmlFor="projects">Open position post</label>
                    <input type="text" name="projects" onChange={handleChange} defaultValue={companyName}/>
                    </div>
        
                    <button onClick={handleUpdate}>Update now</button>
                </form>)
            })  : (<h2>No company</h2>)}

            
        </div>
     );
}
 
export default Update;