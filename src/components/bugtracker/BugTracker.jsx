import React, { useState } from "react";
import BugList from "./BugList";
import BugForm from "./BugForm";

function BugTracker() {
  const [bugs, setBugs] = useState([]);

  const handleBugCreated = (bug) => {
    setBugs((prev) => [...prev, bug]);
  };

  return (
    <div>
      <h1>Bug Tracker</h1>
      <BugForm onBugCreated={handleBugCreated} />
      <BugList />
    </div>
  );
}

export default BugTracker;
