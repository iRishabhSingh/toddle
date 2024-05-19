import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

interface AddLinkCardProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const AddLinkCard: React.FC<AddLinkCardProps> = ({ isOpen, onOpenChange }) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur">
      <ModalContent className="p-4 rounded-lg">
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 font-semibold p-4">
              Create New Link
            </ModalHeader>
            <ModalBody className="space-y-4">
              <div>
                <p className="text-sm font-semibold">URL</p>
                <Input type="text" variant="bordered" className="w-full" />
              </div>
              <div>
                <p className="text-sm font-semibold">Display Name</p>
                <Input type="text" variant="bordered" className="w-full" />
              </div>
            </ModalBody>
            <ModalFooter className="flex justify-end gap-2">
              <Button variant="faded" onPress={onClose} className="rounded-lg">
                Cancel
              </Button>
              <Button
                className="bg-[#008392] text-white rounded-lg"
                onPress={onClose}
              >
                Add
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default AddLinkCard;
