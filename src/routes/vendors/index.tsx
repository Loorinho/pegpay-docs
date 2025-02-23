import AddVendorForm from '@/components/vendor/add-vendor-form'
import { columns, Payment } from '@/components/vendor/vendor-table-columns'
import { DataTable } from '@/components/vendor/vendors-table'
import { createFileRoute, useLoaderData } from '@tanstack/react-router'

export const Route = createFileRoute('/vendors/')({
  component: VendorsPage,
  loader: async (): Promise<Payment[]> => {

    return new Array(50).fill(null).map(() => ({
      id: "728ed52f",
      volume: Math.ceil(Math.random() * 1000),
      status: "Active",
      vendorCode: "Loorinho Bills",
      email: "m@example.com",
    }))
  }
})

function VendorsPage() {

  const data = useLoaderData({ from: "/vendors/" });
  console.log(data)

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

    <DataTable columns={columns} data={data} />

  </div>
}
