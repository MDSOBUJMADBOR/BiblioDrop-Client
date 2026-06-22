'use client';

import { 
  Form, 
  Input, 
  TextArea,    
  Button,
  Select,       
  Label,       
  ListBox,
} from "@heroui/react";

export default function AddBookForm() {


 const handleSubmit = async (e) => {
     e.preventDefault();

     // ফর্মের সব ডাটা একসাথে নেওয়ার জন্য FormData API ব্যবহার
    const formData = new FormData(e.currentTarget);
    const allData = Object.fromEntries(formData.entries());
    
    // কনসোলে সব ডাটা অবজেক্ট আকারে প্রিন্ট হবে
    console.log("Submitted Book Data:", allData);

 }





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
                  <ListBox.Item className={listItemStyle} id="sci-fi" textValue="Sci-Fi">Sci-Fi</ListBox.Item>
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
          <div className="flex flex-col">
            <Label className={baseLabel}>Book Image</Label>
            <div className="flex-1 border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center p-4 bg-gray-50/50 cursor-pointer hover:bg-gray-50 transition-all min-h-[110px]">
              <svg className="w-5 h-5 text-gray-400 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11l7-7 7 7M12 4v16" />
              </svg>
              <span className="text-sm font-semibold text-gray-700">Upload Image</span>
              <span className="text-xs text-gray-400 mt-0.5">(Use imgBB API)</span>
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