//src/app.ts

import express from 'express';
import sequelize from './config/sequelizeConfig';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';
import userAddressRoutes from './routes/userAddressRoutes'; 
import userDetailRoutes from './routes/userDetailRoutes'; 
import userLoginRoutes from './routes/userLoginRoutes'; 
import userRegistrationRoutes from './routes/userRegistrationRoutes';
import userSessionRoutes from './routes/userSessionRoutes';
import locationRoutes from './routes/locationRoutes';
import orderlistRoutes from './routes/orderlistRoutes'; 
import orderDispatchDetailRoutes from './routes/orderdispatchdetailRoutes';
import orderDeliveryDetailRoutes from './routes/orderdeliverydetailRoutes';
import orderInvoiceDetailRoutes from './routes/orderinvoicedetailRoutes';  
import orderRequestForCancellationListRoutes from './routes/orderrequestforcancellationlistRoutes';  
import inventoryRoutes from './routes/inventoryRoutes';  
import paymentTransactionsRoutes from './routes/paymentTransactionsRoutes';
import razorpayOrderRoutes from './routes/razorpayorderRoutes';
import sellerListRoutes from './routes/sellerlistRoutes';
import categoryTypesRoutes from './routes/categorytypesRoutes';
import categoryDimensionRoutes from './routes/categorydimensionRoutes';
import brandListRoutes from './routes/brandlistRoutes';
import contactUsRoutes from './routes/contactusRoutes';
import settingsRoutes from './routes/settingsRoutes';
import inventorylistRoutes from './routes/inventorylistRoutes';
import inventoryTransactionRoutes from './routes/inventorytransactionRoutes';
import orderInventoryDetailRoutes from './routes/orderInventoryDetailRoutes';
import productRoutes from './routes/productlistRoutes';
import productDimensionsRoutes from './routes/productdimensionsRoutes';
import orderItemRoutes from './routes/orderitemRoutes';
import orderDispatchItemRoutes from './routes/orderdispatchitemRoutes';
import cartRoutes from './routes/cartRoutes';

// Load environment variables
dotenv.config();

const app = express();
app.use(express.json());

// Use routes
app.use('/api/users', userRoutes); 
app.use('/api/useraddresses', userAddressRoutes); 
app.use('/api/userdetails', userDetailRoutes); 
app.use('/api/userlogins', userLoginRoutes); 
app.use('/api/userregistrations', userRegistrationRoutes); 
app.use('/api/usersessions', userSessionRoutes);
app.use('/api/locations', locationRoutes);
app.use('/api/orderlists', orderlistRoutes); 
app.use('/api/orderdispatchdetails', orderDispatchDetailRoutes);
app.use('/api/orderdeliverydetails', orderDeliveryDetailRoutes);
app.use('/api/orderinvoicedetails', orderInvoiceDetailRoutes);
app.use('/api/orderrequestforcancellationlist', orderRequestForCancellationListRoutes);
app.use('/api/inventory', inventoryRoutes);
app.use('/api/paymenttransactions', paymentTransactionsRoutes);
app.use('/api/razorpayorders', razorpayOrderRoutes);
app.use('/api/sellers', sellerListRoutes);
app.use('/api/categorytypes', categoryTypesRoutes);
app.use('/api/categorydimensions', categoryDimensionRoutes);
app.use('/api/brands', brandListRoutes);
app.use('/api/contact-us', contactUsRoutes);
app.use('/api/settings', settingsRoutes);
app.use('/api/inventorylist', inventorylistRoutes);
app.use('/api/inventorytransactions', inventoryTransactionRoutes);
app.use('/api/orderinventorydetails', orderInventoryDetailRoutes);
app.use('/api/products', productRoutes); // Register the product routes
app.use('/api/productdimensions', productDimensionsRoutes);
app.use('/api/orderitems', orderItemRoutes);
app.use('/api/orderdispatchitems', orderDispatchItemRoutes);
app.use('/api/cart', cartRoutes);


// Test database connection
sequelize.authenticate().then(() => {
  console.log('Database connected!');
}).catch((err) => {
  console.error('Database connection failed:', err);
});

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
