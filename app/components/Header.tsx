"use client";

import { useState } from "react";
import Link from "next/link";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

type NavItem = { name: string; href: string };
export default function Header({ navigation }: { navigation: NavItem[] }) {
    const [open, setOpen] = useState(false);

    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <nav aria-label="Hoofdmenu" className="flex items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">{/* logo plek */}</div>

                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open hoofdmenu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>

                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <Link key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
                            {item.name}
                        </Link>
                    ))}
                </div>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end" />
            </nav>

            <Dialog open={open} onClose={setOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <button
                            type="button"
                            onClick={() => setOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Sluit menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 space-y-2">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
}