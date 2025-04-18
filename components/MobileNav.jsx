import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";

import Nav from "./Nav";
import Logo from "./Logo";
import Socials from "./Socials";
import { useState } from "react";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openSheet = () => setIsOpen(true);
  const closeSheet = () => setIsOpen(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <AlignJustify
          className="cursor-pointer text-foreground hover:text-primary transition-colors"
          onClick={openSheet}
        />
      </SheetTrigger>

      <SheetContent className="bg-background text-foreground">
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            <Nav
              containerStyles="flex flex-col items-center gap-y-6"
              linkStyles="text-2xl text-muted-foreground hover:text-primary transition-colors"
              closeSheet={closeSheet}
            />
          </div>
          <Socials
            containerStyles="flex gap-x-4"
            iconsStyles="text-2xl text-muted-foreground hover:text-primary transition-colors"
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
