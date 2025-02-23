"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Button } from "../ui/button"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
    id: string
    volume: number
    status: "Active" | "Inactive"
    email: string
    vendorCode: string
}

export const columns: ColumnDef<Payment>[] = [

    {
        accessorKey: "vendorCode",
        header: "Vendor Code",
    },
    {
        accessorKey: "status",
        header: "Status",
    },
    {

        accessorKey: "email",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Email
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "volume",
        header: "Amount",
    },
]
