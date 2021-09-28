import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import swal from "sweetalert"

export default function Contact(){
  const form = useRef();
  const [result, showResult] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xm3t34j', 'template_22zi2ll', form.current, 'user_xyjmGQwBffOdGd4mFshoM')
      .then((result) => {
          console.log(result.text);
          swal({
            title: "Enviado",
            text: "Mensaje enviado con exito",
            icon: "success",
            button: "Aceptar",
            timer: "5000"
        })
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      showResult(true);
  };

    return(
        <>
        <div className="">
            <div className="min-h-screen bg-blue-400 flex flex-col justify-center">
                <div className="max-w-md w-full mx-auto">
                    <div className="text-6xl font-bold text-gray-100 mt-2 text-center">Contactame</div>
                </div>
                <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border-gray-300 shadow-xl">
                 <form className="space-y-6" ref={form} onSubmit={sendEmail}>
                     <div>
                        <label className="text-sm font-bold text-gray-600 block">Nombre</label>
                        <input className="w-full p-2 border border-gray-300 rounded mt-1" type="text" name="user_name" />
                     </div>
                    <div>
                        <label className="text-sm font-bold text-gray-600 block">Email</label>
                        <input className="w-full p-2 border border-gray-300 rounded mt-1" type="email" name="user_email" />
                    </div>
                    <div>
                        <label className="text-sm font-bold text-gray-600 block">Mensaje</label>
                        <textarea className="w-full p-2 border border-gray-300 rounded mt-1" name="message" />
                    </div>
                    <div>
                        <input className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-400 rounded-md text-white text-sm cursor-pointer" type="submit" value="Enviar" />
                    </div>         
                 </form>
                </div>

            </div>
        </div>
    
        </>
    );
}