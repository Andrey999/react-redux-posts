import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../redux/postsReducer';
import { showAlert } from '../redux/asyncActions';
import { Alert }from './Alert'

class PostForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ''
        }
    }
    
    submitHandler = (event) => {
        event.preventDefault()
        const { title } = this.state
        if(!title.length) {
            return this.props.showAlert('Поле не может быть пустым')
        }
        
        const newPost = {
            title, id: Date.now().toString()
        }
        this.props.createPost(newPost)
        this.setState({
            title: ''
        })
    }

    inputChangeHandler = (event) => {
        event.persist()
        this.setState(prev => ({...prev, ...{
            [event.target.name]: event.target.value // [динамический ключ]: на какое значение его поменять 
        }}))
    }

    render() {
        return(
            <form onSubmit={this.submitHandler}>
                { this.props.alert && <Alert warning={this.props.alert} /> }
                <div className="form-group">
                    <label htmlFor="title">Заголовок поста</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="title" 
                        name="title"
                        value={this.state.title} 
                        onChange={this.inputChangeHandler}    
                        />
                </div>
                <button className="btn btn-success" type="submit">Создать</button>
            </form>
        )
    }
}

const mapStateToProps = (state) => ({
    alert: state.fetchPosts.alert
})

const mapDispatchToProps = {
    createPost, 
    showAlert
}
export default connect(mapStateToProps, mapDispatchToProps)(PostForm)