import { Button, Col, Layout, Menu, Space } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import Sider from 'antd/es/layout/Sider'
import styled from 'styled-components'
import { TbHeartRateMonitor, TbLayoutDashboard } from 'react-icons/tb'
import React from 'react'
import GlobalStyles, { glColors } from '../../global/globalStyles'
import SideMenuLink from './SideMenuLink'
import { Outlet, useNavigate } from 'react-router-dom'
import { routes } from '../../router/Root'
import { headerStyle, layoutStyles, siderStyle, SLogoWrapper } from './styles/Layout.styles'

interface Props {}

const AppLayout: React.FC<Props> = () => {
	const navigate = useNavigate()

	const handleClick = () => {
		navigate(routes.login)
	}

	return (
		<Layout style={layoutStyles}>
			<Sider
				width={'15%'}
				style={siderStyle}
				breakpoint="sm"
				collapsedWidth="0"
				onBreakpoint={(broken) => {
					console.log(broken)
				}}
				onCollapse={(collapsed, type) => {
					console.log(collapsed, type)
				}}
			>
				<SLogoWrapper>Logo</SLogoWrapper>
				{/* <Button type="primary" onClick={handleClick}>
					Navigate
				</Button> */}

				<SideMenuLink icon="home" text="Home" linkTo={routes.home} />
				<SideMenuLink icon="monitoring" text="Monitoring" linkTo={routes.monitoirng} />
				<SideMenuLink icon="configuration" text="Configuration" linkTo={routes.configuration} />
				<SideMenuLink icon="dashboard" text="Dashboard" linkTo={routes.dashboards} />
				<SideMenuLink icon="reports" text="Reports" linkTo={routes.reports} />
			</Sider>
			<Layout>
				<Header style={headerStyle}>Header</Header>
				<Content>
					<Outlet />
				</Content>
			</Layout>
		</Layout>
	)
}

export default AppLayout

// <S.MainWrapper>
// 	<Col span={4}>
// 		<LeftMenu />
// 	</Col>
// 	<S.StyledCol span={20}>
// 		<Header />
// 		<S.ContentWrapper>
// 			<Suspense fallback={<div>Loading...</div>}>{routeRenderer}</Suspense>
// 		</S.ContentWrapper>
// 	</S.StyledCol>
// </S.MainWrapper>
//   </Layout>
