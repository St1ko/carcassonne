"use client";

import { useEffect, useState } from "react";

import { RoomInfo } from "@liveblocks/node";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";

import { useUser } from "@/app/context/user";

import { getRooms } from "../../actions/game";
import { CreateRoomDialog } from "../CreateRoomDialog/CreateRoomDialog";
import { RoomList } from "../RoomList/RoomList";

const RoomOverview: React.FC = () => {
  const [rooms, setRooms] = useState<RoomInfo[]>([]);
  const user = useUser();

  const updateRooms = (): void => {
    getRooms().then((rooms) => setRooms(rooms));
  };

  useEffect(() => {
    updateRooms();
  }, []);

  return (
    <Card size="3">
      <Flex direction="column" gap="4">
        <Flex justify="between" align="center" gap="2">
          <Flex direction="column">
            <Heading as="h1">Carcassonne</Heading>
            <Text size="2">Join a room or create your own</Text>
          </Flex>
          {user && (
            <CreateRoomDialog
              user={user}
              onCreateSuccess={updateRooms}
            ></CreateRoomDialog>
          )}
        </Flex>
        <RoomList rooms={rooms} onDeleteSuccess={updateRooms} />
      </Flex>
    </Card>
  );
};

export default RoomOverview;
