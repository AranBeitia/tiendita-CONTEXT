import { useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext/UserState'
import { Spin } from 'antd'

const Profile = () => {
	const { getUserInfo, user } = useContext(UserContext)

	useEffect(() => {
		getUserInfo()
	}, [])

	return <>{user ? <h1>Profile {user.name}</h1> : <Spin />}</>
}
export default Profile
