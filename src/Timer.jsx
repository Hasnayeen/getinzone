import React, { Component } from 'react';
import { DateTime, Duration } from "luxon";
import Sound from "./sound.mp3";

let sound = new Audio(Sound);

export default class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 600,
            defaultTime: 600,
            breakTime: 120,
            timerRunning: false,
            breakRunning: false,
            totalUnit: 0,
            totalTime: 0,
            date: DateTime.local().toISODate(),
            remarks: '',
            showConfiguration: false,
        };
        this.startTimer = this.startTimer.bind(this);
        this.pauseTimer = this.pauseTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.activateBreak = this.activateBreak.bind(this);
        this.configure = this.configure.bind(this);
        this.shortcutKey = this.shortcutKey.bind(this);
        this.changeBreakTime = this.changeBreakTime.bind(this);
        this.changeWorkTime = this.changeWorkTime.bind(this);
    }

    componentDidMount() {
        document.body.addEventListener('keyup', this.shortcutKey);
    }

    componentWillUnmount() {
        document.body.removeEventListener('keyup', this.shortcutKey);
    }

    shortcutKey(e) {
        switch (e.keyCode) {
            case 83:
                this.startTimer();
                break;

            case 80:
                this.pauseTimer();
                break;

            case 82:
                this.resetTimer();
                break;

            case 66:
                this.activateBreak();
                break;

            case 67:
                this.configure();
                break;

            default:
                break;
        }
    }

    startTimer() {
        this.stopSound();
        if (this.state.timerRunning === false) {
            this.timerID = setInterval(
                () => this.decreaseTime(),
                1000
            );
            this.setState({ timerRunning: true });
        }
    }

    decreaseTime() {
        this.setState({ time: this.state.time - 1 });
        if (this.state.time === 0) {
            clearInterval(this.timerID);
            if (!this.state.breakRunning) {
                this.setState({ totalTime: parseInt(this.state.totalTime, 10) + parseInt(this.state.defaultTime, 10) });
                this.setState({ totalUnit: this.state.totalUnit + 1 });
            }
            this.playSound();
        };
    }

    activateBreak() {
        this.setState({ time: this.state.breakTime, breakRunning: true });
    }

    playSound() {
        sound.play();
    }

    stopSound() {
        sound.pause();
    }

    pauseTimer() {
        clearInterval(this.timerID);
        this.setState({ timerRunning: false });
    }

    resetTimer() {
        this.stopSound();
        clearInterval(this.timerID);
        this.setState({ time: this.state.defaultTime });
        if (this.state.breakRunning) {
            this.setState({ breakRunning: false });
        }
        this.setState({ timerRunning: false });
    }

    totalTime() {
        return Duration.fromObject({ seconds: this.state.totalTime }).shiftTo('hours', 'minutes');
    }

    currentTime() {
        return Duration.fromObject({ seconds: this.state.time }).shiftTo('minutes', 'seconds').toFormat("mm ':' ss");
    }

    workTime() {
        return Duration.fromObject({ seconds: this.state.defaultTime }).shiftTo('hours', 'minutes', 'seconds').toFormat("hh 'H :' mm 'M :' ss 'S'");
    }

    breakTime() {
        return Duration.fromObject({ seconds: this.state.breakTime }).shiftTo('hours', 'minutes', 'seconds').toFormat("hh 'H :' mm 'M :' ss 'S'");
    }

    configure() {
        this.setState({ showConfiguration: !this.state.showConfiguration });
    }

    changeBreakTime(event) {
        this.setState({ breakTime: event.target.value });
        if (!this.state.breakRunning && (this.state.time === this.state.breakTime)) {
            this.setState({ time: event.target.value });
        }
    }

    changeWorkTime(event) {
        this.setState({ defaultTime: event.target.value });
        if (!this.state.timerRunning && (this.state.time === this.state.defaultTime)) {
            this.setState({ time: event.target.value });
        }
    }

    render() {
        return (
            <div className="flex flex-col bg-white shadow-lg relative rounded">
                <div className={"absolute pin bg-white " + (this.state.showConfiguration ? '' : 'hidden')}>
                    <div className="flex flex-col justify-between h-full">
                        <div className="p-4" onClick={this.configure}>
                            <i className="float-right text-red-lighter cursor-pointer fas fa-times-circle"></i>
                        </div>
                        <div className="">
                            <div className="bg-grey-lighter m-6 p-4 rounded">
                                <label className="block text-grey-darker text-sm font-bold pb-2" htmlFor="work-unit-time">
                                    Work Unit Time <span className="text-sm font-normal">(in seconds)</span>
                                </label>
                                <div className="flex flex-row justify-between items-center">
                                    <input className="appearance-none border rounded w-3/5 py-2 px-3 text-grey-darker" id="work-unit-time" type="text" placeholder="3600"
                                        onChange={this.changeWorkTime} value={this.state.defaultTime} />
                                    <span className="text-grey-darkest">{this.workTime()}</span>
                                </div>
                            </div>
                            <div className="bg-grey-lighter m-6 p-4 rounded">
                                <label className="block text-grey-darker text-sm font-bold pb-2" htmlFor="break-unit-time">
                                    Break Unit Time <span className="text-sm font-normal">(in seconds)</span>
                                </label>
                                <div className="flex flex-row justify-between items-center">
                                    <input className="appearance-none border rounded w-3/5 py-2 px-3 text-grey-darker" id="break-unit-time" type="text" placeholder="3600"
                                        onChange={this.changeBreakTime} value={this.state.breakTime} />
                                    <span className="text-grey-darkest">{this.breakTime()}</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-8">
                            <button className="hidden border-teal border rounded px-4 py-2 text-teal font-semibold">Save</button>
                        </div>
                    </div>
                </div>
                <div className="pt-4 pr-4">
                    <span onClick={this.configure}>
                        <i className="fas fa-cog float-right text-grey-dark cursor-pointer"></i>
                    </span>
                </div>
                <h1 className="text-center text-grey-darker text-5xl py-8">{this.currentTime()}</h1>
                <div className="pb-8">
                    <button className="btn btn-brand start" type="button" onClick={this.startTimer}>Start</button>
                    <button className="btn" type="button" onClick={this.pauseTimer}>Pause</button>
                    <button className="btn" type="button" onClick={this.resetTimer}>Reset</button>
                    <button className="btn" type="button" onClick={this.activateBreak}>Break</button>
                </div>
                <div className="border-t w-full my-4"></div>
                <div className="p-4">
                    <span className="block py-2 text-grey-dark">Total Time : {this.totalTime().hours}H {this.totalTime().minutes.toFixed(0)}M</span>
                    <span className="block py-2 text-grey-dark">Completed Unit : {this.state.totalUnit}</span>
                </div>
            </div>
        );
    }
}
