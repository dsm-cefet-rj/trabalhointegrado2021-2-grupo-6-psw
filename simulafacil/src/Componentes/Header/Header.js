import React from "react";
import "./Header.css";
import Logo from "../../Assets/Logo1.png";

export function Header(){
       return(
           <div className="Header">
               <img src={Logo} alt="Logo Simulafácil"></img>
           </div>
       )
}