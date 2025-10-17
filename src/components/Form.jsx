import React, { useState } from "react";
import { Button } from "./Button";
import { Card } from "./Card";

export const Form = () => {
  const [data, setData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${data.name}\nEmail: ${data.email}`);
  };

  return (
    <Card title="Contact Form">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={data.name}
          onChange={handleChange}
          className="px-4 py-2 rounded-xl bg-white/60 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={data.email}
          onChange={handleChange}
          className="px-4 py-2 rounded-xl bg-white/60 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <Button type="submit">Submit</Button>
      </form>
    </Card>
  );
};
