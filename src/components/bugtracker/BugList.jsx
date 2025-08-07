import React, { useEffect, useState } from "react";

function BugList() {
  const [bugs, setBugs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/bugs")
      .then((res) => res.json())
      .then((data) => {
        setBugs(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Bug List</h2>
      <ul>
        {bugs.map((bug) => (
          <li key={bug.id}>
            <strong>{bug.code}</strong>: {bug.title} ({bug.status})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BugList;
