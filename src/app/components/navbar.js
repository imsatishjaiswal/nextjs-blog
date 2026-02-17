"use client"
import React from 'react'
import Link from "next/link";
import { usePathname } from 'next/navigation'
export default function Navbar() {
const pathname = usePathname();
const hideNav = ["/blog"]
// const showNav = !hideNav.includes(pathname)
const showNav = !pathname.startsWith(hideNav)
 

  return (
<>
        <nav>
            {showNav && (
          <ul className="flex gap-4 text-xl justify-center">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
          ) }
        </nav>
</>
  )
}
