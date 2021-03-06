import React from 'react'
// import axios from 'axios'
import Nav from '../components/Nav'
import GroceryForm from '../components/GroceryForm'
import GroceryItem from '../components/GroceryItem'

const url = 'https://groceries-fun-api.herokuapp.com/';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            groceries: props.groceries
        }
        // this.groceryCreateHandler = this.groceryCreateHandler.bind(this);
    }

    // async groceryCreateHandler(grocery) {

    //     const response = await axios.post(url, grocery);

    //     // decision: add the newly created to state or fetch brand new
    //     // let's go with option 1
    //     const savedGrocery = response.data;

    //     const updatedGroceries = this.state.groceries.concat(savedGrocery);

    //     this.setState({
    //         groceries: updatedGroceries
    //     })

    // }

    render() {
        return (
            <div className="container">
                <Nav />
                <h1>Groceries Home</h1>
                <ul>
                    {/* {this.state.groceries.map(grocery => <GroceryItem key={grocery.id} grocery={grocery} />)} */}
                </ul>
                {/* <GroceryForm onGroceryCreate={this.groceryCreateHandler} /> */}

                <style jsx>{`
            .container {
                text-align: center;
            }
        `}
                </style>

                <style jsx global>{`
                html,
                body {
                padding: 0;
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                    sans-serif;
                }

                * {
                box-sizing: border-box;
                }
            `}</style>

            </div>
        )
    }
}

export default Home

// export async function getStaticProps() {
// export async function getServerSideProps() {

//     const response = await fetch(url);
//     const groceries = await response.json();

//     return {
//         props: {
//             groceries: groceries,
//         },
//     }
// }
