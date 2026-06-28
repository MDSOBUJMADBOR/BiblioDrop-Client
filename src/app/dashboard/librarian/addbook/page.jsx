'use client';

import { authClient } from "@/lib/auth-client";
import { 
  Form, 
  Input, 
  TextArea,    
  Button,
  Select,       
  Label,       
  ListBox,
} from "@heroui/react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";



export default function AddBookForm() {
const [imageUrl, setImageUrl] = useState("");
const [isUploading, setIsUploading] = useState(false);
const [error, setError] = useState("");
  const userData = authClient.useSession(); 
  const user = userData.data?.user; 

const handleImageUpload = async (e) => {

  
  const file = e.target.files[0];
  if (!file) return;

  // validation
  if (file.size > 15 * 1024 * 1024) {
    setError("Max file size 15MB");
    return;
  }

  setIsUploading(true);
  setError("");

  const formData = new FormData();
  formData.append("image", file);

  try {
    const API_KEY = process.env.NEXT_PUBLIC_IMGBB_KEY;

    const res = await fetch(
      `https://api.imgbb.com/1/upload?key=${API_KEY}`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();
console.log(data);
    if (data.success) {
      setImageUrl(data.data.url);
    } else {
      setError("Upload failed");
    }
  } catch (err) {
    setError("Network error");
  } finally {
    setIsUploading(false);
  }
};


const handleSubmit = async (e) => {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);

  if (!imageUrl) {
    alert("Please upload image first");
    return;
  }

  const bookData = {
  title: formData.get("title"),
  author: formData.get("author"),
  category: formData.get("category"),
  deliveryFee: formData.get("deliveryFee"),
  description: formData.get("description"),

  // book info
  image: imageUrl,
  createdAt: new Date(), 
  status: "unpublish",

  // user info
  email: user?.email,
  userName: user?.name,
  userImage: user?.image,
  role: user?.role || "user",
};
;

const {data:token} = await authClient.token()




  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookpost`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${token?.token}`
  },
  body: JSON.stringify(bookData),
});

    const data = await res.json();
console.log(data);
    if (data.acknowledged) {      
      toast.success("Book added successfully ✅");

      // ✅ FORM RESET
      form.reset();
      setImageUrl("");
      setError("");
    } else {
      alert("Failed to save ❌");
    }
  } catch (err) {
    
    alert("Something went wrong");
  }
};




  // Tailwind Reusable Classes (ছবির মতো লাইট স্টাইল ম্যাচিং)
  const baseInputWrapper = "bg-white border border-gray-200 group-data-[focus=true]:border-green-500 rounded-xl text-black shadow-sm min-h-11";
  const baseLabel = "text-gray-700 text-sm font-semibold mb-2 block";
  
  const selectTrigger = "w-full min-h-11 px-3 bg-white border border-gray-200 rounded-xl text-left text-sm text-gray-700 flex items-center justify-between focus:border-green-500 outline-none shadow-sm";
  const popoverStyle = "bg-white border border-gray-200 rounded-xl p-1 shadow-xl text-black";
  const listItemStyle = "px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black rounded-lg cursor-pointer outline-none transition-colors data-[selected=true]:bg-gray-100";

  return (
    <div className="w-full max-w-4xl mx-auto bg-white p-8 rounded-2xl border border-gray-100 shadow-sm my-6">
      
      {/* Form Heading */}
      <h2 className="text-xl font-bold text-black mb-6">Add Book</h2>

      <Form onSubmit={handleSubmit}  className="space-y-6">
        
        {/* Row 1: Title & Author */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {/* Title */}
          <div>
            <Label className={baseLabel}>Title</Label>
            <Input 
              required 
              name="title" 
              placeholder="Enter book title" 
              classNames={{ inputWrapper: baseInputWrapper }} 
            />
          </div>

          {/* Author */}
          <div>
            <Label className={baseLabel}>Author</Label>
            <Input 
              required 
              name="author" 
              placeholder="Enter author name" 
              classNames={{ inputWrapper: baseInputWrapper }} 
            />
          </div>
        </div>

        {/* Row 2: Category & Delivery Fee */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {/* Category */}
          <div className="flex flex-col">
            <Label className={baseLabel}>Category</Label>
            <Select name="category" placeholder="Select category">
              <Select.Trigger className={selectTrigger}>
                <Select.Value />
                <Select.Indicator className="text-gray-400" />
              </Select.Trigger>
              <Select.Popover className={popoverStyle}>
                <ListBox className="outline-none">
                  <ListBox.Item className={listItemStyle} id="story" textValue="Story">Story</ListBox.Item>
                  <ListBox.Item className={listItemStyle} id="novel" textValue="Novel">Novel</ListBox.Item>
                  <ListBox.Item className={listItemStyle} id="academic" textValue="Academic">Academic</ListBox.Item>                
                  <ListBox.Item className={listItemStyle} id="sci-fi" textValue="Sci-Fi">Science</ListBox.Item>
                  
                </ListBox>
              </Select.Popover>
            </Select>
          </div>

          {/* Delivery Fee */}
          <div>
            <Label className={baseLabel}>Delivery Fee ($)</Label>
            <Input 
              required 
              type="number" 
              name="deliveryFee" 
              placeholder="0.00" 
              classNames={{ inputWrapper: baseInputWrapper  }} 
            />
          </div>
        </div>

        {/* Row 3: Description & Book Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {/* Description */}
          <div>
            <Label className={baseLabel}>Description</Label>
            <TextArea 
              required 
              name="description" 
              placeholder="Enter book description..." 
              rows={4} 
              classNames={{ inputWrapper: `${baseInputWrapper} py-2 ` }} 
            />
          </div>




          {/* Book Image Upload Card */}
         
<div className="flex flex-col gap-2">
  <Label className={baseLabel}>Book Image</Label>

  <div className="flex items-center gap-4">
    
    <label className="w-20 h-20 border border-dashed border-gray-300 rounded-xl flex items-center justify-center cursor-pointer overflow-hidden hover:border-green-500 transition">
      
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />

      {imageUrl ? (
      
        <Image
  src={imageUrl}
  alt="preview"
  width={80}
  height={80}
  className="object-cover rounded"
/>
      ) : (
        <span className="text-gray-400 text-xs">Upload</span>
      )}
    </label>

    <div className="flex flex-col">
      <span className="text-sm text-gray-700 font-medium">
        {isUploading ? "Uploading..." : "Upload Image"}
      </span>
      <span className="text-xs text-gray-400">
        PNG, JPG up to 15MB
      </span> 

      {error && (
        <span className="text-xs text-red-500 mt-1">{error}</span>
      )}
    </div>
  </div>
</div>


        </div>




        {/* Submit Button */}
        <div className="flex justify-end w-full pt-2">
          <Button 
            type="submit" 
            className="w-full md:w-auto px-12 py-6 bg-[#22c55e] hover:bg-[#16a34a] text-white font-semibold rounded-xl text-base shadow-sm transition-colors"
          >
            Submit Book
          </Button>
        </div>

      </Form>
    </div>
  );
}