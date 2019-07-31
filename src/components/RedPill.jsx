import React, { Component } from 'react'
import { FlashBg, Danger, SpinDivLeft1, SpinDivLeft2, SpinDivRight1, SpinDivRight2
} from './elements/RedPillElements';




export class RedPill extends Component {
    render() {
        return (
            <div>
                <FlashBg>
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
