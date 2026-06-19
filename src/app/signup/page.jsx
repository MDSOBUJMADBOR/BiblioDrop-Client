"use client";
// import { authClient } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Fieldset,
  Form,
  Input,
  Label, 
  Surface,
  ListBox,
  Select,
  TextField,
  Separator,
} from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
// import { redirect } from "next/navigation";


export default function SignUpPage() {
   const [loading, setLoading] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());


 const password = user.password;
    const confirm = user.confirmPassword;

    // ✅ Password match check
    if (password !== confirm) {
      alert("Passwords do not match");
      setLoading(false);
      return;
    }
console.log(user,'user');

    // await authClient.signUp.email({
    //   ...user,
    //   plan: 'free',
    // });

    // redirect('/')
  };

  const handleGoogleSignin = async () => {

  }

  return (
   <div className="bg-cyan-900 min-h-screen flex items-center justify-center">
     <div className="bg-gray-500 w-full max-w-lg   rounded-2xl  p-8  border ">
      <Surface className="w-full bg-gray-500">
        <Form onSubmit={onSubmit}>
          <Fieldset className="w-full">
            <Fieldset.Legend className="text-3xl font-bold text-center text-white">Create Your Account</Fieldset.Legend>
            <Description className="font-bold text-center text-white text-lg">Join BiblioDrop today!</Description>
            <Fieldset.Group>
              <TextField isRequired name="name">
                <Label className="text-white">Full Name</Label>
                <Input placeholder="You Name" variant="secondary" />
                <FieldError />
              </TextField>

              <TextField name="image" type="url">
                <Label className="text-white">Image URL</Label>
                <Input placeholder="Image URL" variant="secondary" />
                <FieldError />
              </TextField>
              <TextField isRequired name="email" type="email">
                <Label className="text-white">Email</Label>
                <Input placeholder="Your Email" variant="secondary" />
                <FieldError />
              </TextField>

              <TextField isRequired name="password" type="password">
                <Label className="text-white">Password</Label>
                <Input placeholder="Password" variant="secondary" />
                <FieldError />
              </TextField>
              <TextField isRequired name="confirmPassword" type="password">
                <Label className="text-white"> Confirm Password</Label>
                <Input placeholder="Confirm Password" variant="secondary" />
                <FieldError />
              </TextField>

              <Select isRequired name="role" placeholder="Select one">
                <Label className="text-white">Signup As</Label>
                <Select.Trigger>
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="Reader" textValue="Reader">
                      Reader
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Librarian" textValue="Librarian">
                      Librarian
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </Fieldset.Group>

            <Button type="submit" className={"w-full bg-cyan-700"} disabled={loading}>
               {loading ? "Registering..." : "Register"}
            </Button>
          </Fieldset>
        </Form>
         {/* Divider */}
          <div className="flex items-center gap-3 my-5">
            <Separator className="flex-1" />
            <div className="text-xs sm:text-sm whitespace-nowrap text-white">
              Or continue with
            </div>
            <Separator className="flex-1" />
          </div>
           {/* Google */}
          <Button
          onClick={handleGoogleSignin}
            variant="outline"
            className="w-full rounded-[10px] hover:bg-green-100 flex items-center justify-center gap-2 text-white"
          >
            <FcGoogle /> Sign up with Google
          </Button>
            {/* Login Link */}
          <p className="text-center mt-4 text-sm text-white">
            Already have an account?{" "}
            <Link href="/signin">
              <span className="text-blue-400 cursor-pointer font-bold hover:underline text-xl">
                Login
              </span>
            </Link>
          </p>
      </Surface>
    </div>
   </div>
  );
}
