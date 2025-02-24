import { Button } from "antd"
import './RatingComponent.scss'
import { useState } from "react"

const RatingComponent = () => {
    const [isNotRating, setIsNotRating] = useState<boolean>(true)
    const [isGoodRating, setIsGoodRating] = useState<boolean>(true)

    return (
        <div className="rating-space">
            <div className="rating-question">
                {isNotRating && 'How was your experience of this website?'}
                {!isNotRating && isGoodRating && 'Great, would you like to tell more with us?'}
                {!isNotRating && !isGoodRating && 'We’re so sorry to hear that. could you tell us what happen ?'}
            </div>
            {isNotRating &&
                <div className="rating-buttons">
                    <Button
                        icon={<img
                            src="icon_rating_1.webp"
                            className="icon-image"
                        />}
                        className="icon-button"
                        onClick={() => {
                            setIsGoodRating(false)
                            setIsNotRating(false)
                        }}
                    ></Button>
                    <Button
                        icon={<img
                            src="icon_rating_2.webp"
                            className="icon-image"
                        />}
                        className="icon-button"
                        onClick={() => {
                            setIsGoodRating(false)
                            setIsNotRating(false)
                        }}
                    ></Button>
                    <Button
                        icon={<img
                            src="icon_rating_3.png"
                            className="icon-image"
                        />}
                        className="icon-button"
                        onClick={() => {
                            setIsGoodRating(false)
                            setIsNotRating(false)
                        }}
                    ></Button>
                    <Button
                        icon={<img
                            src="icon_rating_4.webp"
                            className="icon-image"
                        />}
                        className="icon-button"
                        onClick={() => {
                            setIsGoodRating(true)
                            setIsNotRating(false)
                        }}
                    ></Button>
                    <Button
                        icon={<img
                            src="icon_rating_5.webp"
                            className="icon-image"
                        />}
                        className="icon-button"
                        onClick={() => {
                            setIsGoodRating(true)
                            setIsNotRating(false)
                        }}
                    ></Button>
                </div>
            }
            {!isNotRating && isGoodRating &&
                <div className="rating-buttons">
                    <Button
                        className="feedback-button"
                        style={{ backgroundColor: 'white', color: '#122354' }}
                        onClick={() => {
                            setIsNotRating(true)
                        }}
                    >No, Thanks!</Button>
                    <Button
                        className="feedback-button"
                        style={{ backgroundColor: '#122354', color: 'white' }}
                    >Okay!</Button>
                </div>
            }
            {!isNotRating && !isGoodRating &&
                <div className="rating-buttons">
                    <Button
                        className="feedback-button left"
                        style={{ backgroundColor: 'white', color: '#122354' }}
                        onClick={() => {
                            setIsNotRating(true)
                        }}
                    >No!</Button>
                    <Button
                        className="feedback-button right"
                        style={{ backgroundColor: '#122354', color: 'white' }}
                    >Sure!</Button>
                </div>
            }

        </div>

    )
}

export default RatingComponent