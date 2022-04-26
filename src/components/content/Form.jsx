import { useState } from "react";
import { useContext } from "react";
import { appContext, ACTION_LIST } from "../../context/AppContext";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useId } from "react";

const Form = ({ hideOnClick }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    number: "",
  });
  const { dispatch, toastRef } = useContext(appContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !(
        formData.address.length === 0 ||
        formData.name.length === 0 ||
        formData.email.length === 0 ||
        formData.number.length === 0
      )
    ) {
      dispatch({ type: ACTION_LIST.ADD_USER, payload: { formData } });
      hideOnClick(false);
      toastRef.current.show({
        severity: "success",
        summary: "Success",
        detail: "Added A New User Succesfully",
        id: useId,
      });
    } else {
      toastRef.current.show({
        severity: "error",
        summary: "Error",
        detail: "Please fill all the form",
      });
      //! toast.current.show({severity: 'success', summary: 'Success Message', detail: 'Order submitted'});
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "10px",
      }}
    >
      <span className="p-float-label">
        <InputText
          id="in"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <label htmlFor="in">Username</label>
      </span>
      <span className="p-float-label">
        <InputText
          id="in"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <label htmlFor="in">Email</label>
      </span>
      <span className="p-float-label">
        <InputText
          id="in"
          value={formData.address}
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
        />
        <label htmlFor="in">Address</label>
      </span>
      <span className="p-float-label">
        <InputText
          id="in"
          value={formData.number}
          onChange={(e) => setFormData({ ...formData, number: e.target.value })}
        />
        <label htmlFor="in">Number</label>
      </span>
      <Button label="Add New User" icon="pi-plus pi" />
    </form>
  );
};

export default Form;
