import React, { Component } from 'react';
import ContentWrapper from './ContentWrapper.js'
import '../A4page.css';

export default class A4page extends Component{
    constructor() {
        super ();
    }

    render () {
        return (
            <div class="book">
                <div class="page">
                    <ContentWrapper/>
                </div>
            </div>
        );
    }

}