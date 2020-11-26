import React from "react";

const Message = () => {
  const submit = (e) => {
    // e.preventDefault();
  };
  return (
    <div>
      <form name="login-form" onSubmit={submit}></form>
    </div>
  );
};

export default Message;
