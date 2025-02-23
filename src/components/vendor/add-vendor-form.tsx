import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react"
import { Button } from "../ui/button"
import { Form } from "../ui/form"
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { toast } from "sonner"



const vendorSchema = z.object({
    vendorCode: z.string().min(1, "Vendor code is required"),
    email: z.string().email().min(1, "Vendor email is required"),
    telephone: z.string().min(1, "Vendor phone number is required"),
    vendorActive: z.string().min(1, "Vendor phone number is required"),

});

export default function AddVendorForm() {
    const [open, setOpen] = useState<boolean>(false)

    const form = useForm<z.output<typeof vendorSchema>>({
        resolver: zodResolver(vendorSchema),
        defaultValues: {
            vendorCode: "",
            email: "",
            telephone: "",
            vendorActive: ""
        },
    });

    async function onSubmit(data: z.output<typeof vendorSchema>) {
        try {

            //TODO: 
            /**
             * Save vendor details
             * 
             */

            console.table(data)

            toast.success('You have successfully created the vendor!');

            setOpen(false);
            form.reset();
        } catch (error) {
            toast.error('Sorry! Unable to create vendor at the moment!');

        }
    }


    return (
        <div>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button
                        className=""
                        size={"sm"}
                    >
                        Create Vendor
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="text-center uppercase">Create a new Vendor</DialogTitle>
                    </DialogHeader>
                    <Form  {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1">
                            <div className="w-full">
                                <Label htmlFor="vendorCOde">Vendor Code</Label>
                                <Input {...form.register("vendorCode")} />
                                {form.formState.errors.vendorCode && (
                                    <span className="text-red-600 text-xs">
                                        {form.formState.errors.vendorCode.message}
                                    </span>
                                )}
                            </div>

                            <div className="w-full">
                                <Label htmlFor="email">Email</Label>
                                <Input {...form.register("email")} type="email" />
                                {form.formState.errors.email && (
                                    <span className="text-red-600 text-xs">
                                        {form.formState.errors.email.message}
                                    </span>
                                )}
                            </div>
                            <div className="w-full">
                                <Label htmlFor="gender">Is Vendor Active</Label>
                                <Controller
                                    control={form.control}
                                    name="vendorActive"
                                    render={({ field }) => (
                                        <Select
                                            onValueChange={field.onChange}
                                        // value={staff?.gender}
                                        >
                                            <SelectTrigger>
                                                <SelectValue
                                                    placeholder={
                                                        field.value ?? "Please choose vendor status"
                                                    }
                                                />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Active">Active</SelectItem>
                                                <SelectItem value="Inactive">Inactive</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                                {form.formState.errors.vendorActive && (
                                    <span className="text-red-600 text-xs">
                                        {form.formState.errors.vendorActive.message}
                                    </span>
                                )}
                            </div>

                            <div className="w-full">
                                <Label htmlFor="phone">Phone</Label>
                                <Input {...form.register("telephone")} />
                                {form.formState.errors.telephone && (
                                    <span className="text-red-600 text-xs">
                                        {form.formState.errors.telephone.message}
                                    </span>
                                )}
                            </div>


                            <Button
                                className={cn(
                                    "mt-6 w-full text-white font-semibold",
                                    {
                                        "bg-opacity-75": form.formState.isSubmitting,
                                    }
                                )}
                                type="submit"
                            >
                                {form.formState.isSubmitting ? (
                                    <>
                                        <Loader2 className="animate-spin mr-1" size={20} />
                                        <span>Saving changes...</span>
                                    </>
                                ) : (
                                    "Save Changes"
                                )}
                            </Button>
                        </form>
                    </Form>
                </DialogContent>
            </Dialog>
        </div>
    )
}
