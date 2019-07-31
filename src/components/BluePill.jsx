import React, { Component } from 'react'
import { Wrapper, BackGround, ParagraphB } from './elements/BluePillElements';

export class BluePill extends Component {
    render() {
        return (
            <div className="bluePill">
            <Wrapper>
                <BackGround>
                <ParagraphB>Can we see this?</ParagraphB>
                </BackGround>
            </Wrapper>
                
            </div>
        )
    }
}

export default BluePill
