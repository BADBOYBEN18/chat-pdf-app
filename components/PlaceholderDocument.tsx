'use client';
import React from 'react';
import { Button } from './ui/button';
import { PlusCircleIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

function PlaceholderDocument() {
  const router = useRouter();

  const handleclick = () => {
    // check if user is in Free TIER or not and is over he file limit
    router.push('dashboard/upload');
  };

  return (
    <Button
      onClick={handleclick}
      className=" flex flex-col items-center justify-center w-64 h-80 rounded-xl bg-gray-200 drop-shadow-lg text-gray-400 "
    >
      <PlusCircleIcon className="h-16 w-16 " />
      <p>Add a document</p>
    </Button>
  );
}

export default PlaceholderDocument;
