import './AlertDialog.css';

const AlertDialog = ({ message, onCancel, onConfirm }) => {
  return (
    <div className="alert-dialog-overlay">
      <div className="alert-dialog">
        <p className="alert-message">{message}</p>
        <div className="alert-actions">
          <button className="alert-btn confirm-btn" onClick={onConfirm}>
            Confirm
          </button>
          <button className="alert-btn cancel-btn" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertDialog;
