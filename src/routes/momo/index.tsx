import { createFileRoute, useLoaderData } from '@tanstack/react-router'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Transaction, TransactionColumns } from '@/components/momo/transactions-table-columns';
import { TransactionsDataTable } from '@/components/momo/transactions-table';


export const Route = createFileRoute('/momo/')({
    component: RouteComponent,
    loader: async (): Promise<Transaction[]> => {
        const url = "/api/pegasusaggregation/pegpayVendorOnboarding/";
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ requestType: "GetMomoTransactions" })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const { Data } = await response.json()
        // const data: Transaction[] = await response.json()
        // console.table(data)
        const data: Transaction[] = Data;
        return data;

    }
})

function RouteComponent() {
    const data = useLoaderData({ from: "/momo/" });
    console.log(data)
    return <section className='container'>
        <h2 className='text-center font-semibold text-2xl my-2'>
            Mobile Money
        </h2>
        <Tabs defaultValue="transactions" className='container'>
            <TabsList className='w-full flex '>
                <TabsTrigger value='transactions' className='flex-1 cursor-pointer'>Transactions</TabsTrigger>
                <TabsTrigger value='pullpush' className='flex-1 cursor-pointer'>Pull Push Request Logs</TabsTrigger>
                <TabsTrigger value='errors' className='flex-1 cursor-pointer'>Error Logs</TabsTrigger>
            </TabsList>

            <div className='flex items-center'>
                <TabsContent value='transactions' className='flex-1'>
                    <div>
                        <h2>Mobile Money Transactions</h2>

                        <TransactionsDataTable columns={TransactionColumns} data={data} />

                    </div>

                </TabsContent>
                <TabsContent value='pullpush'>
                    <div>
                        <h2>Pull Push Request Logs</h2>

                    </div>
                </TabsContent>

                <TabsContent value='errors'>
                    <div>
                        <h2>Error Logs</h2>

                    </div>
                </TabsContent>
            </div>

        </Tabs>

    </section>
}
