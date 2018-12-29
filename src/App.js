import React from 'react'

import './App.css';

import list from './List';

const isSearched = (searchTerm) => (item) => !searchTerm || item.type.toLowerCase().includes(searchTerm.toLowerCase()) || item.project.toLowerCase().includes(searchTerm.toLowerCase()) || item.madeUsing.toLowerCase().includes(searchTerm.toLowerCase()) || item.url.toLowerCase().includes(searchTerm.toLowerCase()) || item.desc.toLowerCase().includes(searchTerm.toLowerCase());

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list,
            searchTerm: '',


        };
        this.onDismiss = this.onDismiss.bind(this); //bind the method to the state
        this.onSearchChange = this.onSearchChange.bind(this); //bind the method to the state

    }

    onDismiss(id) {
        const isNotId = y => y.objectID !== id; //if the evaluation for an item is true, the item stays in the list
        const updatedList = this.state.list.filter(isNotId); //the filter function takes a function to evaluate each item in the list
        this.setState({
            list: updatedList
        }); // update the state of the list
    }

    onSearchChange(event) {
        this.setState({
            searchTerm: event.target.value
        }); //The event has the value of the input field in its object.
    }

    searchWordpress = () => {
        this.setState({
            searchTerm: 'wordpress'
        });
    }

    searchReact = () => {
        this.setState({
            searchTerm: 'react'
        });
    }

    searchHTML = () => {
        this.setState({
            searchTerm: 'HTML'
        });
    }

    searchFreelance = () => {
        this.setState({
            searchTerm: 'Freelance'
        });
    }

    searchAll = () => {
        this.setState({
            searchTerm: ''
        });
    }

    render() {
        const {
            searchTerm,
            list
        } = this.state; //destructuring
        return ( <
            div className = "App" >

            <
            div className = "app-title" > Portfolio Projects Search < /div> <
            Search value = {
                searchTerm
            }
            onChange = {
                this.onSearchChange
            } >

            <
            /Search> 

            <
            span > < Button onClick = {
                this.searchAll
            }
            text = "All" / > < Button onClick = {
                this.searchWordpress
            }
            text = "Wordpress" / > < Button onClick = {
                this.searchReact
            }
            text = "React" / > < Button onClick = {
                this.searchHTML
            }
            text = "HTML" / > < Button onClick = {
                this.searchFreelance
            }
            text = "Freelance" / > < /span> <
            Table list = {
                list
            }
            pattern = {
                searchTerm
            }
            onDismiss = {
                this.onDismiss
            }
            />

            <
            /div>  
        )
    }
}


//Search component

class Search extends React.Component {
    _handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();

        }
    }

    render() {
        const {
            value,
            onChange,
            children
        } = this.props; //destructuring  
        return ( <
            div >
            <
            form >
            <
            div > {
                children
            } < /div><div><input type='text' value={value} onChange={onChange} onKeyPress={this._handleKeyPress}  placeholder='Search projects...'/ > < /div> < /
            form >

            <
            /div>

        )

    }


}


//Table  (functional stateless component) 
const Table = ({
        list,
        pattern,
        onDismiss
    }) =>
    <
    div > {
        list.filter(isSearched(pattern)).map(x => < div className = 'project-card'
            key = {
                x.objectID
            } >
            <
            div className = "project-name" > < span > NAME: < /span>{" "+x.project}</div >
            <
            div className = "project-name" > < span > MADE USING: < /span>{" "+x.madeUsing+' '}</div >
            <
            div className = "project-name" > < span > TYPE: < /span>{" "+x.type+' '}</div >
            <
            span > < Button text = "REMOVE FROM LIST"
            onClick = {
                () => onDismiss(x.objectID)
            } > < /Button></span > < span > < button > < a href = {
                x.url
            }
            target = "_blank"
            rel = "noopener noreferrer" > VISIT PROJECTS PAGE < /a></button > < /span> <div className='description'><div><span>DESCRIPTION:</span > < /div>{x.desc}</div >
            <
            /div>)} < /
            div >



            //Button (functional stateless component) 
            const Button = ({
                    onClick,
                    className = '',
                    children,
                    text = ''
                }) =>
                <
                button
            onClick = {
                onClick
            }
            className = {
                className
            }
            type = "button" > {
                text
            } <
            /button>






            export default App
