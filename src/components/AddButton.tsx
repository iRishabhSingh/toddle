import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import {
  Link,
  Plus,
  Rows3,
  ChevronUp,
  ChevronDown,
  ArrowUpFromLine,
} from "lucide-react";
import { useState } from "react";

const AddButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dropdown placement="bottom-end" className="rounded-lg outline-none">
      <DropdownTrigger>
        <Button
          startContent={<Plus width={20} height={20} />}
          onClick={() => setOpen(!open)}
          endContent={
            open ? (
              <ChevronDown width={15} height={15} />
            ) : (
              <ChevronUp width={15} height={15} />
            )
          }
          className="bg-[#AF273E] text-white rounded p-2"
        >
          Add
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem
          key="module"
          className="rounded"
          startContent={<Rows3 width={20} height={20} />}
        >
          Create module
        </DropdownItem>
        <DropdownItem key="link" startContent={<Link width={20} height={20} />}>
          Add a link
        </DropdownItem>
        <DropdownItem
          key="upload"
          startContent={<ArrowUpFromLine width={20} height={20} />}
        >
          Upload
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default AddButton;
