import React, { Component } from 'react'

export default class DetailsRow extends Component {

    render() {
        let detailsRow;

        if(this.props.data){
            const { group_name, individualize, impressions } = this.props.data;

            detailsRow = <tr className = 'active-row'>
                <td>
                    <span className = 'uk-text-bold'>group_name: </span>{group_name}
                </td>
                <td>
                    <span className = 'uk-text-bold'>individualize: </span> {individualize ? 'true' : 'false'}
                </td>
                <td colSpan='2'>
                    <span className = 'uk-text-bold'>impressions: </span>{impressions}
                </td>
            </tr>
        }else{
            detailsRow = <tr className = 'active-row'>
                <td colSpan = '4' className = 'uk-text-center'>
                    <span className = 'uk-text-bold'>Нет данных</span>
                </td>
            </tr>
        }

        return detailsRow
    }
}
