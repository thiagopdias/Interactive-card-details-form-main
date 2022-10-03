import './CardBack.css'

function CardBack({CVC}) {
    return (
        <div className='cardBack'>
            <span>{CVC ? CVC : '000'}</span>
        </div>
    )
}

export default CardBack