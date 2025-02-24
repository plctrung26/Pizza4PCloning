import { Button } from "antd"
import { EnvironmentOutlined } from '@ant-design/icons';
import './AddressBar.scss'
import { useState } from "react";
import CustomModal from "../CustomModal/CustomModal";

const AddressBar = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="quote-space">
                <div className="welcome-title">
                    We welcome you to Pizza 4P's
                </div>
                <div className="quote">
                    "Our incomes are like our shoes; if too small, they gall and pinch us; but if too large, they cause us to stumble and to trip."
                </div>
                <div className="quote-author">
                    ___John Locke___
                </div>
            </div>
            <Button className="address-button" icon={<EnvironmentOutlined />} onClick={showModal}>
                Please enter address to make order
            </Button>
            <CustomModal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            </CustomModal>
        </>

    )
}

export default AddressBar