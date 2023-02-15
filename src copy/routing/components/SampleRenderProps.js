import React from " React";
import renderPropsComponent from "./RenderPropsComponent";
import {useCookies} from "react-cookie";

class SampleRenderprops extends React.Component {
    const [cookies, setCookie, removeCookie] ;    render() {
        return (
            <renderPropsComponent
            render = {() => {
                return (
                    <div>
                    <h2>This is from render props</h2>
                    </div>
                )
            }}
        />
        );
    }
}
export default SampleRenderprops;