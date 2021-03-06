import React from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
  const { register, handleSubmit } = useForm();
  function refreshPage() {
    window.location.reload(false);
  }

  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/service`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };
  return (
    <div className="w-50 mx-auto mt-4 mb-4">
      <h1 className="text-center">Add a Book</h1>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-2"
          placeholder="Name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <textarea
          className="mb-2"
          placeholder="Description"
          {...register("description")}
        />
        <input
          className="mb-2"
          placeholder="Price"
          type="number"
          {...register("price")}
        />
        <input
          className="mb-2"
          placeholder="Photo URL"
          type="text"
          {...register("img")}
        />
        <input
          className="mb-2"
          placeholder="Supplier"
          type="text"
          {...register("supplier")}
        />

        <input
          className="mb-2"
          placeholder="Available Books"
          type="number"
          {...register("quantity")}
        />
        <input onClick={refreshPage} type="submit" value="Add Book" />
      </form>
    </div>
  );
};

export default AddService;
