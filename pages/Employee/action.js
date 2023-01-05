export default function Action(props) {
  return (
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Action
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <span className="dropdown-item" onClick={() => props.handleActionClick("Employee Details",props.id, props.row)}>Show Details</span>
      </div>
    </div>
  );      
}