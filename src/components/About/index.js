import coso from "../../img/Coso.png"

export default function Aboutme(){
    return(
        <div className="bg-blue-100">
            <div className="ml-auto mr-auto grid grid-cols-1 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 ">
                <div className="ml-auto mr-auto mt-9">
                    <div className="w-96 h-72 shadow-xl bg-blue-400 hover:bg-blue-500">
                     <h1 className="text-4xl text-center text-white font-extrabold ">Sobre mi</h1>
                        <p className="p-2 text-white text-center mb-7">
                            Es una meta para mi aprender todos los dias cosas nuevas
                            cuento con un perfil critico, analitico y reflexivo
                            para proponer mejoras al momento de desarrollar, me gusta
                            estar al dia con las tecnologias actuales. algunos de mis 
                            hobbies son leer, tocar y escuchar musica.
                        </p>
                        <a className="ml-36 bg-purple-500 hover:bg-purple-600 text-gray-100 cursor-pointer font-semibold pt-4 pb-4 pl-8 pr-8 m-5 " target="_blank" href="https://drive.google.com/file/d/1xF3ZPLcvU988j0A4Aa0DgKAIoumq4zPg/view">Ver CV</a>
                    </div>     
                </div>
                <div className="mt-5 pb-4 ml-auto mr-auto">
                    <img src={coso}></img>
                </div>
            </div>
        </div>      
    );
}