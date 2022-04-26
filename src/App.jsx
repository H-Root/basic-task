import { useState, useContext } from "react";
import { appContext, ACTION_LIST } from "./context/AppContext";

import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Toast } from "primereact/toast";
import Table from "./components/content/Table";
import styles from "./app.module.css";
import Form from "./components/content/Form";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const { toastRef, userSelect, dispatch } = useContext(appContext);

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
              className={styles.btn}
              label="Add user"
              onClick={() => setShowModal(true)}
              icon="pi pi-plus"
            />
            <Button
              label="Delete User"
              className="p-button-danger"
              icon="pi pi-trash"
              onClick={() =>
                dispatch({ type: ACTION_LIST.DELETE_USER, payload: userSelect })
              }
            />
          </div>
        </div>
      </Card>
    </>
  );
};

export default App;
