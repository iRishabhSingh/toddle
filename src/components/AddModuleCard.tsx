import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { Input } from "@nextui-org/input";

const AddModuleCard: React.FC<{
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  setModuleName: (moduleName: string) => void;
}> = ({ isOpen, onOpenChange, setModuleName }) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur">
      <ModalContent className="p-4 rounded-lg">
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 font-semibold p-4">
              Create new module
            </ModalHeader>
            <ModalBody>
              <p className="text-sm font-semibold">Module name</p>
              <Input
                type="text"
                onChange={(e) => setModuleName(e.target.value)}
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
                Create
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default AddModuleCard;
