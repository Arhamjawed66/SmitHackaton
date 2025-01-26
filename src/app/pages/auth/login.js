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

export default function ExampleSinup() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div >
      {/* Button to trigger dialog */}
      <Button variant="default" size="lg" onClick={() => setIsOpen(true)}>
        SINGUP
      </Button>

      {/* Dialog Component */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Singup Form</DialogTitle>
            <DialogDescription>
              Welcome! Please fill out your details to sign up.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            {/* Form Example */}
            <input
              type="number"
              placeholder="N.i.c"
              className="w-full px-4 py-2 border rounded-md"
            />
            
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-md"
            />
            <input
              type="password"
              placeholder="ex@xxxxx"
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

