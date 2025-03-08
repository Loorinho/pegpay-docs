"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Button } from "../ui/button"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Transaction = {
    // Id: string
    VendorCode: string
    VendorTranId: string
    FromAccount: string
    ToAccount: string
    TelecomId: string
    Status: string
    RecordDate: string
    // TransCategory: string
    // Phone: string
    // TranAmount: string
    // CustomerName: string
    // TranCharge: string
    // FromNetwork: string
    // ToNetwork: string
}

export const TransactionColumns: ColumnDef<Transaction>[] = [
    // {
    //     accessorKey: "Id",
    //     header: "ID",
    // },
    {
        accessorKey: "VendorCode",
        header: "Vendor Code",
    },
    {
        accessorKey: "VendorTranId",
        header: "Vendor Tran ID",
    },
    {
        accessorKey: "TranAmount",
        header: "Tran Amount",
    },

    {
        accessorKey: "FromAccount",
        header: "From Account",
    },
    {
        accessorKey: "ToAccount",
        header: "To Account",
    },
    {
        accessorKey: "TelecomId",
        header: "TelecomID",
    },
    {
        accessorKey: "Status",
        header: "Status",
    },

    // {
    //     accessorKey: "TransCategory",
    //     header: "Trans Category",
    // },
    // {
    //     accessorKey: "Phone",
    //     header: "Phone",
    // },

    // {
    //     accessorKey: "CustomerName",
    //     header: "Customer Name",
    // },
    // {
    //     accessorKey: "TranCharge",
    //     header: "Tran Charge",
    // },
    // {
    //     accessorKey: "FromNetwork",
    //     header: "From Network",
    // },
    // {
    //     accessorKey: "ToNetwork",
    //     header: "To Network",
    // },
    {
        accessorKey: "RecordDate",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "desc")}
                >
                    Created At
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },

        // sortingFn: 'datetime',
        // sortDescFirst: true,
    },
]
