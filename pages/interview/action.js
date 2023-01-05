
export default function Action(props) {
  return (
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Action
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <span className="dropdown-item" onClick={() => props.handleActionClick("Interview Details",props.id, props.row)}>Show Details</span>
        <span className="dropdown-item" onClick={()=> props.showTrial()}>Short Listing</span>
        <span className="dropdown-item">Interview Schedule</span>
        <span className="dropdown-item">Finalized</span>
        <span className="dropdown-item">Joining Process</span>
      </div>
    </div>
  );      
}