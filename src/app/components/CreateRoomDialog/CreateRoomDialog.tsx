import { useState } from "react";

import { Button, Dialog, Flex, Text, TextField } from "@radix-ui/themes";
import { useFormStatus } from "react-dom";

import { createRoom } from "@/app/actions/game";

const Submit: React.FC = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Create room"}
    </Button>
  );
};

interface Props {
  user: string;
  onCreateSuccess: Function;
}

const CreateRoomDialog: React.FC<Props> = ({ user, onCreateSuccess }) => {
  const [open, setOpen] = useState(false);

  async function formAction(formData: FormData) {
    createRoomWithUserId(formData).then(() => {
      setOpen(false);
      onCreateSuccess();
    });
  }
  const createRoomWithUserId = createRoom.bind(null, user);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>
        <Button>Create room</Button>
      </Dialog.Trigger>

      <Dialog.Content style={{ maxWidth: 450 }}>
        <Dialog.Title>Create room</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Please provide a name for your room.
        </Dialog.Description>

        <form action={formAction}>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Name
            </Text>
            <TextField.Input
              required
              name="name"
              placeholder="Enter a room name"
            />
          </label>

          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </Dialog.Close>
            <Submit />
          </Flex>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export { CreateRoomDialog };
