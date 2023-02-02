import React from 'react'
import Item from './Item'

class Items extends React.Component {
    // items = [
    //     {
    //         name: "Эспрессо",
    //         price: 80,
    //         id: "espresso"
    //     },
    //     {
    //         name: "Латте",
    //         price: 110,
    //         id: "latte"
    //     },
    //     {
    //         name: "Капучино",
    //         price: 120,
    //         id: "capuchino"
    //     },
    //     {
    //         name: "Американо",
    //         price: 90,
    //         id: "americano"
    //     },
    //     {
    //         name: "Шоколадный кекс",
    //         price: 80,
    //         id: "chocoMuff"
    //     },
    //     {
    //         name: "Черничный кекс",
    //         price: 90,
    //         id: "blueMuff"
    //     },
    //     {
    //         name: "Яблочный пирог",
    //         price: 100,
    //         id: "applePie"
    //     }
    // ]

    render() {
        return(<div className="items">
            {this.props.items.map((el) => (
                <Item key={el.id} item={el} onCheck={this.props.onCheck}/>
            ))}
        </div>
        )
    }
}

export default Items