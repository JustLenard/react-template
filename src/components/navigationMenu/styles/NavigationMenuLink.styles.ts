import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { glColors } from '../../../global/globalStyles'

export const InlineListItem = styled('li')`
	display: block;
	padding: 0;
`

export const NavBarLink = styled(NavLink)`
	display: flex;
	align-items: center;

	padding: 12px;
	color: ${glColors.linkColor};
	text-decoration: none;
	padding-left: 10%;

	&.active {
		background: ${glColors.gray2};
	}

	svg {
		font-size: x-large;
		margin-right: 5px;
	}
`
