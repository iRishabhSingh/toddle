import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { Input } from "@nextui-org/input";

const EditUploadFile: React.FC<{
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  setFileName: (fileName: string) => void;
}> = ({ isOpen, onOpenChange, setFileName }) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent className="p-4 rounded-lg">
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 font-semibold p-4">
              Rename file
            </ModalHeader>
            <ModalBody>
              <p className="text-sm font-semibold">File name</p>
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
                Save changes
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default EditUploadFile;
