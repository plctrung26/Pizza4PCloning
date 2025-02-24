import { Card, CardProps } from 'antd';
import './MenuCard.scss'

const { Meta } = Card;

interface MenuCardProps extends CardProps {
    title?: string;
    src?: string;
}

const MenuCard: React.FC<MenuCardProps> = ({
    title = 'topping',
    src = 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
}) => {
    return (
        <Card
            hoverable
            cover={< img alt="example" src={src} />}
            className='menuCard'
        >
            <Meta title={
                <div className='cardTitle'>
                    {title}
                </div>
            } />
        </Card >
    );
}

export default MenuCard;
