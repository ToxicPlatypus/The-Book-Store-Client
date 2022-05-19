import React from "react";

const Comment = () => {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div className="container">
      <h2 className="text-center text-primary">Please Leave a Comment</h2>
      <div class="form-group purple-border w-50 mx-auto mt-4">
        <label for="exampleFormControlTextarea4">
          Enter your Comment Below
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea4"
          rows="3"
        ></textarea>
        <button
          onClick={refreshPage}
          className="btn btn-primary text-center mt-2 mb-4"
        >
          Comment
        </button>
      </div>
    </div>
  );
};

export default Comment;
