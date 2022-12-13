import {connect} from 'mongoose'

export const  startConnection = async () => { // Export startConnection function
    try {
         const db = await connect('mongodb://mongo:HuShxzrEedbhJg1KWVZT@containers-us-west-96.railway.app:5883') // Connect to database
        console.log('Database is connected,' + db.connection.name) // If connection is successful, show a message
    } catch (error) {
        console.log('Error connecting to database', error)
    }
}