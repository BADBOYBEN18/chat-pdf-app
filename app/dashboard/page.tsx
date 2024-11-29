import React from 'react';
import Documents from '../../components/Documents';
export const dynamic = 'force-dynamic';
import {File } from 'lucide-react';

function page() {
  return (
    <div className="h-full max-w-7xl mx-auto">
      <h1 className="text-3xl p-5 flex items-center gap-1 bg-gray-100 font-extralight text-indigo-600">
        My Documents <File className='text-indigo-600' />
      </h1>
	  
	  <Documents/>
    </div>
  );
}

export default page;
