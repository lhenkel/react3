import React, { Component } from 'react';
import {
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label,
    Row, Col
} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.toggleCommentModal = this.toggleCommentModal.bind(this);
        //this.handleComment = this.handleComment.bind(this);

        this.state = {
            isModalOpen: false
        };
    }
    toggleCommentModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleComment(event) {
        this.toggleCommentModal();
        console.log(this);
        console.log(event);
        //alert("rating: " + this.rating.value + " name: " + this.yourname.value
        //+ " comment: " + this.message.value);
        //alert('click');
        //event.preventDefault();

    }
    render() {
        return (
            <div>
                <Button outline onClick={this.toggleCommentModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleCommentModal}>
                    <ModalHeader toggle={this.toggleCommentModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleComment(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating" md={2}>Rating</Label>
                                <Col md={10}>
                                    <Control.select model=".rating" id="rating">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </Control.select>
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="yourname" md={2}>Your Name</Label>
                                <Col md={10}>
                                    <Control.text model=".yourname" id="yourname" name="yourname"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".yourname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="message" md={2}>Comment</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" id="message" name="message"
                                        rows="12"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary">
                                        Save
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}
export default CommentForm;