import {useState} from "react"

export const useForm = (initialState= {}) => {
    const [formData, setFormData] = useState(initialState)

    const handleInputChange = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        setFormData(prevData => {
            return {
                ...prevData,
                [name]:value
            }
        })
    }

    return {formData, handleInputChange}
}

