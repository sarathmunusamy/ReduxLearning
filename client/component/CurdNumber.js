import React from 'react';

class CurdNumbers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            number: this.props.numbers.number,
            isEdit: false,
            editIndex: -1,
            error: null
        }
    }

    AddNumber() {

        var number = parseInt(this.refs.editBox.value);

        var index = this.state.number.indexOf(number);
        if (index == -1) {
            this.props.addNumbers(number);
            this.refs.editBox.value = '';
            this.setState({
                error: ''
            })
        } else {
            this.setState({
                error: 'The element is already exist'
            })
        }


    }
    editNumber(number, index) {

        this.setState({

            isEdit: true,
            editIndex: index,
            error: ''
        });

        this.refs.editBox.value = number;

    }

    updateNumber() {
        var number = this.refs.editBox.value;
        this.props.editNumber(number, this.state.editIndex);
        this.setState({
            isEdit: false,
            error: ''
        });
        this.refs.editBox.value = '';
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            number: nextProps.numbers.number.sort(this.sortNumber)
        });
    }

    sortNumber(a, b) {
        return a - b;
    }
    render() {

        return (

            <div className="container">
                <div className="comment-form1">

                    <input type="text" id="editBox" ref="editBox" />

                    <button className="btn btn-primary" id="addBtn" disabled={this.state.isEdit} onClick={this.AddNumber.bind(this)} >Add</button>
                    <button className="btn btn-primary" id="updateBtn" disabled={!this.state.isEdit} onClick={this.updateNumber.bind(this)}>Update</button>
                </div>
                {this.state.number.map((number, index) => {
                    return (
                        <div key={index}>
                            <span id="number" onClick={() => this.editNumber(number, index)} ref="number">  {number}</span>
                            <span className="glyphicon glyphicon-remove" onClick={() => this.props.removeNumbers(index)} />
                        </div>
                    )
                })}

                <span style={{ color: 'red' }} ref="error">{this.state.error}</span>
            </div>
        )
    }
}

export default CurdNumbers;