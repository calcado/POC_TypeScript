export type Movies = {
    id?: number,
    name: string,
    platform: string,
    genre: string,
    status?:string,
    notes?:string
   }

export type Platform = Omit<Movies, "id"|"name"|"genre"|"status"|"notes" >