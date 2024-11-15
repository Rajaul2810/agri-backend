# AgriVillage - Agriculture Tour Booking Website

## Description
Travel World is a full-stack Agriculture tour booking website that allows users to browse, book, and review travel tours and training programs. The platform includes user authentication, tour/training management, reviews, and booking functionality.

## Features
- User authentication and authorization
- Tour and training program listings
- Search and filter functionality
- Featured tours/trainings section
- Review and rating system
- Secure booking process
- Admin dashboard for management

## API Endpoints

### Tours
- `POST /api/tours` - Create new tour (Admin only)
- `PUT /api/tours/:id` - Update tour (Admin only) 
- `DELETE /api/tours/:id` - Delete tour (Admin only)
- `GET /api/tours/:id` - Get single tour
- `GET /api/tours` - Get all tours
- `GET /api/tours/search/getTourBySearch` - Search tours
- `GET /api/tours/search/getFeaturedTour` - Get featured tours

### Reviews
- `POST /api/reviews/:tourId` - Create tour review (Authenticated users)
- `GET /api/reviews/:tourId` - Get all reviews for a tour
- `GET /api/reviews/:id` - Get single review
- `PUT /api/reviews/:id` - Update review (Review owner only)
- `DELETE /api/reviews/:id/:tourId` - Delete review (Review owner only)

### Products
- `POST /api/products` - Create product (Authenticated users)
- `PUT /api/products/:id` - Update product (Owner only)
- `DELETE /api/products/:id` - Delete product (Owner only)
- `GET /api/products/:id` - Get single product
- `GET /api/products` - Get all products

### Product Reviews
- `POST /api/product-reviews/:productId` - Create product review (Authenticated users)
- `GET /api/product-reviews/:id` - Get single product review
- `GET /api/product-reviews/:productId` - Get all reviews for a product
- `PUT /api/product-reviews/:id` - Update product review (Review owner only)
- `DELETE /api/product-reviews/:id/:productId` - Delete product review (Review owner only)

### Training Programs
- `POST /api/training` - Create training program (Authenticated users)
- `PUT /api/training/:id` - Update training program (Owner only)
- `DELETE /api/training/:id` - Delete training program (Owner only)
- `GET /api/training/:id` - Get single training program
- `GET /api/training` - Get all training programs
- `GET /api/training/search` - Search training programs
- `GET /api/training/featured` - Get featured training programs

### Events
- `POST /api/events` - Create event (Authenticated users)
- `PUT /api/events/:id` - Update event (Owner only)
- `DELETE /api/events/:id` - Delete event (Owner only)
- `GET /api/events/:id` - Get single event
- `GET /api/events` - Get all events

## Technologies Used
- Frontend: React.js
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT

## Installation & Setup
1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables
4. Run development server: `npm run dev`

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
This project is licensed under the MIT License.

