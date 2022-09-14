import React from 'react';
// import { render } from "react-dom";

// import Bowser from "bowser";


const Detectbrowsers = () => {
    //const isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime)
    //const isFirefox = typeof InstallTrigger !== "undefined";
    //const isIE = false || !!document.documentMode;

    // const browser = Bowser.getParser(window.navigator.userAgent);

    return (
        <div className=''>
            <p>Browser version</p>
            {/* <p>{isFirefox ? "Yes, it's Firefox" : "No, it's not Firefox"}</p> */}
            {/* {"You are using " + browser.parsedResult.browser.name + " v" + browser.parsedResult.browser.version + " on " + browser.parsedResult.os.name} */}
        </div>
    );
}

export default Detectbrowsers;
