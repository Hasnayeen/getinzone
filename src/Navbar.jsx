import React, { Component } from "react";

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownShown: false
        }
        this.toggleDropdown = this.toggleDropdown.bind(this);
    }

    toggleDropdown() {
        this.setState({ dropdownShown: !this.state.dropdownShown });
    }

    render() {
        return (
            <nav className="bg-white h-12 shadow mb-8">
                <div className="container mx-auto h-full">
                    <div className="flex flex-row items-center justify-between h-12">
                        <div className="mr-6">
                            <a href="/" className="no-underline text-brand text-2xl font-medium">
                                getin.zone
                            </a>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto flex flex-row justify-end">
                    <div className={"z-10 " + (this.state.dropdownShown ? '' : 'hidden')}>
                        <div className="bg-white w-48 flex flex-col items-center text-sm shadow rounded-b">
                            <div className="w-full hover:border-brand border-l-4 border-transparent">
                                <a href="dailies" className="p-4 block no-underline text-grey-dark">Dailies</a>
                            </div>
                            <div className="border-t w-full"></div>
                            <div className="w-full hover:border-brand border-l-4 border-transparent">
                                <a href="logout" className="p-4 block no-underline text-grey-dark">Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        );
    }
}