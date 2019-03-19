import React, { Component } from 'react';

import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null,
            comments: null
        }
    }


    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
        this.setState({ comments: dish.comments });
    }

    render() {
        return (
            <div >
                <Header />
                <Menu dishes={this.state.dishes} onClick={(dish) => this.onDishSelect(dish)} />
                <Dishdetail selectedDish={this.state.selectedDish} comments={this.state.comments} />
                <Footer />
            </div>
        );
    }
}

export default Main;
