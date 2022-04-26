import { useState, useContext } from "react";
import { appContext, ACTION_LIST } from "./context/AppContext";

import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Toast } from "primereact/toast";
import Table from "./components/Table";
import styles from "./app.module.css";
import Form from "./components/Form";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const {
    toastRef,
    userSelect,
    dispatch,
    isLoading,
    accesable,
    setUserSelect,
  } = useContext(appContext);

  const handleDelete = () => {
    userSelect.length > 0
      ? dispatch({
          type: ACTION_LIST.DELETE_USER,
          payload: userSelect,
        })
      : toastRef.current.show({
          severity: "error",
          summary: "Error",
          detail: "Please Select Users",
        });
    setUserSelect([]);
  };

  return (
    <>
      <Toast position="bottom-right" ref={toastRef} baseZIndex={1000} />
      <Card>
        <Dialog visible={showModal} onHide={() => setShowModal(false)}>
          <Form hideOnClick={setShowModal} />
        </Dialog>
        <div className={styles.flex}>
          <Table />
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Button
              disabled={!accesable}
              loading={isLoading}
              loadingIcon="pi pi-spin pi-spinner"
              className={styles.btn}
              label="Add user"
              onClick={() => setShowModal(true)}
              icon="pi pi-plus"
            />
            <Button
              disabled={!accesable}
              loading={isLoading}
              loadingIcon="pi pi-spin pi-spinner"
              label="Delete User"
              className="p-button-danger"
              icon="pi pi-trash"
              onClick={handleDelete}
            />
          </div>
        </div>
      </Card>
    </>
  );
};

export default App;
