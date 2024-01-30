import React, { useState } from 'react';
import { Container, CssBaseline, Typography, Button } from '@material-ui/core';
import useStyles from '../css/Valentines';

import questiongif from '../static/valentines/question.gif';
import shockGif from '../static/valentines/shock.gif';
import yayGif from '../static/valentines/Yay.gif';

const Valentines = () => {
    const classes = useStyles();
    const [question, setQuestion] = useState(true);
    const [shock, setShock] = useState(false);
    const [yay, setYay] = useState(false);
    const [position, setPosition] = useState({left: 0, top: 0});

    const [buttonSize, setButtonSize] = useState(50);
    
    const noButtonClick = () => {
        const newPosition = {
            left: Math.random() * window.innerWidth,
            top: Math.random() * window.innerHeight ,
        };
        const newButtonSize = buttonSize + 10;
        setButtonSize(newButtonSize);
        setPosition(newPosition);
        setQuestion(false);
        setYay(false)
        setShock(true);
    };

    const [reveal, setReveal] = useState(false);

    const yesButtonClick = () => {
        setQuestion(false);
        setYay(true)
        setShock(false);
        setReveal(true);
    }


    return(
        <div className={classes.page}>
            <CssBaseline/>
            <Container className={classes.container} style={{display: reveal ? 'none' : 'block'}}>
                <img src={questiongif} alt="Will you be my valentine?" style={{display: question ? 'inline' : 'none'}}/>
                <img src={shockGif} alt="WHAAAT" style={{display: shock ? 'inline' : 'none'}}/>
                <Typography variant='h4' align="center" className={classes.customFontStyle}>
                    Will you be my valentine?
                </Typography>
                <div className={classes.buttonContainer}>
                    <Button variant='contained' className={classes.button} onClick={noButtonClick} style={{postion: 'absolute', left: position.left, top: position.top}}>
                        No
                    </Button>
                    <Button variant='contained' className={classes.button} onClick={yesButtonClick} style={{width: `${buttonSize}px`, height: `${buttonSize}px`}}>
                        Yes
                    </Button>
                </div>
            </Container>
            <Container className={classes.container} style={{display: reveal ? 'block' : 'none'}}>
                <img src={yayGif} alt="YAAAAY" style={{display: yay ? 'inline' : 'none'}}/>
                <Typography variant='h4' align="center" className={classes.customFontStyle}>
                        You have received one coupon for a date with your boyfriend!
                </Typography>
                <br/>
                <Typography variant='h5' align="center" className={classes.customFontStyle}>
                        Must be redeemed sometime after February 14th
                </Typography>
            </Container>

        </div>
    );
};

export default Valentines;
