import wideologin from "../../img/wideologin.jpg"
import indigo from "../../img/indigo.jpg"
import repo from "../../img/repo.jpg"
import pong from "../../img/pong.jpg"



export default function Projects(){
    return(
        
        <div className="bg-blue-100">
            <h1 className="text-4xl text-center text-white font-extrabold mb-10 pt-3">Proyectos</h1>
            <div className="ml-auto mr-auto grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 ">
                <div className="ml-auto mr-auto mt-9 mb-9">
                    <div className="w-96 h-96 shadow-xl bg-blue-400 hover:bg-blue-500">
                        <h1 className="text-3xl text-center text-white font-extrabold pb-5 pt-4">WideoKat</h1>
                        <img className="w-auto h-60 p-3 shadow-xl mb-5" src={wideologin}></img>
                        <a className="bg-purple-500 hover:bg-purple-600 text-gray-100 cursor-pointer font-semibold p-3 m-5 " target="_blank" href="https://github.com/Shiyoki/WideoKat">Ver repositorio</a>
                        <a className="bg-purple-500 hover:bg-purple-600 text-gray-100 cursor-pointer font-semibold p-3 m-5 " target="_blank" href="https://wideo-api.herokuapp.com/">Ir al backend</a>   
                    </div>     
                </div> 
                <div className="ml-auto mr-auto mt-9 mb-9">
                    <div className="w-96 h-96 shadow-xl bg-blue-400 hover:bg-blue-500">
                        <h1 className="text-3xl text-center text-white font-extrabold pb-5 pt-4">Indigo Store</h1>
                        <img className="w-auto h-60 p-3 shadow-xl mb-5" src={indigo}></img>
                        <a className="ml-32 bg-purple-500 hover:bg-purple-600 text-gray-100 cursor-pointer font-semibold p-3 m-5 " target="_blank" href="https://github.com/Shiyoki/IndigoStore">Ver repositorio</a> 
                    </div>     
                </div>
                <div className="ml-auto mr-auto mt-9 mb-9">
                    <div className="w-96 h-96 shadow-xl bg-blue-400 hover:bg-blue-500">
                        <h1 className="text-3xl text-center text-white font-extrabold pb-5 pt-4">Repositorio</h1>
                        <img className="w-auto h-60 p-3 shadow-xl mb-5" src={repo}></img>
                        <a className="bg-purple-500 hover:bg-purple-600 text-gray-100 cursor-pointer font-semibold p-3 m-5 " target="_blank" href="https://github.com/Shiyoki/FrontEnd-Gallery">Ver repositorio</a>
                        <a className="bg-purple-500 hover:bg-purple-600 text-gray-100 cursor-pointer font-semibold p-3 m-5 " target="_blank" href="https://shiyoki.github.io/FrontEnd-Gallery/#/">Ir al proyecto</a>   
                    </div>     
                </div>
                <div className="ml-auto mr-auto mt-9 mb-9">
                    <div className="w-96 h-96 shadow-xl bg-blue-400 hover:bg-blue-500">
                        <h1 className="text-3xl text-center text-white font-extrabold pb-5 pt-4">PongPY</h1>
                        <img className="w-full h-60 p-3 shadow-xl mb-5" src={pong}></img>
                        <a className="ml-32 bg-purple-500 hover:bg-purple-600 text-gray-100 cursor-pointer font-semibold p-3 m-5 " target="_blank" href="https://github.com/Shiyoki/PongPY">Ver repositorio</a> 
                    </div>     
                </div>  
            </div>
        </div>
        
    );
}