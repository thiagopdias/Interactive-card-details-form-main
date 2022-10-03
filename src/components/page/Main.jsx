import { useLayoutEffect, useRef, useState } from 'react'

import CardFront from '../layout/CardFront'
import CardBack from '../layout/CardBack'
import Button from "../layout/Button"

import Input from '../form/Input'

import ThankYou from '../thankyou/ThankYou'

import './Main.css'

function Main() {
    const [classForThankYou, setClassForThankYou] = useState('hide')
    const [classForForm, setClassForForm] = useState('show')

    const [name, setName] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')
    const [CVC, setCVC] = useState('')

    
    const [errorName, setErrorName] = useState('')
    const [errorCardNumber, setErrroCardNumber] = useState('')
    const [errroMonth, setErrorMonth] = useState('')
    const [errroYear, setErrorYear] = useState('')
    const [errroCVC, setErrorCVC] = useState(undefined)

    function nameValue(e) {
        setName(e.target.value)
    }

    function numberCard(e) {
        setCardNumber(e.target.value)
    }

    function isCardNumber(cardNumber) {
        const tests = []

        const cards = {
            Visa: /^4[0-9\s]{12}(?:[0-9\s]{6})$/,
            Mastercard: /^5[1-5\s][0-9\s]{17}$/,
            Amex: /^3[47][0-9\s]{15}$/,
            DinersClub: /^3(?:0[0-5\s]|[68][0-9\s])[0-9\s]{13}$/,
            Discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
            JCB: /^(?:2131|1800|35[0-9\s]{3})[0-9\s]{14}$/
        };

        for(let card in cards) {
            const test = cards[card].test(cardNumber)
            tests.push(test)
        }

        const unique = tests.filter(value => {
            return value == true
        })

        if(unique.length == 0) {
            return false
        }

        return unique
    }

    function monthValue(e) {
        setMonth(e.target.value)
    }

    function yearValue(e) {
        setYear(e.target.value)
    }

    function CVCValue(e) {
        setCVC(e.target.value)
    }

    function isCVC(CVC) {
        return /^[0-9]{3}$/.test(CVC)
    }


    function submit(e) {
        e.preventDefault()

        if(name === '') {
            setErrorName('error')
            return false
        } else {
            setErrorName('')
        }
        
        if(cardNumber === '') {
            setErrroCardNumber('error')
            return false
        } else if(!isCardNumber(cardNumber)) {
            setErrroCardNumber('error')
            return false
        } else {
            setErrroCardNumber('')
        }

        if(month === '' && month > 12) {
            setErrorMonth('error')
            return false
        } else {
            setErrorMonth('')
        }

        if(year === '' && year <= 21) {
            setErrorYear('error')
            return false
        } else {
            setErrorYear('') 
        }

        if(CVC === '') {
            setErrorCVC('error')
            return false
        } else if(!isCVC(CVC)) {
            setErrorCVC('error')
        } else {
            setErrorCVC('')
        }

        if(errorName == '' && errorCardNumber == '' && errroMonth == '' && errroYear == '' && errroCVC == '') {
            setClassForThankYou('showThakYou')
            setClassForForm('hide')
            return true
        }
    }

    return (
        <main className='main'>
                <section id="sectionCards">
                    <div className='cards'>
                        <div className='infoCards'>
                            <CardFront 
                                name={name}
                                cardNumber={cardNumber}
                                month={month}
                                year={year}
                            />

                            <CardBack CVC={CVC} />
                        </div>
                    </div>
                </section>

                <div className='controlForm'>
                    <form className={classForForm} onSubmit={submit} method="post">
                        <Input 
                            type="text"
                            text="Cardholder Name"
                            id="name"
                            placeholder="e.g. Jane Appleseed"
                            handleOnInput={nameValue}
                            customClass={errorName}
                        />

                        <Input 
                            type="text"
                            text="Card Number"
                            id="cardNumber"
                            placeholder="e.g. 1234 5678 9123 0000"
                            handleOnInput={numberCard}
                            customClass={errorCardNumber}
                        />

                        <div className='infoCardDate'>
                            <div className='monthAndYear'>
                                <label htmlFor="month">Exp. Date (MM/YY)</label>

                                <div className='dateCard'>
                                    <Input
                                        type="number"
                                        id="month"
                                        placeholder="MM"
                                        handleOnInput={monthValue}
                                        customClass={errroMonth}
                                    />
                                    <Input
                                        type="number"
                                        id="year"
                                        placeholder="YY"
                                        handleOnInput={yearValue}
                                        customClass={errroYear}
                                    />
                                </div>
                            </div>

                            <div>
                                <Input 
                                    type="number"
                                    text="CVC"
                                    placeholder="e.g. 123"
                                    handleOnInput={CVCValue}
                                    customClass={errroCVC}
                                />
                            </div>
                        </div>

                        <Button type="submit" btnText="Confirm" />        
                    </form>

                    
                    <ThankYou customClass={classForThankYou} />
                </div>
        </main>
    )
}

export default Main