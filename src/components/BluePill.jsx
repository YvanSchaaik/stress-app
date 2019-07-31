import React, { Component } from 'react'
import { Wrapper, BackGround, ParagraphB } from './elements/BluePillElements';
import { H1 } from './elements/StartPageElements'

export class BluePill extends Component {
    render() {
        return (
            <div className="bluePill">
                <BackGround>
                    <Wrapper>
                        <H1 style={{ color: 'black' }}>Hello and Welcome.</H1>
                        <ParagraphB>Thank you for swallowing the Blue Pill.</ParagraphB>
                        <ParagraphB>There are alot ways to reduce #Stress, but I am going to talk about the Aromatherapy #StressRelief</ParagraphB>
                        <ParagraphB>Aromatherapy works by simulating the nose with scents from candles. Certain scents makes us feel more
                        <ul>
                            <ul>Energized</ul>
                            <ul>Less stressed</ul>
                            <ul>Clear minded</ul>
                            <ul>Managing pain</ul>
                            <ul>Relive memories</ul>
                        </ul>
                        The last one is different for everybody, since there are diffrent psychological reactions to certain smells
                        </ParagraphB>
                    </Wrapper>
                </BackGround>

            </div>
        )
    }
}

export default BluePill
