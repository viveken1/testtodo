import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addTodoItem } from '../REDUX/Addslice';

function Add() {
    const todoList = useSelector(state => state.addReducer.todoList);

    const [text, setText] = useState('');

    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if (text.trim() !== '') {
            dispatch(addTodoItem({ newText: text }));
            setText('');
        } else {
            alert('Enter a To do to add');
        }
    };

    return (
        <>
            <h1 className="mt-5 ms-5">My Todo List</h1>

            <Form.Group className="mt-3 ms-5" controlId="exampleForm.ControlInput1" style={{ width: '200px' }}>
                <Form.Control type="text" placeholder="Add todos..." className="form-control" value={text} onChange={e => setText(e.target.value)} />
                <div className="mt-2 text-center">
                    <button className="btn btn-primary" onClick={handleAddTodo}>Submit</button>
                </div>
            </Form.Group>

            <div className="content mt-5">
                {todoList.map(todo => (
                    <Card key={todo.id} style={{ height: '100%' }}>
                        <Card.Body>
                            <div className="d-flex justify-content-between">
                                <Card.Title className="text-center">{todo.content}</Card.Title>
                                <button><i className="fa-solid fa-trash"></i></button>
                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </>
    );
}

export default  Add;