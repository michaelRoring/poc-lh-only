"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface ChatPopupProps {
  onClose: () => void;
}

export function ChatPopup({ onClose }: ChatPopupProps) {
  return (
    <Card className="fixed bottom-20 right-4 w-[350px] shadow-lg z-50">
      <CardHeader className="flex flex-row items-center justify-between p-4">
        <h3 className="font-semibold">Chat Support</h3>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="p-4">
        <div className="h-[300px] overflow-y-auto space-y-4">
          <div className="bg-muted p-3 rounded-lg text-sm">
            Hello! How can I help you today?
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-2">
        <div className="flex w-full gap-2">
          <Input placeholder="Type your message..." className="flex-1" />
          <Button>Send</Button>
        </div>
      </CardFooter>
    </Card>
  );
}
