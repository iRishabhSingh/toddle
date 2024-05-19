import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

interface EditUploadFileProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  setFileName: (fileName: string) => void;
}

const EditUploadFile: React.FC<EditUploadFileProps> = ({
  isOpen,
  onOpenChange,
  setFileName,
}) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent className="p-4 rounded-lg">
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 font-semibold p-4">
              Rename File
            </ModalHeader>
            <ModalBody>
              <p className="text-sm font-semibold">File Name</p>
              <Input
                type="text"
                onChange={(e) => setFileName(e.target.value)}
                variant="bordered"
                className="w-full"
              />
            </ModalBody>
            <ModalFooter>
              <Button variant="faded" onPress={onClose} className="rounded-lg">
                Cancel
              </Button>
              <Button
                className="bg-[#008392] text-white rounded-lg"
                onPress={onClose}
              >
                Save Changes
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default EditUploadFile;
