import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    renderDishDetail(dish) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg width='100%' src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        } else {
            return (
                <div></div>
            )
        }
    }
    renderComments(comments) {
        if (comments != null) {
            const comments_div = comments.map((comment) => {
                return (
                    <div key={comment.id} className="col-12 col-md-5 m-1">
                        {comment.date} : {comment.comment}
                    </div>
                );
            });
            return (
                <div>{comments_div}</div>
            );

        } else {
            return (
                <div></div>
            );
        }
    }
    render() {

        return (
            <div className="container">
                <div className="row">
                    <div class='col-12 col-md-6'>
                        {this.renderDishDetail(this.props.selectedDish)}
                    </div>
                    <div class='col-12 col-md-6'>
                        <h3>Comments:</h3>
                        {this.renderComments(this.props.comments)}
                    </div>

                </div>
            </div>
        );
    }

}

export default Dishdetail;