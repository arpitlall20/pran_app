import { Admin } from '../admin/admin'
import { Contact } from '../contact/contact'
import { Site } from '../site/site'


export class Hospital {
    hospitalName:string
    hospitalType:string
    hospitalAccredition:string
    hospitalRegistrationNo:string
    admin:Admin
    site:Site
    contact:Contact
}
