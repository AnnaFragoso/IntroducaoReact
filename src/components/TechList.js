import React, { Component } from 'React';

class TechList extends Component {
    state = {
        techs: [
            'Node.js',
            'ReactJS',
            'React Native'
        ]
    };
    
    render() {
        console.log(this.state)
        return (
            <ul>
                <li>NodeJS</li>
                <li>ReactJS</li>
                <li>React Native</li>
            </ul>
        )
    }
}

export default TechList;