import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/docs/momo/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <section className='container'>
    <h3 className='text-2xl font-semibold text-center my-4'>
      PegPay Payments And Collections API
    </h3>
    <h5 className='text-center'>Integration Guide for Developers</h5>
    <p>Integration steps</p>
    <img src='assets/integration-steps.png' alt='Integration Steps' height={100} width={100} />

    <div id="#prereuisites">
      <h6 className='font-semibold'>Get Your Vendor Credentials</h6>
      <p>
        Before you can begin submitting API requests you will need your developer credentials and a
        test sandbox. As part of the process of registering vendors for access on the platform, the
        vendor will be required to provide a public key (in a .cer or .crt) format to Pegasus. This is
        required to set up a profile for the vendor on PegPay Payments And Collections API and will
        be used when verifying the digital signatures for all requests made to the system.
      </p>

      <p className='mt-3'>Your developer credentials consists of three pieces of information:</p>
      <ul className='ml-5'>
        <li><span className='font-bold'>Vendorcode</span> (this is akin to a username).</li>
        <li><span className='font-bold'>Password</span> of the vendor on the PegPay Payments And Collections platform</li>
      </ul>


    </div>
  </section>
}
