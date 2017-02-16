import React, { PropTypes, Component } from 'react'
import TableRow from './TableRow'
import DetailsRow from './DetailsRow'

export default class DataTable extends Component {

  constructor(props) {
    super(props);

    this.getTableData = this.props.getTableData.bind(this);
    this.getDetails = this.props.getDetails.bind(this);
    this.generateTableRows = this.generateTableRows.bind(this);
  }

  componentWillMount() {
    this.getTableData();
    this.getDetails();
  }

  generateTableRows(){
    return this.props.dataForTable.map((row, i) =>
        <TableRow
            key = {row.id}
            data = {row}
            tableIndex = {i}
            setDetailsRow = {this.props.setDetailsRow}
        />
    )
  }

  render() {
    const detailRow = this.props.detailRow;
    let rows = this.generateTableRows();

    if(detailRow){
      let details = this.props.details;
      let data = details[detailRow.id];

      rows.splice(detailRow.index + 1, 0,
          <DetailsRow
              key = {detailRow.id * Math.random()}
              data = {data}
          />
      );
    }

    return <div>
      {
        this.props.fetching ?
            <div className='uk-alert uk-alert-warning uk-text-center' data-uk-alert>
              <p>Загрузка...</p>
            </div>
            :
            <table className='uk-table uk-table-hover'>
              <thead>
              <tr>
                <th>Tool</th>
                <th>Initiator</th>
                <th>Result</th>
                <th>Duration, ms</th>
              </tr>
              </thead>
              <tbody>
              {rows}
              </tbody>
            </table>
      }
    </div>
  }
}

DataTable.propTypes = {
  getTableData: PropTypes.func.isRequired,
  getDetails: PropTypes.func.isRequired,
  setDetailsRow: PropTypes.func.isRequired,
  dataForTable: PropTypes.array.isRequired,
  details: PropTypes.object.isRequired
}
