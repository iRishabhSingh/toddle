import {
  Link,
  Plus,
  Rows3,
  ChevronUp,
  ChevronDown,
  ArrowUpFromLine,
} from "lucide-react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { useState } from "react";
import { Button } from "@nextui-org/button";
import { useDisclosure } from "@nextui-org/modal";

import AddLinkCard from "./AddLinkCard";
import AddModuleCard from "./AddModuleCard";

const AddButton: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [linkOpen, setLinkOpen] = useState(false);
  const [moduleOpen, setModuleOpen] = useState(false);
  const [moduleName, setModuleName] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure({
    defaultOpen: false,
  });

  console.log(moduleName);

  const handleDropdownToggle = () => setDropdownOpen(!dropdownOpen);

  const handleModuleOpen = () => {
    onOpen();
    setModuleOpen(true);
    setLinkOpen(false);
  };

  const handleLinkOpen = () => {
    onOpen();
    setModuleOpen(false);
    setLinkOpen(true);
  };

  const handleUploadOpen = () => {
    onOpen();
    setModuleOpen(false);
    setLinkOpen(false);
  };

  return (
    <>
      <Dropdown placement="bottom-end" className="rounded-lg outline-none">
        <DropdownTrigger>
          <Button
            startContent={<Plus width={20} height={20} />}
            onClick={handleDropdownToggle}
            endContent={
              dropdownOpen ? (
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
        <DropdownMenu aria-label="Add Actions">
          <DropdownItem
            key="module"
            className="rounded"
            onPress={handleModuleOpen}
            startContent={<Rows3 width={20} height={20} />}
          >
            Create Module
          </DropdownItem>
          <DropdownItem
            key="link"
            className="rounded"
            onPress={handleLinkOpen}
            startContent={<Link width={20} height={20} />}
          >
            Add a Link
          </DropdownItem>
          <DropdownItem
            key="upload"
            className="rounded"
            onPress={handleUploadOpen}
            startContent={<ArrowUpFromLine width={20} height={20} />}
          >
            Upload
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      {moduleOpen && (
        <AddModuleCard
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          setModuleName={setModuleName}
        />
      )}
      {linkOpen && <AddLinkCard isOpen={isOpen} onOpenChange={onOpenChange} />}
    </>
  );
};

export default AddButton;
