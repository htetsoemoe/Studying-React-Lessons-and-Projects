import React from "react";

class Toolbar extends React.Component {
    render() {
        return (
            <div style={{background: 'cyan', padding: 4, fontWeight: "bold"}}>
                {this.props.children}
            </div>
        )
    };
}

export default Toolbar;