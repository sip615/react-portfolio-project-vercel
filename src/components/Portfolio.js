import React from "react";
import todolist from "../images/todolist.jpg";
import dailydash from "../images/dailydash.jpg";
import crystalcollector from "../images/crystalcollector.jpg";
import bamazon from "../images/bamazon.jpg";
//FONT AWESOME IMPORT
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus} from '@fortawesome/free-solid-svg-icons';
//REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";
import "react-popupbox/dist/react-popupbox";



const Portfolio = () => {
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
// Todolist
    const openPopupboxTodo = () => {
        const content = (
        <>
            <img className="portfolio-image-popupbox" src={todolist} alt="Todo List App..."/>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas eveniet 
                    quos culpa sit, tempore dolorum facere laboriosam dolores ad corrupti?
                </p>
                <b>Deployed At:</b> 
                <a className="hyper-link" onClick={()=> window.open("https://sunnystodolistapp.herokuapp.com/", "_blank")}>https://sunnystodolistapp.herokuapp.com/</a>
        </>
        )
        PopupboxManager.open({ content })
    }
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
    const popupboxConfigTodo = {
        titleBar: {
            enable: true,
            text: 'Demo App'
        },
        fadeIn: true,
        fadeInSpeed: 500
    }
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
// DailyDashBoard
    const openPopupboxDailydash = () => {
        const content = (
        <>
            <img className="portfolio-image-popupbox" src={dailydash} alt="Personal Dashboard App..."/>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas eveniet 
                    quos culpa sit, tempore dolorum facere laboriosam dolores ad corrupti?
                </p>
                <b>Deployed At:</b> 
                <a className="hyper-link" onClick={()=> window.open("http://dailydashboardproject2.herokuapp.com/", "_blank")}>http://dailydashboardproject2.herokuapp.com/</a>
        </>
        )
        PopupboxManager.open({ content })
    }
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
    const popupboxConfigDailydash = {
        titleBar: {
            enable: true,
            text: 'Demo App'
        },
        fadeIn: true,
        fadeInSpeed: 500
    }
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
//Crystal Collector
    const openPopupboxCrystalcollector = () => {
        const content = (
        <>
            <img className="portfolio-image-popupbox" src={crystalcollector} alt="Personal Dashboard App..."/>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas eveniet 
                    quos culpa sit, tempore dolorum facere laboriosam dolores ad corrupti?
                </p>
                <b>Deployed At:</b> 
                <a className="hyper-link" onClick={()=> window.open("https://sip615.github.io/unit-4-game/", "_blank")}>https://sip615.github.io/unit-4-game/</a>
        </>
        )
        PopupboxManager.open({ content })
    }
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
    const popupboxConfigCrystalcollector = {
        titleBar: {
            enable: true,
            text: 'A Numbers Matching Game'
        },
        fadeIn: true,
        fadeInSpeed: 500
    }
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
//Bamazon
    const openPopupboxBamazon = () => {
        const content = (
        <>
            <img className="portfolio-image-popupbox" src={bamazon} alt="Node.Js Ecom Store..."/>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas eveniet 
                    quos culpa sit, tempore dolorum facere laboriosam dolores ad corrupti?
                </p>
                <b>Github:</b> 
                <a className="hyper-link" onClick={()=> window.open("https://github.com/sip615/bamazon", "_blank")}>https://github.com/sip615/bamazon</a>
        </>
        )
        PopupboxManager.open({ content })
    }
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
    const popupboxConfigBamazon = {
        titleBar: {
            enable: true,
            text: 'Demo Project' 
        },
        fadeIn: true,
        fadeInSpeed: 500
    }
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
{/*------------------------------------------------------------------------------------------------------------------------ */}
                
                    <div className="portfolio-image-box" onClick={openPopupboxTodo}>
                        <img className="portfolio-image" src={todolist} alt="Todo List Project..."/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                
{/*------------------------------------------------------------------------------------------------------------------------ */}
                
                    <div className="portfolio-image-box" onClick={openPopupboxDailydash}>   
                        <img className="portfolio-image" src={dailydash} alt="Daily Dashboard App..."/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
               
{/*------------------------------------------------------------------------------------------------------------------------ */}
                
                    <div className="portfolio-image-box" onClick={openPopupboxCrystalcollector}>
                        <img className="portfolio-image" src={crystalcollector} alt="Crystal Collector Game..."/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                
{/*------------------------------------------------------------------------------------------------------------------------ */}
                
                    <div className="portfolio-image-box" onClick={openPopupboxBamazon}>
                        <img className="portfolio-image" src={bamazon} alt="Node App: Ecom Store Project..."/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                
{/*------------------------------------------------------------------------------------------------------------------------ */}                
                </div>
            </div>
            <PopupboxContainer { ...popupboxConfigTodo } />
            <PopupboxContainer { ...popupboxConfigDailydash } />
            <PopupboxContainer { ...popupboxConfigCrystalcollector } />
            <PopupboxContainer { ...popupboxConfigBamazon } />
        </div>
    )
}

export default Portfolio
