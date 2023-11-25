import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const DropDownMenu = async () => {
  const dropDownMenuItems = [
    {
      value: "brands",
      trigger: "brands",
      content: ["nike", "adidas", "puma", "wildcraft"],
    },
    {
      value: "shop",
      trigger: "shop",
      content: ["flipkart", "myntra", "ajio", "bravaland", "gweiland"],
    },
    {
      value: "Pricing",
      trigger: "Pricing",
    },
    {
      value: "Resources",
      trigger: "Resources",
    },
  ];

  return (
    <section className="lg:hidden">
      <Accordion type="single" collapsible className="w-full pt-4 pb-4">
        {dropDownMenuItems.map((item, index) => (
          <AccordionItem
            key={index}
            value={item.value}
            className="text-primary text-sm"
          >
            <AccordionTrigger className="font-semibold tracking-wide">
              {item.trigger}
            </AccordionTrigger>
            {item.content?.map((value, subIndex) => (
              <AccordionContent className="pl-9 pt-3" key={subIndex}>
                {value}
              </AccordionContent>
            ))}
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default DropDownMenu;
