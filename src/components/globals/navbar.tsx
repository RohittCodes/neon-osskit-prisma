"use client";

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { ModeToggle } from "@/components/globals/mode-toggle"
import Link from "next/link"
import { useAuth, UserButton, useSession } from "@clerk/nextjs";

const Navbar = () => {

  const { session } = useSession();

  return (
    <div className="top-0 left-0 w-full h-16 my-2 z-50">
      <nav className="hidden md:flex space-x-4 h-16 items-center w-full justify-between px-8">
        <div className="text-2xl font-bold">
          Neon Starter Kit
        </div>
        <div className="space-x-4 flex items-center">
          <ModeToggle />
          {
            session ? (
              <div className="flex items-center space-x-4">
                <Link href="/dashboard">
                  <Button>Dashboard</Button>
                </Link>
                <UserButton />
              </div>
            ) : (
              <>
                <Link href="/sign-in">
                  <Button>Sign In</Button>
                </Link>
                <Link href="/sign-up">
                  <Button>Sign Up</Button>
                </Link>
              </>
            )
          }
        </div>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="md:hidden fixed top-4 right-4" size="icon">
            <Menu size={24} />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="text-xl font-bold">
              Neon Starter Kit
            </SheetTitle>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            {
              session ? (
                <div className="flex flex-col items-center space-y-2">
                  <UserButton />
                  <p className="text-sm">
                    {session?.user?.emailAddresses[0].emailAddress}
                  </p>
                </div>
              ) : (
                <>
                  <Link href="/sign-in">
                    <Button>Sign In</Button>
                  </Link>
                  <Link href="/sign-up">
                    <Button>Sign Up</Button>
                  </Link>
                </>
              )
            }
          </div>
          <SheetFooter>
            <SheetDescription>
              Neon Starter Kit is a NextJS boilerplate that helps you build your SaaS faster than ever before.
            </SheetDescription>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default Navbar