
import { AlertDialog, Button } from '@heroui/react';
import { CircleX, X } from 'lucide-react';
import { redirect } from 'next/navigation';
import React from 'react';

const AddBookDelect = ({user}) => {
    console.log(user,'user');
const {_id} = user;
console.log(user,'userlist');

 const handleDelete = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookpost/${_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json", 
      },

    });
    const data = await res.json();
    redirect('/dashboard/librarian/overview')
    // console.log(data,'data');
  };

          return (
                    <div>
 <AlertDialog>
      <Button className="rounded-md" variant="danger">  <X /></Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete project permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>My Awesome Project</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body> 
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Confirm Cancel 
              </Button>
            </AlertDialog.Footer> 
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>

                    </div>
          );
};

export default AddBookDelect;