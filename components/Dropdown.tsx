import React from "react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import DropDownMenu from "@/components/DropdownMenu";

const DropDown = () => {
  return (
    <section className="lg:hidden">
      <Sheet>
        <SheetTrigger>
          <div className="">
            <img
              src="/hamburger.svg"
              alt="hamburger"
              width={35}
              height={35}
              // style={{ cursor: "pointer" }}
            />
          </div>
        </SheetTrigger>
        <SheetContent
          side="bottom"
          className="absolute top-20 lg:hidden bg-gray-500 text-white text-xl"
        >
          <DropDownMenu />
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default DropDown;
