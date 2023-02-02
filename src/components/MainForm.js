import React, {useState} from 'react'
import Items from './Items'
import Result from './Result'
import Bill from './Bill'

const MainForm = (props) => {
    const [style, changeStyle] = useState("billHidden")

    return(
        <form>
            <Bill newClass={style} changeStyle={changeStyle} orderItem={props.orderItem}/>
            <div className="clientData">
                <input type="text" placeholder="Введите фамилию" />
                <input type="text" placeholder="Введите имя" />
            </div>
                <Items items={props.items} onCheck={props.onCheck}/>
                <Result res={props.res} changeStyle={changeStyle} order={props.order} />
        </form>
    )

}

export default MainForm