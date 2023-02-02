import React from 'react'

const BtnResult = (props) => {
    const showBill = () => {
        props.changeStyle("bill")
        console.log('showBill')
        props.order()
    }

    const preventSubmit = (event) => { //Эту функцию дописала при просмотре курса по Svelte, надо протестить
    	event.preventDefault();
    }

    return(
        <button type="submit" className="result" onClick={showBill} onSubmit={preventSubmit}>Оформить заказ</button>
    )
}

export default BtnResult