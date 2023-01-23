import { useNavigate } from 'react-router-dom'

interface Props {}

const LogIn: React.FC<Props> = () => {
	const navigate = useNavigate()

	const handleClick = () => {
		navigate('/')
	}

	return (
		<div>
			<button onClick={handleClick}>Click</button>
		</div>
	)
}

export default LogIn
