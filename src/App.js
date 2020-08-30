import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React/**
 *
 * ChatBot
 *
 */

import React, {Component, memo} from "react";
import PropTypes from 'prop-types';
import {ThemeProvider} from "styled-components";
import ChatBotComp from 'react-simple-chatbot';
//import history from "./history";
import Api from "./api";
import ReportIssue from './ReportIssue'


export default class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch('https://tools.learningcontainer.com/sample-json-file.json')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json
                })
            });

    }

    render(){

        const config = {
            width: "800px",
            height: "550px",
            floating: true,
        };

        // const show = history.location.pathname  === "/"?false:true;

        const theme = {
            background: "#f5f8fb",
            fontFamily: "MarsCentra-Book",
            headerBgColor: "whitesmoke",
            headerFontColor: "#4c4c4c",
            headerFontSize: "16px",
            botBubbleColor: "#1940A0",
            botFontColor: "#fff",
            userBubbleColor: "#fff",
            userFontColor: "#4c4c4c",
        };
        const {items, isLoaded} = this.state;
        let str=[];
        str= items.map(item => (
            str= items.q
    )
    )
        const ab=this.state.items.Name;
        function display()
        {
            return str;
        }

                return(
                    <ThemeProvider theme={theme}>
                        {

                            <ChatBotComp
                                steps={[
                                    {
                                        id: 'Greetings',
                                        component: (
                                            <div>
                                                {ab}
                                            </div>
                                        ),
                                        asMessage: true,
                                        trigger: 'next',
                                    },
                                    {
                                        id: 'next',
                                        message: "Didn't find what you are looking for?",
                                        trigger: 'issue',
                                    },
                                    {
                                        id: 'issue',
                                        options: [
                                            {value: 1, label: 'Freqently asked questions', trigger: 'faq'},
                                            {value: 2, label: 'Asset related request', trigger: 'request'},

                                        ],
                                    },
                                    {
                                        id: 'faq',
                                        component: <Api/>,
                                        end: true,
                                    },

                                    {
                                        id: 'request',
                                        message: 'What do you require?',
                                        trigger: 'requirement',
                                    },
                                    {
                                        id: 'requirement',
                                        options: [{
                                            value: 'Deploy existing HIVE Asset',
                                            label: 'Deploy existing HIVE Asset',
                                            trigger: 'getdatasource'
                                        },
                                            {
                                                value: 'Upgrade an existing HIVE Asset',
                                                label: 'Upgrade an existing HIVE Asset',
                                                trigger: 'getdatasource'
                                            },
                                            {
                                                value: 'Create a new HIVE Data Asset from existing data',
                                                label: 'Create a new HIVE Data Asset from existing data',
                                                trigger: 'getdatasource'
                                            },
                                            {
                                                value: 'Arrange new data ingestion and then create a new HIVE Data Asset',
                                                label: 'Arrange new data ingestion and then create a new HIVE Data Asset',
                                                trigger: 'getdatasource'
                                            },


                                        ],

                                    },
                                    {
                                        id: 'getdatasource',
                                        message: 'Data source name',
                                        trigger: 'source_name',
                                    },
                                    {
                                        id: 'source_name',
                                        user: true,
                                        trigger: 'getsourcesystem',
                                    },
                                    {
                                        id: 'getsourcesystem',
                                        message: 'Source system',
                                        trigger: 'source_system',

                                    },
                                    {
                                        id: 'source_system',
                                        options: [{value: 'Atlas', label: 'Atlas', trigger: 'getsubmodule'},
                                            {value: 'JDA', label: 'JDA', trigger: 'getsubmodule'},
                                            {value: 'P12', label: 'P12', trigger: 'getsubmodule'},
                                            {value: 'Other', label: 'Other', trigger: 'getsubmodule'},

                                        ],

                                    },
                                    {
                                        id: 'getsubmodule',
                                        message: 'System sub module',
                                        trigger: 'system_sub_model',

                                    },
                                    {
                                        id: 'system_sub_model',
                                        user: true,
                                        trigger: 'getrequiredby',

                                    },
                                    {
                                        id: 'getrequiredby',
                                        message: 'Required By',
                                        trigger: 'requiredby',
                                    },
                                    {
                                        id: 'requiredby',
                                        user: true,
                                        trigger: 'summary',

                                    },
                                    {
                                        id: 'summary',
                                        component: <ReportIssue/>,
                                        asMessage: true,
                                        end: true,
                                    },


                                    /*
                                    {
                                      id: 'issue',
                                      message: 'Welcome {previousValue}, in which segment you need help?',
                                      trigger: 'options',
                                    },


                                    {
                                      id: 'options',
                                      options: [
                                        { value: 1, label: 'Mars Wrigley', trigger: 'wrigley' },
                                        { value: 2, label: 'Mars Petcare', trigger: 'petcare' },
                                        { value: 3, label: 'Mars Food', trigger: 'food' },
                                      ],
                                    },

                                    {
                                      id: 'wrigley',
                                      component:(
                                          <div style={{width:'40vw', height:'100vh'}}>
                                            <FirstComponent usename="Sample APP"></FirstComponent>
                                          </div>
                                      ),
                                      trigger: 'x',
                                    },

                                    {
                                      id: 'petcare',
                                      message: 'Mars petcare',
                                      trigger: 'x',
                                    },

                                    {
                                      id: 'food',
                                      message: 'Mars food',
                                      trigger: 'x',
                                    },

                                    {
                                      id: 'x',
                                      message: 'Do you need anything else?',
                                      trigger: '8',
                                    },
                                    {
                                      id: '8',
                                      user: true,
                                      trigger: '9',
                                    },
                                    {
                                      id: '9',
                                      message: 'Through sourcing changes we can reduce inflation by 30 bps, shall I take you to Supplier report to see the recommendations?',
                                    }
                    */


                                ]}
                                {...config}
                            />
                        }
                </ThemeProvider>
                );
            }
    }




        </a>
      </header>
    </div>
  );
}

export default App;
