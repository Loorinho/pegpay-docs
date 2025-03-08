import { Link } from "@tanstack/react-router"
import { DollarSign, ReceiptText } from "lucide-react"

export default function Sidebar() {
    const products = [
        {
            name: "Mobile Money",
            link: "/momo/",
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
            link: "/momo/",
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
                                <div className="flex items-end gap-1" key={item.name}>
                                    {/* {item.icon} */}
                                    <Link to={item.link} className="flex items-center gap-1">
                                        <p>{item.name}</p>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
