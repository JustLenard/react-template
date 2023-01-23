import { Layout } from 'antd'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import AntTheme from '../../global/AntTheme'
import GlobalStyles from '../../global/globalStyles'

interface Props {
	children: React.ReactNode
}

const router = createBrowserRouter([
	{
		path: '/',
		// element: <Layout />,
		element: <div>helolo</div>,
	},
])

const AppProvider: React.FC<Props> = ({ children }) => {
	return (
		<AntTheme>
			<GlobalStyles />
			{children}
		</AntTheme>
	)
}

export default AppProvider
