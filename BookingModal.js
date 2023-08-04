/*
*Booking Modal.js:

*daisyui>modal
*BookingModal.js>fragment create>copy paste from daisyui>alt+shift+f>id="Booking-Modal" written
*AppointmentOption.js:

*Daisyui>top line copy paste under <buttonline
*AvailableAppointments.js:

*auto import in AvailableAppointments.js under return div where fetch was present
AppointmentOption .js:

*delete from AppointmentOption .js>1st Bookong Appointment line
*seperate state declare
const [treatment,setTreatment]=useState(null);
{
    appointmentOptions.map(option=><AppointmentOption
        key={option._id}
        appointmentOption={option}
        setTreatment={setTreatment}
        ></AppointmentOption>)
 }
 AppointmentOption.js:
 *destructuring({appointmentOption,setTreatmemt_})
 onClick handler add:
 onClick={()=>setTreatment(appointmentOptions)}

 *AvailableAppointments.js:
 *in <BookingModal 
 treatment_={treatment}
 ></BookingModal>
 Booking Modal.js:
 destructuring by treatment
 if null not read>desstrucring by {}>treatment &&
 { treatment &&
    <BookingModal 
 treatment_={treatment}
 ></BookingModal>
}
*daisyui>text input>copy
*<p>line delete>...<form>tag create & paste above text input
*alt+shift+downarrow >6 line make
*input-submit type placeholder create
*css:w-full max-w-xs>grid....mt-6>ctrl+shift+l
delete max-w-xs from 1st 06 line
*daisyui>input with border>copy paste
*/