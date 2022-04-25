import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { useState } from "react";
import { Card } from "primereact/card";
import Table from "./components/content/Table";
// import DataTableColGroupDemo from "./components/content/Test";
import styles from "./app.module.css";
import Form from "./components/content/Form";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Card>
      <Dialog visible={showModal} onHide={() => setShowModal(false)}>
        <Form hideOnClick={setShowModal} />
      </Dialog>
      <div className={styles.flex}>
        <Table />
        <Button
          className={styles.btn}
          label="Add user"
          onClick={() => setShowModal(true)}
        />
      </div>
    </Card>
  );
};

export default App;
