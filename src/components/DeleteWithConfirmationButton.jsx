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
        className="block cursor-pointer rounded-full bg-red-100 p-2"
      >
        {message}
      </div>
    </div>
  );
}

export default DeleteWithConfirmationButton;
