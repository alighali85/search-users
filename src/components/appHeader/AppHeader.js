import React from 'react'
import './app-header.css'


export default function AppHeader(){
    return (<>
    <div className="header-wrapper" data-testid='app-header-test-id'>
        <div id="lp-pom-block-12-color-overlay">
                <img src="//d9hhrg4mnvzow.cloudfront.net/versicherung.dentolo.de/rundumschutz-premium-organic/4728e039-logo-dentolo-small-113x32.svg" alt="dentolo"/>
                <p>Users platform</p>
            </div>
        </div>
    </>
    )
}