import React, { Component } from 'react'
import { Wrapper, BackGround, ParagraphB } from './elements/BluePillElements';
import { H1, Paragraph } from './elements/StartPageElements'

export class BluePill extends Component {
    render() {
        return (
            <div className="bluePill">
                <BackGround>
                    <Wrapper>
                        <H1 style={{ color: 'black' }}>Hello and Welcome.</H1>
                        <ParagraphB>Thank you for swallowing the Blue Pill.</ParagraphB>
                        <ParagraphB>There are certain ways to reduce #Stress like:</ParagraphB>
                        <Paragraph>
                            <ul>
                                <li>Exercise</li>
                                <li>Eat little but often</li>
                                <li>Meditation</li>
                                <li>Reduce caffeine, nicotine and alcohol</li>
                                <li>Calm and soothing sounds</li>
                                <li>Aromatherapy candles</li>
                            </ul>
                        </Paragraph>
                        <ParagraphB>Aromatherapy works by simulating the nose with scents from candles</ParagraphB>
                    </Wrapper>
                </BackGround>

            </div>
        )
    }
}

export default BluePill
