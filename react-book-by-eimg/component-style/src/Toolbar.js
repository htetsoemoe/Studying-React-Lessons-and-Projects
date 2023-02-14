import React from "react";

class Toolbar extends React.Component {
    /* CSS in JS */

    render() {
        const styles = {
            toolbar: {
                marginBottom: 20,
                border: '3px solid cyan'
            },
            dark: {
                padding: 10,
                background: 'purple',
                color: 'white',
                border: '1px solid cyan'
            }
        };

        return (
            <div style={(styles.toolbar, styles.dark)}>
                {this.props.children}
            </div>
        )
    }
};

export default Toolbar;