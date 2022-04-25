import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { useState } from "react";

const App = () => {
  const [state, setState] = useState(true);

  return (
    <div>
      <Dialog visible={state} onHide={() => setState(false)}></Dialog>
      <Button />
    </div>
  );
};

export default App;
