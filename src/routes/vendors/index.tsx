import AddVendorForm from '@/components/add-vendor-form'
import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/vendors/')({
  component: VendorsPage,
  loader: async () => {
    return {

    }
  }
})

function VendorsPage() {

  return <div className='mt-3 container'>
    <h2 className='text-center font-semibold text-2xl'>
      Vendors
    </h2>
    {/* 
    <Link to="/vendors/$vendorId" params={{
      vendorId: "5"
    }}> Vendor One</Link> */}


    <div className='mt-5'>
      <AddVendorForm />
    </div>

  </div>
}
