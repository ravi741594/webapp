import MUIDataTable from "mui-datatables";
import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import flatdata from "./manipulateData";
import Action from "./action";
import DataModal from "sharedComponents/Modal";
import Card from "sharedComponents/Card";
import { keys } from "lodash";
import { interviewManipulateCardlData } from "util/util";
import { CoPresentOutlined } from "@mui/icons-material";
import Trial from "../Trial";
import {
  interviewPersonalDetailDataList,
  interviewProfessionalDetailDataList,
  interviewDataAPI,
  interviewShowState,
} from "redux/reducer/interviewReducer";
import router from "next/router";

const interviewTableData = flatdata.map((item) => {
  return item;
});

const options = {
  filterType: "dropdown",
};
class InterviewList extends React.Component {
  constructor(props) {
    super(props);
    this.handleActionClick = this.handleActionClick.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.setModalBody = this.setModalBody.bind(this);
    this.showTrial = this.showTrial.bind(this);
    this.state = { modalBody: [], Trial: false, tableState: true };
  }

  componentDidMount() {
    const { interviewDataAPI } = this.props;
    interviewDataAPI();
  }

  handleActionClick(modalHeading, id, row) {
    this.setModalBody(row);
    this.props.interviewShowState(modalHeading);
  }

  handleModal(state) {
    this.props.interviewShowState(state);
  }

  showTrial() {
    this.setState({
      Trial: true,
      tableState: false,
    });
  }

  funcCandidateForm() {
    router.push("/candidateForm");
  }


  async setModalBody(row) {
    const { interviewPersonalDetails, interviewProfessionalDetails } =
      await interviewManipulateCardlData(row);
    // console.log("Persion Details===============>", interviewPersonalDetails);
    await this.props.interviewPersonalDetailDataList(interviewPersonalDetails);
    await this.props.interviewProfessionalDetailDataList(
      interviewProfessionalDetails
    );
    const body = this.handleModalBody();
    this.setState({ modalBody: body });
  }

  handleModalBody() {
    return (
      <>
        <Card
          title={"personal Details :"}
          data={this.props.personalDetailsVal}
        />
        <Card
          title={"professional Details :"}
          data={this.props.professionalDetailsVal}
        />
      </>
    );
  }

  render() {
    const columns = [
      {
        name: "id",
        label: "ID",
        options: {
          display: false,
          filter: false,
        },
      },
      {
        name: "firstName",
        label: "First Name",
        options: {
          filter: false,
        },
      },
      {
        name: "lastName",
        label: "Last Name",
        options: {
          filter: false,
        },
      },
      {
        name: "email",
        label: "Email",
        options: {
          filter: false,
          sort: false,
        },
      },
      {
        name: "gender",
        label: "Gender",
        options: {
          filter: false,
          display: false,
          sort: false,
        },
      },

      {
        name: "contactNumber",
        label: "Contact Number",
        options: {
          filter: false,
          sort: false,
        },
      },
      {
        name: "alternateContactNumber",
        label: "Alternative Contact Number",
        options: {
          filter: false,
          sort: false,
          display: false,
        },
      },
      {
        name: "designation",
        label: "Designation",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "profile",
        label: "Profile",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "experience",
        label: "Experience",
        options: {
          filter: false,
          sort: false,
        },
      },
      {
        name: "current_ctc",
        label: "Current CTC",
        options: {
          filter: false,
          sort: false,
        },
      },
      {
        name: "expectedCTC",
        label: "Expected CTC",
        options: {
          filter: false,
          sort: false,
          display: false,
        },
      },
      {
        name: "notice_period",
        label: "Notice Period",
        options: {
          filter: false,
          sort: false,
        },
      },
      {
        name: "referrer_type",
        label: "Referrer Type",
        options: {
          filter: true,
          sort: false,
          display: false,
        },
      },
      {
        name: "referrer_name",
        label: "Referrer Name",
        options: {
          filter: false,
          sort: false,
          display: false,
        },
      },
      {
        name: "status",
        label: "Status",
        options: {
          filter: false,
          sort: false,
        },
      },
      {
        name: "resume",
        label: "Resume",
        options: {
          filter: false,
          sort: false,
        },
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
                showTrial={this.showTrial}
              />
            );
          },
        },
      },
    ];

    return (
      <>
        {this.state.tableState === true && (
          <MUIDataTable
            title={
              <div className="d-flex">
                <button
                  className="btn btn-light border border-1  border-dark"
                  onClick={this.funcCandidateForm}
                >
                  Interview Form
                </button>
              </div>
            }
            data={interviewTableData}
            columns={columns}
            options={options}
            onRowClick={this.getRowData}
          />
        )}

        {this.props.showVal && (
          <DataModal
            modalTitle={this.props.showVal}
            modalBody={this.state.modalBody}
            show={this.props.showVal}
            handleModal={this.handleModal}
          />
        )}
        {this.state.Trial === true && this.props.showVal == false && <Trial />}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    personalDetailsVal: state.interviewReducer.personalDetails,
    professionalDetailsVal: state.interviewReducer.professionalDetails,
    showVal: state.interviewReducer.show,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    interviewPersonalDetailDataList: (personalDetails) =>
      dispatch(interviewPersonalDetailDataList(personalDetails)),
    interviewProfessionalDetailDataList: (professionalDetails) =>
      dispatch(interviewProfessionalDetailDataList(professionalDetails)),
    interviewShowState: (show) => dispatch(interviewShowState(show)),
    interviewDataAPI: () => dispatch(interviewDataAPI()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(InterviewList);
