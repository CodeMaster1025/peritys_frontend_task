"use client";
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center gap-12 text-center">
      <h2 className="text-[3rem] md:text-[7rem] font-bold">404 Not Found</h2>
      <p>Your visited page not found. You may go home page</p>
      <Link className="px-8 py-2 bg-red-500 text-white rounded-md" href="/">Back to home page</Link>
    </div>
  )
}