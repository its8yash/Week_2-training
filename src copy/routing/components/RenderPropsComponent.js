import React from "react";

class renderPropsComponent extends React.Component {
    renderPropsComponent() {
        return (
            <div>
                <h1>This is a child components</h1>
                {this.props.render()}
            </div>
        );
    }
}

export default renderPropsComponent;