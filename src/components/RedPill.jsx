import React, { Component } from 'react'
import { FlashBg, Danger, SpinDivLeft1, SpinDivLeft2, SpinDivRight1, SpinDivRight2,
    FadeInBar1, FadeInBar2, FadeInBar3, FadeInBar4, MoveDiv1, MoveDiv2, MoveDiv3
} from './elements/RedPillElements';




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

                    <SpinDivLeft1></SpinDivLeft1>
                    <SpinDivLeft2></SpinDivLeft2>

                    <Danger>STRESS</Danger>
                    <SpinDivRight1></SpinDivRight1>
                    <SpinDivRight2></SpinDivRight2>

                </FlashBg>
            </div>
        )
    }
}

export default RedPill
