import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as dataTableActions from '../actions/DataTableActions'
import DataTable from '../components/DataTable'

class App extends Component {
  render() {
    const { getTableData, getDetailsData, setDetailsRow } = this.props.dataTableActions;
    const { dataTable } = this.props;

    return <div>
      <DataTable
          getTableData = {getTableData}
          getDetails = {getDetailsData}
          setDetailsRow = {setDetailsRow}
          dataForTable = {dataTable.data}
          details = {dataTable.details}
          detailRow = {dataTable.selectedDetail}
          fetching = {dataTable.fetching}
      />
    </div>
  }
}

function mapStateToProps(state) {
  return {
    dataTable: state.dataTable
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dataTableActions: bindActionCreators(dataTableActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
