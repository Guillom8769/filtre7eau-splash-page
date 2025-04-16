
import { useState, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";

interface AccordionItemProps {
  title: string;
  children: ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
}

const AccordionItem = ({ title, children, isOpen = false, onToggle }: AccordionItemProps) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-4 px-2 flex items-center justify-between text-left font-medium"
        onClick={onToggle}
      >
        <span>{title}</span>
        <span className="text-water">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-2 text-gray-600">{children}</div>
      </div>
    </div>
  );
};

interface AccordionProps {
  items: {
    title: string;
    content: ReactNode;
  }[];
  className?: string;
}

const Accordion = ({ items, className }: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={cn("bg-white rounded-lg shadow-md overflow-hidden", className)}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
