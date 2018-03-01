import React, { Component,Fragment } from "react";
import KoeraJson from "../assets/js/Korea-info-json";
import "../assets/style/Dpage.css";

class Korea extends Component {
  render (){
    return (
      <div>
        {
          KoeraJson.map((item,i) => {
            return(
              <a className="each-wrap">
                <img key={i} src={item.img} alt=""/>
                <div>
                  <span>{item.name}</span>
                  <span>{item.valuation}</span>
                </div>
              </a>
              
            );
          })
        }
      </div>
    );
  }
}

export default Korea;