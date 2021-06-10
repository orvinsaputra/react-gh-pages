import React, { Component } from 'react';

const Display = ({inputJSON}) =>{

    return (
        <>
            <div class="plan-selector">
                {
                    inputJSON?
                    
                    inputJSON.map((plan,idx) => 
                        <div class="plan">
                            <header>
                            <h4 class="plan-title">
                                {plan.title}
                            </h4>
                            <div class="plan-cost"><span class="plan-price">HK${plan.price}</span><span class="plan-type">/month</span></div>
                            </header>
                            <ul class="plan-features">
                                {plan.general? <li><i class="ion-checkmark"> </i>General</li> : ""}
                                {plan.specialist? <li><i class="ion-checkmark"> </i>Specialist</li> : ""}
                                {plan.physiotherapy? <li><i class="ion-checkmark"> </i>Physiotherapy</li> : ""}
                                {plan.laboratory? <li><i class="ion-checkmark"> </i>Laboratory</li> : ""}
                                {plan.emergency? <li><i class="ion-checkmark"> </i>Emergency</li> : ""}
                            </ul>
                            <div class="plan-select"><a href="">Select Plan</a></div>
                        </div>    
                            ) 
                    
                    : ""
                }
            </div>
        </>
    );
  }
  
  export default Display;