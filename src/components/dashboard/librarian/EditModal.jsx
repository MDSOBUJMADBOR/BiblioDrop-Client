"use client";


import { Envelope } from "@gravity-ui/icons";
import {
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextArea,
  TextField,
} from "@heroui/react";
import { SquarePen } from "lucide-react";

const EditModal = ({ book }) => {
// console.log(book,'book');
const {_id,title,author,category,deliveryFee,description,status} = book;


const onSubmit = async (e) => {
e.preventDefault();
const formData = new FormData(e.currentTarget);
const item = Object.fromEntries(formData.entries());

// console.log(item,'form');

const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookpost/${_id}` , {
  method: "PATCH",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify(item)
})
const data = await res.json(); 
// console.log(data,'data');

 // ✅ success check
  if (data.modifiedCount > 0) {
    alert("Book updated successfully ✅");
  } else {
    alert("No changes detected ⚠️");
  }

}


  return (
    <Modal>
      <Button className="rounded-md">
        <SquarePen size={16} />
      </Button>

      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-lg">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Icon>
                <Envelope className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Edit Book</Modal.Heading>
            </Modal.Header>

            <Modal.Body className="p-6">
              <Surface>
                <form onSubmit={onSubmit} className="flex flex-col gap-4">

                  <TextField className="w-full" name="title" isRequired  defaultValue={title}>
                    <Label>Title</Label>
                    <Input className="w-full" name="title"  /> 
                  </TextField>

                
                  <TextField className="w-full" name="author" isRequired  defaultValue={author}>
                    <Label>Author</Label>
                     <Input className="w-full" name="author"  /> 
                  </TextField>

                  <TextField className="w-full" name="category" isRequired defaultValue={category}>
                    <Label>Category</Label>
                    <Input className="w-full" name="category"  /> 
                  </TextField>

                  <TextField className="w-full" name="deliveryFee" isRequired  defaultValue={deliveryFee}>
                    <Label>Delivery Fee</Label>
                    <Input className="w-full" name="deliveryFee"  /> 
                  </TextField>

                  <TextField className="w-full" name="status" isRequired  defaultValue={status}>
                    <Label>Status</Label>
                    <Input className="w-full" name="status"  /> 
                  </TextField>

                  <TextField className="w-full" name="description" isRequired  defaultValue={description}>
                    <Label>Description</Label>
                    <TextArea
                      name="description"
                     className="w-full"
                    />
                  </TextField>

                  <Modal.Footer>
                    
                    <Button type="submit" slot="close">
                      Save
                    </Button>
                  </Modal.Footer>

                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default EditModal;