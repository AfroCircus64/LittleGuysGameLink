import React, { useState } from "react";

function BugForm({ onBugCreated }) {
  const [form, setForm] = useState({
    code: "",
    title: "",
    description: "",
    platform: "",
    priority: "",
    status: "",
    assignee: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these with actual credentials
    const username = "user";
    const password = "40e9c188-9118-40ba-8128-441d2a02ed4e";

    // Create basic auth header
    const basicAuth = "Basic " + btoa(`${username}:${password}`);

    fetch("http://localhost:8080/api/bugs", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": basicAuth,
      },
      body: JSON.stringify(form),
    })
      .then((res) => {
	if (!res.ok) {
	  throw new Error(`HTTP error! Satus: ${res.status}`);
	}
	return res.json();
      })
      .then((bug) => {
        onBugCreated(bug);
        setForm({
          code: "",
          title: "",
          description: "",
          platform: "",
          priority: "",
          status: "",
          assignee: "",
        });
      })
      .catch((err) => {
        console.error("Error creating bug:", err);
        alert("Failed to create bug. See console for details.");
       });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="code" placeholder="Code" value={form.code} onChange={handleChange} required />
      <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
      <input name="platform" placeholder="Platform" value={form.platform} onChange={handleChange} />
      <input name="priority" placeholder="Priority" value={form.priority} onChange={handleChange} />
      <input name="status" placeholder="Status" value={form.status} onChange={handleChange} />
      <input name="assignee" placeholder="Assignee" value={form.assignee} onChange={handleChange} />
      <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} />
      <button type="submit">Create Bug</button>
    </form>
  );
}

export default BugForm;
