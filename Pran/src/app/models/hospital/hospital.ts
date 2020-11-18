import { Admin } from '../admin/admin'
import { Contact } from '../contact/contact'
import { Site } from '../site/site'


export class Hospital {
    hospitalName:String
    hospitalType:String
    hospitalAccredition:String
    hospitalRegistrationNo:String
    admin:Admin
    site:Site
    contact:Contact
}
