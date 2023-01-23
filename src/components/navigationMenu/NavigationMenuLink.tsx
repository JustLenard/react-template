import * as S from './styles/NavigationMenuLink.styles'
import { AiOutlineHome } from 'react-icons/ai'
import { BsFileEarmarkMedical, BsFileBarGraph } from 'react-icons/bs'
import { TbHeartRateMonitor, TbLayoutDashboard } from 'react-icons/tb'

type Icons = 'home' | 'monitoring' | 'configuration' | 'dashboard' | 'reports'

interface Props {
	text: string
	linkTo: string //need links type
	icon: Icons
}

const iconMapping = {
	home: <AiOutlineHome />,
	configuration: <BsFileEarmarkMedical />,
	monitoring: <TbHeartRateMonitor />,
	dashboard: <TbLayoutDashboard />,
	reports: <BsFileBarGraph />,
}

const NavigationMenuLink: React.FC<Props> = ({ icon, linkTo, text }) => {
	return (
		<S.InlineListItem>
			<S.NavBarLink to={linkTo}>
				{iconMapping[icon]}
				{text}
			</S.NavBarLink>
		</S.InlineListItem>
	)
}

export default NavigationMenuLink
