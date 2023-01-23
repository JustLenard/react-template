import { AiOutlineHome } from 'react-icons/ai'
import { BsFileEarmarkMedical, BsFileBarGraph } from 'react-icons/bs'
import { TbHeartRateMonitor, TbLayoutDashboard } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import { SInlineListItem, SNavBarLink } from './styles/Layout.styles'

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

const SideMenuLink: React.FC<Props> = ({ icon, linkTo, text }) => {
	return (
		<SInlineListItem>
			<SNavBarLink to={linkTo}>
				{iconMapping[icon]}
				{text}
			</SNavBarLink>
		</SInlineListItem>
	)
}

export default SideMenuLink
