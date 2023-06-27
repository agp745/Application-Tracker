import { NextResponse } from "next/server";
import { getApplications, addApplication } from "@/lib/queries/application";
import { getErrorMessage } from "@/lib/utils/errorMessage";
import { Prisma } from "@prisma/client";
import type { Application } from "@/lib/utils/types";
import { numberParser } from "@/lib/utils/numberParser";
import { da } from "date-fns/locale";

export async function GET() {
    try {
        const { applications, error } = await getApplications()
        if (error) throw new Error (JSON.stringify(error))
        return NextResponse.json({ success: true, applications })
    } catch (e) {
        if (e instanceof Prisma.PrismaClientInitializationError) {
            console.log(1)
            return NextResponse.json({ success: false, error: { code: e.errorCode, message: e.message } })
        }
        else if (e instanceof Prisma.PrismaClientKnownRequestError) {
            console.log(2)
            return NextResponse.json({ success: false, error: { code: e.code, message: e.message } })
        }
        else if (e instanceof Prisma.PrismaClientRustPanicError) {
            console.log(3)
            return NextResponse.json({ success: false, error: { code: e.cause, message: e.message } })
        }
        else if (e instanceof Prisma.PrismaClientUnknownRequestError) {
            console.log(4)
            return NextResponse.json({ success: false, error: { code: e.cause, message: e.message } })
        }
        else if (e instanceof Prisma.PrismaClientValidationError) {
            console.log(5)
            return NextResponse.json({ success: false, error: { code: e.cause, message: e.message } })
        }
        else {
            console.log(6)
            return NextResponse.json({ success: false, error: getErrorMessage(e)})
        }
    }
}

export async function POST(req: Request) {
    const data = await req.json()
    const salary = numberParser(data.salary)

    const body: Application = {
        company: data.company,
        applied_date: data.applied_date,
        position: data.position,
        location: data.location,
        salary: salary,
        application_type: data.application_type,
        cover_letter: data.cover_letter,
        status: data.status
    }
    try {
        const { newApplication, error } = await addApplication(body)
        if (error) throw new Error (JSON.stringify(error))
        return NextResponse.json({ success: true, newApplication })
    } catch (e) {
        if (e instanceof Prisma.PrismaClientInitializationError) {
            console.log(1)
            return NextResponse.json({ success: false, error: { code: e.errorCode, message: e.message } })
        }
        else if (e instanceof Prisma.PrismaClientKnownRequestError) {
            console.log(2)
            return NextResponse.json({ success: false, error: { code: e.code, message: e.message } })
        }
        else if (e instanceof Prisma.PrismaClientRustPanicError) {
            console.log(3)
            return NextResponse.json({ success: false, error: { code: e.cause, message: e.message } })
        }
        else if (e instanceof Prisma.PrismaClientUnknownRequestError) {
            console.log(4)
            return NextResponse.json({ success: false, error: { code: e.cause, message: e.message } })
        }
        else if (e instanceof Prisma.PrismaClientValidationError) {
            console.log(5)
            return NextResponse.json({ success: false, error: { code: e.cause, message: e.message } })
        }
        else {
            console.log(6)
            return NextResponse.json({ success: false, error: getErrorMessage(e)})
        }
    }
}