import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { Input } from "@nextui-org/input";

const EditLinkCard: React.FC<{
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  setLinkName: (linkName: string) => void;
}> = ({ isOpen, onOpenChange, setLinkName }) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent className="p-4 rounded-lg">
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 font-semibold p-4">
              Edit link
            </ModalHeader>
            <ModalBody>
              <div>
                <p className="text-sm font-semibold">URL</p>
                <Input type="text" variant="bordered" className="w-full" />
              </div>
              <div>
                <p className="text-sm font-semibold">Display name</p>
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
                Save changes
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default EditLinkCard;
