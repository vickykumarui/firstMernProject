import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
export default class CreateExercise extends Component{

    constructor(props){
        super(props);
        this.state = {
            username : '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []
        }

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeduration = this.onChangeduration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    }

    componentDidMount(){
        this.setState({
            users: ['test user'],
            username: 'test user'
        })
    }

    onChangeUsername(e){
        this.setState({
            username: e.target.value
        })
    }
    onChangeDescription(e){
        this.setState({
            description: e.target.value
        })
    }
    onChangeduration(e){
        this.setState({
            duration: e.target.value
        })
    }
    onChangeDate(date){
        this.setState({
            date: date
        })
    }

    onSubmit(e){
        e.preventDefault();

        const exercise = {
            username: this.state.username,
            duration: this.state.duration,
            description: this.state.description,
            date: this.state.date,
        }

        console.log(exercise);

        window.location = '/';
    }

    render(){
        return(
            <div>
            <h3>Create New Exercise Log</h3> 
            <form onSubmit = {this.onSubmit}>
                <div className="form-group">
                    <label>Username: </label>
                    <select ref="userInput"
                    required
                    className="form-control"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    >
                        {
                            this.state.users.map((user) =>{
                                return(
                                    <option key={user} value ={user}>
                                    </option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label>Description: </label>
                    <input type="text"
                    required
                    className="form-control"
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                    />
                </div>
                <div className="form-group">
                    <label>Duration in(minutes):</label>
                    <input type ="text"
                        className="form-control"
                        value={this.state.duration}
                        onChange={this.onChangeduration}
                    />
                </div>
                <div className="form-group">
                    <label>Date: </label>
                    <div>
                        <DatePicker
                            selected={this.state.date}
                            onChange={this.onChangeDate}
                        />
                    </div>
                </div>

                <div className="form-group">
                   <input type ="submit" value="Create new exercise" className ="btn btn-primary"/>
                </div>
            </form>  
            </div>
        )
    }
}