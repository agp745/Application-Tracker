import { NextResponse } from "next/server";
import { getApplications, addApplication } from "@/utils/queries/application";
import { getErrorMessage } from "@/utils/errorMessage";

export async function GET() {
    try {
        const { applications, error } = await getApplications()
        if (error) throw new Error (JSON.stringify(error))
        return NextResponse.json({ success: true, applications })
    } catch (e) {
        return NextResponse.json({ success: false, error: getErrorMessage(e)})
    }
}

export async function POST(req: Request) {
    const data = await req.json()
    try {
        const { newApplication, error } = await addApplication(data)
        if (error) throw new Error (JSON.stringify(error))
    } catch (e) {
        return NextResponse.json({ success: false, error: getErrorMessage(e)})
    }
}