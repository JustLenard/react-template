import LeftMenuLink from './NavigationMenuLink'
import * as S from './styles/NavigationMenu.styles'

const NavigationMenu = () => (
	<S.NavBar>
		<S.LogoWrapper>Logo</S.LogoWrapper>
		<S.InlineList>
			<LeftMenuLink icon="home" linkTo="/" text="Home" />
			<LeftMenuLink icon="monitoring" linkTo="/module-a" text="Monitoring" />
			<LeftMenuLink icon="configuration" linkTo="/dashboard" text="Configuration" />
			<LeftMenuLink icon="dashboard" linkTo="/module-v" text="Dashboard" />
			<LeftMenuLink icon="reports" linkTo="/module-n" text="Reports" />
		</S.InlineList>
	</S.NavBar>
)

export default NavigationMenu
