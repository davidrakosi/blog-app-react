import React, { useState, useEffect } from 'react'
import './Post.css'

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
    const top = 50
    const left = 50

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function Post({ postId, post }) {
    const [open, setOpen] = useState(false)
    const [modalStyle] = useState(getModalStyle);
    const classes = useStyles()

    return (
        <div className='post'>
            <div className="post__card" onClick={() => setOpen(true)}>
                <div className="post__imageContainer">
                    <img className="post__image" src={post.imageUrl} alt={post.caption} />
                </div>
                <div className="post__content">
                    <div className="post__caption">
                        <h1>{post.caption}</h1>
                    </div>
                    <div className="post__text">{post.text}</div>
                </div>
            </div>
            <Modal open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                className='modal'
            >
                <div style={modalStyle} className={classes.paper}>
                    <div className="modal__imageContainer">
                        <img className="modal__image" src={post.imageUrl} alt={post.caption} />
                    </div>
                    <div className="modal__content">
                        <h2 id="simple-modal-title">{post.caption}</h2>
                        <p id="simple-modal-description">{post.text}</p>
                        <button onClick={() => setOpen(false)}>Close</button>
                    </div>
                </div>
            </Modal >
        </div >
    )
}

export default Post
