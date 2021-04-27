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
               <p className="text-xl font-medium tracking-wider text-gray-300">Lorem ipsum dolor</p>
               <h2 className="mt-6 text-3xl font-bold text-white md:text-5xl">Lorem ipsum dolor sit amet, <br/> consectetur
                   adipiscing elit</h2>
   
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
                    <h3 className="text-2xl font-semibold text-gray-800">Lorem ipsum dolor sit <br/> amet, consectetur</h3>
                    <p className="max-w-md mt-4 text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.</p>
                    <a href="#" className="block mt-8 text-indigo-700 underline">Experienced team</a>
                </div>
    
                <div className="mt-8 md:mt-0 md:w-1/2">
                    <div className="flex items-center justify-center">
                        <div className="max-w-md">
                            <img className="object-cover object-center w-full rounded-md shadow" style={{height: '500px'}}
                                src="https://images.unsplash.com/photo-1618346136472-090de27fe8b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=673&q=80"/>
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
                            <img className="object-cover object-center w-full rounded-md shadow" style={{height: '500px'}}
                                src="https://images.unsplash.com/photo-1616874535244-73aea5daadb9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"/>
                        </div>
                    </div>
                </div>
    
                <div className="mt-8 md:mt-0 md:w-1/2">
                    <h3 className="text-2xl font-semibold text-gray-800">Lorem ipsum dolor sit <br/> amet, consectetur</h3>
                    <p className="max-w-md mt-4 text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.</p>
                    <a href="#" className="block mt-8 text-indigo-700 underline">Experienced team</a>
                </div>
            </div>
        </div>
    </section> 
    
  
    
    
    
    <section className="bg-white">
        <div className="max-w-5xl px-6 py-16 mx-auto text-center">
            <h2 className="text-3xl font-semibold text-gray-800">Lorem ipsum dolor sit amet, <br/> consectetur adipiscing </h2>
            <p className="max-w-lg mx-auto mt-4 text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.</p>
    
            <img className="object-cover object-center w-full mt-16 rounded-md shadow h-80"
                src="https://images.unsplash.com/photo-1600069226367-412873fb0637?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"/>
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


