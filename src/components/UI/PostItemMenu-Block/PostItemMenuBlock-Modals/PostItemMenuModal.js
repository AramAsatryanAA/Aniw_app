"use client";

function PostItemMenuModal({ onCloseMenuModal, onShowReportModal }) {
  return (
    <div className="select-options-card-type">
      <button
        className="select-option-item-type justify-start"
        onClick={onCloseMenuModal}
      >
        Edit
      </button>
      <button
        className="select-option-item-type justify-start"
        onClick={onCloseMenuModal}
      >
        Translate to English
      </button>
      <button
        className="select-option-item-type justify-start"
        onClick={onShowReportModal}
      >
        Report
      </button>
    </div>
  );
}

export default PostItemMenuModal;
