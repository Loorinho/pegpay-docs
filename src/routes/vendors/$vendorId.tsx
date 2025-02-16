import { createFileRoute, useParams } from '@tanstack/react-router'

export const Route = createFileRoute('/vendors/$vendorId')({
  component: RouteComponent,
  loader: async ({ params }) => {
    // loaders are used to get data that a component needs before actually using it 
    // -> They return sth that we want to pass to our component

    // We can also fetch data from here -> 

    await new Promise((resolve) => setTimeout(resolve, 2000))

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.vendorId}`)
    const data = await response.json()

    return {
      data
    }
  },
  // This pending component is rendered as we load the data
  pendingComponent: () => <div>Loading (Good for adding loader states)...</div>,
  errorComponent: () => <div>Something went wrong</div>,
})

function RouteComponent() {
  const { data } = Route.useLoaderData();
  return <div>Hello {data.title}</div>
}
