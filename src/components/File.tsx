import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { ArrowDownToLine, PencilLine, Trash2 } from "lucide-react";
import { SlOptionsVertical } from "react-icons/sl";
import { MdPictureAsPdf } from "react-icons/md";
import EditUploadFile from "./EditUploadFile";
import { useState } from "react";
import { useDisclosure } from "@nextui-org/modal";

const FileCard = () => {
  const [open, setOpen] = useState(false);
  const [fileName, setFileName] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure({
    defaultOpen: false,
  });

  console.log(fileName);

  return (
    <div className="w-full bg-white rounded-lg p-2 border flex justify-between">
      <div className="flex items-center gap-2">
        <div className="p-2 bg-[#FFF5F7] text-[#F75961] rounded">
          <MdPictureAsPdf width={15} height={15} />
        </div>
        <div>
          <h3 className="text-sm">Introduction to the course</h3>
          <p className="text-xs">PDF</p>
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
            Rename
          </DropdownItem>
          <DropdownItem
            key="edit"
            showDivider
            className="rounded"
            startContent={<ArrowDownToLine width={15} height={15} />}
          >
            Download
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
        <EditUploadFile
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          setFileName={setFileName}
        />
      )}
    </div>
  );
};

export default FileCard;
