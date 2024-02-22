'use client';
import styles from './page.module.css'
import { useState } from 'react';
import Project from '../components/project';
import Modal from '../components/modal';

const projects = [
  {
    title: "Project 1",
    src: "1.jpg",
    color: "#000000"
  },
  {
    title: "Project 2",
    src: "2.jpg",
    color: "#8A2BE2"
  },
  {
    title: "Project 3",
    src: "3.jpg",
    color: "#40E0D0"
  },
  {
    title: "Project 4",
    src: "4.jpg",
    color: "#DC143C"
  }
]

export default function Home() {

  const [modal, setModal] = useState({active: false, index: 0})

  return (
  <main className={styles.main}>
    <div className={styles.body}>
      {
        projects.map( (project, index) => {
          return <Project index={index} title={project.title} setModal={setModal} key={index}/>
        })
      }
    </div>
    <Modal modal={modal} projects={projects}/>
  </main>
  )
}
