"use client";
import { deleteArticles } from '@/actions/server/article';
import { Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const DeleteButton = ({id}) => {

    const [isDeleting,setIsDeleting]=useState(false);
    const router=useRouter();

    const handleDelete=async()=>{
        Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
        }).then(async(result) => {
          const success=await deleteArticles(id);
          if (success) {
            Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
            });
            router.refresh();
        }
        });
    }


    return (
        <button 
            onClick={handleDelete}
            disabled={isDeleting}
            type="button"
            className="p-2 text-stone-400 hover:text-red-800 transition-colors disabled:opacity-50"
        >
            {isDeleting ? (
              <span className="animate-spin text-[10px]">...</span>
            ) : (
              <Trash2 size={18} />
            )}
        </button>
    );
};

export default DeleteButton;