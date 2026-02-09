import { toast } from "react-toastify"
import Empty from "../ui/Empty"

export const getBookList = () => {
    const bookmark = localStorage.getItem('bookmark')
    if(bookmark) return JSON.parse(bookmark)
        return []
    
}

export const addBookList = doctor => {
    const bookAppointment = getBookList()
    const isExist = bookAppointment.find(d => d.id === doctor.id)
    if(isExist) return toast.error('Application Already Exist')
    bookAppointment.push(doctor)
    toast.success(`Booked An Appointment For ${doctor.name}`)
    localStorage.setItem('bookmark', JSON.stringify(bookAppointment))
    
}
export const removeBookList = id => {
    const bookList = getBookList()
    const remainingList = bookList.filter(d =>d.id !== id)
    localStorage.setItem('bookmark', JSON.stringify(remainingList))
}