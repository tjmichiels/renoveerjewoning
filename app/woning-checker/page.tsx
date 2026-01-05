// app/woning-checker/page.tsx
'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from '../components/layout/Header'
import { NAV } from '../content/navigation'

type ApiResult = {
    energyLabel?: string
    shouldRenovate?: boolean
    message?: string
    [key: string]: any
}

const labelStyles: Record<string, string> = {
    A: 'bg-green-500',
    B: 'bg-lime-500',
    C: 'bg-yellow-400',
    D: 'bg-orange-400',
    E: 'bg-orange-500',
    F: 'bg-red-500',
    G: 'bg-red-700',
}

export default function WoningCheckerPage() {
    const [postcode, setPostcode] = useState('')
    const [huisnummer, setHuisnummer] = useState('')
    const [result, setResult] = useState<ApiResult | null>(null)
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        setLoading(true)
        setResult(null)

        try {
            const res = await fetch('/api/woning-checker', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    postcode: postcode.replace(/\s+/g, '').toUpperCase(),
                    huisnummer,
                }),
            })

            const data = await res.json()

            setResult({
                energyLabel: data.energy_label ?? 'D',
                shouldRenovate: ['D', 'E', 'F', 'G'].includes(data.energy_label),
            })
        } catch {
            setResult({ message: 'Er is iets misgegaan.' })
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="bg-white">
            <Header navigation={NAV} />

            <main className="relative isolate min-h-screen px-6 pt-10 lg:px-8">
                <div className="mx-auto max-w-5xl pb-16">
                    <header>
                        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">
                            Check jouw woning
                        </h1>
                        <p className="mt-3 text-gray-700 max-w-3xl">
                            Vul postcode en huisnummer in om te controleren of jouw woning in
                            aanmerking komt.
                        </p>
                    </header>

                    <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                        {/* FORM */}
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Postcode</label>
                                <input
                                    value={postcode}
                                    onChange={(e) => setPostcode(e.target.value)}
                                    required
                                    className="mt-1 block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Huisnummer</label>
                                <input
                                    value={huisnummer}
                                    onChange={(e) => setHuisnummer(e.target.value)}
                                    required
                                    className="mt-1 block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>

                            <div className="flex items-end">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="inline-flex w-full justify-center rounded-full bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-800 disabled:opacity-50"
                                >
                                    {loading ? 'Bezig…' : 'Controleren'}
                                </button>
                            </div>
                        </form>

                        {/* RESULTAAT */}
                        <AnimatePresence>
                            {result?.energyLabel && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="mt-10 space-y-10"
                                >
                                    {/* ENERGIELABEL + ADVIES */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                                        <motion.div
                                            initial={{ scale: 0.85 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: 'spring', stiffness: 200 }}
                                            className={`h-48 rounded-2xl flex items-center justify-center text-black text-6xl font-bold ${labelStyles[result.energyLabel]}`}
                                        >
                                            {result.energyLabel}
                                        </motion.div>

                                        <div>
                                            <h2 className="text-2xl font-semibold mb-2 text-gray-900">
                                                {result.shouldRenovate
                                                    ? 'Renovatie aanbevolen'
                                                    : 'Je woning scoort goed'}
                                            </h2>

                                            <p className="text-gray-700 mb-4">
                                                {result.shouldRenovate
                                                    ? 'Je woning heeft een lager energielabel. Door te renoveren kun je energie besparen en het wooncomfort verhogen.'
                                                    : 'Je woning is al energiezuinig. Grote renovaties zijn op dit moment niet nodig.'}
                                            </p>

                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: '100%' }}
                                                transition={{ duration: 1 }}
                                                className="h-2 rounded-full bg-emerald-400"
                                            />
                                        </div>
                                    </div>

                                    {/* STAP 1 — WAAROM DIT ADVIES */}
                                    <motion.section
                                        initial={{ opacity: 0, y: 16 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="rounded-2xl border border-gray-200 bg-gray-50 p-6"
                                    >
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                            Waarom dit advies?
                                        </h3>

                                        <p className="text-gray-700 mb-6 max-w-3xl">
                                            Dit advies is gebaseerd op woningkenmerken en
                                            energie-indicatoren die invloed hebben op het
                                            energieverbruik en het wooncomfort van vergelijkbare
                                            woningen.
                                        </p>

                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <li className="flex items-start gap-3">
                        <span
                            className={`mt-1 inline-flex h-3 w-3 rounded-full ${
                                ['D', 'E', 'F', 'G'].includes(result.energyLabel)
                                    ? 'bg-red-500'
                                    : 'bg-green-500'
                            }`}
                        />
                                                <div>
                                                    <p className="font-medium text-gray-900">Energielabel</p>
                                                    <p className="text-sm text-gray-600">
                                                        Deze woning heeft energielabel{' '}
                                                        <strong>{result.energyLabel}</strong>, wat invloed
                                                        heeft op energieverbruik en kosten.
                                                    </p>
                                                </div>
                                            </li>

                                            <li className="flex items-start gap-3">
                                                <span className="mt-1 inline-flex h-3 w-3 rounded-full bg-amber-400" />
                                                <div>
                                                    <p className="font-medium text-gray-900">
                                                        Isolatie & bouwjaar
                                                    </p>
                                                    <p className="text-sm text-gray-600">
                                                        Vergelijkbare woningen hebben vaak beperkte isolatie
                                                        volgens beschikbare woningdata.
                                                    </p>
                                                </div>
                                            </li>

                                            <li className="flex items-start gap-3">
                        <span
                            className={`mt-1 inline-flex h-3 w-3 rounded-full ${
                                result.shouldRenovate
                                    ? 'bg-red-500'
                                    : 'bg-green-500'
                            }`}
                        />
                                                <div>
                                                    <p className="font-medium text-gray-900">
                                                        Energie-efficiëntie
                                                    </p>
                                                    <p className="text-sm text-gray-600">
                                                        {result.shouldRenovate
                                                            ? 'De energieprestatie ligt onder het gemiddelde.'
                                                            : 'De energieprestatie ligt op of boven het gemiddelde.'}
                                                    </p>
                                                </div>
                                            </li>

                                            <li className="flex items-start gap-3">
                                                <span className="mt-1 inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                                                <div>
                                                    <p className="font-medium text-gray-900">
                                                        Vergelijkbare woningen
                                                    </p>
                                                    <p className="text-sm text-gray-600">
                                                        De beoordeling is gebaseerd op data van soortgelijke
                                                        woningen in Nederland.
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </motion.section>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {result?.message && (
                            <p className="mt-6 text-red-600">{result.message}</p>
                        )}
                    </section>
                </div>
            </main>
        </div>
    )
}
