import { Button, Input, Space } from "antd"
import { FacebookOutlined, InstagramOutlined, SpotifyOutlined } from '@ant-design/icons';
import './Footer.scss'

const Footer = () => {
    return (
        <div className="footer-space">
            <div className="up-footer">
                <div className="info-space">
                    <div className="info-column">
                        <div className="company-name">
                            <div className="name">PIZZA 4P'S</div>
                            <div className="full-name">PIZZA 4PS Joint Stock Company</div>
                        </div>
                        <div className="content-space">
                            <div className="title">Address</div>
                            <div className="content">8/13-8/15-8/17 Le Thanh Ton, Ben Nghe Ward, District 1, Ho Chi Minh City</div>
                        </div>
                        <div className="content-space">
                            <div className="title">Call our hotline for further support</div>
                            <div className="content">19006043</div>
                        </div>
                    </div>
                    <div className="info-column">
                        <div className="content-space">
                            <div className="title">Certificate Of Food Safety Conditions</div>
                            <div className="content">No 2895/2018/ATTP-CNĐK licensed by the Food Safety Management Authority Of HCM City on 05/07/2018</div>
                        </div>
                        <div className="content-space">
                            <div className="title">Business Registration Certificate</div>
                            <div className="content">No 0313168515 licensed by Department Of Planning And Investment Of Ho Chi Minh City on 19/03/2015</div>
                        </div>
                    </div>
                    <div className="info-column">
                        <div className="content-space">
                            <div className="title">Terms & Conditions</div>
                            <div className="select-content">General Terms & Conditions</div>
                            <div className="select-content">Payment Policy</div>
                            <div className="select-content">E-voucher Term & Condition</div>
                        </div>
                        <div className="content-space">
                            <div className="title">Customer Services</div>
                            <div className="select-content">Shipping Policy</div>
                            <div className="select-content">Return/ cancel and refund Policy</div>
                        </div>
                    </div>
                </div>
                <div className="contact">
                    <div className="contact-text">Be the first to receive our latest updates</div>
                    <div className="email-space">
                        <Space.Compact style={{ width: '100%' }}>
                            <Input />
                            <Button type="primary">Subscribe</Button>
                        </Space.Compact>
                    </div>
                    <div className="contact-text">Follow us on social media</div>
                    <div className="media-contact-space">
                        <div className="social-media">
                            <Button icon={<FacebookOutlined />}></Button>
                            <Button icon={<InstagramOutlined />}></Button>
                            <Button icon={<SpotifyOutlined />}></Button>
                        </div>
                        <div className="gov-icon">
                            <Button ></Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="below-header">
                <div className="copyright">
                    Copyright © 2025 Pizza 4P’s. All Rights Reserved
                </div>
            </div>
        </div>
    )
}

export default Footer