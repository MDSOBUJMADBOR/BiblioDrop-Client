"use client";
import { authClient } from "@/lib/auth-client";
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
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

export default function SignInPage() {
    const [loading, setLoading] = useState(false);
 const onSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  const formData = new FormData(e.currentTarget);
  const user = Object.fromEntries(formData.entries());

  try {
    const result = await authClient.signIn.email({
      ...user,
      callbackURL: "/",
    });

    console.log(result);

    // যদি login fail করে
    if (result?.error) {
      alert("❌ User not found or incorrect email/password!");
      
      return;
    }
    
    toast.success("✅ Login Successful!")
  } catch (error) {
    

    alert("❌ User not found or incorrect email/password!");
 
  } finally {
    setLoading(false);
  }
};

  
  const handleGoogleSignin = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
       
      });
    } catch (error) {
      alert("Google login failed!");
      
    }
    
  };



  return (
    <div className="bg-cyan-900 min-h-screen flex items-center justify-center">
        <div className="bg-gray-500 w-full max-w-lg  rounded-2xl p-8  border">
      <Surface className="w-full bg-gray-500">
        <Form onSubmit={onSubmit}>
          <Fieldset className="w-full">
            <Fieldset.Legend className="text-3xl font-bold text-center text-white">Welcome Back!</Fieldset.Legend>
            <Description className="font-bold text-center text-white text-lg">Login to your account!</Description>
            <Fieldset.Group>
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
            </Fieldset.Group>

            <Button type="submit" className={"w-full bg-cyan-700"}  disabled={loading}>
               {loading ? "Login..." : "Login"}
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
                    Don't have an account?{" "}
                    <Link href="/signup">
                      <span className="text-blue-400 cursor-pointer font-bold hover:underline text-xl">
                        Register
                      </span>
                    </Link>
                  </p>
      </Surface>
    </div>
    </div>
  );
}
