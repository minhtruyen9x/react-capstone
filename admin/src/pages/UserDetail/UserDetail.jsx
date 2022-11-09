import { useParams } from 'react-router-dom'

const UserDetail = () => {
    const { id } = useParams()
    return (
        <div>UserDetail {id}</div>
    )
}

export default UserDetail