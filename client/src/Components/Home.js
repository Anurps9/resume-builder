import { useContext } from 'react'
import cookie from 'react-cookies'
import { AuthContext } from '../Context/AuthContext'
import { Link } from 'react-router-dom'
export default function Home(){
    const {user, setUser} = useContext(AuthContext)
    const handleClick = () => {
        cookie.remove('userId')
        setUser(null)
    }
    return (
        <div>
            Let's create your resume.<br/>
            Click <Link to="/resume/new">here</Link> to start.
            <br/>
            {/* <button type="button" onClick={handleClick}>Logout</button> */}
        </div>
    )
}