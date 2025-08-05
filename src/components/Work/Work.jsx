import React from 'react'
import "./Work.css"

function Work() {
  return (
    <div>
       <div id="portfolio">
        <div className="container">
            <h1 className="sub-title">My Projects</h1>
            <div className="work-list">
                <div className="work">
                    <img src="./images/ecommerce.jpeg" alt=""/>
                    <div className="layer">
                        <h3>College-Canteen
                        </h3>
                        <p>A Web app or Website for University or college canteen to save all the importent time of student & teachers and also ignore the gathering.</p>
                        <a href="https://github.com/ronishil0123/College-Canteen"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>
                <div className="work">
                    <img src="./images/agency.jpg" alt=""/>
                    <div className="layer">
                        <h3>Amazon Clone</h3>
                        <p>Creating an Amazon clone project involves replicating the functionality and design of the Amazon e-commerce platform. Here are the key aspects you might consider when working on such a project</p>
                        <a><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>
                <div className="work">
                    <img src="./images/real.png" alt=""/>
                    <div className="layer">
                        <h3>Tic-Tac-Toe</h3>
                        <p>Certainly! Tic-tac-toe is a classic two-player game where the objective is to get three of your marks (usually "X" or "O") in a row on a 3x3 grid. Here's a simple outline for a Tic-tac-toe game project</p>
                        <a href="https://github.com/ronishil0123/Tic-Tac-Toe"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>
            </div>
            {/* <a href="https://github.com/ronishil0123?tab=repositories" className="btn"><span>See more</span></a> */}
        </div>
    </div>
    </div>
  )
}

export default Work
