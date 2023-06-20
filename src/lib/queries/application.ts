import { prisma } from ".";
import type { Application } from "../types";

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
        const applications = await prisma.applications.findMany()
        return {applications}
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