import { ColumnGroup } from "primereact/columngroup";
import { Column } from "primereact/column";
import { Row } from "primereact/row";
import { useContext, useState } from "react";
import { appContext } from "../../context/AppContext";

import { DataTable } from "primereact/datatable";

const Table = () => {
  const { state } = useContext(appContext);
  const [pageNumber, setPageNumber] = useState(1);
  const [userSelection, setUserSelection] = useState(0);

  console.log(userSelection);

  const headerElements = (
    <ColumnGroup>
      <Row>
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
      scrollable
      scrollDirection="vertical"
      selection={userSelection}
      onSelectionChange={(e) => setUserSelection(e.value)}
    >
      <Column selectionMode="multiple" />

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
