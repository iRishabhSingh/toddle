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

const EditModuleCard: React.FC<{
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  setModuleName: (moduleName: string) => void;
}> = ({ isOpen, onOpenChange, setModuleName }) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent className="p-4 rounded-lg">
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 font-semibold p-4">
              Edit Module
            </ModalHeader>
            <ModalBody>
              <label htmlFor="moduleName" className="text-sm font-semibold">
                Module Name
              </label>
              <Input
                id="moduleName"
                type="text"
                onChange={(e) => setModuleName(e.target.value)}
                variant="bordered"
                className="w-full"
              />
            </ModalBody>
            <ModalFooter>
              <Button
                variant="faded"
                onPress={onClose}
                className="rounded-lg mr-2"
              >
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

export default EditModuleCard;
