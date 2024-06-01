async function getTopProducts(company, category, minPrice, maxPrice) {
    const url = `${process.env.BASE_URL}/companies/${company}/categories/${category}/products/top-n?minPrice=${minPrice}&maxPrice=${maxPrice}`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(`Error fetching top products: ${error}`);
        throw new Error('Failed to fetch top products');
    }
}


async function getProductDetails(company, category, productId) {
    const url = `${process.env.BASE_URL}/companies/${company}/categories/${category}/products/${productId}`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(`Error fetching product details: ${error}`);
        throw new Error('Failed to fetch product details');
    }
}

module.exports = {
    getTopProducts,
    getProductDetails
    
}