import React from 'react'
import Button from '../../components/Button'
import styles from './home.module.scss'


// const data = [
//     {
//         icon: "dad",
//         title: "dasda",
//         children: {
//             icon: "asda",
//             title: "dasda",
//             data: [
//                 {
//                     icon: "asda",
//                     title: "dasda2",
//                 },
//                 {
//                     icon: "asda",
//                     title: "dasda3",
//                 }
//             ]
//         }
//     },
//     {
//         icon: "dad",
//         title: "dasda",
//     }
// ]


const Home = () => {
    return (
        <div className={styles.wrapper}>
            <h1>WELCOME</h1>
            <h3>Thanks you for visiting admin web page</h3>
            <p>To access, please login</p>
            <Button solid large to='/login'>Go to Login</Button>
        </div>
    )
}

export default Home