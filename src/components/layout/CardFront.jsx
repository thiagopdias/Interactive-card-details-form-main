import './CardFront.css'

function CardFront({name, cardNumber, month, year}) {
    return (
        <div className='cardFront'>
            <div className='ball'>
                <span></span>
                <span></span>
            </div>

            <div className='cardFrontInfo'>
                <p>{cardNumber ? cardNumber : '0000 0000 0000 0000'}</p>

                <div className='info'>
                    <span>{name ? name : 'NAME'}</span>
                    <span>{month ? month : '00'}/{year ? year : '00'}</span>
                </div>
            </div>
        </div>
    )
}

export default CardFront