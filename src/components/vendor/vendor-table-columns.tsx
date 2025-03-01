"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Button } from "../ui/button"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Vendor = {
    VendorCode: string
    Active: string
    ContactPerson: string
    AccountType: string
    VedorEmail: string
    IsRequiredCert: string
}

export const columns: ColumnDef<Vendor>[] = [

    {
        accessorKey: "VendorCode",
        header: "Vendor Code",
    },
    {
        accessorKey: "Active",
        header: "Active",
    },
    {
        accessorKey: "AccountType",
        header: "Account Type",
    },
    {

        accessorKey: "VendorEmail",
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
        accessorKey: "IsRequiredCert",
        header: "Certificate",

    },

    {
        accessorKey: "ContactPerson",
        header: "Contact Person",
    },
]
