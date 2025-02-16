import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/vendors/')({
  component: RouteComponent,
  loader: async () => {
    return {

    }
  }
})

function RouteComponent() {
  return <div>
    <p>
      Hello "/vendors/"!
    </p>

    <Link to="/vendors/$vendorId" params={{
      vendorId: "5"
    }}> Vendor One</Link>

  </div>
}
