import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { glColors } from '../../../global/globalStyles'

export const SInlineListItem = styled('li')`
	display: block;
	padding: 0;
`

export const SNavBarLink = styled(NavLink)`
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

export const SLogoWrapper = styled.h1`
	font-size: 40px;
	padding: 2rem 0;
`
export const layoutStyles: React.CSSProperties = {
	minHeight: '100vh',
}

export const siderStyle: React.CSSProperties = {
	textAlign: 'center',
	backgroundColor: glColors.gray1,
	// minWidth: '30%',
	minWidth: '300px',
	width: '300px',
}

export const contentStyle: React.CSSProperties = {
	textAlign: 'center',
	minHeight: 120,
	lineHeight: '120px',
	color: '#fff',
	backgroundColor: '#108ee9',
}

export const headerStyle: React.CSSProperties = {
	textAlign: 'center',
	color: '#fff',
	height: 64,
	paddingInline: 50,
	lineHeight: '64px',
	backgroundColor: '#7dbcea',
}
