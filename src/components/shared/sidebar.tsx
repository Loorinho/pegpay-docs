import { Banknote, DollarSign, HandCoins, ReceiptText } from "lucide-react"

export default function Sidebar() {
    const products = [
        {
            name: "Mobile Money",
            icon: <DollarSign />,
            methods: [
                {
                    name: "Validate Phone Number / Account",
                },
                {
                    name: "Mobile Money Pulls",
                },
                {
                    name: "Mobile Money Pushes",
                },
                {
                    name: "Get Transactions Status",
                },
                {
                    name: "Balance Check",
                }
            ]
        },

        {
            name: "Bill Payments",
            icon: <ReceiptText />,
            methods: [
                {
                    name: "Validate Phone Number / Account",
                },
                {
                    name: "Mobile Money Pulls",
                },
                {
                    name: "Mobile Money Pushes",
                },
                {
                    name: "Get Transactions Status",
                },
                {
                    name: "Balance Check",
                }
            ]
        }


    ]

    return (
        <section className='w-[250px]  h-full'>
            <div className='fixed left-0 bottom-1 w-[250px] top-[8svh] h-full will-change-auto border-r-2 px-2'>
                <div>Header section</div>

                <div className="w-full">
                    {
                        products.map((item) => {
                            return (
                                <div className="flex items-end gap-1">
                                    {item.icon}
                                    <p>{item.name}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
