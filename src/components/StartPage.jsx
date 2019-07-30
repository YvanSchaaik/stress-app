import React, { Component } from 'react'
import "./StartPage.css"
import {Link} from 'react-router-dom'
import {Wrapper, H1, Paragraph, ButtonRed, ButtonBlue} from './elements/StartPageElements'

export class StartPage extends Component {

    render() {
        return (
            <div className="startPage">
                <Wrapper className="bgImg" >
                    <H1>
                        Hello, and Welcome #ToStress or #NotToStress!
                    </H1>
                    <Paragraph>
                        If u had to choose. What pill would you take?
                    </Paragraph>
                    <Link to='/blue'><ButtonRed >Red Pill</ButtonRed></Link>
                    <Link to='/red'><ButtonBlue >Blue Pill</ButtonBlue></Link>
                </Wrapper>
            </div>
        )
    }
}

export default StartPage
