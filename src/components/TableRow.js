import React, { PropTypes, Component } from 'react'

export default class TableRow extends Component {

    constructor(props) {
        super(props);

        this.rowClickHandler = this.rowClickHandler.bind(this);
    }

    rowClickHandler(){
        const index = this.props.tableIndex;
        const id = this.props.data.id;

        this.props.setDetailsRow(id, index);
    }

    render() {
        const {tool, result, duration} = this.props.data;
        const initiator = this.props.data.initiator.id + ' - ' + this.props.data.initiator.name;

        return <tr onClick = {this.rowClickHandler}>
            <td>{tool}</td>
            <td>{initiator}</td>
            <td>{result}</td>
            <td>{duration}</td>
        </tr>
    }
}

TableRow.propTypes = {
    data: PropTypes.object.isRequired,
    setDetailsRow : PropTypes.func.isRequired
}
