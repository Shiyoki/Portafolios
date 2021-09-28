import react from "../../img/react.png"
import js from "../../img/js.png"
import node from "../../img/node.png"
import python from "../../img/python.png"
import flask from "../../img/flask.png"
import MongoDB from "../../img/MongoDB.png"
import sqlite from "../../img/sqlite.png"
import MySQL from "../../img/MySQL.png"
import git from "../../img/git.png"
import html from "../../img/html.png"
import css from "../../img/css.png"
import boots from "../../img/boots.png"
import tail from "../../img/tail.png"

export default function Tech(){
    return(
        <>
        <div className="bg-blue-400 ">
        <h1 className="text-4xl text-center text-white font-extrabold mb-10 pt-3">Tecnologias</h1>
           <div className="grid grid-cols-1 mt-3 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
               <div className="w-72 h-44 p-3 mb-10">-
                    <img className="w-full" src={js}></img>
               </div>
               <div className="w-72 h-44 p-3 ">
                    <img className="ml-7 w-40" src={html}></img>
               </div>
               <div className="w-72 h-44 p-3">
                    <img className="w-28 ml-12" src={css}></img>
               </div>
               <div className="w-72 h-44 p-3">
                    <img className="w-full " src={node}></img>
               </div>
               <div className="w-72 h-44 p-3 ">
                    <img className="w-32 ml-12" src={python}></img>
               </div>
               <div className="w-64 h-44 p-3">
                    <img className="w-28 ml-10" src={flask}></img>
               </div>
               <div className="w-64 h-44 p-3 ">
                    <img className="w-72 ml-10" src={MongoDB}></img>
               </div>
               <div className="w-64 h-44 p-3 ">
                    <img className="w-72 ml-10" src={sqlite}></img>
               </div>
               <div className="w-64 h-44 p-3 ">
                    <img className="w-72 ml-10" src={MySQL}></img>
               </div>
               <div className="w-64 h-44 p-3 ">
                    <img className="w-72 ml-10" src={git}></img>
               </div>
               
           </div>
        </div>
        </>
    );
}