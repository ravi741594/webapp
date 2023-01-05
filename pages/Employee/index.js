import MUIDataTable from "mui-datatables";
import axios from "axios";
import React from "react";
import { connect } from "react-redux"
import data from './tableData';
import Action from './action';
import DataModal from 'sharedComponents/Modal'
import Card from 'sharedComponents/Card'
import { keys } from "lodash";
import { employeeManipulateCardlData } from "util/util";
import { CoPresentOutlined } from "@mui/icons-material";
import { employeePersonalDetailDataList,
        employeeProfessionalDetailDataList,
        employeeDataAPI,
        employeeShowState } from 'redux/reducer/employeeReducer';

const employeeTableData = data.map((item) => {
  return item;
});

const options = {
  filterType: 'dropdown',
};
class EmployeeList extends React.Component {
  constructor(props) {
    super(props);
    this.handleActionClick = this.handleActionClick.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.setModalBody = this.setModalBody.bind(this);
    this.state = { modalBody: [] }
  }
  
  componentDidMount() {
    const { employeeDataAPI } = this.props;
    employeeDataAPI()
    // return true;
  }

  handleActionClick(modalHeading, id, row) {
    this.setModalBody(row);
    this.props.employeeShowState(modalHeading);
    console.log(modalHeading)
    console.log(this.props)
  }

  handleModal(state) {
    this.props.employeeShowState(state);
  }

  async setModalBody(row) {
    const { employeePersonalDetails, employeeProfessionalDetails } = await employeeManipulateCardlData(row);
    await this.props.employeePersonalDetailDataList(employeePersonalDetails);
    await this.props.employeeProfessionalDetailDataList(employeeProfessionalDetails);
    const body = this.handleModalBody();
    this.setState({modalBody: body});
  }

  handleModalBody() {
    return (
      <>
        <Card
          title={'PERSONAL DETAILS :'}
          data={this.props.employeePersonalDetailsVal}
        />
        <Card
          title={'PROFESSIONAL DETAILS :'}
          data={this.props.employeeProfessionalDetailsVal}
        />
      </>
    );
  }

  render() {
    // console.log(this.props)
    const columns = [
      {
        name: "id",
        label: "ID",
        options: {
          display: false,
          filter: false
        }
      },
      {
        name: "empCode",
        label: "Employee Code",
        options: {
          display: false,
          filter: false
        }
      },
      {
        name: "firstName",
        label: "First Name",
        options: {
          filter: false,

        }
      },
      {
        name: "lastName",
        label: "Last Name",
        options: {
          filter: false,

        }
      },
      {
        name: "email",
        label: "Email",
        options: {
          filter: false,
          sort: false,
        }
      }, {
        name: "picture",
        label: "Picture",
        options: {
          filter: false,
          display: false,
          sort: false,
        }
      },

      {
        name: "phoneNumber",
        label: "Phone Number",
        options: {
          filter: false,
          sort: false,
        }
      },
      {
        name: "emergencyNumber",
        label: "emergencyNumber",
        options: {
          filter: false,
          sort: false,
          display: false
        }
      },
      {
        name: "role",
        label: "Role",
        options: {
          filter: false,
          sort: false,
          display: false
        }
      },
      {
        name: "designation",
        label: "Designation",
        options: {
          filter: true,
          sort: true,
        }
      },
      {
        name: "skill",
        label: "Skills",
        options: {
          filter: true,
          sort: true,
        }
      },
      {
        name: "status",
        label: "Status",
        options: {
          filter: false,
          sort: false,
        }
      },
      {
        name: "action",
        label: "Action",
        options: {
          filter: false,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <Action
                handleActionClick={this.handleActionClick}
                id={tableMeta.rowData[0]}
                row={tableMeta.tableData[tableMeta.rowIndex]}
              />
            )
          }
        }
      }
    ]

    return (
      <>
        <MUIDataTable
          title={"Employee List"}
          data={employeeTableData}
          columns={columns}
          options={options}
          onRowClick={this.getRowData}
        />
        {(this.props.employeeShowVal) &&
          <DataModal
            modalTitle={this.props.employeeShowVal}
            modalBody={this.state.modalBody}
            show={this.props.employeeShowVal}
            handleModal={this.handleModal}
          />
        }
      </>
    );
  }
};
const mapStateToProps = state => {
  return{
    employeePersonalDetailsVal: state.employeeReducer.employeePersonalDetails,
    employeeProfessionalDetailsVal :state.employeeReducer.employeeProfessionalDetails,
    employeeShowVal: state.employeeReducer.showState
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    employeePersonalDetailDataList: (employeePersonalDetails) => dispatch(employeePersonalDetailDataList(employeePersonalDetails)),
    employeeProfessionalDetailDataList: (employeeProfessionalDetails) => dispatch(employeeProfessionalDetailDataList(employeeProfessionalDetails)),
    employeeShowState: (showState) => dispatch(employeeShowState(showState)),
    employeeDataAPI: () => dispatch(employeeDataAPI())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList) 