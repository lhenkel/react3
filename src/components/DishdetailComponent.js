import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


function RenderDishDetail({ dish }) {
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
function RenderComments({ comments }) {
    if (comments != null) {
        const comments_div = comments.map((comment) => {
            return (
                <div key={comment.id} className="col-12 col-md-5 m-1">
                    {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))} : {comment.comment}
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
const DishDetail = (props) => {



    return (
        <div className="container">
            <div className="row">
                <div class='col-12 col-md-6'>
                    <RenderDish dish={props.dish} />

                </div>
                <div class='col-12 col-md-6'>
                    <h3>Comments:</h3>
                    <RenderComments comments={props.dish.comments} />
                </div>

            </div>
        </div>
    );
}



export default Dishdetail;