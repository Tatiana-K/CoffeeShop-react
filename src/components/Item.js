import React, {useState} from 'react'
import NumberField from './NumberField'

const Item = (props) => {

    var item = props.item

    const [isChecked, setIsChecked] = useState(false)
    const [number, setNumber] = useState(0);

    const checkHandler = () => {
        setIsChecked(!isChecked,)
        props.onCheck(item, !isChecked, 1)
        if (!isChecked) {
            setNumber(1);
        } else {
            setNumber(0);
        }
    }

    return(<div className="item">
        <input id={item.id} type="checkbox" checked={isChecked} onChange={checkHandler} ></input>
        <label htmlFor={item.id} >{item.name} {item.price}р.</label>
        <NumberField active={isChecked} val={number} setter={setNumber} calculateResult={props.onCheck} item={item}/>
    </div>
    )

}

export default Item