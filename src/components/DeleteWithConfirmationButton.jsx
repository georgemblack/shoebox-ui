import { useState } from "react";

function DeleteWithConfirmationButton(props) {
  const [activated, setActivated] = useState(false);
  const message = activated ? "🔥" : "🗑";

  const handleClick = () => {
    if (activated) props.handleDelete();
    else setActivated(true);
  };

  return (
    <div>
      <div
        onClick={handleClick}
        className="inline-block cursor-pointer rounded-full bg-gray-200 p-2"
      >
        {message}
      </div>
    </div>
  );
}

export default DeleteWithConfirmationButton;
