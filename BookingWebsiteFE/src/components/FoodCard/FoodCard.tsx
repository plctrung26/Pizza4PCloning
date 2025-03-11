import { Button } from "antd"
import { PlusOutlined } from '@ant-design/icons';
import './FoodCard.scss'
import { useState } from "react";
import CustomModal from "../CustomModal/CustomModal";

interface FoodCardProps {
    isPizza?: boolean
    recommendation?: string
    srcImg?: string
    cardName?: string
    cardPrize?: number
    className?: string
}

const FoodCard: React.FC<FoodCardProps> = ({
    isPizza = false,
    recommendation = '',
    srcImg = 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    cardName = 'Example Name',
    cardPrize = 100000,
}) => {

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
        <div className={'cardSpace'}>
            <div className="cardRecommendation">
                {recommendation}
            </div>
            <div className="cardImg">
                <img className="productImg" src={srcImg} />
            </div>
            <div className="cardTitle">
                {cardName}
            </div>
            <div className="cardButtonGroup">
                {isPizza &&
                    <div className="pizzaTypeSpace">
                        <Button
                            icon={<img
                                src="halfPizzaIcon.webp"
                                className="halfPizzaImg"
                            />}
                            className="pizzaButton"
                        ></Button>
                        <div className="pizzaButtonDescription" >Half Pizza</div>
                    </div>
                }
                <div className="addToCartSpace">
                    <Button
                        icon={<PlusOutlined className="plusIcon" />}
                        className="addToCartButton"
                        onClick={showModal}
                    ></Button>
                    <div
                        className="addToCartPrize"
                    >
                        {cardPrize.toLocaleString()} vnđ
                    </div>
                </div>
            </div>
            <CustomModal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            </CustomModal>
        </div>
    )
}

export default FoodCard