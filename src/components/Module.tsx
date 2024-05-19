import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { useDisclosure } from "@nextui-org/modal";
import { ChevronDown, PencilLine, Trash2 } from "lucide-react";
import { SlOptionsVertical } from "react-icons/sl";
import EditModuleCard from "./EditModuleCard";
import { useState } from "react";

const Module = () => {
  const [open, setOpen] = useState(false);
  const [moduleName, setModuleName] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure({
    defaultOpen: false,
  });

  console.log(moduleName);

  return (
    <div className="w-full bg-white rounded-lg p-2 border flex justify-between">
      <div className="flex items-center gap-2">
        <div className="p-2 border rounded-full">
          <ChevronDown width={15} height={15} />
        </div>
        <div>
          <h3 className="text-medium font-semibold">
            Introduction to Trigonometry
          </h3>
          <p className="text-xs">Add items to this module</p>
        </div>
      </div>
      <Dropdown placement="bottom-end" className="rounded-lg outline-none">
        <DropdownTrigger>
          <Button
            variant="faded"
            className="rounded outline-none bg-[#f0f0f0] border-none"
            isIconOnly
          >
            <SlOptionsVertical />
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem
            key="edit"
            className="rounded"
            onPress={() => {
              onOpen();
              setOpen(true);
            }}
            startContent={<PencilLine width={15} height={15} />}
          >
            Edit module name
          </DropdownItem>
          <DropdownItem
            key="delete"
            className="rounded"
            startContent={
              <Trash2
                width={15}
                height={15}
                className="text-danger hover:text-danger"
              />
            }
          >
            <span className="text-danger hover:text-danger">Delete</span>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      {open && (
        <EditModuleCard
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          setModuleName={setModuleName}
        />
      )}
    </div>
  );
};

export default Module;
