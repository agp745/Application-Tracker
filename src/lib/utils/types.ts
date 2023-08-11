type Location = string | 'remote' | 'hybrid'
type Application_Type = string | 'website' | 'linkedin' | 'indeed' | 'glassdoor' |'monster' |'other'
export type Status = 'pending' | 'accepted' | 'rejected' | 'ghosted'

export type Application = {
    company: string,
    applied_date: Date,
    position: string,
    location: Location,
    salary: number | null,
    application_type: Application_Type,
    cover_letter: boolean,
    status: Status
    user_id: string
}

export type ApplicationWithId = Application & {
    id: number
}