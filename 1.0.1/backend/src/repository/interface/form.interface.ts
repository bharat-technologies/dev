export interface IFormRepository<T> {
    getAllForm(): Promise<T[]>
    createForm(data: T): Promise<T>
}