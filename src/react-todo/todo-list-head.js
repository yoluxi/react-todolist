import React from 'react';
export default class TodoListHead extends React.Component {
    render() {
        return (
            <thead>
                    <tr>
                        <th>task</th>
                        <th>action</th>
                    </tr>
            </thead>                
        )
    }
}