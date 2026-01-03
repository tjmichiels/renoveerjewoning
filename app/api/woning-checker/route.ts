import { NextResponse } from 'next/server'

export async function POST(req: Request) {
    console.log('API route HIT')

    try {
        const { postcode, huisnummer } = await req.json()

        const res = await fetch('https://api.altum.ai/movedata', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': process.env.ALTUM_API_KEY!,
            },
            body: JSON.stringify({
                postcode,
                housenumber: Number(huisnummer),
            }),
        })

        const data = await res.json()
        return NextResponse.json(data)
    } catch (err) {
        return NextResponse.json(
            { message: 'Server error' },
            { status: 500 }
        )
    }
}
