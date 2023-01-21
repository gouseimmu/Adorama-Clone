import React from "react"
import {Modal,ModalOverlay,ModalBody,useDisclosure,Button,ModalContent,ModalFooter,ModalHeader,ModalCloseButton,Text
,FormLabel,Input} from "@chakra-ui/react"

function AddProduct() {
  const OverlayOne = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'
    />
  )

  const OverlayTwo = () => (
    <ModalOverlay
      bg='none'
      backdropFilter='auto'
      backdropInvert='80%'
      backdropBlur='2px'
    />
  )

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = React.useState(<OverlayOne />)
  const style={mb:"5%"}

  return (
    <>
      <Button
        onClick={() => {
          setOverlay(<OverlayOne />)
          onOpen()
        }}
      >
        Use Overlay one
      </Button>
      <Button
        ml='4'
        onClick={() => {
          setOverlay(<OverlayTwo />)
          onOpen()
        }}
      >
        Use Overlay two
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Add Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormLabel>Title</FormLabel>
            <Input mb="4%" placeholder="Enter Title of Product" ></Input>
            <FormLabel>Image URL</FormLabel>
            <Input mb="4%" placeholder="Enter Image URL of Product"></Input>
            <FormLabel >Category</FormLabel>
            <Input mb="4%" placeholder="Enter Category of Product"></Input>
            <FormLabel>Brand</FormLabel>
            <Input mb="4%" placeholder="Enter Brand of Product"></Input>
            <FormLabel>Price</FormLabel>
            <Input mb="4%" placeholder="Enter Price of Product"></Input>
          </ModalBody>
          <ModalFooter gap="5%">
            <Button colorScheme="red" onClick={onClose}>Close</Button>
            <Button colorScheme="green" >Add Product</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
export default AddProduct;