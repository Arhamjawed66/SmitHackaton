"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export default function DialogExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-center h-screen">
      {/* Button to trigger dialog */}
      <Button variant="outline" size="lg" onClick={() => setIsOpen(true)}>
        Signup
      </Button>

      {/* Dialog Component */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Signup Form</DialogTitle>
            <DialogDescription>
              Welcome! Please fill out your details to sign up.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            {/* Form Example */}
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border rounded-md"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-md"
            />
            <Button className="w-full" onClick={() => setIsOpen(false)}>
              Submit
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
