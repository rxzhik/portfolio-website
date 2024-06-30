import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    const navigate = useNavigate()

    useEffect(()=> {
        setTimeout(()=>{
            navigate("/", {state: "Error Not Found"})
        }, 1000)
    }, [])
  return (
    <h1>404 NotFound</h1>
  )
}

export default Error