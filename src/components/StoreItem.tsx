import { Component, Show } from "solid-js";
import { Box, Button, ButtonGroup, Flex, IconButton, Image } from "@hope-ui/solid";
import { IoRemove, IoAdd } from "solid-icons/io";

import formatCurrency from "../utilities/formatCurrency";

type Props = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const StoreItem: Component<Props> = (props) => {
  const quantity = 0;

  return (
    <Box borderWidth="1px" borderColor="$neutral6" borderRadius="$lg" overflow="hidden">
      <Image src={props.imgUrl} alt={props.name} objectFit="cover" h="200px" w="100%" />
      <Flex direction="column" p="$4" gap="$4">
        <Flex justifyContent="space-between">
          <Box fontWeight="$semibold">{props.name}</Box>
          <Box fontWeight="$semibold" color="$blackAlpha11">
            {formatCurrency(props.price)}
          </Box>
        </Flex>
        <Show
          when={quantity !== 0}
          fallback={
            <Button size="sm" colorScheme="info">
              Add to Cart
            </Button>
          }
        >
          <Flex justifyContent="space-between">
            <Button size="sm" colorScheme="danger" variant="outline">
              Remove
            </Button>

            <ButtonGroup size="sm" colorScheme="info" attached>
              <IconButton mr="-1px" icon={<IoRemove />} aria-label="remove" />
              <Button colorScheme="neutral" mr="-1px" variant="ghost">
                {quantity.toString()}
              </Button>
              <IconButton mr="-1px" icon={<IoAdd />} aria-label="add" />
            </ButtonGroup>
          </Flex>
        </Show>
      </Flex>
    </Box>
  );
};

export default StoreItem;
