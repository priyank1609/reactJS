import { useState } from "react";

function CousinToCousin() {
  const [cousinData, setCousinData] = useState("");

  return (
    <>
      <ParentA setCousinData={setCousinData} />
      <ParentB cousinData={cousinData} />
    </>
  );
}

/* -------- branch A -------- */

function ParentA({ setCousinData }) {
  return <CousinA setCousinData={setCousinData} />;
}

function CousinA({ setCousinData }) {
  return (
    <button onClick={() => setCousinData("Hello from Cousin A")}>
      Send to cousin B
    </button>
  );
}

/* -------- branch B -------- */

function ParentB({ cousinData }) {
  return <CousinB cousinData={cousinData} />;
}

function CousinB({ cousinData }) {
  return <p>From cousin A: {cousinData}</p>;
}

export default CousinToCousin