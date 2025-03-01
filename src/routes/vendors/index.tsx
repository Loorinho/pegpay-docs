import AddVendorForm from '@/components/vendor/add-vendor-form'
import { columns, Vendor } from '@/components/vendor/vendor-table-columns'
import { DataTable } from '@/components/vendor/vendors-table'
import { createFileRoute, useLoaderData } from '@tanstack/react-router'

export const Route = createFileRoute('/vendors/')({
  component: VendorsPage,
  loader: async (): Promise<Vendor[]> => {
    const url = "/api/pegasusaggregation/pegpayVendorOnboarding/";
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ requestType: "GetMomoVendors" })
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data: Vendor[] = await response.json()
    console.table(data)
    // const data: Vendor[] = await response.json();
    return data;
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
