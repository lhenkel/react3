import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
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
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.dishes} onClick={(dish) => this.onDishSelect(dish)} />
                <Dishdetail selectedDish={this.state.selectedDish} comments={this.state.comments} />
            </div>
        );
    }
}

export default Main;
