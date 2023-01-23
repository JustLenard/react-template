import { ConfigProvider, theme } from 'antd'
import { glColors } from './globalStyles'

interface Props {
	children: React.ReactNode
}

const AntTheme: React.FC<Props> = ({ children }) => {
	return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: glColors.primaryGray,
				},
				// algorithm: theme.defaultConfig,
			}}
		>
			{children}
		</ConfigProvider>
	)
}

export default AntTheme
