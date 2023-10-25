<template>
    <div class="home">
      <section class="hero">
        <div class="hero-content">
          <h1>Selamat datang di website kami</h1>
          <a href="/shop" class="btn-primary">Belanja sekarang</a>
        </div>
      </section>
  
      
    </div>
  </template>
  
  <style scoped>
  .home {
    background-color: #A9907E;
    padding: 40px;
    font-family: Arial, sans-serif;
  }
  
  .hero {
    background: url('/path/to/hero-image.jpg') center/cover no-repeat;
    color: #fff;
    text-align: center;
    padding: 60px 0;
    background-size: cover;
  }
  
  .hero-content {
    max-width: 600px;
    margin: 0 auto;
  }
  
  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
  }
  
  p {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
  
  .btn-primary {
    display: inline-block;
    padding: 15px 30px;
    background-color: #B3A492;
    color: #fff;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    font-size: 1.5rem;
    transition: background-color 0.3s;
  }
  
  .btn-primary:hover {
    background-color: #4F4A45;
  }
  
  .featured-products {
    margin-top: 40px;
    text-align: center;
  }
  
  .product-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .product-card {
    margin: 20px;
    padding: 20px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .product-card img {
    max-width: 100%;
    height: auto;
    margin-bottom: 10px;
  }
  
  .product-card h3 {
    font-size: 2rem;
  }
  
  .product-card p {
    font-size: 1.5rem;
    margin-top: 10px;
}
</style>
