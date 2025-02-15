import { createRootRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
    component: RootComponent,
})

function RootComponent(){
    return (
      <>
            <div className="p-2 flex gap-2 text-2xl">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </div>
  

            <Outlet />
      </>
    
    )
}