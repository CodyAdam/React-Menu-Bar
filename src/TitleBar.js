import React from "react";
import MenuBar from "./MenuBar";

export default class TitleBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "This is a window name example",
            menu: [
                {
                    name: "File",
                    subMenu: [
                        { name: "New", available: true, function: props.functions.utilityFunction1, shortcut: "" },
                        {
                            name: "Save",
                            available: true,
                            function: props.functions.utilityFunction1,
                            shortcut: "Ctrl + S",
                        },
                        {
                            name: "Exit",
                            available: false,
                            function: props.functions.utilityFunction1,
                            shortcut: "Alt + F4",
                        },
                    ],
                },
                {
                    name: "Edit",
                    subMenu: [
                        {
                            name: "Undo",
                            available: false,
                            function: props.functions.utilityFunction1,
                            shortcut: "Ctrl + Z",
                        },
                        {
                            name: "Redo",
                            available: false,
                            function: props.functions.utilityFunction1,
                            shortcut: "Ctrl + Shift + Z",
                        },
                        {
                            name: "Cut",
                            available: false,
                            function: props.functions.utilityFunction1,
                            shortcut: "Ctrl + X",
                        },
                        {
                            name: "Copy",
                            available: true,
                            function: props.functions.utilityFunction1,
                            shortcut: "Ctrl + C",
                        },
                        {
                            name: "Paste",
                            available: true,
                            function: props.functions.utilityFunction1,
                            shortcut: "Ctrl + V",
                        },
                    ],
                },
                {
                    name: "Display",
                    subMenu: [
                        {
                            name: "Zoom",
                            subMenu: [
                                {
                                    name: "+ Zoom",
                                    available: true,
                                    function: props.functions.utilityFunction1,
                                    shortcut: "Ctrl + +",
                                },
                                {
                                    name: "- Zoom",
                                    available: true,
                                    function: props.functions.utilityFunction1,
                                    shortcut: "Ctrl + -",
                                },
                                {
                                    name: "Explode!",
                                    subMenu: [
                                        {
                                            name: "Are you sure?",
                                            subMenu: [
                                                {
                                                    name: "Yes!!",
                                                    available: true,
                                                    function: () => {
                                                        alert("ಠ_ಠ");
                                                    },
                                                    shortcut: "",
                                                },
                                                {
                                                    name: "No",
                                                    available: false,
                                                    function: props.functions.utilityFunction1,
                                                    shortcut: "",
                                                },

                                                {
                                                    name: "Mhhh ?",
                                                    available: true,
                                                    function: props.functions.utilityFunction1,
                                                    shortcut: "",
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    name: "Reset Zoom",
                                    available: false,
                                    function: props.functions.utilityFunction1,
                                    shortcut: "Ctrl + 0",
                                },
                            ],
                        },
                        {
                            name: "Fullscreen",
                            available: true,
                            function: props.functions.utilityFunction1,
                            shortcut: "F11",
                        },
                    ],
                },
                {
                    name: "Help",
                    subMenu: [
                        {
                            name: "Why should i help you?",
                            subMenu: [
                                {
                                    name: "Because i asked! Now act little webpage!",
                                    available: true,
                                    function: props.functions.utilityFunction2,
                                    shortcut: "",
                                },
                                {
                                    name: "Do as you wish to, I don't care anyway.",
                                    available: true,
                                    function: () => {
                                        window.location.href = "https://youtu.be/dQw4w9WgXcQ?t=85";
                                    },
                                    shortcut: "",
                                },
                            ],
                        },
                    ],
                },
                {
                    name: "Theme",
                    subMenu: [
                        {
                            name: "Dark",
                            available: true,
                            function: props.functions.utilityFunction3,
                            shortcut: "",
                        },
                        {
                            name: "Light",
                            available: true,
                            function: props.functions.utilityFunction4,
                            shortcut: "",
                        },
                    ],
                },
            ],
        };
    }

    render() {
        return (
            <div id="TitleBar">
                <MenuBar menu={this.state.menu} />
                <div id="Title">
                    <span>{this.state.title}</span>
                </div>
                <div id="Icons"></div>
            </div>
        );
    }
}
