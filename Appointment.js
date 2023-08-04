/*-------------------------
*03 function must be completed for project set up
 a) Route setup with  "/"define b)component create in Routes file & c)link set up in navbar
 *Routes.js:
 path:'/appointment'
 element:

 AppointmentBanner.js:-
 Connection with Appointment.js

 daisyui>hero>choice & copy>in headerdiv paste >alt+shift+F(for formatting)
 img import>alt="" written for accessebility for visially impaired(protibondi) persons
 from 2nd div>h1,p,button remove>
 fro 1st div>delete (min-h-screen bg-base-200)

 react day picker>react-day-picker-UNpkg>getting started>install>date-fns click

 index.js:-
 import 'react-day-picker/dist/style.css' from https://react-day-picker.js.org/start;
 
 AppointmentBanner.js:-
 import { DayPicker } from 'react-day-picker' from https://react-day-picker.js.org/start;
 
 from https://react-day-picker.js.org/start;
 
Exmamples follow>
state declare before return:
const [selectedDate,setSelectedDate]=useState(new Date() );

import { format } from 'date-fns';
return
 <div>
  (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected} 
    />
<p>You have selected date: {format(selected, 'PP')}.</p>;
 </div>
 css:
 my-6 mr-6

 AvailableAppointments.js:
 in div internally copy paste from figma by p
 <p> Available Appoinments on April 30,2023</p>
 for seen connect with Appointments.js>text center text-primary font-bold
 Lift up the state:
 From AppointmentBanner.js>Appointment.js
const [selectedDate,setSelectedDate]=useState(new Date() );
Now AppointBanner.js will be empty>So by props use from Appointment.js
<AppointmentBanner selectedDate={selectedDate,setselectedDate}
 now go to appointmentBanner.js by destructuring({selectedDate,setSelectedDate})
 <AvailableAppointments selectedDate={selectedDate}
 now go to availableAppointments.js by destructuring({selectedDate})
 now go <p> Available Appoinments on {format(selected, 'PP')}.</p>
 Now from AvailableAppointments delete <p>line
 css:mt-16
 AvailableAppointments.js:

 data load is two type-1)route related 2)component related
 above data is component related,so,we do state declare for this.

 const [appointmentOptions,setAppointmentOptions]=useState([]);
 useEffect(()=>{
    fetch('appointOptions.json')
    .then(res=>res.json())
    .then(data=>setAppointmentOptions(data))
 },[])

 after return div>map will do>after return div
 {
    appointmentOptions.map(option=><AppointmentOption
        key={option._id}
        appointmentOption={option}
        ></AppointmentOption>)
 }
 note: if no id>ctrl+shift+l>"_id":1,

 AppointmentOption.js:
 destructuring>({appointmentOption})>
 const {name,slots}=appointmentOption;
 daisyui>card>choice>alt+shift+f
 <p>slots.length>0?slots[0]:'try another day'</p>
 <p>{slots.length}{slots.length>1?'spaces':'space'available</p>
 css:justify-center text-center text-primary text-4xl font-bold text-white my-16 mt-6

-------------------------------*/



