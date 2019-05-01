import React from 'react';
// import iconSoundOff from "../../../soundOff.png";
// import iconSoundOn from "../../../soundOn.png";


class Timer extends React.Component {


    play = '▶';
    pause = '॥';
    stop = '■';



    constructor(props) {
        super(props);
        this.state = {
            timerId: 0,
            timerOn: false,
            currentTime: '25:00',
            cycle: 'work',
            worktime: 25,
            breaktime: 5,
            soundOn: true



        };
        this.handlePlayPause = this.handlePlayPause.bind(this);
        this.handleStop = this.handleStop.bind(this);
        // this.toggleSound = this.toggleSound.bind(this);
    }




    // SOUND

    // soundIcon = this.state.soundOn? iconSoundOff : iconSoundOn;
    // alt = this.state.soundOn? 'SoundOn' : 'Sound Off';
    //
    // toggleSound = () => {
    //     const newSoundState = !this.state.soundOn;
    //     this.setState({ soundOn: newSoundState });
    // };




    // PLAY STOP CONTROLLER

    handlePlayPause = () => {

        const newTimerState = !this.state.timerOn;
        this.setState({ timerOn: newTimerState});


        let time;
        if (this.state.cycle === 'work') {
            return time = this.state.worktime * 60;
        } else if (this.state.cycle === 'break') {
            return time = this.state.breaktime * 60;
        } else {console.log('ERROR: cycle not written in the state.')}


        let minutes, seconds;
        let runningTimer = setInterval(() => {
            this.setState({
                timerId: runningTimer
            })
        });
        minutes = Math.floor(time/60);
        seconds = time - minutes * 60;

        minutes = minutes < 10? "0" + minutes : minutes;
        seconds = seconds < 10? "0" + seconds : seconds;

        this.setState({
            currentTime: `${minutes} : ${seconds}`
        });

        // time ended?
        ///

        if (time === 0) {
            if (this.state.cycle === 'work') {
                this.setState({
                    cycle: 'break',
                    timerOn: false
                });
                clearInterval(this.state.timerId);
                this.handlePlayPause(this.state.breakTime);
            } else {
                this.setState({
                    cycle: 'work',
                    timerOn: false
                });
                clearInterval(this.state.timerId);
                this.handlePlayPause(this.state.worktime);
            }
        }

    };

    handleStop = () => {
        this.setState({timerOn: false});

        // remained time = 0
    };


    render() {
        return (
            <React.Fragment>
                <div style={{display: 'inline-block'}}>
                <p className="cycle">{this.state.cycle}</p>

                <div className="timer">
                    <p>{this.state.currentTime}</p>

                </div>





                <div className="timer-controller-buttons">
                    <ul>

                        <li>
                            <button
                                className={this.state.timerOn? "pause": "play"}
                                onClick={this.handlePlayPause}
                            >{this.state.timerOn ? this.pause: this.play }</button>
                        </li>
                        <li>
                            <button
                                className="icon stop"
                                onClick={this.handleStop}
                            >{this.stop}</button>
                        </li>
                        {/*<li>*/}
                            {/*<img*/}
                                {/*className="sound"*/}
                                {/*alt={this.alt}*/}
                                {/*src={this.soundIcon}*/}
                                {/*onClick={this.toggleSound}*/}
                            {/*/>*/}
                        {/*</li>*/}




                    </ul>

                </div>
                </div>


            </React.Fragment>

        )
    }
}





export default Timer;