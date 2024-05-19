import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { Link, PencilLine, Trash2 } from "lucide-react";
import { useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import EditLinkCard from "./EditLinkCard";
import { useDisclosure } from "@nextui-org/modal";

const LinkCard = () => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [linkName, setLinkName] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure({
    defaultOpen: false,
  });

  console.log(linkName);

  return (
    <div className="w-full bg-white rounded-lg p-2 border flex justify-between">
      <div className="flex items-center gap-2">
        <div className="p-2 bg-[#EBFCFF] text-[#05B2C7] rounded">
          <Link width={15} height={15} />
        </div>
        <div>
          <h3 className="text-sm">Understanding Trigonometry</h3>
          <p className="text-xs">Link</p>
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
              setOpenEditModal(true);
              onOpen();
            }}
            startContent={<PencilLine width={15} height={15} />}
          >
            Edit
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
      {openEditModal && (
        <EditLinkCard
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          setLinkName={setLinkName}
        />
      )}
    </div>
  );
};

export default LinkCard;
