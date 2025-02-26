import { CarOutlined, CarryOutOutlined, ClockCircleOutlined, EnvironmentOutlined, FormOutlined, GiftOutlined, GlobalOutlined, InteractionOutlined, MenuOutlined, PhoneOutlined, SearchOutlined, ShoppingCartOutlined, SmileOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import { Dropdown } from 'antd';
import './Header.scss'
import UserDropDown from './UserDropDown';
import { useEffect, useState } from 'react';

const Header = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    const [userOpen, setUserOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div className='headerBar'>
                <div className='headerContainer'>
                    <div className='headerLogo'>PIZZA 4P'S</div>
                    <div className='headerSearchBar'>
                        <Input
                            placeholder="Search"
                            style={{ backgroundColor: 'white' }}
                            prefix={
                                <div className='headerSearchIcon'>
                                    <SearchOutlined
                                        className='searchIcon'
                                    />
                                </div>

                            }
                            className='searchBar'
                        />
                    </div>
                    <nav className='headerUtils'>
                        <div className='headerUser'>
                            <Dropdown
                                dropdownRender={() => (<UserDropDown />)}
                            >
                                <a onClick={(e) => e.preventDefault()}>
                                    <UserOutlined className='userIcon' />
                                </a>
                            </Dropdown>
                        </div>
                        <div className='headerLanguage'>
                            <Button
                                type="primary"
                                icon={
                                    <GlobalOutlined style={{ fontSize: '30px' }} />
                                }
                                className='changeLanguageButton'
                            >

                                English
                            </Button>
                        </div>
                        <div className='headerCartIcon'>
                            <ShoppingCartOutlined className='cartIcon' />
                        </div>
                    </nav>
                    <Button
                        className='menu-button'
                        icon={<MenuOutlined />}
                        onClick={() => {
                            setMenuOpen(!menuOpen)
                        }}
                    />
                    <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
                        <Button
                            icon={<UserOutlined />}
                            className='hidden-menu-button'
                            onClick={() => { setUserOpen(!userOpen) }}
                        >
                            User
                        </Button>
                        <div className={`user-menu-hidden ${userOpen ? "active" : ""}`}>
                            <Button className='user-button' icon={<FormOutlined />}>Register</Button>
                            <Button className='user-button' icon={<CarryOutOutlined />}>Login</Button>
                            <Button className='user-button' icon={<SmileOutlined />}>Personal Information</Button>
                            <Button className='user-button' icon={<EnvironmentOutlined />}>My Locations</Button>
                            <Button className='user-button' icon={<ClockCircleOutlined />}>Order History</Button>
                        </div>
                        <Button
                            icon={<GlobalOutlined />}
                            className='hidden-menu-button'
                        >English
                        </Button>
                        <Button icon={<ShoppingCartOutlined />} className='hidden-menu-button'>Shopping Cart</Button>
                        <Button icon={<GiftOutlined />} className='hidden-menu-button'>Voucher</Button>
                        <Button icon={<CarOutlined />} className='hidden-menu-button'>Shipping</Button>
                        <Button icon={<InteractionOutlined />} className='hidden-menu-button'>Refund</Button>
                        <Button icon={<PhoneOutlined />} className='hidden-menu-button'>Hotline</Button>
                    </div>
                </div>
            </div >
            <div className='spacer'></div>
            <div className={isVisible ? "headerUtility" : "hidden"}>
                <div className='headerUtilityContainer'>
                    <span className='voucher'>Pizza 4P's eGift-voucher</span>
                    <span className='shipping'>Shipping Policy</span>
                    <span className='refund'>Return/ cancel and refund Policy</span>
                    <span className='hotline'>
                        Hotline:
                        <span className='phoneNumber'>19006043</span>
                    </span>
                </div>
            </div>
        </>

    )
}

export default Header