import { NextResponse, NextRequest } from "next/server";
import { getApplications } from "@/lib/queries/application";
import { error } from "console";

export async function GET(req: NextRequest) {
    try {
        const { applications, error } = await getApplications()
        if (error) throw new Error (error)
        return NextResponse.json({ success: true, })
    } catch (err) {
        return NextResponse.json({ success: false, error: err.message})
    }
}