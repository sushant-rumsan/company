import {createContext, useState} from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom';

export const formContext = createContext();

export const FormProvider = (props) => {

    //Framework and language data
    const lanData = [
        {language: "js"},
        {language: "python"},
        {language: "solidity"},
        {language: "c"}
    ]
    const frmData = [
        {frm: "react"},
        {frm: "django"},
        {frm: "dotnet"},
        {frm: "laravel"}
    ]

    //States
    const [formData, setFormData] = useState({}) 
    const [arrDisLan, setArrDisLan] = useState([]) //State to set language array
    const [arrDisFrm, setArrDisFrm] = useState([]) //State to set framework array    
    const [languageData] = useState(lanData)
    const [frameworkData] = useState(frmData)

    //Handle Change function
    const handleChange = (e)=>{
        setFormData((prev) => {
            return(
                {...prev, [e.target.name] : e.target.value}
            )
        })
    }

    //Handle submit function
    const handleSubmit = (e)=>{
        const finalFormData = {
            ...formData,
            "language": arrDisLan,
            "framework": arrDisFrm
        }
        
        axios.post('https://comp-servers.onrender.com/add', finalFormData)
        .then(()=>{
            console.log(formData)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    const {id} = useParams()
 
    //Handle update function
   const handleUpdate = (e)=>{
    const finalFormData = {
        ...formData,
        "language": arrDisLan,
        "framework": arrDisFrm
    }
    
    axios.patch(`https://comp-servers.onrender.com/6391cf486380568a17e38c4a`, finalFormData)
    .then(()=>{
        console.log('Success')
    })
    .catch((error)=>{
        console.log(error)
    })
    }

    //Push framework and language data in array
    const arrayPushLan = (e)=>{
        const tempArr = []
        e.map((lan)=>{
            tempArr.push(lan.language)
        })
        setArrDisLan(tempArr)
    }
    const arrayPushFrm = (e)=>{
        const tempArr = []
        e.map((frm)=>{
            tempArr.push(frm.frm)
        })
        setArrDisFrm(tempArr)
    }
    

    //company context
    const [company, setCompany] = useState(undefined)
    
    return(
    <formContext.Provider value={{handleChange, handleSubmit, handleUpdate, arrayPushLan, arrayPushFrm, languageData, frameworkData, company, setCompany}}>
        {props.children}
    </formContext.Provider>
    )
}