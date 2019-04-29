import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import  Button from '@material-ui/core/Button';
import {submitUpdate} from '../../services/SteemApi';

const styles = {
    root: {
        flexGrow: 1,
        margin: '0 auto',
        textAlign: 'center'
    },
    claim: {
        padding: '60px 22%'
    },
    claimHeader: {
        fontSize: 40,
        marginBottom: -20
    },
    claimSub: {
        fontSize: 25,
        marginBottom: 50
    },
    claimText: {
        fontSize: 18
    },
    block: {
        margin: '30px 5%'
    },
    title: {
        fontSize: 32
    },
    centered: {
        textAlign: 'center'
    },
    homeCircle: {
        borderRadius: '50%',
        border: '1px dashed #3f51b5',
        width: 100,
        height: 100,
        marginTop: 75
    },
    homeCircleText: {
        padding: '0 10%'
    },
    homeProject: {
        border: '1px dashed #3f51b5',
        width: '80%',
        margin: '75px 25px 0 25px',
        padding: 25,
        paddingTop: 5,
        boxSizing: 'border-box',
        height: 400,
        overflow: 'scroll'
    },
    centeredButton: {
        marginTop: 50
    },
    btnLink: {
        textDecoration: 'none',
        background: '#3f51b5',
        color: '#ffffff',
    },
    link: {
        textDecoration: 'none',
        color: '#3f51b5',
        textAlign: 'center'
    }
};

class InitialPost extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: ''
        };
    }

    commentSubmit = () => {
        const title = this.state.newTitle, body = this.state.newBody;
        this.setState({
            isActionLoading: true
        }, () => {
            submitUpdate('', title, body, true).then(() => {
                setTimeout(() => {
                    window.location.href = '/';
                }, 3000)
            })
        })
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <p>Here you can add your initial post</p>
                <p>But you need to <a href="/login">Login</a> first if you are not logged in yet</p>
                <div>
                                                <h2>Create Initial Post</h2>
                                                <p>
                                                    <TextField 
                                                        variant="outlined"
                                                        type="textarea"
                                                        label="Title"
                                                        id="noter-body-area-new-title"
                                                        value={this.state.newBody}
                                                        className={`${classes.responsive}`}
                                                        onChange={(e) => this.addNewBody(e.target.value)} />
                                                        </p>
                                                <p>
                                                    <TextField 
                                                        variant="outlined"
                                                        multiline
                                                        rowsMax="4"
                                                        type="textarea"
                                                        label="Text"
                                                        id="noter-body-area-new-body"
                                                        value={this.state.newBody}
                                                        className={`${classes.responsive}`}
                                                        onChange={(e) => this.addNewBody(e.target.value)} />
                                                </p>
                                                <Button color="primary" variant="contained" onClick={this.commentSubmit}>{!this.state.isActionLoading ? 'Send' : 'Sending...'}</Button>
                                            </div>
            </div>
        );
    }
}

export default withStyles(styles)(InitialPost);
