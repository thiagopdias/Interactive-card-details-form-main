import './Input.css'

function Input({type, text, id, placeholder, handleOnInput, customClass}) {
    return (
        <div className="input">
            <label htmlFor={id}>{text}</label>

            <input 
                type={type} 
                id={id}
                placeholder={placeholder}
                onInput={handleOnInput}
                className={customClass}
            />
        </div>
    )
}

export default Input