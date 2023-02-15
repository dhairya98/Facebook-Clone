import React, { useState,useEffect } from 'react'
import './Posts.css'
import { db } from './firebase'
import {useNavigate} from 'react-router-dom'
import ImageUpload from './ImageUpload'
import Post from './Post'

function Posts({user}) {
    console.log(user)
    const nav=useNavigate()
    const [posts,setPosts]=useState()
    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                post: doc.data(),
            })));
        })
    },[]);
    console.log(posts)
  return (
    <div className="posts">
            <ImageUpload username={user?.displayName} />

            {   posts && posts.map(({ id, post }) => (
                    <Post key={id} postId={id} origuser={user?.displayName} username={post.username} userId={user.uid} caption={post.caption} imageUrl={post.imageUrl} noLikes={post.noLikes} />
                ))  
            }
        </div>

  )
}

export default Posts