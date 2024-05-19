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

interface EditLinkCardProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  setLinkName: (linkName: string) => void;
}

const EditLinkCard: React.FC<EditLinkCardProps> = ({
  isOpen,
  onOpenChange,
  setLinkName,
}) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent className="p-4 rounded-lg">
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 font-semibold p-4">
              Edit Link
            </ModalHeader>
            <ModalBody>
              <div>
                <p className="text-sm font-semibold">URL</p>
                <Input type="text" variant="bordered" className="w-full" />
              </div>
              <div>
                <p className="text-sm font-semibold">Display Name</p>
                <Input
                  type="text"
                  variant="bordered"
                  className="w-full"
                  onChange={(e) => setLinkName(e.target.value)}
                />
              </div>
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

export default EditLinkCard;
