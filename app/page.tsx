'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import QuickBenefits from "./components/QuickBenefits";
import FaqTopSix from "./components/FaqTopSix";


const navigation = [
  { name: 'Placeholder', href: '#' },
  { name: 'Placeholder', href: '#' },
  { name: 'Placeholder', href: '#' },
  { name: 'Placeholder', href: '#' },
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
      <div className="bg-white">
        <header className="absolute inset-x-0 top-0 z-50">
          {/*Nav bar*/}
          <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
            <div className="flex lg:flex-1">
              {/*<a href="#" className="-m-1.5 p-1.5">*/}
              {/*  <span className="sr-only">Your Company</span>*/}
              {/*  <img*/}
              {/*      alt=""*/}
              {/*      src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"*/}
              {/*      className="h-8 w-auto"*/}
              {/*  />*/}
              {/*</a>*/}
            </div>
            <div className="flex lg:hidden">
              <button
                  type="button"
                  onClick={() => setMobileMenuOpen(true)}
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
                    {item.name}
                  </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            </div>
          </nav>
          <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                {/*<a href="#" className="-m-1.5 p-1.5">*/}
                {/*  <span className="sr-only">Your Company</span>*/}
                {/*  <img*/}
                {/*      alt=""*/}
                {/*      src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"*/}
                {/*      className="h-8 w-auto"*/}
                {/*  />*/}
                {/*</a>*/}
                <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </a>
                    ))}
                  </div>
                  <div className="py-6">
                    {/*<a*/}
                    {/*    href="#"*/}
                    {/*    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"*/}
                    {/*>*/}
                    {/*  Log in*/}
                    {/*</a>*/}
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </header>

        {/*Hero section*/}
        <div className="relative isolate min-h-screen px-6 pt-14 lg:px-8">
          {/* zachte gradient blob achtergrond */}
          <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-[-8rem] -z-10 transform-gpu overflow-hidden blur-3xl"
          >
            <div
                className="mx-auto aspect-[1155/678] w-[72rem] bg-gradient-to-tr from-indigo-200 via-sky-200 to-emerald-200 opacity-40"
                style={{
                  clipPath:
                      "polygon(74% 44%, 100% 59%, 94% 90%, 74% 100%, 52% 92%, 35% 78%, 22% 61%, 15% 42%, 26% 19%, 48% 7%, 68% 12%, 78% 26%)",
                }}
            />
          </div>

          <div className="mx-auto max-w-4xl py-16">
            <div className="text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
                Laat jij elk jaar honderden euro’s aan warmte ontsnappen?
              </h1>
              <p className="mt-6 text-lg font-medium text-pretty text-gray-700 sm:text-xl/8">
                In veel woningen verdwijnt tot een kwart van de warmte via muren, vloeren en ramen.
                Door te isoleren en oude installaties te vervangen, kun je elk jaar honderden euro’s besparen,
                terwijl je woning comfortabeler en duurzamer wordt.
              </p>

              {/* benefit chips */}
              <QuickBenefits />

              {/* FAQ */}
              <FaqTopSix/>

              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                    href="#"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Ik wil renoveren
                </a>
                <a href="#" className="text-sm/6 font-semibold text-gray-900">
                  Vertel me meer <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
  );
}
