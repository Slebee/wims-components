import React, { Component } from 'react';
import { Layout,Icon} from 'antd';
import Logo from '../logo'
import './BaseHeader.less'
const { Header} = Layout;

class BaseHeader extends Component {
    render() {
        return (
            <Layout>
                <Header className="login-header">
                    <Logo/>
                    <div style={{float:'right'}}>
                        <Icon type="phone" style={{
                            fontSize:36
                        }} />
                        <span style={{
                            color:'#333',
                            display:'inline-block',
                            lineHeight:'36px',
                            fontSize:30,
                            fontWeight:'bold',
                            marginLeft:15
                        }}>400-035-9696</span>
                    </div>
                </Header>
            </Layout>
        );
    }
}
export default BaseHeader;

