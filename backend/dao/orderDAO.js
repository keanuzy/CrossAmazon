import mongodb from "mongodb"
const ObjectId = mongodb.ObjectId
let orders

export default class OrderDAO {
    static async injectDB(conn) {
        if (orders) {
            return
        }
        try {
            orders = await conn.db(process.env.ESHOPLOGINCREDENTIALS_NS).collection("orders")
        } catch (e) {
            console.error(
                'Can not make connection',
            )
        }
    }

    static async addOrder(orderData) {
        try {
            return await orders.insertOne(orderData)
        } catch (e) {
            console.error(e)
            return { error: e}
        }
    }

    static async findCustomerOrders(customer) {
        try {
            let customerOrders = await orders.find({customer: customer}).toArray()
            return customerOrders
        } catch (e) {
            console.error(e)
            return { error: e}
        }
    }

    static async findStoreOrders(admin) {
        try {
            let storeOrders = await orders.find({"items.adminId": admin}).toArray()
            return storeOrders
        } catch (e) {
            console.error(e)
            return { error: e}
        }
    }
}