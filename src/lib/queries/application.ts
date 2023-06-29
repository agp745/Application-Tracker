import { prisma } from ".";
import type { Application } from "../utils/types";

export async function addApplication(app: Application) {
    const { company, applied_date, position, location, salary, application_type, cover_letter, status } = app
    try {
        const newApplication = await prisma.applications.create({
            data: {
                company,
                applied_date,
                position,
                location,
                salary,
                application_type,
                cover_letter,
                status
            }
        })
        return { newApplication }
    } catch (error) {
        return { error }
    }
}

export async function getApplications() {
    try {
        const applications = await prisma.applications.findMany({
            orderBy: {
                applied_date: 'desc'
            }
        })
        return { applications }
    } catch (error) {
        return { error }
    }
}

export async function deleteApplication(applicationId: number) {
    try {
        const deletedApplication = await prisma.applications.delete({
            where: { id: applicationId }
        })
        return { deletedApplication }
    } catch (error) {
        return { error }
    }
}

export async function updateApplication(applicationId: number, applicationData: Application) {
    try {
        const updatedApplication = await prisma.applications.update({
            where: {
                id: applicationId
            },
            data: applicationData
        })
        return { updatedApplication }
    } catch (error) {
        return { error }
    }
}

export async function updateApplicationStatus(applicationId: number, status: string) {
    try {
        await prisma.applications.update({
            where: {
                id: applicationId
            },
            data: {status}
        })
        const message = `satus updated to ${status}`
        return { message }
    }
    catch (error) {
        return { error }
    }
}
