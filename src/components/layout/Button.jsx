import './Button.css'

function Button({btnText, type}) {
    return (
        <button type={type} className='btn'>{btnText}</button>
    )
}

export default Button