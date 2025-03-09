import Sidebar from '@/components/shared/sidebar'
import { Button } from '@/components/ui/button'
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { Toaster } from "@/components/ui/sonner"

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <header className="flex px-7 justify-between items-center border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 h-[8svh]">
        <h3 className='text-[#d71a21] font-semibold'>Pegpay<span className='text-[#06498e]'>DOCS</span></h3>
        <nav className='flex gap-4 items-center'>

          <Link to="/" className="[&.active]:font-bold">
            Home
          </Link>{' '}
          <Link to="/about" className="[&.active]:font-bold">
            About
          </Link>
          <Link to="/docs/momo" className="[&.active]:font-bold">
            Momo Docs
          </Link>
          <Link to="/vendors" className="[&.active]:font-bold">
            Vendors
          </Link>
          <Button>Logout</Button>
        </nav>
      </header>
      <section className='px-3 flex  gap-3'>
        <Sidebar />
        <main className='flex-1'>
          <Outlet />
        </main>
      </section>
      <Toaster />
    </>

  )
}