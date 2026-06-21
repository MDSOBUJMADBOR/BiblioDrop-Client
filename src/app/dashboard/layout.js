import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
;



export default function DashboardLayout({ children }) {
  return (
   <div className="flex h-screen ">
        <div className="flex flex-1 overflow-hidden">
            {/* sidebar */}
            <DashboardSidebar></DashboardSidebar>
        {/* <div className="border">sidebar</div> */}

        <div className=" flex-1 overflow-y-auto">
        {/* navbar */}
            {/* <div className="border border-b-1 p-2 w-full">Navbar</div> */}
            <DashboardNavbar></DashboardNavbar>
            <main className="p-1"> 
                
                {children} </main>
        </div>
        </div>
   </div>
  );
}

