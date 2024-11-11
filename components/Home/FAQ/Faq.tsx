"use client";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

export default function FAQ() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <section className="mt-14 mb-6 md:mt-24 md:mb-16   p-10">
      <div className="my-10">
        <div className="flex justify-center">
          <span className="flex justify-end w-10 h-2 border-b-[8px] border-secondary" />
        </div>
        <h1 className="text-5xl font-bold text-center text-primary py-4">
          FAQ&apos;s
        </h1>
        <div className="flex justify-center">
          <span className="flex justify-end w-10 h-2 border-b-[8px] border-secondary" />
        </div>

        {/* <p className="text-primary pt-3">Got questions? We’ve got answers!</p> */}
      </div>

      <Accordion className="max-w-[85rem] mx-[10px] lg:mx-auto shadow-lg  text-gray-800 dark:text-white p-5">
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title={<span className="text-primary">Question:-1</span>}
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Accordion 2"
          title={<span className="text-primary">Question:-2</span>}
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Accordion 3"
          title={<span className="text-primary">Question:-3</span>}
        >
          {defaultContent}
        </AccordionItem>
      </Accordion>
    </section>
  );
}
