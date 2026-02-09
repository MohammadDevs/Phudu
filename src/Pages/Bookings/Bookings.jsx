import { useEffect, useState } from "react";
import { getBookList, removeBookList } from "../../Utils";
import { toast, ToastContainer } from "react-toastify";
import Chart from "../../Components/Chart/Chart";



const Bookings = () => {
    const [displayDoctor,setDisplayDoctor] = useState([])

    useEffect(()=>{
        const savedDoctorsData = getBookList()
        setDisplayDoctor(savedDoctorsData)
    },[])  

    const handelDelete = id => {
        toast.error('Application Canceled')
        removeBookList(id)
        setDisplayDoctor(getBookList())
    }
    
    const chartData = displayDoctor.map((doctor) => ({
  name: doctor.name,
  fee: doctor.consultationFee,
}));

    return (
    <div className='bg-red-50 py-10 max-w-5xl mx-auto flex flex-col gap-6 px-2'>
        <div><ToastContainer></ToastContainer></div>
        <Chart chartData={chartData} />

        {
            displayDoctor.map(doctorData => (
                <div key={doctorData.id} doctorData={doctorData}>
                    <div className="bg-white rounded-2xl p-4 ">
                        <h4 className="font-semibold text-xl">{doctorData.name}</h4>
                        <div className="flex justify-between border-b-2 border-dashed border-gray-200 pb-3">
                            <p>{doctorData.degree}</p>
                            <p className="text-gray-600 font-thin">Appointment Fee: {doctorData.consultationFee} Taka+Vat</p>
                        </div>
                        <button onClick={()=> handelDelete(doctorData.id)} className="btn btn-outline btn-error btn-block mt-4 rounded-3xl hover:text-white">Cancel Appointment</button> 
                    </div>
                </div>
            ))
        }
    </div>
    );
};

export default Bookings;
