import Footer from "@/components/Home/Footer";
import NavBar from "@/components/NavBar";
import { Loader2 } from "lucide-react";
import React, { Suspense } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<div>
				<div className='fixed z-10 w-full flex justify-center items-center top-0 py-[1rem] bg-white'>
					<NavBar type='Light' />
				</div>
				<div className=' w-full min-h-screen flex justify-center items-center  bg-white'>
					{children}
				</div>
			</div>
			{/* <Footer /> */}
		</>
	);
};

export default Layout;