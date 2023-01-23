import React from 'react'
import ReactDOM from 'react-dom/client'
import AppProvider from './components/Provider/Provider'
import Root from './router/Root'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<AppProvider>
			<Root />
		</AppProvider>
	</React.StrictMode>,
)
