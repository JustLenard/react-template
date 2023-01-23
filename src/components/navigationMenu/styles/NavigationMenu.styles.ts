import styled from 'styled-components'
import { glColors } from '../../../global/globalStyles'

export const NavBar = styled.nav`
	background: ${glColors.gray1};

	min-height: 100vh;
`

export const InlineList = styled('ul')`
	list-style: none;
	padding: 0;
	margin: 0;
`

export const LogoWrapper = styled.h1`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0;
	max-height: 100px;
	padding: 15px 0;
	font-size: 36px;
`
