import { useContext, useState } from "react";
import { appContext } from "../context/AppContext";

import { ColumnGroup } from "primereact/columngroup";
import { Column } from "primereact/column";
import { Row } from "primereact/row";
import { DataTable } from "primereact/datatable";
import { useEffect } from "react";

const Table = () => {
  const { state, setUserSelect } = useContext(appContext);
  const [pageNumber, setPageNumber] = useState(1);
  const [userSelection, setUserSelection] = useState([]);

  useEffect(() => {
    const temp = userSelection.map((user) => user.id);
    setUserSelect(temp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userSelection]);

  const headerElements = (
    <ColumnGroup>
      <Row>
        <Column selectionMode="multiple" colSpan={1} field="select"></Column>
        <Column header="Name" field="name" colSpan={1}></Column>
        <Column header="Address" field="address" colSpan={1}></Column>
        <Column header="Number" field="number" colSpan={1}></Column>
        <Column header="Email" field="email" colSpan={1}></Column>
      </Row>
    </ColumnGroup>
  );

  return (
    <DataTable
      selectionAutoFocus="multiple"
      rows={5}
      paginator
      first={pageNumber}
      onPage={(e) => setPageNumber(e.first)}
      value={state.users}
      headerColumnGroup={headerElements}
      showGridlines
      selection={userSelection}
      responsiveLayout="scroll"
      cellSelection
    >
      <Column
        selectionMode="multiple"
        style={{ minWidth: "fit-content" }}
        colSpan={1}
        field="select"
      />
      <Column
        style={{ minWidth: "fit-content" }}
        colSpan={1}
        field="name"
      ></Column>
      <Column
        style={{ minWidth: "fit-content" }}
        colSpan={1}
        field="address"
      ></Column>
      <Column
        style={{ minWidth: "fit-content" }}
        colSpan={1}
        field="number"
      ></Column>
      <Column
        style={{ minWidth: "fit-content" }}
        colSpan={1}
        field="email"
      ></Column>
    </DataTable>
  );
};

export default Table;
