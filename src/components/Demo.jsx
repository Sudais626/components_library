import React, { useState } from "react";
import { Button } from "./Button";
import { IconButton } from "./IconButton";
import { Card } from "./Card";
import { Modal } from "./Modal";
import { Input } from "./Input";
import { Badge } from "./Badge";

export default function Demo() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card title="Buttons Showcase" footer="Example of different button styles">
        <div className="flex flex-wrap gap-3">
          <Button>Solid</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
        <div className="mt-4">
          <Button onClick={() => setOpen(true)}>Open Modal</Button>
        </div>
      </Card>

      <Card title="Form Elements" footer="Simple input + badge examples">
        <Input label="Your Name" placeholder="Enter your name..." />
        <div className="mt-4">
          <Badge>Gradient Badge</Badge>
        </div>
      </Card>

      <Modal open={open} onClose={() => setOpen(false)} title="Confirm Action">
        <p>Are you sure you want to continue?</p>
      </Modal>
    </div>
  );
}
