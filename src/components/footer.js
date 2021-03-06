import React from "react"
import config from "../config.yaml"

export default class Footer extends React.Component {

    constructor(props) {
        super(props);

        this.handleTextChange = this.handleTextChange.bind(this)

        this.textPhotographer = 
            <p style={{ maxWidth: "400px", color: "black" }}>
                <a href={config.linkPhotographer} target="_blank" rel="noopener noreferrer">
                </a> Aloha! My name is Ken and I have been flying drones since 2015. I am a FAA 107 licensed UAS pilot. As a Remote Pilot in Command, I provide and capture aerial drone content for clients in different sectors which include Agriculture, Commercial and Residential Real Estate, Construction, Roof Inspections, Survey and Mapping. If you would like to get in touch, please feel free to contact me.
            </p>

        this.textDownload = 
            <p style={{ maxWidth: "400px", color: "black" }}>
                You can download individual photos by clicking the button under the photos. If you wish to download the entire set,
                click <a href={config.linkPhotoset} target="_blank" rel="noopener noreferrer">here</a>.
            </p>

		this.state = {
			showMoreText: false,
		};
    }	
    
    handleTextChange(showMoreText) {
		this.setState((prevState, props) => {
            if (prevState.showMoreText === showMoreText) {
                return { showMoreText: false }
            }
            return { showMoreText: showMoreText }
		})
    }

    componentDidUpdate(prevProps, prevState) {
        /* handleTextChange shows text under footer, so we want to scroll down to see the text.
         * It's not a big jump; the text appears right under the link that the user clicked. */
        if (!prevState.showMoreText && this.state.showMoreText) {
            window.scrollTo(0, 100000);
        }
    }

    render() {

        return(
            <footer>
                <br/><br/>
                <center>
                    <div>
                        <span onClick={() => this.handleTextChange(this.textDownload)} style={{ cursor: "pointer" }}>
                            Download photos
                        </span> | <a href={config.linkSource} target="_blank" rel="noopener noreferrer">
                            {/* Website source */}
                        </a> | <span onClick={() => this.handleTextChange(this.textPhotographer)} style={{ cursor: "pointer" }}>
                            About me
                        </span>
                        {this.state.showMoreText}
                    </div>
                    
                </center>
                <br/>
            </footer>
        )
    }
}