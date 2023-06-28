type Location = string | 'remote' | 'hybrid'
type Application_Type = string | 'website' | 'linkedin' | 'indeed' | 'other'
export type Status = 'pending' | 'accepted' | 'rejected'

export type Application = {
    company: string,
    applied_date: Date,
    position: string,
    location: Location,
    salary: number | null,
    application_type: Application_Type,
    cover_letter: boolean,
    status: Status
}

export type ApplicationWithId = Application & {
    id: number
}