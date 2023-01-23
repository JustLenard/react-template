import { lazy, Suspense } from 'react'
import { BrowserRouter, createBrowserRouter, Route, Router, RouterProvider, Routes } from 'react-router-dom'
import AppLayout from '../components/layout/AppLayout'
import Home from '../pages/home/Home'

const LogIn = lazy(() => import('../pages/login/LogIn'))
const Monitoring = lazy(() => import('../pages/monitoring/Monitoring'))

interface Props {}

export const routes = {
	// Side menu
	home: '/',
	monitoirng: 'monitoring',
	configuration: 'configuration',
	dashboards: 'dashboards',
	reports: 'reports',

	// Login
	login: '/login',
}

const router = createBrowserRouter([
	{
		path: routes.home,
		element: <AppLayout />,
		//   errorElement: <ErrorPage />,
		children: [
			{
				path: routes.home,
				element: <Home />,
			},
			{
				path: routes.monitoirng,
				element: (
					<Suspense fallback={<div>Loading</div>}>
						<Monitoring />
					</Suspense>
				),
			},
		],
	},
	{
		path: routes.login,
		element: <LogIn />,
	},
])

const Root: React.FC<Props> = () => {
	return (
		<Suspense fallback={<div>Loading</div>}>
			<RouterProvider router={router} />
		</Suspense>
	)
}

export default Root
