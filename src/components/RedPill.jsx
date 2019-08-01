import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {
    FlashBg, Danger, SpinDivLeft1, SpinDivLeft2, SpinDivRight1, SpinDivRight2,
    FadeInBar1, FadeInBar2, FadeInBar3, FadeInBar4, MoveDiv1, MoveDiv2, MoveDiv3, MoveDiv4, MoveDiv5, BreathDiv1, BreathDiv2, ButtonIndex
} from './elements/RedPillElements';
import './RedPill.css'




export class RedPill extends Component {
    render() {
        return (
            <div>
                <FlashBg>
                    <FadeInBar1></FadeInBar1>
                    <FadeInBar2></FadeInBar2>
                    <FadeInBar3></FadeInBar3>
                    <FadeInBar4></FadeInBar4>

                    <MoveDiv1></MoveDiv1>
                    <MoveDiv2></MoveDiv2>
                    <MoveDiv3></MoveDiv3>
                    <MoveDiv4></MoveDiv4>
                    <MoveDiv5></MoveDiv5>

                    <BreathDiv1></BreathDiv1>
                    <BreathDiv2></BreathDiv2>

                    <SpinDivLeft1></SpinDivLeft1>
                    <SpinDivLeft2></SpinDivLeft2>


                    <SpinDivRight1></SpinDivRight1>
                    <SpinDivRight2></SpinDivRight2>

                    <div className="div1"></div>
                    <div className="div2"></div>
                    <div className="div3"></div>
                    <div className="div4"></div>
                    <div className="div5"></div>
                    <Link to="/"><ButtonIndex>Back to index</ButtonIndex></Link>
                    <Danger>STRESS</Danger>

                </FlashBg>

            </div>
        )
    }
}

export default RedPill
