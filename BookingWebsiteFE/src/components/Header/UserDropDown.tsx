import { Button } from "antd";
import { ClockCircleOutlined, EnvironmentOutlined, SmileOutlined } from '@ant-design/icons';
import './UserDropDown.scss'

const UserDropDown = () => {
    return (
        <div className="displaySpace">
            <div className="introLine">
                We welcome you to, Pizza 4ps
            </div>
            <div className="buttonSets">
                <Button className="signUpButton">
                    Register
                </Button>
                <Button className="logInButton">
                    Login
                </Button>
            </div>
            <Button
                className="infoButton"
                icon={<SmileOutlined />}
            >
                Personal Information
            </Button>
            <Button
                className="locationButton"
                icon={<EnvironmentOutlined />}
            >
                My location
            </Button>
            <Button
                className="orderButton"
                icon={<ClockCircleOutlined />}
            >
                Order History
            </Button>
        </div>
    )
}

export default UserDropDown;
