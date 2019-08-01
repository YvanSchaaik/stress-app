import React, { Component } from 'react'
import { Wrapper, BackGround, ParagraphB } from './elements/BluePillElements';
import { H1 } from './elements/StartPageElements'
import { Link } from 'react-router-dom'

export class BluePill extends Component {
    render() {
        return (
            <div className="bluePill">
                <BackGround>
                    <Wrapper>
                        <H1 style={{ color: 'black' }}>Hello and Welcome.</H1>
                        <ParagraphB>Thank you for swallowing the Blue Pill.</ParagraphB>
                        <ParagraphB>There are alot ways to reduce #Stress, but I am going to talk about the Aromatherapy #StressRelief</ParagraphB>
                        <ParagraphB>
                        Aromatherapy works by simulating the nose with scents from candles. Certain scents makes us feel
                        <ul>
                            <li>Energized</li>
                            <li>Less stressed</li>
                            <li>Clear minded</li>
                            <li>Managing pain</li>
                            <li>Relive memories</li>
                        </ul>
                            The last one is different for everybody, since there are different psychological reactions to certain smells. You can also call this "Imprinting".<br /><br />
                            The most important question is "How to use Aromatherapy for #StressRelief?". <br /><br />
                            As you know we do remember certain smells, and even remember 
                            certain thoughts when we smell something good or bad. 
                            The smell of freshly baked bread could give you a memory about a 
                            camping in France with your family or when u walk by a bakery every morning to work.
                            These familiar scents can give you a nice and happy feeling. To use this technique u have to find that one scent
                            that gives you a good, happy and most importantly, a calm, vibe. You can even use this technique together with meditation. <br/>
                            You can try out these candle scents to start with.
                            <ul>
                                <li>Lavender</li>
                                <li>Rose</li>
                                <li>Vanilla</li>
                                <li>Cinnamon</li>
                                <li>Sandalwood</li>
                            </ul>
                        </ParagraphB>
                        <Link to="/">Back to index.</Link>
                    </Wrapper>
                </BackGround>

            </div>
        )
    }
}

export default BluePill
