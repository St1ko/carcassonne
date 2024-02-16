import { useState } from "react";

import { RoomInfo } from "@liveblocks/node";
import { TrashIcon } from "@radix-ui/react-icons";
import { Card, Flex, IconButton, Text } from "@radix-ui/themes";
import Link from "next/link";

import { deleteRoom } from "@/app/actions/room";

interface ItemProps {
  room: RoomInfo;
  onDeleteSuccess: Function;
}

const ListItem: React.FC<ItemProps> = ({ room, onDeleteSuccess }) => {
  const [pending, setPending] = useState(false);
  const canDelete = room.metadata.gameState === "pregame";

  return (
    <Card key={room.id} asChild size="1" style={{ width: "100%" }}>
      <Link href={`/game/${room.id}`}>
        <Flex gap="2">
          <Text as="div" weight="bold">
            {room.id}
          </Text>
          <Text as="div">{room.metadata.gameState}</Text>

          {canDelete && (
            <IconButton
              variant="soft"
              style={{ marginLeft: "auto", cursor: "pointer" }}
              disabled={pending}
              onClick={(e) => {
                e.preventDefault();
                setPending(true);
                deleteRoom(room.id).then(() => {
                  onDeleteSuccess();
                  setPending(false);
                });
              }}
            >
              <TrashIcon width="18" height="18" />
            </IconButton>
          )}
        </Flex>
      </Link>
    </Card>
  );
};

interface ListProps {
  rooms: RoomInfo[];
  onDeleteSuccess: Function;
}

const RoomList: React.FC<ListProps> = ({ rooms, onDeleteSuccess }) => {
  return (
    <div>
      <Flex gap="2" direction="column">
        {rooms.map((room, idx) => (
          <ListItem
            key={idx}
            room={room}
            onDeleteSuccess={onDeleteSuccess}
          ></ListItem>
        ))}
      </Flex>
    </div>
  );
};

export { RoomList };
