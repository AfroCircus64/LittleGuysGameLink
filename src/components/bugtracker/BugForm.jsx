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
    fetch("/api/bugs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
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
