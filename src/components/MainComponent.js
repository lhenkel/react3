import React, { Component } from 'react';

import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

import { CommentForm } from './CommentFormComponent';
import About from './AboutComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Contact from './ContactComponent';
import Home from './HomeComponent';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

class Main extends Component {

    constructor(props) {
        super(props);
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
        this.setState({ comments: dish.comments });
    }


    render() {
        const HomePage = () => {
            return (
                <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.props.promotions.filter((promotion) => promotion.featured)[0]}
                    leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        }

        const DishWithId = ({ match }) => {
            return (
                <Dishdetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))} />
            );
        };
        const AboutPage = () => {
            return (
                <About leaders={this.props.leaders} />
            );
        }


        return (
            <div >
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/contactus' component={Contact} />
                    <Route exact path='/aboutus' component={AboutPage} />
                    <Route path='/menu/:dishId' component={DishWithId} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

//export default Main;
export default withRouter(connect(mapStateToProps)(Main));
