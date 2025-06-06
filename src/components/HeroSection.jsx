import React from 'react';
import { ChevronsDown } from 'lucide-react';
function HeroSection(props) {
    return (
        <div className='flex justify-center items-center h-screen flex-col gap-y-5'>
           
            <h1>Hi, I'm Md Sourav Islam</h1>
             <span className='block'> I design and build things</span>
             
             <ChevronsDown size={28}/>
        </div>
    );
}

export default HeroSection;