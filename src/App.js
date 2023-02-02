import React from "react";
import Header from "./components/Header";
import MainForm from "./components/MainForm";

var res = 0;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedItem: [],
      result: 0,
      clientData: "Фамилия, Имя",
      orderData: "Товары"
    };

    this.checkItem = this.checkItem.bind(this);
    this.culcResult = this.culcResult.bind(this);
    this.orderDataCalc = this.orderDataCalc.bind(this)
  }

  items = [
    {
      name: "Эспрессо",
      price: 80,
      id: "espresso",
    },
    {
      name: "Латте",
      price: 110,
      id: "latte",
    },
    {
      name: "Капучино",
      price: 120,
      id: "capuchino",
    },
    {
      name: "Американо",
      price: 90,
      id: "americano",
    },
    {
      name: "Шоколадный кекс",
      price: 80,
      id: "chocoMuff",
    },
    {
      name: "Черничный кекс",
      price: 90,
      id: "blueMuff",
    },
    {
      name: "Яблочный пирог",
      price: 100,
      id: "applePie",
    },
  ];

  render() {
    return (
      <div>
        <Header title="Coffee Shop" />
        <main>
          <MainForm
            items={this.items}
            onCheck={this.checkItem}
            res={this.state.result}
            order={this.orderDataCalc}
            orderItem={this.state.orderData}
          />
        </main>
      </div>
    );
  }

  checkItem(item, isChecked, quantity) {

    let items = this.state.checkedItem;
    const i = items.length + 1; 
    if (isChecked) {
      //console.log("IF checkedItem", items);

      if (items.some((el) => el.id === item.id)) {  // Если товар есть в массиве, меняем quantity

        //console.log("IF checkedItem & id exists", items);
        items.filter((el) => el.id === item.id)[0].q = quantity
        this.setState({checkedItem: [...items]}, 
          function() {this.culcResult()});

      } else { // Если товара нет в массиве, добавляем quantity
        item["q"] = quantity;
        //console.log("IF checkedItem & id doesn't exists", items);
        this.setState({
          checkedItem: [...items, { i, ...item }],
        }, function() {this.culcResult()});

      }
    } else { // Удаляем товар из массива
      this.setState({
        checkedItem: items.filter((el) => el.id !== item.id),
      }, function() {this.culcResult()});
      //console.log("ELSE checkedItem", items);
    }
    //console.log("FINAL checkedItem", items);
  }

  culcResult() {
    //console.log("CALCULATE checkedItem", this.state.checkedItem);
    res = 0;
    this.state.checkedItem.map((el) => (res = res + el.price * el.q));
    this.setState({ result: res });
  }

  orderDataCalc() {
    console.log('orderData: ', this.state.checkedItem)
    let item = this.state.checkedItem
    let itemData = []
    for (let i = 0; i < item.length; i++) {
      itemData[i] = {
          'name': item[i].name,
          'price': item[i].price
      }
    }
    this.setState({ orderData: itemData })
  } 

}

export default App;
