import { GlobalOutlined, SearchOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import { Dropdown } from 'antd';
import './Header.scss'
import UserDropDown from './UserDropDown';
import { useEffect, useState } from 'react';

const Header = () => {
    const [isVisible, setIsVisible] = useState(true);

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
                    <div className='headerUtils'>
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
                    </div>
                </div>
            </div>
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