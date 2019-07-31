import React, { Component } from 'react'
import { FlashBg, Danger,
    VerticalDiv1, VerticalDiv2, VerticalDiv3, VerticalDiv4, VerticalDiv5,
    HorizontalDiv1, HorizontalDiv2, HorizontalDiv3, HorizontalDiv4, HorizontalDiv5,
} from './elements/RedPillElements';




export class RedPill extends Component {
    render() {
        return (
            <div>
                <FlashBg>
                    <VerticalDiv1></VerticalDiv1>
                    <VerticalDiv2></VerticalDiv2>
                    <VerticalDiv3></VerticalDiv3>
                    <VerticalDiv4></VerticalDiv4>
                    <VerticalDiv5></VerticalDiv5>
                        <Danger>STRESS</Danger>
                    <HorizontalDiv1></HorizontalDiv1>
                    <HorizontalDiv2></HorizontalDiv2>
                    <HorizontalDiv3></HorizontalDiv3>
                    <HorizontalDiv4></HorizontalDiv4>
                    <HorizontalDiv5></HorizontalDiv5>
                </FlashBg>
            </div>
        )
    }
}

export default RedPill
