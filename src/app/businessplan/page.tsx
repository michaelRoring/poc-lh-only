"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Textarea } from "@/components/ui/textarea";
import { ChatPopup } from "@/components/ChatPopup";

export default function OrganizationForm() {
  const [formData, setFormData] = useState({
    currentProblem: "",
    idealOutcome: "",
  });
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleInputChange =
    (field: keyof typeof formData) =>
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">
        Understanding Your Organization
      </h1>

      <div className="mb-8 border rounded-lg p-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="font-semibold">Our Tip:</h2>
          <ChevronDown className="h-4 w-4" />
        </div>
        <div className="text-sm text-muted-foreground">
          <p className="mb-2">
            Key Considerations for Revenue Model Selection:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Access/Usage Type:</strong> The structure of your offering
              may heavily influence the model you want to adopt.
            </li>
            <li>
              <strong>Customer Lifetime Value (CLTV):</strong> If your CLTV is
              high, subscription models can be advantageous.
            </li>
            <li>
              <strong>Market Competition:</strong> Analyze your target market
              and competition to understand current revenue models.
            </li>
            <li>
              <strong>Pricing Strategy:</strong> Your chosen revenue model will
              influence your pricing strategy.
            </li>
            <li>
              <strong>Revenue Goals:</strong> Align your revenue targets with
              your model selection.
            </li>
          </ul>
        </div>
      </div>

      <Accordion type="single" collapsible className="space-y-4">
        {/* Previous accordion items remain the same */}
        <AccordionItem value="company-purpose">
          <AccordionTrigger>Your Core Vision</AccordionTrigger>
          <AccordionContent>
            <Textarea
              placeholder="What inspired this business and what principles guide it?"
              className="min-h-[100px]"
            />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="problem">
          <AccordionTrigger>The Problem You Solve</AccordionTrigger>
          <AccordionContent className="space-y-4">
            <Textarea
              placeholder="What's broken and how do you fix it?"
              className="min-h-[100px]"
            />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="solution">
          <AccordionTrigger>Why now?</AccordionTrigger>
          <AccordionContent>
            <Textarea
              placeholder="How does your solution fit the current landscape?"
              className="min-h-[100px]"
            />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="why-now">
          <AccordionTrigger>Your Target Market</AccordionTrigger>
          <AccordionContent>
            <Textarea
              placeholder="How many people need your solution?"
              className="min-h-[100px]"
            />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="market-size">
          <AccordionTrigger>Market players</AccordionTrigger>
          <AccordionContent>
            <Textarea
              placeholder="What sets you apart from alternatives?"
              className="min-h-[100px]"
            />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="competition">
          <AccordionTrigger>Revenue strategy</AccordionTrigger>
          <AccordionContent>
            <Textarea
              placeholder="How will your business generate income?"
              className="min-h-[100px]"
            />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="product">
          <AccordionTrigger>Team structure</AccordionTrigger>
          <AccordionContent>
            <Textarea
              placeholder="What talent do you need to succeed?"
              className="min-h-[100px]"
            />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="team">
          <AccordionTrigger>Growth Roadmap</AccordionTrigger>
          <AccordionContent>
            <Textarea
              placeholder="What are your key milestones?"
              className="min-h-[100px]"
            />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="team-facetor">
          <AccordionTrigger>Risk Factors</AccordionTrigger>
          <AccordionContent>
            <Textarea
              placeholder="What obstacles do you anticipate?"
              className="min-h-[100px]"
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="flex justify-between mt-8">
        <Button variant="outline">Previous</Button>
        <Button>Save Progress</Button>
      </div>

      {/* Chat Button */}
      <Button
        className="fixed bottom-4 right-4 rounded-full shadow-lg"
        size="icon"
        onClick={() => setIsChatOpen(true)}
      >
        <MessageCircle className="h-5 w-5" />
      </Button>

      {/* Chat Popup */}
      {isChatOpen && <ChatPopup onClose={() => setIsChatOpen(false)} />}
    </div>
  );
}
