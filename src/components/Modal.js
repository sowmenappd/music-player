import { Modal as Mdl, Icon } from "atomize";

import { Flex } from "components";

const Modal = ({
  children,
  isOpen,
  onClose,
  cancelIconProps,
  containerProps,
  ...props
}) => {
  const ModalBody = ({ content, ...containerProps }) => (
    <Flex {...containerProps}>{content}</Flex>
  );

  return (
    <Mdl
      isOpen={isOpen}
      onClose={onClose}
      align="center"
      rounded="md"
      {...props}
    >
      <Icon
        name="Cross"
        pos="absolute"
        top="1rem"
        right="1rem"
        size="16px"
        onClick={onClose}
        cursor="pointer"
        {...cancelIconProps}
      />
      {children && <ModalBody content={children} />}
    </Mdl>
  );
};

export default Modal;
