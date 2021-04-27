import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Contact", href: "#" },
];
export const Hero = () => {
  return (
    
    <div>
    <header className="bg-gray-800" >
      <section className="flex items-center justify-center" style={{height:"500px"}}>
           <div className="text-center">
             
               <h2 className="mt-6 text-3xl font-bold text-white md:text-5xl">Manage any event <br/> with ease</h2> <br/>
               <p className="text-xl font-medium tracking-wider text-gray-300"> Create invitations for both in-person and virtual events</p>
               <div className="flex justify-center mt-8">
                   <a className="px-8 py-2 text-lg font-medium text-white transition-colors duration-300 transform bg-indigo-600 rounded hover:bg-indigo-500"
                       href="#">Get Started</a>
               </div>
           </div>
       </section>
   </header>
   
    <section className="bg-white">
        <div className="max-w-5xl px-6 py-16 mx-auto">
            <div className="items-center md:flex md:space-x-6">
                <div className="md:w-1/2">
                <h3 className="text-4xl font-semibold text-gray-800">An end-to-end <br/>  in-person and virtual  <br/>  event management platform that wows <br/> </h3>
                </div>
    
                <div className="mt-8 md:mt-0 md:w-1/2">
                    <div className="flex items-center justify-center">
                        <div className="max-w-md">
                            <img className="object-cover object-center w-full rounded-md shadow" style={{height: '400px'}}
                                src="https://source.unsplash.com/SiniLJkXhMc/1000x900"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> 
    
    <section className="bg-white">
        <div className="max-w-5xl px-6 py-16 mx-auto">
            <div className="items-center md:flex md:space-x-6">
                <div className="md:w-1/2">
                    <div className="flex items-center justify-center">
                        <div className="max-w-md">
                            <img className="object-cover object-center w-full rounded-md shadow" style={{height: '400px'}}
                                src="https://source.unsplash.com/wZjJxOx8FPI/1000x900"/>
                        </div>
                    </div>
                </div>
    
                <div className="mt-8 md:mt-0 md:w-1/2">
                <h3 className="text-4xl font-semibold text-gray-800">A beautiful, bespoke event <br/>  experience with  <br/>  powerful features<br/> </h3>
               
                </div>
            </div>
        </div>
    </section> 
    
  
    
    
    
    
    
    
  
    
    <footer className="border-t">
        <div className="container flex items-center justify-between px-6 py-8 mx-auto">
            <p className="text-gray-500">© 2019-2021 All Rights Reserved.</p>
            <p className="font-medium text-gray-700">Terms of Service</p>
        </div>
    </footer>
</div>

  );
};


